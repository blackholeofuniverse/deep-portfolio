/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface AnimatedTimelineItemProps {
  year?: string
  title?: string
  description: string
  icon?: ReactNode
}

const AnimatedTimelineItem: React.FC<AnimatedTimelineItemProps> = ({ year, title, description, icon }) => {
  const [isVisible, setIsVisible] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    )

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={itemRef}
      className={`relative pl-8 sm:pl-32 py-6 group transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
    >
      <div className="font-caveat font-medium text-2xl text-cyan-400 mb-1 sm:mb-0">{year}</div>
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-600 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-cyan-400 after:border-4 after:box-content after:border-gray-900 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        {year ? (
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
            {year}
          </time>
        ) : (<></>)}
        {title ? (
          <div className="text-xl font-bold text-white">{title}</div>
        ) : (<></>)}
      </div>
      <div className="text-gray-400">{description}</div>
      {icon && <div className="absolute left-0 sm:left-24 mt-1.5">{icon}</div>}
    </div>
  )
}

export default AnimatedTimelineItem

