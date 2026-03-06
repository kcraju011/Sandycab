'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? Need a quote? Contact us anytime. We&apos;re here to help you with all your travel needs in Goa.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-secondary mb-1">Phone</h3>
                <a href="tel:+91914868051" className="text-gray-600 hover:text-primary transition-colors">
                  +91 914 868 051
                </a>
                <p className="text-sm text-gray-500 mt-1">Available 24/7</p>
                <a
                  href="tel:+91914868051"
                  className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg shadow mt-3 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  📞 Call Now
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-1">Email</h3>
                <a href="mailto:info@goataxi.com" className="text-gray-600 hover:text-primary transition-colors">
                  info@goataxi.com
                </a>
                <p className="text-sm text-gray-500 mt-1">We&apos;ll reply within 24 hours</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-1">Address</h3>
                <p className="text-gray-600">
                  Goa Taxi Services<br />
                  Panjim, Goa 403001<br />
                  India
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-1">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Sunday: 24/7<br />
                  Airport Pickups: Always Available
                </p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="h-full min-h-[400px] lg:min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30744.49647933243!2d73.8264559338047!3d15.498167889833798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1cb3fffffff%3A0x5a5019e4a4a4a4a4!2sGoa%2C%20India!5e0!3m2!1sen!2sus!4v1635789012345!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Goa Taxi Services Location"
              className="shadow-lg rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

