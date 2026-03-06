'use client'

export default function TestimonialCard({ name, review, rating, delay }) {
  return (
    <div
      className={`testimonial-card bg-white rounded-2xl p-8 shadow-lg opacity-0 animate-fade-in-up ${
        delay ? `delay-${delay}` : ''
      }`}
      style={{ animationDelay: delay ? `${delay}ms` : '0ms' }}
    >
      {/* 5-Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-primary"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-600 mb-6 leading-relaxed italic">
        "{review}"
      </p>

      {/* Customer Info */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
          <span className="text-primary font-bold text-lg">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-secondary">{name}</h4>
          <p className="text-sm text-gray-500">Happy Customer</p>
        </div>
      </div>
    </div>
  )
}

