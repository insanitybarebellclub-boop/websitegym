import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import { CONFIG } from '../config'

const Services = () => {
  return (
    <section id="services" className="py-20 bg-primary-darker">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative h-[700px] rounded-2xl overflow-hidden">
              <img
                src={CONFIG.services.mainImage}
                alt="Services"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Animated Border */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(57, 255, 20, 0.5)',
                    '0 0 40px rgba(57, 255, 20, 0.8)',
                    '0 0 20px rgba(57, 255, 20, 0.5)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 border-4 border-accent-neon rounded-2xl pointer-events-none"
              />
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-accent-cyan rounded-tl-2xl" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-accent-pink rounded-br-2xl" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-accent-neon text-sm uppercase tracking-wider mb-4 font-semibold"
            >
              {CONFIG.services.subtitle}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-5xl font-orbitron font-black mb-6 text-glow"
            >
              {CONFIG.services.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg leading-relaxed mb-8"
            >
              {CONFIG.services.description}
            </motion.p>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-4">
              {CONFIG.services.list.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <FaCheckCircle className="text-accent-neon text-xl group-hover:text-accent-cyan transition-colors flex-shrink-0" />
                  <span className="text-white font-semibold group-hover:text-accent-neon transition-colors">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-4 bg-gradient-to-r from-accent-neon to-accent-cyan text-black font-bold rounded-full hover:shadow-neon-strong transition-all"
            >
              Explore All Services
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services

