import { Mesh, Program, Renderer, Triangle } from "ogl";
import type React from "react";
import { useEffect, useRef } from "react";

interface PlasmaProps {
	color?: string;
	speed?: number;
	direction?: "forward" | "reverse" | "pingpong";
	scale?: number;
	opacity?: number;
	mouseInteractive?: boolean;
}

const vertex = `#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uCustomColor;
uniform float uUseCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseInteractive;
out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
  vec2 center = iResolution.xy * 0.5;
  C = (C - center) / uScale + center;
  
  vec2 mouseOffset = (uMouse - center) * 0.0002;
  C += mouseOffset * length(C - center) * step(0.5, uMouseInteractive);
  
  float i, d, z, T = iTime * uSpeed * uDirection;
  vec3 O, p, S;

  // can change here: ++i < x where x higher means more stuff
  for (vec2 r = iResolution.xy, Q; ++i < 60.; O += o.w/d*o.xyz) {
    p = z*normalize(vec3(C-.5*r,r.y)); 
    p.z -= 4.; 
    S = p;
    d = p.y-T;
    
    p.x += .4*(1.+p.y)*sin(d + p.x*0.1)*cos(.34*d + p.x*0.05); 
    Q = p.xz *= mat2(cos(p.y+vec4(0,11,33,0)-T)); 
    z+= d = abs(sqrt(length(Q*Q)) - .25*(5.+S.y))/3.+8e-4; 
    float t = S.y+p.z*.5+S.z-length(S-p);
    vec3 c = 0.5 + 0.5 * cos(6.28318 * (t * 0.15 + vec3(0.6, 0.8, 0.0)));
    o = vec4(c * 2.0, 1.0 + sin(t + 8.0));
  }
  
  o.xyz = tanh(O/1e4);
}

bool finite1(float x){ return !(isnan(x) || isinf(x)); }
vec3 sanitize(vec3 c){
  return vec3(
    finite1(c.r) ? c.r : 0.0,
    finite1(c.g) ? c.g : 0.0,
    finite1(c.b) ? c.b : 0.0
  );
}

void main() {
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  vec3 rgb = sanitize(o.rgb);
  
  float intensity = (rgb.r + rgb.g + rgb.b) / 3.0;
  vec3 customColor = intensity * uCustomColor;
  vec3 finalColor = mix(rgb, customColor, step(0.5, uUseCustomColor));
  
  float alpha = length(rgb) * uOpacity;
  fragColor = vec4(finalColor, alpha);
}`;

