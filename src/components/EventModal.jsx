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

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 animate-scale-in">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Content */}
          <div className="p-8">
            {/* Event Header */}
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{event.image}</div>
              <span className="inline-block bg-tech-100 text-tech-800 text-sm font-medium px-4 py-2 rounded-full mb-4">
                {event.category}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {event.name}
              </h2>
            </div>

            {/* Event Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">About This Event</h3>
              <p className="text-gray-600 leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-tech-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-tech-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium text-gray-900">{formatDate(event.date)}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-medium text-gray-900">{event.time}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-900">{event.location}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-medium text-gray-900">{event.category}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex-1 py-3">
                Register Now
              </button>
              <button className="btn-secondary flex-1 py-3">
                Add to Calendar
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">What to Expect</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Networking opportunities with industry professionals</li>
                <li>• Hands-on workshops and interactive sessions</li>
                <li>• Latest technology demonstrations</li>
                <li>• Certificate of participation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventModal
