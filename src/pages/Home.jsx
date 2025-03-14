import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gallery-900 bg-opacity-50">
          <div className="container-custom h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-6xl font-display mb-6">
                A Dual-Level Art Experience
              </h1>
              <p className="text-xl mb-8">
                Where retail meets gallery in the heart of Washington DC
              </p>
              <div className="space-x-4">
                <Link to="/shop" className="btn-primary">
                  Visit Store
                </Link>
                <Link to="/membership" className="btn-primary bg-transparent border-2 border-white">
                  Join Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Concept Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="section-title">Ground Floor:<br />Premium Art Supply</h2>
              <p className="text-gallery-600">
                Discover our curated selection of premium art supplies, design books, 
                and collaborative art pieces in our sophisticated retail space.
              </p>
              <Link to="/shop" className="inline-block text-accent hover:text-gallery-800 transition-colors">
                Explore Store →
              </Link>
            </div>
            <div className="space-y-6">
              <h2 className="section-title">Second Floor:<br />Members Gallery</h2>
              <p className="text-gallery-600">
                Experience exclusive access to our contemporary art gallery and 
                auction room, reserved for our distinguished members.
              </p>
              <Link to="/membership" className="inline-block text-accent hover:text-gallery-800 transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Current Exhibition */}
      <section className="py-20 bg-gallery-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Current Exhibition</h2>
          <div className="aspect-video bg-gallery-200 rounded-lg mb-8">
            {/* Exhibition Image Placeholder */}
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-2xl mb-4">Contemporary Perspectives</h3>
            <p className="text-gallery-600 mb-6">
              A curated collection showcasing emerging artists from the DC area,
              exploring themes of urban life and cultural identity.
            </p>
            <Link to="/gallery" className="btn-primary">
              View Exhibition
            </Link>
          </div>
        </div>
      </section>

      {/* Events & News */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Artist Talk',
                date: 'March 20, 2025',
                description: 'Join us for an evening with renowned artist Sarah Chen.',
              },
              {
                title: 'Spring Auction',
                date: 'April 5, 2025',
                description: 'Exclusive members-only contemporary art auction.',
              },
              {
                title: 'Workshop Series',
                date: 'April 15-20, 2025',
                description: 'Advanced techniques in mixed media art.',
              },
            ].map((event, index) => (
              <div key={index} className="bg-gallery-50 p-6 rounded-lg">
                <p className="text-accent mb-2">{event.date}</p>
                <h3 className="font-display text-xl mb-2">{event.title}</h3>
                <p className="text-gallery-600 mb-4">{event.description}</p>
                <Link to="/events" className="text-gallery-800 hover:text-accent transition-colors">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gallery-800 text-white">
        <div className="container-custom text-center">
          <h2 className="section-title text-white mb-4">Stay Connected</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive updates on new exhibitions,
            events, and special member previews.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded bg-gallery-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button type="submit" className="btn-primary bg-accent hover:bg-opacity-90">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
