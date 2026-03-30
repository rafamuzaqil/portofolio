import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Layouts
import { SmoothScroll } from './components/layout/SmoothScroll'
import { CustomCursor } from './components/layout/CustomCursor'
import { Preloader } from './components/layout/Preloader'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'

// Pages (to be implemented)
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

const ScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).lenis) {
      ;(window as any).lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [location.pathname])

  return null
}

const AnimatedRoutes = () => {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} key="preloader" />}
      </AnimatePresence>

      <CustomCursor />
      
      {!isLoading && (
        <SmoothScroll>
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              <ScrollToTop />
              <Navbar />
              <main className="flex-grow">
                <AnimatedRoutes />
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </SmoothScroll>
      )}
    </>
  )
}

export default App