export const Plasma: React.FC<PlasmaProps & { className?: string }> = ({
	color,
	speed = 1,
	direction = "forward",
	scale = 1,
	opacity = 1,
	mouseInteractive = true,
	className = "",
}) => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const mousePos = useRef({ x: 0, y: 0 });

	useEffect(() => {
		if (!containerRef.current) return;

		const resolveColor = (colorStr: string | null) => {
			if (!colorStr) return [1, 1, 1] as [number, number, number];

			// 1. Resolve CSS variables if present
			let finalColor = colorStr;
			if (colorStr.startsWith("var(")) {
				const temp = document.createElement("div");
				temp.style.color = colorStr;
				temp.style.display = "none";
				document.body.appendChild(temp);
				finalColor = getComputedStyle(temp).color;
				document.body.removeChild(temp);
			}

			// 2. Use a canvas to resolve the color to RGB
			const canvas = document.createElement("canvas");
			canvas.width = 1;
			canvas.height = 1;
			const ctx = canvas.getContext("2d");
			if (!ctx) return [1, 1, 1] as [number, number, number];

			ctx.fillStyle = finalColor;
			ctx.fillRect(0, 0, 1, 1);
			const data = ctx.getImageData(0, 0, 1, 1).data;

			return [data[0] / 255, data[1] / 255, data[2] / 255] as [
				number,
				number,
				number,
			];
		};

		const useCustomColor = color ? 1.0 : 0.0;
		const customColorRgb = resolveColor(color || null);

		const directionMultiplier = direction === "reverse" ? -1.0 : 1.0;

		const renderer = new Renderer({
			webgl: 2,
			alpha: true,
			antialias: false,
			// ... , x) x higher means smoother
			dpr: Math.min(window.devicePixelRatio || 1, 0.3),
		});
		const gl = renderer.gl;
		const canvas = gl.canvas as HTMLCanvasElement;
		canvas.style.display = "block";
		canvas.style.width = "100%";
		canvas.style.height = "100%";
		containerRef.current.appendChild(canvas);

		const geometry = new Triangle(gl);

		const program = new Program(gl, {
			vertex: vertex,
			fragment: fragment,
			uniforms: {
				iTime: { value: 0 },
				iResolution: { value: new Float32Array([1, 1]) },
				uCustomColor: { value: new Float32Array(customColorRgb) },
				uUseCustomColor: { value: useCustomColor },
				uSpeed: { value: speed * 0.4 },
				uDirection: { value: directionMultiplier },
				uScale: { value: scale },
				uOpacity: { value: opacity },
				uMouse: { value: new Float32Array([0, 0]) },
				uMouseInteractive: { value: mouseInteractive ? 1.0 : 0.0 },
			},
		});

		const mesh = new Mesh(gl, { geometry, program });

		const handleMouseMove = (e: MouseEvent) => {
			if (!mouseInteractive || !containerRef.current) return;

			// Use offsetX/Y for better performance than getBoundingClientRect
			// This works because the event target is likely the canvas or container
			// and we want coordinates relative to that.
			// const rect = containerRef.current.getBoundingClientRect();
			// mousePos.current.x = e.clientX - rect.left;
			// mousePos.current.y = e.clientY - rect.top;
			mousePos.current.x = e.offsetX;
			mousePos.current.y = e.offsetY;

			const mouseUniform = program.uniforms.uMouse.value as Float32Array;
			mouseUniform[0] = mousePos.current.x;
			mouseUniform[1] = mousePos.current.y;
		};

		if (mouseInteractive && containerRef.current) {
			containerRef.current.addEventListener("mousemove", handleMouseMove);
		}

		const setSize = () => {
			if (!containerRef.current) return;
			const rect = containerRef.current.getBoundingClientRect();
			const width = Math.max(1, Math.floor(rect.width));
			const height = Math.max(1, Math.floor(rect.height));
			renderer.setSize(width, height);
			const res = program.uniforms.iResolution.value as Float32Array;
			res[0] = gl.drawingBufferWidth;
			res[1] = gl.drawingBufferHeight;
		};

		const ro = new ResizeObserver(setSize);
		ro.observe(containerRef.current);
		setSize();

		let raf = 0;
		const t0 = performance.now();
		const loop = (t: number) => {
			const timeValue = (t - t0) * 0.001;
			if (direction === "pingpong") {
				const pingpongDuration = 10;
				const segmentTime = timeValue % pingpongDuration;
				const isForward = Math.floor(timeValue / pingpongDuration) % 2 === 0;
				const u = segmentTime / pingpongDuration;
				const smooth = u * u * (3 - 2 * u);
				const pingpongTime = isForward
					? smooth * pingpongDuration
					: (1 - smooth) * pingpongDuration;
				(program.uniforms.uDirection as { value: number }).value = 1.0;
				(program.uniforms.iTime as { value: number }).value = pingpongTime;
			} else {
				(program.uniforms.iTime as { value: number }).value = timeValue;
			}
			renderer.render({ scene: mesh });
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);

		const observer = new MutationObserver(() => {
			if (color?.startsWith("var(")) {
				const newColorRgb = resolveColor(color);
				const colorUniform = program.uniforms.uCustomColor
					.value as Float32Array;
				colorUniform[0] = newColorRgb[0];
				colorUniform[1] = newColorRgb[1];
				colorUniform[2] = newColorRgb[2];
			}
		});

		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"],
		});

		const currentContainer = containerRef.current;

		return () => {
			cancelAnimationFrame(raf);
			ro.disconnect();
			observer.disconnect();
			if (mouseInteractive && currentContainer) {
				currentContainer.removeEventListener("mousemove", handleMouseMove);
			}
			try {
				currentContainer?.removeChild(canvas);
			} catch {}
		};
	}, [color, speed, direction, scale, opacity, mouseInteractive]);

	return (
		<div
			ref={containerRef}
			className={`w-full h-full relative overflow-hidden ${className}`}
		/>
	);
};

export default Plasma;
