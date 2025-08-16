import React, { useEffect } from 'react'

const EventModal = ({ event, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !event) return null

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getNeonColor = (colorName) => {
    const colors = {
      'neon-blue': 'text-neon-blue',
      'neon-purple': 'text-neon-purple',
      'neon-green': 'text-neon-green',
      'neon-pink': 'text-neon-pink',
      'neon-yellow': 'text-neon-yellow',
      'neon-orange': 'text-neon-orange'
    }
    return colors[colorName] || 'text-neon-blue'
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-space-100/95 backdrop-blur-cosmic rounded-3xl shadow-cosmic-lg max-w-3xl w-full mx-4 animate-scale-in border border-cosmic-500/30 overflow-hidden">
          {/* Cosmic background pattern */}
          <div className="absolute inset-0 bg-nebula-pattern opacity-10"></div>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 bg-space-200/50 hover:bg-space-300/70 rounded-full flex items-center justify-center transition-all duration-300 z-10 border border-cosmic-500/30 backdrop-blur-sm group hover:scale-110"
          >
            <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Content */}
          <div className="p-10 relative z-10">
            {/* Event Header */}
            <div className="text-center mb-10">
              <div className="text-9xl mb-6 group-hover:scale-110 transition-transform duration-500">{event.image}</div>
              <span className={`inline-block bg-${event.color?.replace('neon-', '')}/20 text-${event.color} text-sm font-medium px-6 py-3 rounded-full mb-6 border border-${event.color?.replace('neon-', '')}/30 backdrop-blur-sm`}>
                {event.category}
              </span>
              <h2 className={`text-4xl font-bold text-white mb-4 group-hover:${getNeonColor(event.color)} transition-all duration-500`}>
                {event.name}
              </h2>
            </div>

            {/* Event Description */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-neon-blue rounded-full mr-3 animate-pulse"></span>
                About This Event
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {event.description}
              </p>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-neon-blue/20 rounded-xl flex items-center justify-center mr-4 border border-neon-blue/30 group-hover:bg-neon-blue/30 transition-all duration-300">
                    <svg className="w-6 h-6 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Date</p>
                    <p className="font-medium text-white group-hover:text-neon-blue transition-colors duration-300">{formatDate(event.date)}</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-neon-purple/20 rounded-xl flex items-center justify-center mr-4 border border-neon-purple/30 group-hover:bg-neon-purple/30 transition-all duration-300">
                    <svg className="w-6 h-6 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Time</p>
                    <p className="font-medium text-white group-hover:text-neon-purple transition-colors duration-300">{event.time}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-neon-green/20 rounded-xl flex items-center justify-center mr-4 border border-neon-green/30 group-hover:bg-neon-green/30 transition-all duration-300">
                    <svg className="w-6 h-6 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-medium text-white group-hover:text-neon-green transition-colors duration-300">{event.location}</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-neon-pink/20 rounded-xl flex items-center justify-center mr-4 border border-neon-pink/30 group-hover:bg-neon-pink/30 transition-all duration-300">
                    <svg className="w-6 h-6 text-neon-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Category</p>
                    <p className="font-medium text-white group-hover:text-neon-pink transition-colors duration-300">{event.category}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <button className="btn-cosmic flex-1 py-4 text-lg group">
                <span className="group-hover:scale-110 transition-transform duration-300">Register Now</span>
              </button>
              <button className="btn-neon flex-1 py-4 text-lg group">
                <span className="group-hover:scale-110 transition-transform duration-300">Add to Calendar</span>
              </button>
            </div>

            {/* Additional Info */}
            <div className="p-6 bg-space-200/30 rounded-2xl border border-cosmic-500/20 backdrop-blur-sm">
              <h4 className="font-semibold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-neon-yellow rounded-full mr-3 animate-pulse"></span>
                What to Expect
              </h4>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-blue rounded-full mr-3"></span>
                  Networking opportunities with industry professionals
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-purple rounded-full mr-3"></span>
                  Hands-on workshops and interactive sessions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-green rounded-full mr-3"></span>
                  Latest technology demonstrations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-pink rounded-full mr-3"></span>
                  Certificate of participation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventModal
