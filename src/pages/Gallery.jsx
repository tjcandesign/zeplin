export default function Gallery() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gallery-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="section-title mb-6">Contemporary Art Gallery</h1>
            <p className="text-xl text-gallery-600 mb-8">
              Experience curated exhibitions in our exclusive second-floor gallery space
            </p>
          </div>
        </div>
      </section>

      {/* Current Exhibition */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Current Exhibition</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-gallery-100 rounded-lg">
              {/* Exhibition Image Placeholder */}
            </div>
            <div>
              <h3 className="font-display text-3xl mb-4">Contemporary Perspectives</h3>
              <p className="text-accent mb-4">March 1 - April 30, 2025</p>
              <p className="text-gallery-600 mb-6">
                A groundbreaking exhibition featuring emerging artists from the DC area,
                exploring themes of urban life and cultural identity through various
                mediums including painting, sculpture, and digital art.
              </p>
              <button className="btn-primary">
                Request Private Viewing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-20 bg-gallery-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Featured Artists</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Maya Johnson',
                specialty: 'Mixed Media',
                description: 'Known for her innovative use of traditional and digital techniques.',
              },
              {
                name: 'David Park',
                specialty: 'Urban Photography',
                description: 'Captures the evolving landscape of modern cities.',
              },
              {
                name: 'Elena Rodriguez',
                specialty: 'Abstract Sculpture',
                description: 'Creates dynamic forms inspired by natural phenomena.',
              },
            ].map((artist, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <div className="aspect-square bg-gallery-100 rounded-lg mb-4">
                  {/* Artist Image Placeholder */}
                </div>
                <h3 className="font-display text-xl mb-2">{artist.name}</h3>
                <p className="text-accent mb-2">{artist.specialty}</p>
                <p className="text-gallery-600">{artist.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Exhibitions */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Upcoming Exhibitions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Digital Frontiers',
                date: 'May 2025',
                description: 'Exploring the intersection of technology and traditional art forms.',
              },
              {
                title: 'Nature Reimagined',
                date: 'July 2025',
                description: 'Contemporary interpretations of natural landscapes and forms.',
              },
            ].map((exhibition, index) => (
              <div key={index} className="bg-gallery-50 p-8 rounded-lg">
                <h3 className="font-display text-2xl mb-2">{exhibition.title}</h3>
                <p className="text-accent mb-4">{exhibition.date}</p>
                <p className="text-gallery-600 mb-6">{exhibition.description}</p>
                <button className="text-gallery-800 hover:text-accent transition-colors">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-20 bg-gallery-800 text-white">
        <div className="container-custom text-center">
          <h2 className="section-title text-white mb-6">Join Our Gallery Membership</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Gain exclusive access to private viewings, member events, and our sophisticated auction room.
          </p>
          <button className="btn-primary bg-accent hover:bg-opacity-90">
            Become a Member
          </button>
        </div>
      </section>

      {/* Gallery Policies */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-12">Gallery Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-xl mb-4">Hours</h3>
                <ul className="space-y-2 text-gallery-600">
                  <li>Tuesday - Friday: 11am - 7pm</li>
                  <li>Saturday: 10am - 6pm</li>
                  <li>Sunday: 12pm - 5pm</li>
                  <li>Monday: Closed</li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl mb-4">Policies</h3>
                <ul className="space-y-2 text-gallery-600">
                  <li>Members-only access to gallery</li>
                  <li>Private viewings by appointment</li>
                  <li>Photography permitted without flash</li>
                  <li>White glove handling required</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
