"use client"

import { useEffect, useRef, useState, type CSSProperties } from "react"
import Image from "next/image"

import { AnimatedHeader } from "@/components/animated-header"
import { SidebarNav } from "@/components/sidebar-nav"
import { ScrollSection } from "@/components/scroll-section"
import Masonry, { type MasonryItem } from "@/components/masonry"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plasma } from "@/components/Plasma"
import { ScrollProgressBar } from "@/components/scroll-progress"
import VariableProximity from "@/components/VariableProximity"
import StarBorder from "@/components/StarBorder"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

const playgroundCards = [
  {
    id: 1,
    title: "Microinteraction Lab",
    description: "Exploring tactile UI feedback for immersive experiences.",
    tags: ["Experimental", "Motion"],
    palette: ["#d9e7ff", "#f5d9ff"],
  },
  {
    id: 2,
    title: "Generative Layouts",
    description: "Adaptive grid experiments driven by live data inputs.",
    tags: ["Concept", "AI"],
    palette: ["#d1fff4", "#e3d7ff"],
  },
  {
    id: 3,
    title: "Color Theory Sandbox",
    description: "Dynamic palettes that respond to interaction patterns.",
    tags: ["Color", "Play"],
    palette: ["#ffe9d6", "#ffd1f1"],
  },
  {
    id: 4,
    title: "3D Navigation Study",
    description: "Testing depth and hierarchy with spatial navigation.",
    tags: ["Spatial", "Prototype"],
    palette: ["#d4f3ff", "#ffdede"],
  },
]

type BentoProject = MasonryItem & {
  title: string
  description: string
  tags: string[]
  accent: string
  background: string
  eyebrow: string
  order: string
  image?: string
  imageHeight?: string
  imageClassName?: string
  imageStyle?: CSSProperties
}

const bentoProjects: BentoProject[] = [
  {
    id: "healthtech",
    order: "01",
    title: "Healthtech application",
    description:
      "A comprehensive redesign of an e-commerce platform focusing on user experience and conversion optimization",
    tags: ["UI/UX", "Design", "E-Commerce"],
    accent: "#8cd6ff",
    background: "linear-gradient(135deg, rgba(140,214,255,0.28), rgba(255,255,255,0.04))",
    eyebrow: "Product strategy",
    height: 520,
  },
  {
    id: "mobile-banking",
    order: "02",
    title: "Mobile Banking App",
    description: "Modern mobile banking application with intuitive navigation and secure transaction flows",
    tags: ["UI/UX", "Mobile", "Fintech"],
    accent: "#f2d6ff",
    background: "linear-gradient(160deg, rgba(242,214,255,0.25), rgba(255,255,255,0.08))",
    eyebrow: "Fintech systems",
    image: "/projects/fintech-card.png",
    imageHeight: "h-80",
    imageStyle: { objectPosition: "center 80%" },
    height: 520,
  },
  {
    id: "autism-site",
    order: "03",
    title: "Website for children with autism",
    description:
      "Responsive website design based on a game designed with agentic AI, targeting children with autism and their guardians.",
    tags: ["Game Design", "Education", "Research"],
    accent: "#ffe3bd",
    background: "linear-gradient(145deg, rgba(255,227,189,0.3), rgba(255,255,255,0.08))",
    eyebrow: "Inclusive design",
    url:
      "https://contra.com/p/sAYQ6goB-designing-a-joyful-web-experience-for-children-with-autism?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=nicole_cwzib6rq",
    height: 520,
  },
  {
    id: "appointments",
    order: "04",
    title: "Healthcare Appointment System",
    description: "Patient-friendly appointment booking system with seamless scheduling and reminders",
    tags: ["UI/UX", "Healthcare", "Design"],
    accent: "#b4f2e1",
    background: "linear-gradient(120deg, rgba(180,242,225,0.25), rgba(255,255,255,0.08))",
    eyebrow: "Service design",
    height: 520,
  },
  {
    id: "learning-platform",
    order: "05",
    title: "Education Learning Platform",
    description: "Interactive learning platform with engaging course content and progress tracking",
    tags: ["UI/UX", "Education", "E-Learning"],
    accent: "#d7e0ff",
    background: "linear-gradient(150deg, rgba(215,224,255,0.3), rgba(255,255,255,0.08))",
    eyebrow: "EdTech",
    height: 520,
  },
  {
    id: "wellness-companion",
    order: "06",
    title: "Wellness Habit Companion",
    description: "Voice-guided rituals paired with adaptive feedback that keeps teams aligned on wellbeing",
    tags: ["AI", "Voice", "Prototype"],
    accent: "#ffd6e3",
    background: "linear-gradient(135deg, rgba(255,214,227,0.32), rgba(255,255,255,0.08))",
    eyebrow: "AI experiences",
    height: 520,
  },
]

