'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string
  textarea?: boolean
}

const AnimatedInput: React.FC<AnimatedInputProps> = ({ label, textarea = false, ...props }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(false)
    setHasValue(e.target.value !== '')
  }

  const InputComponent = textarea ? 'textarea' : 'input'

  return (
    <motion.div
      className="relative mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <InputComponent
        {...props}
        className={`w-full bg-transparent border-b-2 border-gray-400 focus:border-cyan-400 outline-none transition-colors duration-300 py-2 ${
          textarea ? 'h-32 resize-none' : ''
        }`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <motion.label
        className={`absolute left-0 transition-all duration-300 ${
          isFocused || hasValue ? 'top-4 text-sm text-cyan-400' : 'top-2 text-gray-400'
        }`}
        initial={false}
        animate={{ y: isFocused || hasValue ? -24 : 0 }}
      >
        {label}
      </motion.label>
    </motion.div>
  )
}

export default AnimatedInput

