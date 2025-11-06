"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { useState, useEffect } from "react"

interface AnimatedHeaderProps {
  title: string
}

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Playground", href: "#playground" },
  { label: "Skillsets", href: "#skillsets" },
  { label: "About Me", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
]

export function AnimatedHeader({ title }: AnimatedHeaderProps) {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 100)
    })
    return () => unsubscribe()
  }, [scrollY])

  // Header fades out completely
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0])
  
  // Nav items fade out
  const navOpacity = useTransform(scrollY, [0, 100], [1, 0])
  
  // Portfolio scales down and moves to top-left
  const portfolioScale = useTransform(scrollY, [0, 100], [1, 0.6])
  const portfolioX = useTransform(scrollY, [0, 100], [0, -200])
  const portfolioLettersOpacity = useTransform(scrollY, [0, 50, 100], [1, 0.5, 0])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border"
        style={{
          opacity: headerOpacity,
          pointerEvents: isScrolled ? "none" : "auto",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Portfolio Title */}
          <motion.div 
            className="flex items-center gap-1 md:gap-2"
            style={{
              scale: portfolioScale,
              x: portfolioX,
            }}
          >
            <AnimatePresence mode="wait">
              {!isScrolled ? (
                <motion.div
                  key="full"
                  className="flex items-center gap-1 md:gap-2 overflow-hidden"
                  style={{ opacity: portfolioLettersOpacity }}
                >
                  {title.split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent inline-block cursor-pointer"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>

          {/* Navigation Items */}
          <motion.nav 
            className="hidden md:flex items-center gap-6 flex-1 justify-center"
            style={{ opacity: navOpacity }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>

          <motion.div style={{ opacity: navOpacity }}>
            <ThemeToggle />
          </motion.div>
        </div>
      </motion.header>

      {/* Compact P Logo - appears when scrolled */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-6 left-6 z-50"
          >
            <motion.a
              href="#hero"
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent cursor-pointer block"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              P
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
