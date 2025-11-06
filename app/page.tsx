"use client"

import { AnimatedHeader } from "@/components/animated-header"
import { SidebarNav } from "@/components/sidebar-nav"
import { ScrollSection } from "@/components/scroll-section"
import { ProjectsCarousel } from "@/components/projects-carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="relative">
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
          <div className="text-center mb-16">
            <Badge className="mb-4">Portfolio</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing design thinking and creative solutions
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
      <section id="playground" className="min-h-screen flex items-center justify-center px-6 py-20">
        <ScrollSection className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <Badge className="mb-4">Playground</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experimental Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of experimental designs, concepts, and creative explorations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project, index) => (
              <ScrollSection key={project} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-t-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                    <div className="text-4xl font-bold text-accent/50">Experiment {project}</div>
                  </div>
                  <CardHeader>
                    <CardTitle>Experimental Project {project}</CardTitle>
                    <CardDescription>
                      Creative exploration and experimental design concepts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Experimental</Badge>
                      <Badge variant="secondary">Concept</Badge>
                    </div>
                    <Button variant="ghost" className="w-full">View Project →</Button>
                  </CardContent>
                </Card>
              </ScrollSection>
            ))}
          </div>
        </ScrollSection>
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
