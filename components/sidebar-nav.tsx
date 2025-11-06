"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Playground", href: "#playground" },
  { label: "Skillsets", href: "#skillsets" },
  { label: "About Me", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
]

export function SidebarNav() {
  const { scrollY } = useScroll()
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsVisible(latest > 200) // Show after scrolling past hero
    })

    // Track active section
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 300

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      unsubscribe()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrollY])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed left-6 top-24 z-40 flex flex-col gap-6"
        >
          {navItems.map((item, index) => {
            const sectionId = item.href.substring(1)
            const isActive = activeSection === sectionId

            return (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="relative group"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {/* Active indicator */}
                  <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Nav item */}
                  <span
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </span>
                </motion.div>
              </motion.a>
            )
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

