'use client'

export default function ServiceCard({ icon, title, description, price, delay }) {
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
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

      {/* Price */}
      <div className="mb-4">
        <span className="text-sm text-gray-500">Starting at</span>
        <span className="text-2xl font-bold text-primary ml-2">₹{price}</span>
        <span className="text-sm text-gray-500">+</span>
      </div>

      {/* Book Now Button */}
      <a
        href="#booking"
        onClick={handleScroll}
        className="inline-block w-full text-center bg-secondary text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
      >
        Book Now
      </a>
    </div>
  )
}

