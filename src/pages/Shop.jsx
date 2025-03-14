export default function Shop() {
  const categories = [
    {
      name: 'Premium Art Supplies',
      items: [
        {
          name: 'Artist Grade Oil Paint Set',
          brand: 'Winsor & Newton',
          price: 189.99,
          image: 'oil-paint-set.jpg'
        },
        {
          name: 'Professional Watercolor Set',
          brand: 'Daniel Smith',
          price: 245.00,
          image: 'watercolor-set.jpg'
        },
        {
          name: 'Handcrafted Brushes Collection',
          brand: 'Da Vinci',
          price: 159.99,
          image: 'brush-set.jpg'
        }
      ]
    },
    {
      name: 'Design Books',
      items: [
        {
          name: 'Contemporary Art Theory',
          author: 'Sarah Chen',
          price: 65.00,
          image: 'art-theory-book.jpg'
        },
        {
          name: 'Modern Color Theory',
          author: 'Marcus Rivera',
          price: 45.00,
          image: 'color-theory-book.jpg'
        },
        {
          name: 'Digital Art Mastery',
          author: 'Emma Thompson',
          price: 55.00,
          image: 'digital-art-book.jpg'
        }
      ]
    },
    {
      name: 'Collaborative Art Pieces',
      items: [
        {
          name: 'Urban Landscape Print',
          artist: 'David Park',
          price: 450.00,
          image: 'urban-print.jpg'
        },
        {
          name: 'Abstract Series I',
          artist: 'Elena Rodriguez',
          price: 750.00,
          image: 'abstract-series.jpg'
        },
        {
          name: 'Mixed Media Collection',
          artist: 'Maya Johnson',
          price: 895.00,
          image: 'mixed-media.jpg'
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
            <h1 className="section-title mb-6">Premium Art Supplies</h1>
            <p className="text-xl text-gallery-600">
              Discover our curated selection of premium art supplies, design books,
              and collaborative art pieces.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      {categories.map((category, index) => (
        <section key={index} className={`py-20 ${index % 2 === 1 ? 'bg-gallery-50' : 'bg-white'}`}>
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">{category.name}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="aspect-square bg-gallery-100">
                    {/* Product Image Placeholder */}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl mb-2">{item.name}</h3>
                    <p className="text-accent mb-2">
                      {item.brand || item.author || item.artist}
                    </p>
                    <p className="text-gallery-800 font-semibold mb-4">
                      ${item.price.toFixed(2)}
                    </p>
                    <button className="btn-primary w-full">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Shopping Information */}
      <section className="py-20 bg-gallery-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-12">Shopping Information</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-display text-xl mb-4">Shipping</h3>
                <p className="text-gallery-600">
                  Free shipping on orders over $100.
                  Express delivery available.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-display text-xl mb-4">Returns</h3>
                <p className="text-gallery-600">
                  30-day return policy on unused items.
                  Easy return process.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-display text-xl mb-4">Store Hours</h3>
                <p className="text-gallery-600">
                  Tuesday - Sunday: 11am - 7pm
                  Monday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gallery-800 text-white">
        <div className="container-custom text-center">
          <h2 className="section-title text-white mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for updates on new products, artist collaborations,
            and exclusive offers.
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
