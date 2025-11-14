"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
}

interface ProjectsCarouselProps {
  projects: Project[]
}

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  })
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative w-full">
      {/* Navigation Arrows */}
      <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-10 w-10 bg-background/80 backdrop-blur-sm border-2"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Previous project</span>
        </Button>
      </div>
      <div className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-10 w-10 bg-background/80 backdrop-blur-sm border-2"
          onClick={scrollNext}
          disabled={!canScrollNext}
        >
          <ArrowRight className="h-5 w-5" />
          <span className="sr-only">Next project</span>
        </Button>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="basis-full sm:basis-[calc(50%-12px)] lg:basis-[calc((100%-48px)/3)] flex-shrink-0 min-w-0"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden p-0">
                  {/* Full-width image area */}
                  <div className="w-full aspect-video bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:via-accent/30 group-hover:to-primary/30 transition-all duration-300">
                    <div className="text-4xl font-bold text-primary/50 group-hover:text-primary/70 transition-colors">
                      Project {project.id}
                    </div>
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              index === selectedIndex
                ? "w-8 bg-primary"
                : "w-1.5 bg-muted"
            )}
          />
        ))}
      </div>
    </div>
  )
}
