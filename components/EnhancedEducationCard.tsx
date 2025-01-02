'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, ChevronDown, ChevronUp } from 'lucide-react'

interface EnhancedEducationCardProps {
  year: string
  degree: string
  institution: string
  description: string
  achievements: string[]
}

const EnhancedEducationCard: React.FC<EnhancedEducationCardProps> = ({
  year,
  degree,
  institution,
  description,
  achievements,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="bg-cyan-500 rounded-full p-2 mr-4">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-cyan-400">{degree}</h3>
          <p className="text-gray-400">{institution}</p>
        </div>
      </div>
      <p className="text-gray-300 mb-2">{description}</p>
      <p className="text-sm text-cyan-300 mb-4">{year}</p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
      >
        {isExpanded ? 'Hide' : 'Show'} Achievements
        {isExpanded ? (
          <ChevronUp className="ml-2 w-4 h-4" />
        ) : (
          <ChevronDown className="ml-2 w-4 h-4" />
        )}
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-2 text-gray-300"
          >
            {achievements.map((achievement, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <span className="text-cyan-400 mr-2">•</span>
                {achievement}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default EnhancedEducationCard

