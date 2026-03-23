import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Consider links and buttons as hovered elements
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-hover')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-accent pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovered ? 0 : 1,
          opacity: 1
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      <motion.div
        className={cn(
          "fixed top-0 left-0 w-10 h-10 rounded-full border border-white pointer-events-none z-50 flex items-center justify-center mix-blend-difference",
          isHovered ? "bg-white text-black bg-opacity-100 mix-blend-normal" : "bg-transparent text-transparent"
        )}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', mass: 0.1, stiffness: 150, damping: 15 }}
      >
        {isHovered && <span className="text-[8px] font-bold tracking-widest uppercase">View</span>}
      </motion.div>
    </>
  )
}
