import { motion } from 'framer-motion'
import { CONFIG } from '../config'

const Gallery = () => {
  // Triple the images for seamless infinite scroll
  const images = [...CONFIG.gallery, ...CONFIG.gallery, ...CONFIG.gallery]

  return (
    <section className="py-0 bg-primary-darker overflow-hidden">
      <div className="relative">
        {/* Animated Gallery Track */}
        <motion.div
          animate={{
            x: [0, -33.33 * CONFIG.gallery.length * 16], // Move by one third (one set of images)
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex gap-4"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="flex-shrink-0 w-96 h-72 relative overflow-hidden rounded-lg group"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent-neon/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-black font-bold text-xl">View More</span>
              </div>
              
              {/* Neon Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-neon transition-all duration-300 rounded-lg" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery

