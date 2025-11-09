import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPhone, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { CONFIG } from '../config'

const Mission = () => {
  const [activeTab, setActiveTab] = useState('mission')
  const [currentTrainer, setCurrentTrainer] = useState(0)

  const nextTrainer = () => {
    setCurrentTrainer((prev) => (prev + 1) % CONFIG.trainers.length)
  }

  const prevTrainer = () => {
    setCurrentTrainer((prev) => (prev - 1 + CONFIG.trainers.length) % CONFIG.trainers.length)
  }

  return (
    <section id="about" className="py-20 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Tab Navigation */}
            <div className="flex gap-4 mb-8 border-b border-gray-700">
              {['mission', 'vision'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-semibold text-lg capitalize transition-all relative ${
                    activeTab === tab
                      ? 'text-accent-neon'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {CONFIG[tab].title}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-accent-neon"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {CONFIG[activeTab].content.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Contact Box */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-8 p-6 bg-gradient-to-r from-accent-neon/20 to-accent-cyan/20 rounded-lg glass-effect neon-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-accent-neon rounded-full flex items-center justify-center">
                  <FaPhone className="text-2xl text-black" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">
                    Call Us Now
                  </p>
                  <a
                    href={`tel:${CONFIG.contact.phone}`}
                    className="text-2xl font-bold text-white hover:text-accent-neon transition-colors"
                  >
                    {CONFIG.contact.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Trainer Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Trainer Card */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTrainer}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={CONFIG.trainers[currentTrainer].image}
                    alt={CONFIG.trainers[currentTrainer].name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Trainer Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-accent-neon text-sm uppercase tracking-wider mb-2"
                    >
                      {CONFIG.trainers[currentTrainer].title}
                    </motion.p>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl font-orbitron font-bold text-white mb-2"
                    >
                      {CONFIG.trainers[currentTrainer].name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-300 text-lg"
                    >
                      {CONFIG.trainers[currentTrainer].specialty}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 left-4 right-4 flex justify-between transform -translate-y-1/2 z-10">
                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevTrainer}
                  className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent-neon hover:text-black transition-all"
                >
                  <FaChevronLeft />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTrainer}
                  className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent-neon hover:text-black transition-all"
                >
                  <FaChevronRight />
                </motion.button>
              </div>

              {/* Neon Border on Hover */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-accent-neon transition-all duration-500 rounded-2xl pointer-events-none" />
            </div>

            {/* Trainer Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {CONFIG.trainers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTrainer(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTrainer
                      ? 'bg-accent-neon w-8'
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Mission

