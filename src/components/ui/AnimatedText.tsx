import { motion } from 'framer-motion'
interface AnimatedTextProps {
  text: string
  el?: keyof JSX.IntrinsicElements
  className?: string
  once?: boolean
}

export const AnimatedText = ({
  text,
  el: Wrapper = 'p',
  className = '',
  once = true,
}: AnimatedTextProps) => {
  const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <Wrapper className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-10% 0px" }}
        transition={{ staggerChildren: 0.05 }}
        aria-hidden
      >
        {text.split(' ').map((word, wordIndex) => (
          <span className="inline-block" key={`${word}-${wordIndex}`}>
            {word.split('').map((char, charIndex) => (
              <motion.span className="inline-block" variants={defaultAnimations} key={`${char}-${charIndex}`}>
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
      <span className="sr-only">{text}</span>
    </Wrapper>
  )
}
