import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { ArrowLeft } from 'lucide-react'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find(p => p.slug === slug)

  if (!project) return <div className="min-h-screen flex items-center justify-center text-white">Project not found</div>

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="bg-[#0a0a0a] text-white min-h-screen"
    >
      <div className="fixed top-24 left-6 md:left-12 z-50">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors mix-blend-difference">
          <ArrowLeft size={16} /> Back
        </Link>
      </div>

      {/* Hero Header */}
      <section className="relative pt-48 md:pt-64 pb-12 md:pb-24 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent text-sm font-bold tracking-widest uppercase mb-4"
          >
            {project.category}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-[8vw] leading-[0.9] font-black uppercase tracking-tighter"
          >
            {project.title}
          </motion.h1>
        </div>
      </section>

      <section className="bg-[#0a0a0a] relative z-20 py-24 px-6 md:px-12 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 py-12 border-b border-white/10">
            {[
              { label: 'Client', value: project.client },
              { label: 'Role', value: project.role },
              { label: 'Year', value: project.year },
              { label: 'Category', value: project.category }
            ].map((meta, i) => (
              <motion.div
                key={meta.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-2">{meta.label}</p>
                <p className="font-medium text-lg">{meta.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Case Study text */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
            <div className="md:col-span-5">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">The Context</h2>
              <p className="text-xl text-white/70 font-light leading-relaxed">{project.description}</p>
            </div>
            <div className="md:col-span-7 space-y-12">
              <div>
                <h3 className="text-sm text-accent font-bold tracking-widest uppercase mb-4">01. The Challenge</h3>
                <p className="text-2xl font-light leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-sm text-accent font-bold tracking-widest uppercase mb-4">02. The Solution</h3>
                <p className="text-2xl font-light leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="space-y-12 md:space-y-24 flex flex-col items-center">
            {project.videoEmbedUrl && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1 }}
                className="w-full max-w-5xl overflow-hidden rounded-2xl bg-[#141414] border border-white/5 relative p-4 md:p-8 shadow-2xl shadow-black/50"
              >
                <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden">
                  <iframe
                    src={project.videoEmbedUrl}
                    title={`${project.title} video`}
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                {project.videoWatchUrl && (
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm text-white/60">
                      Jika player masih menampilkan status processing, buka langsung di YouTube.
                    </p>
                    <a
                      href={project.videoWatchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border border-white/30 px-5 py-2 text-xs font-bold uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
                    >
                      Buka di YouTube
                    </a>
                  </div>
                )}
              </motion.div>
            )}
            {project.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1 }}
                className="w-full max-w-5xl overflow-hidden rounded-2xl bg-[#141414] border border-white/5 relative flex items-center justify-center p-4 md:p-12 shadow-2xl shadow-black/50"
              >
                <img src={img} alt={`${project.title} gallery ${i + 1}`} className="w-full max-h-[75vh] object-contain rounded-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project Teaser */}
      <section className="py-32 px-6 md:px-12 text-center bg-dark">
        <p className="text-sm text-white/40 font-bold tracking-widest uppercase mb-6">Next Project</p>
        <Link to="/" className="text-5xl md:text-8xl font-black uppercase tracking-tighter hover:text-accent transition-colors duration-500">
          Back to Index
        </Link>
      </section>
    </motion.div>
  )
}
