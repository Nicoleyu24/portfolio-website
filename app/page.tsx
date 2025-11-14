"use client"

import { useEffect, useState, type CSSProperties } from "react"

import { AnimatedHeader } from "@/components/animated-header"
import { SidebarNav } from "@/components/sidebar-nav"
import { ScrollSection } from "@/components/scroll-section"
import { ProjectsCarousel } from "@/components/projects-carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

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
      <section id="hero" className="min-h-screen flex items-center justify-center pt-24 px-6">
        <ScrollSection className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          >
            Creative Designer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Crafting digital experiences with passion and precision
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <Button size="lg">View Work</Button>
            <Button size="lg" variant="outline">Get in Touch</Button>
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
                title: "E-Commerce Platform Redesign",
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
                title: "SaaS Dashboard Design",
                description: "Analytics dashboard for SaaS platform with real-time data visualization and user insights",
                tags: ["UI/UX", "Dashboard", "SaaS"]
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
      <section id="skillsets" className="min-h-screen flex items-center justify-center px-6 py-20">
        <ScrollSection className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <Badge className="mb-4">Skills</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A range of skills and tools I use to bring ideas to life
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "UI/UX Design", description: "User interface and experience design" },
              { title: "Prototyping", description: "Interactive prototypes and wireframes" },
              { title: "Design Systems", description: "Creating scalable design systems" },
              { title: "User Research", description: "Understanding user needs and behaviors" },
              { title: "Visual Design", description: "Beautiful and cohesive visual identities" },
              { title: "Frontend Dev", description: "Bringing designs to life with code" },
            ].map((skill, index) => (
              <ScrollSection key={skill.title} delay={index * 0.1}>
                <Card className="h-full text-center p-8 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl">{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              </ScrollSection>
            ))}
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
