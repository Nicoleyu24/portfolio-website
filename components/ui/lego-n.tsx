"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LegoNProps {
	className?: string;
	size?: "sm" | "md" | "lg";
}

export function LegoN({ className = "", size = "md" }: LegoNProps) {
	const [processedImage, setProcessedImage] = useState<string | null>(null);

	const sizeClasses = {
		sm: "w-7 h-9",
		md: "w-[51px] h-[59px]",
		lg: "w-20 h-24",
	};

	useEffect(() => {
		const removeBackgroundColor = async (imageUrl: string, hexColorToRemove: string, tolerance = 40) => {
			return new Promise<string>((resolve, reject) => {
				const img = new window.Image();
				img.crossOrigin = "Anonymous";

				img.onload = () => {
					const canvas = document.createElement('canvas');
					const ctx = canvas.getContext('2d');
					if (!ctx) return reject(new Error('Could not get canvas context'));

					canvas.width = img.width;
					canvas.height = img.height;
					ctx.drawImage(img, 0, 0);

					const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
					const data = imageData.data;

					const rRemove = parseInt(hexColorToRemove.slice(1, 3), 16);
					const gRemove = parseInt(hexColorToRemove.slice(3, 5), 16);
					const bRemove = parseInt(hexColorToRemove.slice(5, 7), 16);

					for (let i = 0; i < data.length; i += 4) {
						const r = data[i];
						const g = data[i + 1];
						const b = data[i + 2];

						const diff = Math.sqrt(
							Math.pow(r - rRemove, 2) +
							Math.pow(g - gRemove, 2) +
							Math.pow(b - bRemove, 2)
						);

						if (diff < tolerance) {
							data[i + 3] = 0;
						}
					}

					ctx.putImageData(imageData, 0, 0);
					resolve(canvas.toDataURL('image/png'));
				};

				img.onerror = (err) => reject(err);
				img.src = imageUrl;
			});
		};

		removeBackgroundColor('/lego-n-white.png', '#FFFFFF')
			.then(setProcessedImage)
			.catch(console.error);
	}, []);

	return (
		<motion.div
			className={`relative cursor-pointer group ${sizeClasses[size]} ${className}`}
			whileHover={{
				scale: 1.1,
				rotateY: 15,
				rotateX: -10,
				filter: "brightness(1.1) contrast(1.1)",
			}}
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
			style={{ perspective: "1000px" }}
		>
			<div className="relative w-full h-full overflow-hidden">
				{processedImage ? (
					<img
						src={processedImage}
						alt="Lego N"
						className="w-full h-full object-contain scale-110"
					/>
				) : (
					<div className="w-full h-full bg-purple-500/10 animate-pulse rounded-lg" />
				)}
			</div>

			{/* Ambient Glow */}
			<div className="absolute inset-0 bg-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
		</motion.div>
	);
}
