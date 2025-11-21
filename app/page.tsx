"use client"

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react"

import { AnimatedHeader } from "@/components/animated-header"
import { SidebarNav } from "@/components/sidebar-nav"
import { ScrollSection } from "@/components/scroll-section"
import { ProjectsCarousel } from "@/components/projects-carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"

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

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isPlaygroundHovered, setIsPlaygroundHovered] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const waveSize = { width: 1600, height: 360 }
  const toolsContainerRef = useRef<HTMLDivElement>(null)
  const toolsViewportRef = useRef<HTMLDivElement>(null)
  const toolsTrackRef = useRef<HTMLDivElement>(null)
  const [toolDragBounds, setToolDragBounds] = useState({ left: 0, right: 0 })

  useEffect(() => {
    const updateScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0
      setScrollProgress(Math.min(Math.max(progress, 0), 1))
    }

    updateScrollProgress()
    window.addEventListener("scroll", updateScrollProgress, { passive: true })
    window.addEventListener("resize", updateScrollProgress)

    return () => {
      window.removeEventListener("scroll", updateScrollProgress)
      window.removeEventListener("resize", updateScrollProgress)
    }
  }, [])

  useLayoutEffect(() => {
    const recalcBounds = () => {
      const viewport = toolsViewportRef.current
      const track = toolsTrackRef.current
      if (!viewport || !track) return
      const overflow = Math.max(0, track.scrollWidth - viewport.clientWidth)
      setToolDragBounds({ left: -overflow, right: 0 })
    }

    recalcBounds()

    const resizeObserver = new ResizeObserver(recalcBounds)
    if (toolsViewportRef.current) resizeObserver.observe(toolsViewportRef.current)
    if (toolsTrackRef.current) resizeObserver.observe(toolsTrackRef.current)
    window.addEventListener("resize", recalcBounds)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", recalcBounds)
    }
  }, [])

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const quoteScaleY = useTransform(heroScrollProgress, [0, 0.5, 1], [1, 1.18, 0.9])

  const marqueeDuration = isPlaygroundHovered ? "24s" : "12s"
  const handlePlaygroundEnter = () => setIsPlaygroundHovered(true)
  const handlePlaygroundLeave = () => setIsPlaygroundHovered(false)

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50 overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          animate={{ width: `${scrollProgress * 100}%` }}
          transition={{ ease: "linear", duration: 0.2 }}
        />
      </div>
      <AnimatedHeader title="Portfolio" />
      <SidebarNav />
      
      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="relative overflow-hidden min-h-screen flex items-center justify-center pt-24 px-6"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <motion.svg
            viewBox="0 0 1440 320"
            className="absolute inset-x-[-20%] top-[30%] w-[160%]"
            preserveAspectRatio="none"
            animate={{ x: [-120, 0, 120, 0, -120], y: [12, -6, 10, -8, 12] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            style={{ opacity: 0.55 }}
          >
            <defs>
              <linearGradient id="waveGradientPrimary" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6bc9ff" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#1a7acc" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0a66b5" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path
              d="M0,200 C240,120 480,280 720,200 C960,120 1200,280 1440,200 L1440,320 L0,320 Z"
              fill="url(#waveGradientPrimary)"
            />
          </motion.svg>
          <motion.svg
            viewBox="0 0 1440 320"
            className="absolute inset-x-[-15%] top-[38%] w-[150%]"
            preserveAspectRatio="none"
            animate={{ x: [140, 40, -120, 40, 140], y: [0, 10, -12, 10, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            style={{ opacity: 0.35 }}
          >
            <defs>
              <linearGradient id="waveGradientSecondary" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#94dbff" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#3aa0e6" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#0f82d0" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <path
              d="M0,220 C240,150 520,290 760,210 C1000,130 1240,260 1440,210 L1440,320 L0,320 Z"
              fill="url(#waveGradientSecondary)"
            />
          </motion.svg>
        </div>
        <ScrollSection className="max-w-5xl mx-auto text-center space-y-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent drop-shadow-sm"
            style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', 'Times New Roman', serif", scaleY: quoteScaleY, transformOrigin: "center top" }}
          >
            Where behaviour meets design, clarity becomes momentum.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center gap-3 pt-12"
          >
            <Button size="lg" className="w-full sm:w-64 px-8">
              Start Collaborate
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-64 px-8">
              My Work
            </Button>
          </motion.div>
        </ScrollSection>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <ScrollSection className="max-w-7xl mx-auto w-full">
          <div className="mb-12 space-y-4">
            <div className="flex items-center gap-6">
              <h2 className="text-sm font-semibold tracking-[0.5em] uppercase text-muted-foreground">
                My Work
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of recent projects showcasing design thinking and creative solutions.
            </p>
          </div>
          <ProjectsCarousel
            projects={[
              {
                id: 1,
                title: "Healthtech application",
                description: "A comprehensive redesign of an e-commerce platform focusing on user experience and conversion optimization",
                tags: ["UI/UX", "Design", "E-Commerce"]
              },
              {
                id: 2,
                title: "Mobile Banking App",
                description: "Modern mobile banking application with intuitive navigation and secure transaction flows",
                tags: ["UI/UX", "Mobile", "Fintech"]
              },
              {
                id: 3,
                title: "Website for children with autism",
                description: "Responsive website design based on a game designed with agentic AI, targeting children with autism and their guardians.",
                tags: ["Game Design", "Education", "Research"],
                link: "https://contra.com/p/sAYQ6goB-designing-a-joyful-web-experience-for-children-with-autism?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=nicole_cwzib6rq"
              },
              {
                id: 4,
                title: "Healthcare Appointment System",
                description: "Patient-friendly appointment booking system with seamless scheduling and reminders",
                tags: ["UI/UX", "Healthcare", "Design"]
              },
              {
                id: 5,
                title: "Education Learning Platform",
                description: "Interactive learning platform with engaging course content and progress tracking",
                tags: ["UI/UX", "Education", "E-Learning"]
              },
            ]}
          />
        </ScrollSection>
      </section>

      {/* Playground Section */}
      <section id="playground" className="min-h-screen flex flex-col items-center justify-center gap-12 py-20">
        <ScrollSection className="max-w-7xl mx-auto w-full px-6">
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
        <div className="w-full px-6">
          <div
            className="marquee-container mx-auto max-w-7xl py-6"
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
      <section id="skillsets" className="min-h-screen flex items-center justify-center px-6 pt-12 pb-20">
        <ScrollSection className="max-w-7xl mx-auto w-full space-y-10">
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
          <div className="relative mt-2 w-full" ref={toolsContainerRef}>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background via-background/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background via-background/80 to-transparent" />
            <div
              ref={toolsViewportRef}
              className="relative overflow-hidden"
              style={{
                WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
                maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
              }}
            >
              <motion.div
                className="flex items-center gap-4 py-4 px-1 cursor-grab whitespace-nowrap"
                drag="x"
                dragElastic={0.12}
                dragConstraints={toolDragBounds}
                whileTap={{ cursor: "grabbing" }}
                ref={toolsTrackRef}
              >
                {[
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
                ]
                  .sort((a, b) => a.localeCompare(b))
                  .map((tool) => (
                    <div
                      key={tool}
                      className="rounded-full border border-border/60 bg-card shadow-sm px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                    >
                      {tool}
                    </div>
                  ))}
              </motion.div>
            </div>
          </div>
        </ScrollSection>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <ScrollSection className="max-w-7xl mx-auto">
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
      <section id="blog" className="min-h-screen flex items-center justify-center px-6 py-20">
        <ScrollSection className="max-w-7xl mx-auto w-full">
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
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
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
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
