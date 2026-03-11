'use client'

export default function ServiceCard({ icon, title, description, delay }) {
  const handleScroll = (e) => {
    e.preventDefault()
    const element = document.querySelector('#booking')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      className={`service-card bg-white rounded-2xl p-6 shadow-lg opacity-0 animate-fade-in-up ${
        delay ? `delay-${delay}` : ''
      }`}
      style={{ animationDelay: delay ? `${delay}ms` : '0ms' }}
    >
      {/* Icon */}
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <span className="text-3xl">{icon}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      {/* Buttons - Side by side on desktop, stacked on mobile */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Call Now Button */}
        <a
          href="tel:+918867193161"
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now
        </a>

        {/* Book Now Button */}
        <a
          href="#booking"
          onClick={handleScroll}
          className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
          </svg>
          Book Now
        </a>
      </div>
    </div>
  )
}
