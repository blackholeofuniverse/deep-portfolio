import { ReactNode } from 'react'

interface TimelineItemProps {
  year: string
  title: string
  description: string
  icon?: ReactNode
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, icon }) => {
  return (
    <div className="timeline-item relative pl-8 sm:pl-32 py-6 group">
      <div className="font-caveat font-medium text-2xl text-cyan-400 mb-1 sm:mb-0">{year}</div>
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-600 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-cyan-400 after:border-4 after:box-content after:border-gray-900 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">{year}</time>
        <div className="text-xl font-bold text-white">{title}</div>
      </div>
      <div className="text-gray-400">{description}</div>
      {icon && <div className="absolute left-0 sm:left-24 mt-1.5">{icon}</div>}
    </div>
  )
}

export default TimelineItem

