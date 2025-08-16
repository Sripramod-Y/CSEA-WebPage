import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="cosmic-bg nebula-bg py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Cosmic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-950/50 to-space-950/80"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Welcome to the Future of
            <span className="cosmic-text block mt-2 text-shadow-neon"> Technology</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up">
            Discover cutting-edge innovations, connect with tech enthusiasts, and stay ahead of the digital transformation curve in our cosmic tech universe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <button className="btn-cosmic text-lg px-10 py-4 group">
              <span className="group-hover:scale-110 transition-transform duration-300">Explore Events</span>
            </button>
            <button className="btn-neon text-lg px-10 py-4 group">
              <span className="group-hover:scale-110 transition-transform duration-300">Learn More</span>
            </button>
          </div>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="relative mt-20">
          {/* Orbiting elements */}
          <div className="absolute top-0 left-1/4 w-24 h-24 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full opacity-30 floating-element shadow-cosmic"></div>
          <div className="absolute top-10 right-1/4 w-20 h-20 bg-gradient-to-r from-neon-pink to-neon-orange rounded-full opacity-30 floating-element shadow-cosmic" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/3 w-16 h-16 bg-gradient-to-r from-neon-green to-neon-blue rounded-full opacity-30 floating-element shadow-cosmic" style={{ animationDelay: '2s' }}></div>
          
          {/* Nebula clouds */}
          <div className="absolute top-20 right-1/3 w-32 h-32 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 rounded-full nebula-pulse blur-xl"></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-r from-neon-blue/20 to-neon-green/20 rounded-full nebula-pulse blur-xl" style={{ animationDelay: '2.5s' }}></div>
          
          {/* Main Hero Icon with enhanced effects */}
          <div className="relative z-20">
            <div className="w-40 h-40 mx-auto bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-full flex items-center justify-center shadow-cosmic-lg animate-cosmic-float group">
              {/* Orbiting rings */}
              <div className="absolute inset-0 border-2 border-neon-blue/30 rounded-full orbit-element"></div>
              <div className="absolute inset-0 border-2 border-neon-purple/30 rounded-full orbit-element" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
              
              {/* Main icon */}
              <svg className="w-20 h-20 text-white group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 rounded-full blur-xl animate-pulse-glow"></div>
            </div>
          </div>
          
          {/* Particle effects around main icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-neon-blue rounded-full animate-float"
                style={{
                  left: `${50 + 25 * Math.cos((i * Math.PI * 2) / 8)}%`,
                  top: `${50 + 25 * Math.sin((i * Math.PI * 2) / 8)}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + i * 0.5}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
