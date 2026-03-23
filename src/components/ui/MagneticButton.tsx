import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export const MagneticButton = ({ children, className, ...props }: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e
    if (!ref.current) return
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative rounded-full bg-accent text-white px-8 py-4 font-bold tracking-widest uppercase overflow-hidden group cursor-hover",
        className
      )}
      {...props}
    >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-black">{children}</span>
      <div className="absolute inset-0 bg-white transform scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-y-100" />
    </motion.button>
  )
}
