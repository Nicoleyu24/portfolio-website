"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useRef } from "react"

interface ScrollSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  parallax?: boolean
}

export function ScrollSection({ 
  children, 
  className = "", 
  delay = 0,
  parallax = false 
}: ScrollSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })
  
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Parallax transform for elements within the section
  const y = parallax ? useTransform(scrollYProgress, [0, 1], [0, -50]) : 0

  return (
    <motion.div
      ref={sectionRef}
      className={className}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        style={parallax ? { y } : undefined}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

