export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gallery-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="section-title mb-6">Contact Us</h1>
            <p className="text-xl text-gallery-600">
              Connect with our team to learn more about our gallery, retail store, or membership opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="section-title mb-8">Visit Us</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-xl mb-4">Location</h3>
                  <address className="text-gallery-600 not-italic">
                    1234 Wisconsin Ave NW<br />
                    Washington, DC 20007
                  </address>
                </div>

                <div>
                  <h3 className="font-display text-xl mb-4">Hours</h3>
                  <div className="space-y-2 text-gallery-600">
                    <p>
                      <span className="font-medium">Retail Store:</span><br />
                      Tuesday - Sunday: 11am - 7pm<br />
                      Monday: Closed
                    </p>
                    <p>
                      <span className="font-medium">Members Gallery:</span><br />
                      Tuesday - Sunday: 11am - 7pm<br />
                      Private viewings by appointment
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl mb-4">Contact</h3>
                  <div className="space-y-2 text-gallery-600">
                    <p>
                      <span className="font-medium">General Inquiries:</span><br />
                      <a href="tel:+12025555555" className="hover:text-accent transition-colors">
                        (202) 555-5555
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">Email:</span><br />
                      <a href="mailto:info@zeppelindc.com" className="hover:text-accent transition-colors">
                        info@zeppelindc.com
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gallery-600 hover:text-accent transition-colors">
                      Instagram
                    </a>
                    <a href="#" className="text-gallery-600 hover:text-accent transition-colors">
                      Facebook
                    </a>
                    <a href="#" className="text-gallery-600 hover:text-accent transition-colors">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="section-title mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gallery-800 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gallery-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gallery-800 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gallery-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gallery-800 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gallery-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gallery-800 mb-2">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-2 border border-gallery-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option>Gallery Membership</option>
                    <option>Art Supplies</option>
                    <option>Current Exhibition</option>
                    <option>Private Events</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gallery-800 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gallery-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gallery-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Location</h2>
          <div className="aspect-[16/9] bg-gallery-200 rounded-lg">
            {/* Map will be integrated here */}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-12">Common Questions</h2>
            <div className="space-y-8">
              {[
                {
                  question: 'Is parking available?',
                  answer: 'Yes, we offer validated parking for gallery members and retail customers.'
                },
                {
                  question: 'Do you offer private viewings?',
                  answer: 'Yes, gallery members can schedule private viewings of our exhibitions.'
                },
                {
                  question: 'Can I purchase art supplies online?',
                  answer: 'Our online store is coming soon. Currently, all purchases must be made in-store.'
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gallery-200 pb-8">
                  <h3 className="font-display text-xl mb-2">{faq.question}</h3>
                  <p className="text-gallery-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
