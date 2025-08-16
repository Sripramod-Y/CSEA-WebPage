import React, { useState } from 'react'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <nav className="bg-space-100/20 backdrop-blur-cosmic border-b border-cosmic-500/30 shadow-space sticky top-0 z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-xl flex items-center justify-center shadow-cosmic transition-all duration-500 group-hover:shadow-cosmic-lg group-hover:scale-110">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-2xl font-bold cosmic-text text-shadow-neon">TechHub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-neon-blue transition-all duration-500 hover:scale-105 text-shadow-neon">Home</a>
            <a href="#about" className="text-gray-300 hover:text-neon-purple transition-all duration-500 hover:scale-105 text-shadow-neon">About</a>
            <a href="#events" className="text-gray-300 hover:text-neon-green transition-all duration-500 hover:scale-105 text-shadow-neon">Events</a>
            <a href="#contact" className="text-gray-300 hover:text-neon-orange transition-all duration-500 hover:scale-105 text-shadow-neon">Contact</a>
            
            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-300 hover:text-neon-yellow transition-all duration-500 hover:scale-105 text-shadow-neon"
              >
                Resources
                <svg className={`ml-1 w-4 h-4 transition-transform duration-500 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-space-200/90 backdrop-blur-cosmic rounded-xl shadow-cosmic border border-cosmic-500/30 py-2 z-50 animate-scale-in">
                  <a href="#blog" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-cosmic-500/20 transition-all duration-300 rounded-lg mx-2">Blog</a>
                  <a href="#tutorials" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-purple hover:bg-cosmic-500/20 transition-all duration-300 rounded-lg mx-2">Tutorials</a>
                  <a href="#tools" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-green hover:bg-cosmic-500/20 transition-all duration-300 rounded-lg mx-2">Tools</a>
                  <a href="#community" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-orange hover:bg-cosmic-500/20 transition-all duration-300 rounded-lg mx-2">Community</a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-neon-blue transition-all duration-500 hover:scale-110"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-space-200/50 backdrop-blur-cosmic rounded-xl mt-2 border border-cosmic-500/30 shadow-cosmic">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-neon-blue transition-all duration-300 rounded-lg hover:bg-cosmic-500/20">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-neon-purple transition-all duration-300 rounded-lg hover:bg-cosmic-500/20">About</a>
              <a href="#events" className="block px-3 py-2 text-gray-300 hover:text-neon-green transition-all duration-300 rounded-lg hover:bg-cosmic-500/20">Events</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-neon-orange transition-all duration-300 rounded-lg hover:bg-cosmic-500/20">Contact</a>
              <a href="#blog" className="block px-3 py-2 text-gray-300 hover:text-neon-blue transition-all duration-300 rounded-lg hover:bg-cosmic-500/20">Blog</a>
              <a href="#tutorials" className="block px-3 py-2 text-gray-300 hover:text-neon-purple transition-all duration-300 rounded-lg hover:bg-cosmic-500/20">Tutorials</a>
              <a href="#tools" className="block px-3 py-2 text-gray-300 hover:text-neon-green transition-all duration-300 rounded-lg hover:bg-cosmic-500/20">Tools</a>
              <a href="#community" className="block px-3 py-2 text-gray-300 hover:text-neon-orange transition-all duration-300 rounded-lg hover:bg-cosmic-500/20">Community</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
