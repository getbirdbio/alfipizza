import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="mb-2">123 Main Road</p>
            <p className="mb-2">Sea Point, Cape Town</p>
            <p className="mb-2">Phone: (021) 123-4567</p>
            <p>Email: hello@alfipizza.co.za</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/menu" className="hover:text-gray-300">Menu</Link></li>
              <li><Link href="/location" className="hover:text-gray-300">Location</Link></li>
              <li><Link href="/order" className="hover:text-gray-300">Order Now</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://facebook.com" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} ALFI PIZZA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 