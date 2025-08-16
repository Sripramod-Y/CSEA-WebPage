import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="gradient-bg py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to the Future of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-600 to-blue-600"> Technology</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge innovations, connect with tech enthusiasts, and stay ahead of the digital transformation curve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary text-lg px-8 py-3">
              Explore Events
            </button>
            <button className="btn-secondary text-lg px-8 py-3">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="relative mt-16">
          <div className="absolute top-0 left-1/4 w-20 h-20 bg-tech-200 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-10 right-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-0 left-1/3 w-12 h-12 bg-indigo-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
          
          {/* Main Hero Image/Icon */}
          <div className="relative z-10">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-tech-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce-in">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