const designTools = [
  "Balsamiq",
  "Canva",
  "Chatgpt",
  "Claude",
  "Click Up",
  "Cursor",
  "Discord",
  "Figma",
  "FigJam",
  "Framer",
  "Gamma",
  "Gemini",
  "Github",
  "Maze",
  "Midjourney",
  "Miro",
  "Mobbin",
  "Notion",
  "Perplexity",
  "Replit",
  "Slack",
  "Sora",
  "User Testing",
  "V0",
  "Vercel",
  "Whimsical",
].sort((a, b) => a.localeCompare(b))

export default function Home() {
  const [isPlaygroundHovered, setIsPlaygroundHovered] = useState(false)
  const [isToolsHovered, setIsToolsHovered] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const heroQuoteRef = useRef<HTMLSpanElement>(null)
  const waveSize = { width: 1600, height: 360 }
  const bentoSectionRef = useRef<HTMLDivElement>(null)
  const isBentoInView = useInView(bentoSectionRef, { once: true, margin: "-20% 0px" })
  const [isBentoActivated, setIsBentoActivated] = useState(false)

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const quoteScaleY = useTransform(heroScrollProgress, [0, 0.5, 1], [1, 1.18, 0.9])

  const marqueeDuration = isPlaygroundHovered ? "24s" : "12s"
  const toolsMarqueeDuration = isToolsHovered ? "56s" : "28s"
  const handlePlaygroundEnter = () => setIsPlaygroundHovered(true)
  const handlePlaygroundLeave = () => setIsPlaygroundHovered(false)
  const handleToolsEnter = () => setIsToolsHovered(true)
  const handleToolsLeave = () => setIsToolsHovered(false)

  useEffect(() => {
    if (isBentoInView) setIsBentoActivated(true)
  }, [isBentoInView])

  const renderProjectCard = (project: BentoProject) => (
    <article
      className="flex h-full flex-col rounded-[36px] border p-7 text-left shadow-[0_35px_120px_rgba(15,23,42,0.45)] backdrop-blur-[40px] transition-shadow"
      style={{
        background: `linear-gradient(135deg, rgba(255,255,255,0.55), rgba(255,255,255,0.08)), ${project.background}`,
        borderColor: `${project.accent}55`,
        boxShadow: `0 35px 120px rgba(15,23,42,0.35), 0 15px 40px ${project.accent}35`,
      }}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.5em] text-slate-900/80 dark:text-white/70">
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: project.accent }}
              aria-hidden="true"
            />
            <span>{project.eyebrow}</span>
          </div>
          <span className="text-sm tracking-[0.2em] text-slate-900/60 dark:text-white/50">{project.order}</span>
        </div>
        <div className={`relative my-6 w-full overflow-hidden rounded-[28px] border border-white/40 bg-white/30 shadow-inner backdrop-blur-xl ${project.imageHeight || "h-44"}`}>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={`object-cover opacity-90 transition-transform duration-500 hover:scale-105 ${project.imageClassName || ""}`}
              style={project.imageStyle}
            />
          ) : (
            <>
              <div
                className="absolute inset-0 opacity-80"
                style={{
                  background: `radial-gradient(circle at 20% 20%, ${project.accent}40, transparent 60%), radial-gradient(circle at 80% 40%, rgba(255,255,255,0.8), transparent 50%), linear-gradient(135deg, rgba(255,255,255,0.4), transparent)`,
                }}
              />
              <div className="absolute inset-x-0 bottom-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                Preview space
              </div>
            </>
          )}
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold leading-snug text-slate-900 dark:text-white">{project.title}</h3>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-white/80">{project.description}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={`${project.id}-${tag}`}
              variant="secondary"
              className="border border-white/50 bg-white/80 px-3 py-1 text-[11px] font-medium tracking-tight text-slate-900 shadow-sm dark:bg-white/20 dark:text-white"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-slate-900 dark:text-white">
          <span>{project.url ? "View case study" : "In progress"}</span>
          {project.url ? (
            <span aria-hidden="true">↗</span>
          ) : (
            <span className="text-xs uppercase tracking-[0.4em] text-slate-900/50 dark:text-white/50">soon</span>
          )}
        </div>
      </div>
    </article>
  )

  return (
    <div className="relative">
      <ScrollProgressBar />
      <AnimatedHeader title="Portfolio" />
      <SidebarNav />

      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="relative overflow-hidden min-h-screen flex items-center justify-center pt-24 px-6 md:px-[155px]"
      >
        <div aria-hidden className="absolute inset-0 -z-10">
          <Plasma
            color="#8cd6ff"
            speed={1.2}
            scale={1.8}
            opacity={0.8}
            direction="pingpong"
            mouseInteractive={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/90" />
        </div>
        <ScrollSection className="max-w-5xl mx-auto text-center space-y-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight"
            style={{ scaleY: quoteScaleY, transformOrigin: "center top" }}
          >
            <VariableProximity
              ref={heroQuoteRef}
              label="Where behaviour meets design, clarity becomes momentum."
              containerRef={heroQuoteRef}
              fromFontVariationSettings="'wght' 320, 'opsz' 48, 'GRAD' 0"
              toFontVariationSettings="'wght' 720, 'opsz' 110, 'GRAD' 250"
              radius={260}
              falloff="gaussian"
              className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent drop-shadow-sm inline-block text-balance font-[100]"
            />
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center gap-3 pt-12"
          >
            <StarBorder
              as="button"
              type="button"
              color="rgba(125, 211, 252, 0.9)"
              speed="8s"
              thickness={2}
              className="w-full sm:w-64"
              innerClassName="inline-flex w-full items-center justify-center rounded-full border border-sky-200/60 bg-gradient-to-b from-sky-100 via-sky-200 to-sky-300 px-8 py-3 text-base font-semibold tracking-tight text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_18px_35px_rgba(15,23,42,0.35),0_8px_15px_rgba(59,130,246,0.35)] backdrop-blur-2xl transition hover:bg-gradient-to-b hover:from-sky-200 hover:via-sky-300 hover:to-sky-400 hover:translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_20px_40px_rgba(15,23,42,0.35),0_8px_18px_rgba(59,130,246,0.45)] active:translate-y-1 active:bg-gradient-to-b active:from-sky-300 active:via-sky-400 active:to-sky-500 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.25),0_10px_20px_rgba(15,23,42,0.4)] dark:border-purple-300/60 dark:bg-gradient-to-b dark:from-purple-300 dark:via-purple-500 dark:to-purple-700 dark:text-white dark:shadow-[inset_0_1px_rgba(255,255,255,0.35),0_18px_35px_rgba(76,29,149,0.55),0_8px_15px_rgba(147,51,234,0.55)] dark:hover:bg-gradient-to-b dark:hover:from-purple-400 dark:hover:via-purple-600 dark:hover:to-purple-800 dark:hover:shadow-[inset_0_1px_rgba(255,255,255,0.4),0_20px_40px_rgba(76,29,149,0.6),0_8px_20px_rgba(147,51,234,0.65)] dark:active:bg-gradient-to-b dark:active:from-purple-500 dark:active:via-purple-700 dark:active:to-purple-900 dark:active:shadow-[inset_0_3px_8px_rgba(0,0,0,0.4),0_12px_24px_rgba(76,29,149,0.5)]"
            >
              Start Collaborate
            </StarBorder>
            <StarBorder
              as="button"
              type="button"
              color="rgba(147, 51, 234, 0.9)"
              speed="10s"
              thickness={2}
              className="w-full sm:w-64"
              innerClassName="inline-flex w-full items-center justify-center rounded-full border border-white/70 bg-gradient-to-br from-white/80 via-white/40 to-white/20 px-8 py-3 text-base font-semibold tracking-tight text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_25px_65px_rgba(15,23,42,0.35),0_10px_30px_rgba(148,163,184,0.45)] backdrop-blur-[28px] transition hover:bg-gradient-to-br hover:from-white/90 hover:via-white/55 hover:to-white/30 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_30px_70px_rgba(15,23,42,0.35),0_12px_35px_rgba(148,163,184,0.5)] dark:border-white/40 dark:bg-white/35 dark:text-white dark:shadow-[0_18px_55px_rgba(2,6,23,0.65)] dark:hover:bg-white/40"
            >
              My Work
            </StarBorder>
          </motion.div>
        </ScrollSection>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 -mt-32 px-6 md:px-[155px] pb-24">
        <ScrollSection className="mx-auto w-full max-w-[calc(100vw-20px)]">
          <div ref={bentoSectionRef} className="relative">
            {isBentoActivated ? (
              <Masonry
                items={bentoProjects}
                stagger={0.08}
                animateFrom="bottom"
                hoverScale={0.98}
                className="min-h-[1080px]"
                renderItem={(item) => renderProjectCard(item as BentoProject)}
              />
            ) : (
              <div className="h-[720px]" />
            )}
          </div>
        </ScrollSection>
      </section>

      {/* Playground Section */}
      <section id="playground" className="min-h-screen flex flex-col items-center justify-center gap-12 py-20">
        <ScrollSection className="mx-auto w-full px-6 md:px-[155px]">
          <div className="w-full space-y-4">
            <div className="flex items-center gap-6">
              <h2 className="text-sm font-semibold tracking-[0.5em] uppercase text-muted-foreground">
                Playground
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A rotating set of experimental posters exploring motion, texture, and storytelling.
            </p>
          </div>
        </ScrollSection>
        <div className="w-full px-6 md:px-[155px]">
          <div
            className="marquee-container mx-auto py-6"
            onMouseEnter={handlePlaygroundEnter}
            onMouseLeave={handlePlaygroundLeave}
            onFocusCapture={handlePlaygroundEnter}
            onBlurCapture={handlePlaygroundLeave}
          >
            <div
              className="marquee-track gap-6"
              style={{ "--marquee-duration": marqueeDuration } as CSSProperties}
            >
              {[...playgroundCards, ...playgroundCards].map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className="w-32 sm:w-40 lg:w-48 flex-shrink-0 text-center"
                >
                  <div
                    className="relative aspect-[3/4] rounded-[32px] shadow-2xl border border-border/40 overflow-hidden"
                    style={{
                      background: `linear-gradient(140deg, ${project.palette[0]}, ${project.palette[1]})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/35" />
                    <div className="absolute top-5 left-5 text-sm font-semibold text-white/80">
                      #{project.id}
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 text-left text-white">
                      <p className="text-[10px] uppercase tracking-[0.4em] opacity-80">
                        {project.tags.join(" • ")}
                      </p>
                      <p className="mt-2 text-lg font-semibold leading-snug">
                        {project.title}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skillsets" className="min-h-screen flex items-center justify-center px-6 md:px-[155px] pt-12 pb-20">
        <ScrollSection className="mx-auto w-full space-y-10">
          <div className="w-full space-y-4">
            <div className="flex items-center gap-6">
              <h2 className="text-sm font-semibold tracking-[0.5em] uppercase text-muted-foreground">
                What I bring to the table
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A range of skills and tools I use to bring ideas to life
            </p>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl border border-border/60 shadow-2xl backdrop-blur-xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.15))",
                WebkitMaskImage:
                  "radial-gradient(circle at 20% 20%, rgba(0,0,0,0.25), transparent 40%), radial-gradient(circle at 80% 10%, rgba(0,0,0,0.18), transparent 45%), linear-gradient(#000, #000)",
              }}
            >
              <div
                className="absolute inset-0 opacity-80 dark:opacity-90"
                aria-hidden
                style={{
                  background: [
                    "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.18), transparent 35%)",
                    "radial-gradient(circle at 80% 0%, rgba(236,72,153,0.12), transparent 30%)",
                    "linear-gradient(120deg, rgba(255,255,255,0.14), rgba(255,255,255,0.05))",
                    "linear-gradient(transparent 0%, rgba(255,255,255,0.08) 100%)",
                  ].join(", "),
                }}
              />
              <div
                className="absolute inset-0 opacity-30 dark:opacity-40"
                aria-hidden
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                  backgroundSize: "120px 120px",
                  maskImage:
                    "radial-gradient(circle at 20% 20%, rgba(0,0,0,0.35), transparent 45%), radial-gradient(circle at 70% 30%, rgba(0,0,0,0.3), transparent 40%), linear-gradient(#000,#000)",
                }}
              />
              <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-10 lg:p-12">
                {[
                  { title: "UX/UI Design", description: "Premium digital experiences across journeys, systems, and interfaces that feel intentional.", icon: "🧭" },
                  { title: "User Research", description: "End-to-end research and testing that translate insight into confident decisions.", icon: "🔍" },
                  { title: "Behavioural Science", description: "Empathy-led flows informed by behavioral principles for intuitive interactions.", icon: "🧠" },
                  { title: "Prototyping", description: "High-fidelity interactive prototypes to validate and communicate ideas quickly.", icon: "✨" },
                  { title: "Vibe Coding", description: "AI-assisted buildouts that speed design-to-live, keeping fidelity and nuance.", icon: "🤖" },
                  { title: "Graphic Design", description: "Distinctive visuals and storytelling that elevate the brand’s voice.", icon: "🎨" },
                ].map((skill) => (
                  <motion.div
                    key={skill.title}
                    whileHover={{ scale: 1.015, y: -3 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="flex items-start gap-4 rounded-2xl bg-white/5 dark:bg-white/0 p-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/25 via-accent/20 to-primary/10 backdrop-blur text-lg shadow-inner">
                      <span aria-hidden>{skill.icon}</span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-foreground">{skill.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          <div
            className="relative mt-[100px] w-full"
            onMouseEnter={handleToolsEnter}
            onMouseLeave={handleToolsLeave}
            onFocusCapture={handleToolsEnter}
            onBlurCapture={handleToolsLeave}
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background via-background/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background via-background/80 to-transparent" />
            <div
              className="marquee-container"
              style={{
                WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
                maskImage: "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
              }}
            >
              <div
                className="marquee-track items-center gap-4 py-4"
                style={{ "--marquee-duration": toolsMarqueeDuration } as CSSProperties}
              >
                {[...designTools, ...designTools].map((tool, index) => (
                  <div
                    key={`${tool}-${index}`}
                    className="flex-shrink-0 rounded-full border border-border/60 bg-card shadow-sm px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollSection>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 md:px-[155px] py-20">
        <ScrollSection className="mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">About Me</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">I'm a UX Designer</h2>
              <p className="text-lg text-muted-foreground mb-4">
                With a passion for creating beautiful and functional user experiences,
                I specialize in turning complex problems into simple, elegant solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                My work focuses on human-centered design, where every pixel and interaction
                serves a purpose. I believe in the power of design to transform how people
                interact with technology.
              </p>
              <Button variant="outline">Learn More</Button>
            </div>
            <Card className="p-8">
              <CardHeader>
                <CardTitle>Design Philosophy</CardTitle>
                <CardDescription>Principles that guide my work</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">User-Centered</h3>
                  <p className="text-sm text-muted-foreground">
                    Every decision starts with the user's needs and goals.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Simplicity</h3>
                  <p className="text-sm text-muted-foreground">
                    Less is more. Clean, intuitive interfaces that feel natural.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Pushing boundaries while maintaining usability and accessibility.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollSection>
      </section>

      {/* Blog Section */}
      <section id="blog" className="min-h-screen flex items-center justify-center px-6 md:px-[155px] py-20">
        <ScrollSection className="mx-auto w-full">
          <div className="text-center mb-16">
            <Badge className="mb-4">Blog</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Thoughts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and reflections on design and technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((post, index) => (
              <ScrollSection key={post} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle>Blog Post Title {post}</CardTitle>
                    <CardDescription>
                      Published on {new Date().toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      A preview of the blog post content that discusses design trends,
                      user experience insights, or creative process...
                    </p>
                    <Button variant="ghost">Read More →</Button>
                  </CardContent>
                </Card>
              </ScrollSection>
            ))}
          </div>
        </ScrollSection>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 md:px-[155px] py-20">
        <ScrollSection className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4">Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your visions.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Contact Me</Button>
            <Button size="lg" variant="outline">Download Resume</Button>
          </div>
        </ScrollSection>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-[155px] border-t border-border">
        <div className="mx-auto text-center text-muted-foreground">
          <p>© 2024 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
