'use client';

const steps = [
  {
    number: '01',
    title: 'Book Your Service',
    description: 'Schedule your cleaning service in just a few clicks through our easy online booking system.',
    color: '#12a400',
    bgColor: 'rgba(18, 164, 0, 0.1)',
  },
  {
    number: '02',
    title: 'Professional Cleaning',
    description: 'Our certified cleaners arrive on time with eco-friendly products and professional equipment.',
    color: '#00c2cb',
    bgColor: 'rgba(0, 194, 203, 0.1)',
  },
  {
    number: '03',
    title: 'Satisfaction Guaranteed',
    description: 'Enjoy your spotless space with our 100% satisfaction guarantee on every clean.',
    color: '#108602',
    bgColor: 'rgba(16, 134, 2, 0.1)',
  },
];

export default function WorkProcess() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: 'rgba(18, 164, 0, 0.1)', color: '#12a400' }}
          >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#12a400' }} />
            How It Works
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="block mb-2">Your Path to a</span>
            <span style={{ color: '#12a400' }}>Spotless Space</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We make the cleaning process simple and efficient, so you can enjoy a pristine space without any hassle. Our
            streamlined approach ensures quality results every time.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Connector Line */}
          <div className="hidden lg:block absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative h-1 bg-gray-200 rounded-full">
              <div
                className="absolute top-0 left-0 h-1 rounded-full"
                style={{
                  background: `linear-gradient(to right, #12a400 0%, #00c2cb 50%, #108602 100%)`,
                  width: '100%',
                }}
              />
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                {/* Step Card */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                  {/* Number Circle */}
                  <div className="relative mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto relative transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: step.bgColor }}
                    >
                      <span className="font-bold text-xl" style={{ color: step.color }}>
                        {step.number}
                      </span>

                      {/* Floating ring effect */}
                      <div
                        className="absolute inset-0 rounded-2xl ring-2 ring-offset-4 ring-offset-white transition-colors duration-300 group-hover:ring-4"
                        style={{ borderColor: step.color, opacity: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Step Indicator */}
                  <div className="absolute -top-2 -right-2">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ backgroundColor: step.color }}
                    >
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Mobile Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="block md:hidden flex justify-center my-8">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: step.bgColor }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke={step.color} viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience our professional cleaning process today. Book your service now and see why thousands of customers
            trust Alpha Clean Group.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="inline-flex items-center justify-center px-8 py-4 text-white rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105"
              style={{ backgroundColor: '#12a400' }}
            >
              Book Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-400 transition-all">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call: 0291 406 024
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
