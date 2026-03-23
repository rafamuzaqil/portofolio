import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedText } from '../components/ui/AnimatedText'
import { MagneticButton } from '../components/ui/MagneticButton'
import { ProjectCard } from '../components/ui/ProjectCard'
import { projects } from '../data/projects'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Hero Parallax
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      ref={containerRef}
      className="bg-dark text-white relative"
    >
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-12 overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="z-10 relative">
          <p className="text-accent tracking-[0.3em] font-bold text-xs md:text-sm uppercase mb-4 md:mb-6 ml-2">Desainer Komunikasi Visual</p>
          <AnimatedText
            text="CRAFTING VISUALS"
            el="h1"
            className="text-[13vw] md:text-[8vw] leading-[0.9] font-black uppercase tracking-tighter"
          />
          <AnimatedText
            text="FOR THE FUTURE."
            el="h1"
            className="text-[13vw] md:text-[8vw] leading-[0.9] font-black uppercase tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40"
          />
          <div className="mt-8 md:mt-12 md:pl-2">
            <p className="max-w-xl text-white/70 font-medium text-sm md:text-xl leading-relaxed">
              Mengubah ide menjadi sistem visual yang jelas, berani, dan relevan. Fokus pada branding, layout, dan digital design yang tidak hanya terlihat baik—tetapi bekerja.
            </p>
          </div>

          <div className="mt-16 ml-2">
            <MagneticButton onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
              Lihat Karya Pilihan
            </MagneticButton>
          </div>
        </motion.div>

        {/* Ambient background element */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-accent/20 blur-[150px] pointer-events-none mix-blend-screen" />
      </section>

      {/* 2. About Section */}
      <section id="about" className="py-32 px-6 md:px-12 relative z-20 bg-dark">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
            <div className="md:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="aspect-[4/5] w-full max-w-md mx-auto relative group overflow-hidden"
              >
                <img
                  src="/profile.jpg"
                  alt="Potret"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            </div>
            <div className="md:col-span-7 flex flex-col justify-center">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 bg-gradient-to-br from-white to-white/30 bg-clip-text text-transparent">
                Membentuk yang sederhana menjadi bermakna.              </h2>
              <div className="space-y-6 text-xl text-white/70 font-light leading-relaxed mb-12 max-w-3xl">
                <p>
                  Saya Rafa Muzaqil Mauludin, siswa SMK kelas 12 jurusan Desain Komunikasi Visual (DKV) yang berfokus pada pembuatan identitas visual dan desain digital. Saya tertarik pada branding, tata letak, serta bagaimana sebuah desain dapat menyampaikan pesan secara sederhana namun kuat.                </p>
                <p>
                  Saya percaya desain yang baik adalah tentang menyederhanakan—menghilangkan hal yang tidak perlu hingga tersisa inti komunikasi. Saat ini saya terus mengembangkan kemampuan dan terbuka untuk pengalaman serta kolaborasi yang dapat memperluas perspektif dan kualitas karya saya.                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {['Arsitektur Merek', 'Tipografi', 'UI/UX Interaktif', 'Pengarahan Seni'].map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="px-6 py-3 border border-white/20 rounded-full text-sm font-bold uppercase tracking-widest text-white/90"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Work Showcase */}
      <section id="work" className="py-32 px-6 md:px-12 bg-[#141414] relative z-20">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-16 md:mb-24">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
              Arsip <br /><span className="text-white/30">Pilihan</span>
            </h2>
            <p className="hidden md:block max-w-xs text-sm text-white/50 text-right">
              Koleksi terkurasi dari karya komisi terbaru yang mengeksplorasi bentuk, fungsi, dan narasi visual. [2024-2026]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-32">
            {projects.map((project, index) => (
              <div key={project.id} className={index % 2 !== 0 ? "md:mt-32" : ""}>
                <ProjectCard {...project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact / CTA */}
      <section id="contact" className="py-24 md:py-40 px-6 md:px-12 bg-accent text-dark relative overflow-hidden">
        <div className="container mx-auto flex flex-col items-center justify-center text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[12vw] md:text-[10vw] leading-[0.9] font-black uppercase tracking-tighter mb-8 md:mb-12"
          >
            Hubungi <br /> saya
          </motion.h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const subject = encodeURIComponent("Pesan Baru dari Portofolio Rafa");
              const body = encodeURIComponent(`Nama: ${formData.get('nama')}\nEmail: ${formData.get('email')}\n\nPesan:\n${formData.get('pesan')}`);
              window.location.href = `mailto:muzaqilrafa@gmail.com?subject=${subject}&body=${body}`;
            }}
            className="w-full max-w-2xl bg-dark/5 backdrop-blur-sm p-6 md:p-8 rounded-3xl mb-12 border border-dark/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              <input type="text" name="nama" required placeholder="NAMA" className="w-full border-b-2 border-dark/20 bg-transparent py-3 md:py-4 text-dark placeholder:text-dark/40 font-bold uppercase focus:outline-none focus:border-dark transition-colors" />
              <input type="email" name="email" required placeholder="EMAIL" className="w-full border-b-2 border-dark/20 bg-transparent py-3 md:py-4 text-dark placeholder:text-dark/40 font-bold uppercase focus:outline-none focus:border-dark transition-colors" />
            </div>
            <textarea name="pesan" required placeholder="DETAIL PROYEK" rows={4} className="w-full border-b-2 border-dark/20 bg-transparent py-3 md:py-4 text-dark placeholder:text-dark/40 font-bold uppercase focus:outline-none focus:border-dark transition-colors mb-6 md:mb-8 resize-none" />

            <button type="submit" className="group flex items-center justify-center gap-4 bg-dark text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold uppercase tracking-widest w-full hover:bg-dark/80 transition-colors">
              Kirim Pesan
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>

          <a href="mailto:muzaqilrafa@gmail.com" className="inline-flex items-center gap-2 font-bold text-sm md:text-xl uppercase tracking-widest hover:underline decoration-2 underline-offset-8 break-all">
            muzaqilrafa@gmail.com
          </a>
        </div>
      </section>
    </motion.div>
  )
}
