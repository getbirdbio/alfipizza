import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="mb-4">
              <p className="font-semibold">Cape Town</p>
              <p className="mb-1">158 Main Road, Sea Point</p>
              <p className="mb-1">
                <a href="tel:+27608278803" className="hover:text-gray-300">+27 60 827 8803</a>
              </p>
              <p><a href="mailto:hellocpt@alfipizza.co.za" className="hover:text-gray-300">hellocpt@alfipizza.co.za</a></p>
            </div>
            <div>
              <p className="font-semibold">Johannesburg</p>
              <p className="mb-1">74 St Andrew Street, Birdhaven</p>
              <p className="mb-1">
                <a href="tel:+27605083865" className="hover:text-gray-300">+27 60 508 3865</a>
              </p>
              <p><a href="mailto:hellojhb@alfipizza.co.za" className="hover:text-gray-300">hellojhb@alfipizza.co.za</a></p>
            </div>
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