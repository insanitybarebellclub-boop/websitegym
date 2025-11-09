import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlay, FaTimes } from 'react-icons/fa'
import { CONFIG } from '../config'

const Video = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop()
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`
  }

  return (
    <section className="py-24 bg-gradient-to-br from-primary-darker via-primary-dark to-primary-darker relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(57, 255, 20, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(57, 255, 20, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Animated "PLAY NOW" Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center gap-3 mb-12"
          >
            {['P', 'L', 'A', 'Y', ' ', 'N', 'O', 'W'].map((letter, index) => (
              <motion.span
                key={index}
                animate={{
                  textShadow: [
                    '0 0 20px rgba(57, 255, 20, 0.8)',
                    '0 0 40px rgba(57, 255, 20, 1)',
                    '0 0 20px rgba(57, 255, 20, 0.8)',
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.1
                }}
                className="text-6xl md:text-8xl font-orbitron font-black text-white"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Play Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsModalOpen(true)}
            className="relative group"
          >
            {/* Pulsing Rings */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
              className="absolute inset-0 bg-accent-neon rounded-full blur-xl"
            />
            
            {/* Play Button Circle */}
            <div className="relative w-32 h-32 bg-gradient-to-br from-accent-neon to-accent-cyan rounded-full flex items-center justify-center shadow-neon-strong group-hover:shadow-[0_0_60px_rgba(57,255,20,1)] transition-all duration-300">
              <FaPlay className="text-4xl text-black ml-2" />
            </div>
          </motion.button>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 text-xl text-gray-300"
          >
            Watch Our Transformation Stories
          </motion.p>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl aspect-video"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 w-10 h-10 bg-accent-neon rounded-full flex items-center justify-center hover:bg-accent-cyan transition-colors"
              >
                <FaTimes className="text-black text-xl" />
              </motion.button>

              {/* Video iframe */}
              <iframe
                src={getYouTubeEmbedUrl(CONFIG.hero.video)}
                title="Video"
                className="w-full h-full rounded-lg shadow-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Decoration Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 w-16 h-16 border-2 border-accent-pink rounded-full opacity-30"
      />
      
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-24 h-24 border-2 border-accent-cyan rounded-full opacity-30"
      />
    </section>
  )
}

export default Video

