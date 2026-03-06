'use client'

import TestimonialCard from './TestimonialCard'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    review: 'Excellent service! The driver was punctual and the car was clean. Highly recommend for airport transfers. Will definitely use again.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    review: 'Great experience with North Goa sightseeing. The tour was well planned and our driver knew all the best spots. Value for money!',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    review: 'Professional corporate travel service. They handled our team\'s transportation perfectly. On-time pickups every day.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our valued customers have to say about their experience with Goa Taxi Services.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              review={testimonial.review}
              rating={testimonial.rating}
              delay={(index + 1) * 100}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Ready to experience our service?
          </p>
          <a
            href="#booking"
            className="inline-block bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            Book Your Ride Now
          </a>
        </div>
      </div>
    </section>
  )
}

