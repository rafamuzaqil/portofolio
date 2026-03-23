export const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12 border-t border-white/10 mt-auto">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">Rafa<span className="text-accent">.</span></h2>
          <p className="text-white/50 text-sm max-w-xs">Meningkatkan narasi visual melalui desain komunikasi yang berani dan dinamis.</p>
        </div>
        
        <div className="flex gap-6 items-center">
          {['Behance', 'Dribbble', 'Instagram', 'LinkedIn'].map((social) => (
            <a 
              key={social} 
              href="#" 
              className="text-sm font-medium hover:text-accent transition-colors cursor-hover relative group block"
            >
              {social}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
        <p>&copy; {new Date().getFullYear()} Rafa Design. Hak cipta dilindungi undang-undang.</p>
        <p className="mt-2 md:mt-0">Dibuat dengan React & Framer Motion</p>
      </div>
    </footer>
  )
}
