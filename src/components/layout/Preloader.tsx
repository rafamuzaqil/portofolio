import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 10) + 5
      if (currentProgress >= 100) {
        currentProgress = 100
        setProgress(100)
        clearInterval(interval)
        setTimeout(() => {
          onComplete()
        }, 800)
      } else {
        setProgress(currentProgress)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center text-white"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="w-full max-w-sm px-8">
        <div className="flex justify-between items-end mb-4 font-bold tracking-tighter">
          <span className="text-xl">LOADING</span>
          <span className="text-4xl">{progress}%</span>
        </div>
        <div className="h-[2px] w-full bg-[#333] overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-white"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  )
}
