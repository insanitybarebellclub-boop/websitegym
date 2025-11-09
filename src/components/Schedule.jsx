import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaDumbbell, FaFire, FaBolt } from 'react-icons/fa'
import { CONFIG } from '../config'

const Schedule = () => {
  const [activeMode, setActiveMode] = useState('beginner')
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  const modes = [
    { 
      key: 'beginner', 
      icon: FaDumbbell, 
      label: 'Beginner',
      gradient: 'from-accent-neon to-green-400'
    },
    { 
      key: 'intermediate', 
      icon: FaFire, 
      label: 'Intermediate',
      gradient: 'from-accent-cyan to-blue-400'
    },
    { 
      key: 'advanced', 
      icon: FaBolt, 
      label: 'Advanced',
      gradient: 'from-accent-pink to-purple-500'
    }
  ]

  const currentSchedule = CONFIG.workoutModes[activeMode]

  return (
    <section id="schedule" className="py-20 bg-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(57, 255, 20, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(57, 255, 20, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-orbitron font-black mb-4 text-glow">
            Workout Modes
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Choose your fitness level and follow our expertly designed weekly workout plan
          </p>
        </motion.div>

        {/* Mode Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 justify-center mb-12"
        >
          {modes.map((mode, index) => {
            const Icon = mode.icon
            const isActive = activeMode === mode.key
            
            return (
              <motion.button
                key={mode.key}
                onClick={() => setActiveMode(mode.key)}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative px-8 py-6 rounded-2xl font-bold text-lg transition-all ${
                  isActive
                    ? 'glass-effect shadow-neon'
                    : 'glass-effect-dark hover:glass-effect'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeMode"
                    className={`absolute inset-0 bg-gradient-to-r ${mode.gradient} opacity-20 rounded-2xl`}
                  />
                )}
                
                <div className="relative flex items-center gap-3">
                  <Icon className={`text-3xl ${isActive ? 'text-' + mode.gradient.split('-')[1] : 'text-gray-400'}`} />
                  <div className="text-left">
                    <div className={`font-orbitron ${isActive ? 'text-white' : 'text-gray-400'}`}>
                      {mode.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {CONFIG.workoutModes[mode.key].description}
                    </div>
                  </div>
                </div>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Schedule Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMode}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {days.map((day, index) => {
              const workout = currentSchedule.schedule[day]
              const isRestDay = workout.focus === "Rest Day" || workout.focus === "Active Recovery"
              
              return (
                <motion.div
                  key={day}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`glass-effect-dark rounded-2xl p-6 hover:shadow-neon transition-all ${
                    isRestDay ? 'opacity-75' : ''
                  }`}
                >
                  {/* Day Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-orbitron font-bold text-white">
                      {dayNames[index]}
                    </h3>
                    {!isRestDay && (
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${
                        activeMode === 'beginner' ? 'from-accent-neon to-green-400' :
                        activeMode === 'intermediate' ? 'from-accent-cyan to-blue-400' :
                        'from-accent-pink to-purple-500'
                      }`} />
                    )}
                  </div>

                  {/* Focus */}
                  <div className="mb-4">
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                      activeMode === 'beginner' ? 'bg-accent-neon/20 text-accent-neon' :
                      activeMode === 'intermediate' ? 'bg-accent-cyan/20 text-accent-cyan' :
                      'bg-accent-pink/20 text-accent-pink'
                    }`}>
                      {workout.focus}
                    </span>
                  </div>

                  {/* Exercises */}
                  <div className="space-y-2 mb-4">
                    {workout.exercises.map((exercise, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          activeMode === 'beginner' ? 'bg-accent-neon' :
                          activeMode === 'intermediate' ? 'bg-accent-cyan' :
                          'bg-accent-pink'
                        }`} />
                        <span className="text-gray-300 text-sm">{exercise}</span>
                      </div>
                    ))}
                  </div>

                  {/* Duration & Sets */}
                  <div className="border-t border-gray-800 pt-4 space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Duration</span>
                      <span className="text-gray-300 font-semibold">{workout.duration}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Sets/Reps</span>
                      <span className="text-gray-300 font-semibold">{workout.sets}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 glass-effect px-6 py-3 rounded-full">
            <span className="text-gray-400 text-sm">
              💡 Tip: Always warm up before workouts and cool down after
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Schedule

