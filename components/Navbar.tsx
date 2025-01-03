'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold">Deep</Link>
          <div className="hidden md:flex space-x-8">
            {['About', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                {item}
              </Link>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {['About', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="block hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar

