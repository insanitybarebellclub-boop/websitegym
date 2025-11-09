import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import { CONFIG } from '../config'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${CONFIG.hero.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-darker/80 via-primary-dark/70 to-primary-darker z-10" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(57, 255, 20, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57, 255, 20, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black mb-4"
              animate={{
                textShadow: [
                  '0 0 20px rgba(57, 255, 20, 0.8)',
                  '0 0 40px rgba(57, 255, 20, 1)',
                  '0 0 20px rgba(57, 255, 20, 0.8)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-white">{CONFIG.hero.title1}</span>
            </motion.h1>
            
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black mb-8 gradient-text"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{
                backgroundSize: '200% auto'
              }}
            >
              {CONFIG.hero.title2}
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {CONFIG.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(57, 255, 20, 0.8)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-accent-neon to-accent-cyan text-black text-lg font-bold rounded-full shadow-neon hover:shadow-neon-strong transition-all"
            >
              Start Your Journey
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 glass-effect text-white text-lg font-bold rounded-full border-2 border-accent-neon hover:bg-accent-neon/10 transition-all"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
          >
            {[
              { number: '500+', label: 'Members' },
              { number: '50+', label: 'Classes' },
              { number: '24/7', label: 'Access' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="text-3xl md:text-5xl font-orbitron font-black text-accent-neon">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-400 mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
      >
        <FaChevronDown className="text-accent-neon text-3xl" />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 left-10 w-20 h-20 border-2 border-accent-cyan rounded-full opacity-20 z-10"
      />
      
      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-1/3 right-20 w-32 h-32 border-2 border-accent-pink rounded-full opacity-20 z-10"
      />
    </section>
  )
}

export default Hero

