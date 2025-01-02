'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface EducationCardProps {
  year: string
  degree: string
  institution: string
  description: string
  icon: ReactNode
}

const EducationCard: React.FC<EducationCardProps> = ({ year, degree, institution, description, icon }) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-lg p-6 mb-6 last:mb-0 shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="bg-cyan-500 rounded-full p-2 mr-4">{icon}</div>
        <div>
          <h3 className="text-xl font-bold text-cyan-400">{degree}</h3>
          <p className="text-gray-400">{institution}</p>
        </div>
      </div>
      <p className="text-gray-300 mb-2">{description}</p>
      <p className="text-sm text-cyan-300">{year}</p>
    </motion.div>
  )
}

export default EducationCard

