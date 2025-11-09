import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary-darker">
      <div className="relative flex items-center justify-center">
        {/* Animated Rings */}
        <motion.div
          className="absolute w-64 h-64 border-2 border-accent-neon rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            boxShadow: '0 0 30px rgba(57, 255, 20, 0.5)'
          }}
        />
        
        <motion.div
          className="absolute w-48 h-48 border-2 border-accent-cyan rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
          }}
        />
        
        <motion.div
          className="absolute w-80 h-80 border border-accent-pink rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            boxShadow: '0 0 40px rgba(255, 27, 126, 0.3)'
          }}
        />

        {/* Logo Text */}
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {['INSANITY', 'BAREBELL', 'CLUB'].map((word, index) => (
              <motion.div
                key={word}
                className="text-3xl md:text-5xl font-orbitron font-black tracking-wider text-glow"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
              >
                {word}
              </motion.div>
            ))}
          </motion.div>
          
          {/* Loading Bar */}
          <motion.div
            className="mt-8 w-48 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-accent-neon via-accent-cyan to-accent-pink"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 2.5, 
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Loader

