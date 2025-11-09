import { motion } from 'framer-motion'
import { FaInstagram } from 'react-icons/fa'
import { CONFIG } from '../config'

const Instagram = () => {
  // Triple the images for seamless infinite scroll
  const images = [...CONFIG.instagram, ...CONFIG.instagram, ...CONFIG.instagram]

  return (
    <section className="py-20 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.a
          href={CONFIG.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-4 mb-12 group cursor-pointer"
        >
          <FaInstagram className="text-5xl text-accent-pink group-hover:text-accent-cyan transition-colors" />
          <div>
            <h2 className="text-4xl font-orbitron font-black text-white group-hover:text-accent-neon transition-colors">
              Follow Us On Instagram
            </h2>
            <p className="text-accent-cyan text-lg font-semibold">
              {CONFIG.social.instagramHandle}
            </p>
          </div>
        </motion.a>
      </div>

      {/* Instagram Feed Carousel */}
      <div className="relative overflow-hidden mt-12">
        <motion.div
          animate={{
            x: [0, -33.33 * CONFIG.instagram.length * 16], // Move by one third
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex gap-4"
        >
          {images.map((image, index) => (
            <motion.a
              key={index}
              href={CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 w-80 h-80 relative overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={image}
                alt={`Instagram ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Instagram Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/80 to-accent-purple/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <FaInstagram className="text-white text-6xl" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Instagram

