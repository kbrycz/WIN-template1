import { useState, useEffect } from 'react'
import ContactForm from './ContactForm'

/**
 * Popup Modal Component
 * Shows on first visit to encourage signups
 * Uses localStorage to track if user has seen/dismissed it
 */
function PopupModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('hasSeenSignupPopup')
    
    if (!hasSeenPopup) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true)
        // Trigger animation after mount
        requestAnimationFrame(() => {
          setIsAnimating(true)
        })
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsAnimating(false)
    // Wait for animation to complete before unmounting
    setTimeout(() => {
      setIsOpen(false)
      localStorage.setItem('hasSeenSignupPopup', 'true')
    }, 300)
  }

  const handleSubmit = (formData) => {
    console.log('Popup form submitted:', formData)
    // Handle form submission here (API call, etc.)
    handleClose()
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isAnimating ? 'bg-black/50 backdrop-blur-sm' : 'bg-transparent'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`relative w-full max-w-2xl rounded-2xl shadow-2xl p-8 md:p-12 transition-all duration-300 ${
          isAnimating 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-4'
        }`}
        style={{ backgroundColor: '#8e44ad' }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors duration-200"
          aria-label="Close popup"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-6 leading-tight pr-8">
          Join our movement and help build a stronger community together.
        </h2>

        {/* Form */}
        <ContactForm 
          compact={true} 
          buttonText="JOIN NOW"
          onSubmit={handleSubmit}
        />

        {/* Disclaimer */}
        <p className="text-white/80 text-xs mt-6 text-center leading-relaxed">
          By providing your contact information, you agree to receive updates and messages from us. 
          Message and data rates may apply. Reply STOP to opt out. For questions, reach out to{' '}
          <a href="mailto:support@winadvocacy.com" className="underline hover:no-underline transition-all">
            support@winadvocacy.com
          </a>
          . Your information will not be shared with third parties. View our{' '}
          <a href="#" className="underline hover:no-underline transition-all">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default PopupModal
