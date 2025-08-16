import React, { useState, useRef } from 'react'

const Events = ({ onEventClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  // Hardcoded events data as specified in requirements
  const events = [
    {
      id: 1,
      name: "TechSprint 2025",
      description: "A 24-hour hackathon focusing on AI and web development. Join developers, designers, and innovators for an intensive coding experience.",
      date: "2025-09-15",
      time: "9:00 AM",
      location: "Ground Floor Lab",
      category: "Hackathon",
      image: "🚀",
      color: "neon-blue"
    },
    {
      id: 2,
      name: "AI & Machine Learning Summit",
      description: "Explore the latest advancements in artificial intelligence and machine learning. Network with industry experts and discover cutting-edge technologies.",
      date: "2025-10-20",
      time: "10:00 AM",
      location: "Turing Hall",
      category: "Conference",
      image: "🤖",
      color: "neon-purple"
    },
    {
      id: 3,
      name: "Web Development Workshop",
      description: "Hands-on workshop covering modern web development technologies including React, Node.js, and cloud deployment strategies.",
      date: "2025-11-08",
      time: "2:00 PM",
      location: "Turing Hall",
      category: "Workshop",
      image: "💻",
      color: "neon-green"
    }
  ]

  const scrollToEvent = (index) => {
    setCurrentIndex(index)
    if (scrollContainerRef.current) {
      const eventCard = scrollContainerRef.current.children[index]
      eventCard.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      })
    }
  }

  const nextEvent = () => {
    const nextIndex = (currentIndex + 1) % events.length
    scrollToEvent(nextIndex)
  }

  const prevEvent = () => {
    const prevIndex = currentIndex === 0 ? events.length - 1 : currentIndex - 1
    scrollToEvent(prevIndex)
  }

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

  const getBorderColor = (colorName) => {
    const colors = {
      'neon-blue': 'border-neon-blue/30',
      'neon-purple': 'border-neon-purple/30',
      'neon-green': 'border-neon-green/30',
      'neon-pink': 'border-neon-pink/30',
      'neon-yellow': 'border-neon-yellow/30',
      'neon-orange': 'border-neon-orange/30'
    }
    return colors[colorName] || 'border-neon-blue/30'
  }

  return (
    <section id="events" className="py-24 px-4 sm:px-6 lg:px-8 bg-space-950 relative overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-950 via-space-900/50 to-space-950"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-nebula-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="cosmic-text">Upcoming Events</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Join us for exciting tech events that will expand your knowledge and network in our cosmic tech universe
          </p>
        </div>

        {/* Events Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevEvent}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 bg-space-200/20 backdrop-blur-cosmic rounded-full shadow-cosmic flex items-center justify-center hover:bg-space-300/30 transition-all duration-500 hover:scale-110 border border-cosmic-500/30 group"
          >
            <svg className="w-7 h-7 text-neon-blue group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextEvent}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 bg-space-200/20 backdrop-blur-cosmic rounded-full shadow-cosmic flex items-center justify-center hover:bg-space-300/30 transition-all duration-500 hover:scale-110 border border-cosmic-500/30 group"
          >
            <svg className="w-7 h-7 text-neon-blue group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Events Cards */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide px-4 py-8"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`card-cosmic min-w-[380px] max-w-[420px] p-8 cursor-pointer group hover-lift border-2 ${getBorderColor(event.color)}`}
                style={{ scrollSnapAlign: 'center' }}
                onClick={() => onEventClick(event)}
              >
                <div className="text-center mb-6">
                  <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-500">{event.image}</div>
                  <span className={`inline-block bg-${event.color.replace('neon-', '')}/20 text-${event.color} text-sm font-medium px-4 py-2 rounded-full border border-${event.color}/30 backdrop-blur-sm`}>
                    {event.category}
                  </span>
                </div>

                <h3 className={`text-2xl font-bold text-white mb-4 text-center group-hover:${getNeonColor(event.color)} transition-all duration-500`}>
                  {event.name}
                </h3>

                <p className="text-gray-300 mb-6 text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                  {event.description}
                </p>

                <div className="space-y-3 text-sm text-gray-400 mb-8">
                  <div className="flex items-center justify-center group/item">
                    <svg className="w-5 h-5 mr-3 text-neon-blue group-hover/item:text-neon-blue transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="group-hover/item:text-white transition-colors duration-300">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center justify-center group/item">
                    <svg className="w-5 h-5 mr-3 text-neon-purple group-hover/item:text-neon-purple transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="group-hover/item:text-white transition-colors duration-300">{event.time}</span>
                  </div>
                  <div className="flex items-center justify-center group/item">
                    <svg className="w-5 h-5 mr-3 text-neon-green group-hover/item:text-neon-green transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="group-hover/item:text-white transition-colors duration-300">{event.location}</span>
                  </div>
                </div>

                <button className={`w-full py-4 px-6 bg-gradient-to-r from-${event.color.replace('neon-', '')}-600 to-${event.color.replace('neon-', '')}-700 hover:from-${event.color.replace('neon-', '')}-500 hover:to-${event.color.replace('neon-', '')}-600 text-white font-semibold rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-cosmic active:scale-95 border border-${event.color.replace('neon-', '')}-400/30 group-hover:shadow-cosmic-lg`}>
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Event Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToEvent(index)}
              className={`w-4 h-4 rounded-full transition-all duration-500 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple w-12 shadow-cosmic' 
                  : 'bg-space-400/50 hover:bg-space-300/70 hover:scale-110'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
