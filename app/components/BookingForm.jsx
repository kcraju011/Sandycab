'use client'

import { useState } from 'react'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    pickupLocation: '',
    dropLocation: '',
    date: '',
    time: '',
    carType: '',
  })

  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear message when user starts typing
    if (message.text) {
      setMessage({ type: '', text: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage({ type: '', text: '' })

    // Prepare data for API
    const bookingData = {
      full_name: formData.fullName,
      phone: formData.phoneNumber,
      pickup_location: formData.pickupLocation,
      drop_location: formData.dropLocation,
      travel_date: formData.date,
      travel_time: formData.time,
      car_type: formData.carType,
    }

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      })

      const result = await response.json()

      if (response.ok) {
        setMessage({ type: 'success', text: 'Booking request submitted successfully! We will contact you shortly.' })
        // Reset form after successful submission
        setFormData({
          fullName: '',
          phoneNumber: '',
          pickupLocation: '',
          dropLocation: '',
          date: '',
          time: '',
          carType: '',
        })
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to submit booking. Please try again.' })
      }
    } catch (error) {
      console.error('Booking submission error:', error)
      setMessage({ type: 'error', text: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const carTypes = [
    { value: '', label: 'Select Car Type' },
    { value: 'sedan', label: 'Sedan (Swift Dzire, Etios)' },
    { value: 'suv', label: 'SUV (Ertiga, Innova)' },
    { value: 'tempo', label: 'Tempo Traveller (12 Seater)' },
    { value: 'luxury', label: 'Luxury (BMW, Mercedes)' },
  ]

  const popularLocations = [
    'Dabolim Airport',
    'Mopa Airport',
    'Panjim',
    'Calangute',
    'Baga',
    'Anjuna',
    'Vagator',
    'Morjim',
    'Palolem',
    'Agonda',
    'Margao',
    'Vasco da Gama',
  ]

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Book Your Taxi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll get back to you within minutes with the best quote.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* Booking Form Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {/* Success/Error Message */}
            {message.text && (
              <div className={`mb-6 p-4 rounded-xl ${
                message.type === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              {/* Pickup & Drop Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pickup Location */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pickup Location *
                  </label>
                  <select
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white"
                  >
                    <option value="">Select Pickup Location</option>
                    {popularLocations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Drop Location */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Drop Location *
                  </label>
                  <select
                    name="dropLocation"
                    value={formData.dropLocation}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white"
                  >
                    <option value="">Select Drop Location</option>
                    {popularLocations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Time *
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              {/* Car Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Car Type *
                </label>
                <select
                  name="carType"
                  value={formData.carType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white"
                >
                  {carTypes.map((car) => (
                    <option key={car.value} value={car.value}>
                      {car.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-primary text-secondary py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-yellow-400'
                }`}
              >
                {isLoading ? 'Submitting...' : 'Submit Booking Request'}
              </button>

              {/* Note */}
              <p className="text-center text-sm text-gray-500">
                By booking, you agree to our terms and conditions. We&apos;ll contact you shortly.
              </p>
            </form>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-secondary">Instant Confirmation</h4>
              <p className="text-sm text-gray-600">Get booking confirmation within minutes</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-secondary">Secure Booking</h4>
              <p className="text-sm text-gray-600">Your data is safe with us</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-secondary">Best Prices</h4>
              <p className="text-sm text-gray-600">Competitive rates with no hidden charges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

