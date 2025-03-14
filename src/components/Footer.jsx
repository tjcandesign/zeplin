import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gallery-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-display text-xl">Zeppelin DC</h3>
            <p className="text-sm text-gray-300">
              A dual-level art experience in Washington DC, featuring a premium retail store and members-only gallery.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Shop</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/membership" className="hover:text-white transition-colors">Membership</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-4">Visit Us</h4>
            <address className="text-sm text-gray-300 not-italic">
              1234 Wisconsin Ave NW<br />
              Washington, DC 20007<br />
              <a href="tel:+12025555555" className="hover:text-white transition-colors">
                (202) 555-5555
              </a>
            </address>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-4">Newsletter</h4>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gallery-700 text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-accent text-white rounded hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gallery-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Zeppelin DC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
