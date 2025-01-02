import Link from 'next/link'

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white bg-opacity-70 backdrop-blur-md dark:bg-gray-800 dark:bg-opacity-70">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          <li><Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link></li>
          <li><Link href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</Link></li>
          <li><Link href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</Link></li>
          <li><Link href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

