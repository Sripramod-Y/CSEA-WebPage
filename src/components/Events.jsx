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
      location: "Tech Innovation Center",
      category: "Hackathon",
      image: "🚀"
    },
    {
      id: 2,
      name: "AI & Machine Learning Summit",
      description: "Explore the latest advancements in artificial intelligence and machine learning. Network with industry experts and discover cutting-edge technologies.",
      date: "2025-10-20",
      time: "10:00 AM",
      location: "Digital Conference Hall",
      category: "Conference",
      image: "🤖"
    },
    {
      id: 3,
      name: "Web Development Workshop",
      description: "Hands-on workshop covering modern web development technologies including React, Node.js, and cloud deployment strategies.",
      date: "2025-11-08",
      time: "2:00 PM",
      location: "Code Academy",
      category: "Workshop",
      image: "💻"
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

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us for exciting tech events that will expand your knowledge and network
          </p>
        </div>

        {/* Events Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevEvent}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextEvent}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="card min-w-[350px] max-w-[400px] p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ scrollSnapAlign: 'center' }}
                onClick={() => onEventClick(event)}
              >
                <div className="text-center mb-4">
                  <div className="text-6xl mb-4">{event.image}</div>
                  <span className="inline-block bg-tech-100 text-tech-800 text-sm font-medium px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {event.name}
                </h3>

                <p className="text-gray-600 mb-4 text-center line-clamp-3">
                  {event.description}
                </p>

                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </div>
                  <div className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                </div>

                <button className="w-full mt-6 btn-primary">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Event Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToEvent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-tech-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
