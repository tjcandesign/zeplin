export default function Events() {
  const events = [
    {
      category: 'Gallery Events',
      items: [
        {
          title: 'Contemporary Perspectives Opening',
          date: 'March 20, 2025',
          time: '6:00 PM - 9:00 PM',
          type: 'Exhibition Opening',
          description: 'Join us for the opening reception of our latest exhibition featuring emerging DC artists.',
          access: 'Members Only'
        },
        {
          title: 'Artist Talk: Maya Johnson',
          date: 'March 25, 2025',
          time: '7:00 PM - 8:30 PM',
          type: 'Artist Talk',
          description: 'An evening with Maya Johnson discussing her innovative mixed media techniques.',
          access: 'Members Only'
        }
      ]
    },
    {
      category: 'Auctions',
      items: [
        {
          title: 'Spring Contemporary Art Auction',
          date: 'April 5, 2025',
          time: '2:00 PM - 6:00 PM',
          type: 'Auction',
          description: 'Our quarterly contemporary art auction featuring works from established and emerging artists.',
          access: 'Members Only'
        },
        {
          title: 'Limited Edition Prints',
          date: 'April 15, 2025',
          time: '6:00 PM - 8:00 PM',
          type: 'Special Sale',
          description: 'Exclusive sale of limited edition prints from our represented artists.',
          access: 'Members Only'
        }
      ]
    },
    {
      category: 'Workshops & Classes',
      items: [
        {
          title: 'Advanced Mixed Media Techniques',
          date: 'March 30, 2025',
          time: '1:00 PM - 4:00 PM',
          type: 'Workshop',
          description: 'A hands-on workshop exploring advanced mixed media techniques with professional artists.',
          access: 'Public Event'
        },
        {
          title: 'Color Theory Masterclass',
          date: 'April 10, 2025',
          time: '2:00 PM - 5:00 PM',
          type: 'Class',
          description: 'An in-depth exploration of color theory and its application in contemporary art.',
          access: 'Public Event'
        }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gallery-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="section-title mb-6">Upcoming Events</h1>
            <p className="text-xl text-gallery-600">
              Discover our curated program of exhibitions, auctions, and educational events
            </p>
          </div>
        </div>
      </section>

      {/* Events Calendar */}
      {events.map((category, index) => (
        <section key={index} className={`py-20 ${index % 2 === 1 ? 'bg-gallery-50' : 'bg-white'}`}>
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">{category.category}</h2>
            <div className="space-y-8">
              {category.items.map((event, eventIndex) => (
                <div key={eventIndex} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="font-display text-2xl mb-2">{event.title}</h3>
                        <p className="text-accent">{event.type}</p>
                      </div>
                      <div className="mt-4 md:mt-0 text-right">
                        <p className="font-display text-lg">{event.date}</p>
                        <p className="text-gallery-600">{event.time}</p>
                      </div>
                    </div>
                    <p className="text-gallery-600 mb-6">{event.description}</p>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        event.access === 'Members Only' 
                          ? 'bg-accent bg-opacity-10 text-accent'
                          : 'bg-gallery-200 text-gallery-800'
                      }`}>
                        {event.access}
                      </span>
                      <button className="mt-4 md:mt-0 btn-primary">
                        {event.access === 'Members Only' ? 'RSVP' : 'Register'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Calendar Download */}
      <section className="py-20 bg-gallery-800 text-white">
        <div className="container-custom text-center">
          <h2 className="section-title text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Download our events calendar or subscribe to receive regular updates
          </p>
          <div className="space-x-4">
            <button className="btn-primary bg-accent hover:bg-opacity-90">
              Download Calendar
            </button>
            <button className="btn-primary bg-transparent border-2 border-white">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>

      {/* Event Information */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-12">Event Information</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-display text-xl mb-4">Location</h3>
                <p className="text-gallery-600">
                  All events take place at Zeppelin DC<br />
                  1234 Wisconsin Ave NW<br />
                  Washington, DC 20007
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl mb-4">Registration</h3>
                <p className="text-gallery-600">
                  Members receive priority registration for all events.
                  Public events open to registration 2 weeks prior.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl mb-4">Policies</h3>
                <p className="text-gallery-600">
                  Events start promptly at listed times.
                  Cancellations must be made 24 hours in advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-20 bg-gallery-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">Private Events</h2>
            <p className="text-gallery-600 mb-8">
              Our sophisticated gallery space is available for private events and corporate functions.
              Contact us to learn more about hosting your next event at Zeppelin DC.
            </p>
            <button className="btn-primary">
              Inquire About Private Events
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
