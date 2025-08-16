import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import Footer from './components/Footer'
import EventModal from './components/EventModal'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const openEventModal = (event) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  const closeEventModal = () => {
    setIsModalOpen(false)
    setSelectedEvent(null)
  }

  return (
    <div className="min-h-screen bg-space-950 relative overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Content with higher z-index */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Events onEventClick={openEventModal} />
        <Footer />
        
        {isModalOpen && selectedEvent && (
          <EventModal 
            event={selectedEvent} 
            isOpen={isModalOpen} 
            onClose={closeEventModal} 
          />
        )}
      </div>
    </div>
  )
}

export default App
