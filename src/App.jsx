import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Mission from './components/Mission'
import Video from './components/Video'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Schedule from './components/Schedule'
import Blog from './components/Blog'
import Instagram from './components/Instagram'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Gallery />
      <Mission />
      <Video />
      <Marquee />
      <Services />
      <Schedule />
      <Blog />
      <Instagram />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App

