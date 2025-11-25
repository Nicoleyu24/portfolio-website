"use client"

import type { ReactNode } from "react"
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import { gsap } from "gsap"

import styles from "./Masonry.module.css"
import { cn } from "@/lib/utils"

const MEDIA_QUERIES = [
  "(min-width:1500px)",
  "(min-width:1000px)",
  "(min-width:600px)",
  "(min-width:400px)",
]

const MEDIA_VALUES = [3, 3, 2, 1]

type AnimateFrom = "top" | "bottom" | "left" | "right" | "center" | "random"

export type MasonryItem = {
  id: string | number
  height: number
  img?: string
  url?: string
  className?: string
  [key: string]: unknown
}

type PositionedItem = MasonryItem & {
  x: number
  y: number
  w: number
  h: number
}

interface MasonryProps {
  items: MasonryItem[]
  ease?: string
  duration?: number
  stagger?: number
  animateFrom?: AnimateFrom
  scaleOnHover?: boolean
  hoverScale?: number
  blurToFocus?: boolean
  colorShiftOnHover?: boolean
  className?: string
  renderItem?: (item: MasonryItem) => ReactNode
}

const useMedia = (queries: string[], values: number[], defaultValue: number) => {
  const getValue = () => {
    if (typeof window === "undefined") return defaultValue
    const index = queries.findIndex((query) => window.matchMedia(query).matches)
    return values[index] ?? defaultValue
  }

  const [value, setValue] = useState(getValue)

  useEffect(() => {
    if (typeof window === "undefined") return
    const handler = () => setValue(getValue)
    queries.forEach((query) => window.matchMedia(query).addEventListener("change", handler))
    return () => queries.forEach((query) => window.matchMedia(query).removeEventListener("change", handler))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries.join(","), values.join(","), defaultValue])

  return value
}

const useMeasure = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    if (!ref.current) return
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ width, height })
    })
    ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])

  return [ref, size] as const
}

const preloadImages = async (urls: string[]) => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image()
          img.src = src
          img.onload = img.onerror = () => resolve(null)
        }),
    ),
  )
}

const Masonry = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
  className,
  renderItem,
}: MasonryProps) => {
  const columns = useMedia(MEDIA_QUERIES, MEDIA_VALUES, 1)

  const [containerRef, { width }] = useMeasure()
  const [imagesReady, setImagesReady] = useState(false)

  const getInitialPosition = (item: PositionedItem) => {
    const containerRect = containerRef.current?.getBoundingClientRect()
    if (!containerRect) return { x: item.x, y: item.y }

    let direction: AnimateFrom = animateFrom

    if (animateFrom === "random") {
      const directions: AnimateFrom[] = ["top", "bottom", "left", "right"]
      direction = directions[Math.floor(Math.random() * directions.length)]
    }

    switch (direction) {
      case "top":
        return { x: item.x, y: -200 }
      case "bottom":
        return { x: item.x, y: window.innerHeight + 200 }
      case "left":
        return { x: -200, y: item.y }
      case "right":
        return { x: window.innerWidth + 200, y: item.y }
      case "center":
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2,
        }
      default:
        return { x: item.x, y: item.y + 100 }
    }
  }

  useEffect(() => {
    const urls = items.map((i) => i.img).filter((src): src is string => Boolean(src))
    if (!urls.length) {
      setImagesReady(true)
      return
    }

    let isMounted = true
    setImagesReady(false)
    preloadImages(urls).then(() => {
      if (isMounted) setImagesReady(true)
    })

    return () => {
      isMounted = false
    }
  }, [items])

  const { positionedItems, containerHeight } = useMemo(() => {
    if (!width) return { positionedItems: [] as PositionedItem[], containerHeight: 0 }

    const colHeights = new Array(columns).fill(0)
    const columnWidth = width / columns
    const mapped: PositionedItem[] = []

    items.forEach((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights))
      const x = columnWidth * col
      const height = Math.max(180, child.height)
      const y = colHeights[col]
      colHeights[col] += height
      mapped.push({ ...child, x, y, w: columnWidth, h: height })
    })

    const gridHeight = Math.max(...colHeights, 0)
    return { positionedItems: mapped, containerHeight: gridHeight }
  }, [columns, items, width])

  const hasMounted = useRef(false)

  useLayoutEffect(() => {
    if (!imagesReady || !positionedItems.length) return

    positionedItems.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`
      const animationProps = {
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h,
      }

      if (!hasMounted.current) {
        const initialPos = getInitialPosition(item)
        const initialState = {
          opacity: 0,
          x: initialPos.x,
          y: initialPos.y,
          width: item.w,
          height: item.h,
          ...(blurToFocus && { filter: "blur(10px)" }),
        }

        gsap.fromTo(
          selector,
          initialState,
          {
            opacity: 1,
            ...animationProps,
            ...(blurToFocus && { filter: "blur(0px)" }),
            duration: 0.8,
            ease: "power3.out",
            delay: index * stagger,
          },
        )
      } else {
        gsap.to(selector, {
          ...animationProps,
          duration,
          ease,
          overwrite: "auto",
        })
      }
    })

    hasMounted.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [positionedItems, imagesReady, stagger, animateFrom, blurToFocus, duration, ease])

  const toggleOverlay = (item: MasonryItem, opacity: number) => {
    if (!colorShiftOnHover) return
    const overlay = document.querySelector(`[data-key="${item.id}"] .${styles.colorOverlay}`) as HTMLElement | null
    if (overlay) {
      gsap.to(overlay, {
        opacity,
        duration: 0.3,
        ease: "power2.out",
      })
    }
  }

  const handleMouseEnter = (item: MasonryItem) => {
    if (scaleOnHover) {
      const selector = `[data-key="${item.id}"]`
      gsap.to(selector, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out",
      })
    }
    toggleOverlay(item, 0.35)
  }

  const handleMouseLeave = (item: MasonryItem) => {
    if (scaleOnHover) {
      const selector = `[data-key="${item.id}"]`
      gsap.to(selector, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
    }
    toggleOverlay(item, 0)
  }

  return (
    <div
      ref={containerRef}
      className={cn(styles.list, className)}
      style={{ height: containerHeight || 600 }}
    >
      {positionedItems.map((item) => (
        <div
          key={item.id}
          data-key={item.id}
          className={cn(styles.itemWrapper, item.className)}
          onClick={
            item.url
              ? () => window.open(item.url as string, "_blank", "noopener,noreferrer")
              : undefined
          }
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={() => handleMouseLeave(item)}
        >
          <div className={styles.itemInner}>
            {renderItem ? (
              renderItem(item)
            ) : (
              <div
                className={styles.itemImg}
                style={{ backgroundImage: item.img ? `url(${item.img})` : undefined }}
              >
                {colorShiftOnHover && <div className={styles.colorOverlay} />}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Masonry
