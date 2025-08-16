import React, { useState } from 'react'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-tech-500 to-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-800">TechHub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-tech-600 transition-colors duration-300">Home</a>
            <a href="#about" className="text-gray-600 hover:text-tech-600 transition-colors duration-300">About</a>
            <a href="#events" className="text-gray-600 hover:text-tech-600 transition-colors duration-300">Events</a>
            <a href="#contact" className="text-gray-600 hover:text-tech-600 transition-colors duration-300">Contact</a>
            
            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-600 hover:text-tech-600 transition-colors duration-300"
              >
                Resources
                <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 animate-fade-in">
                  <a href="#blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">Blog</a>
                  <a href="#tutorials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">Tutorials</a>
                  <a href="#tools" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">Tools</a>
                  <a href="#community" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">Community</a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-tech-600 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-tech-600 transition-colors duration-300">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-tech-600 transition-colors duration-300">About</a>
              <a href="#events" className="block px-3 py-2 text-gray-600 hover:text-tech-600 transition-colors duration-300">Events</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-tech-600 transition-colors duration-300">Contact</a>
              <a href="#blog" className="block px-3 py-2 text-gray-600 hover:text-tech-600 transition-colors duration-300">Blog</a>
              <a href="#tutorials" className="block px-3 py-2 text-gray-600 hover:text-tech-600 transition-colors duration-300">Tutorials</a>
              <a href="#tools" className="block px-3 py-2 text-gray-600 hover:text-tech-600 transition-colors duration-300">Tools</a>
              <a href="#community" className="block px-3 py-2 text-gray-600 hover:text-tech-600 transition-colors duration-300">Community</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
