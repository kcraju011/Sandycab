'use client'

import ServiceCard from './ServiceCard'

const services = [
  {
    icon: '✈️',
    title: 'Airport Transfers',
    description: 'Pickup and drop services from Dabolim & Mopa airports. Available 24/7 for all flight timings.',
  },
  {
    icon: '🏖️',
    title: 'North Goa Sightseeing',
    description: 'Explore iconic beaches like Baga, Calangute, Anjuna, and Vagator. Visit historic forts and churches.',
  },
  {
    icon: '🌴',
    title: 'South Goa Sightseeing',
    description: 'Discover pristine beaches of South Goa including Palolem, Agonda, and Colva. Visit spice plantations.',
  },
  {
    icon: '🗺️',
    title: 'Outstation Trips',
    description: 'Plan your adventure to nearby destinations like Dudhsagar Falls, Gokarna, and Mumbai.',
  },
  {
    icon: '🏢',
    title: 'Corporate Travel',
    description: 'Professional transportation for business travelers. On-time pickups, reliable service.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Goa Taxi Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of taxi services tailored to meet your travel needs across Goa and beyond.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={(index + 1) * 100}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Fleet Vehicles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
