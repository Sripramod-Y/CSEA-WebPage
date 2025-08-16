import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import Footer from './components/Footer'
import EventModal from './components/EventModal'

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
    <div className="min-h-screen bg-gray-50">
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
  )
}

export default App
