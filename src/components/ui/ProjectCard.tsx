import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

export interface ProjectCardProps {
  id: string
  slug: string
  title: string
  category: string
  thumbnail: string
  index: number
  className?: string
}

export const ProjectCard = ({ id, slug, title, category, thumbnail, index, className }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
      className={cn("group relative block overflow-hidden rounded-xl bg-dark/50 cursor-hover", className)}
    >
      <Link to={`/project/${slug}`} className="block h-full w-full">
        <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden">
          <motion.img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:blur-[2px]"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply" />
          
          <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
            <p className="text-accent text-sm font-bold tracking-widest uppercase mb-2">{category}</p>
            <h3 className="text-3xl font-black text-white">{title}</h3>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
