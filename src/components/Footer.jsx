import { Link } from 'react-router-dom'
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
  SparklesIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  TruckIcon,
  CreditCardIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative z-10">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
                <SparklesIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">ShopEase</h3>
                <p className="text-sm text-gray-400">Premium Shopping</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your premium shopping destination for quality products and exceptional service. 
              Discover amazing deals and enjoy a seamless shopping experience.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-indigo-500 text-white placeholder-gray-400"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-r-lg transition-all duration-300">
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { name: 'Facebook', icon: '📘', color: 'hover:bg-blue-600' },
                { name: 'Twitter', icon: '🐦', color: 'hover:bg-sky-500' },
                { name: 'Instagram', icon: '📷', color: 'hover:bg-pink-600' },
                { name: 'LinkedIn', icon: '💼', color: 'hover:bg-blue-700' }
              ].map((social) => (
                <a 
                  key={social.name}
                  href="#" 
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'All Products', path: '/products' },
                { name: 'New Arrivals', path: '/new-arrivals' },
                { name: 'Special Deals', path: '/deals' },
                { name: 'Flash Sale', path: '/flash-sale' },
                { name: 'Clearance', path: '/clearance' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRightIcon className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Customer Service</h4>
            <ul className="space-y-3">
              {[
                { name: 'Help Center', path: '/help' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Shipping Info', path: '/shipping' },
                { name: 'Returns & Exchanges', path: '/returns' },
                { name: 'Size Guide', path: '/size-guide' },
                { name: 'Track Order', path: '/track-order' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRightIcon className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-indigo-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">123 Shopping Street</p>
                  <p className="text-gray-300 text-sm">Retail City, RC 10001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">support@shopease.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <GlobeAltIcon className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">www.shopease.com</span>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-gray-300 mb-2">Business Hours</h5>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <ClockIcon className="h-4 w-4 text-indigo-400" />
                <span>Mon-Fri: 9AM-8PM | Sat-Sun: 10AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <TruckIcon className="h-8 w-8" />, title: 'Free Shipping', desc: 'On orders over $50' },
              { icon: <ShieldCheckIcon className="h-8 w-8" />, title: 'Secure Payment', desc: '100% secure checkout' },
              { icon: <CreditCardIcon className="h-8 w-8" />, title: 'Easy Returns', desc: '30-day return policy' },
              { icon: <ClockIcon className="h-8 w-8" />, title: '24/7 Support', desc: 'Always here to help' }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h5 className="text-white font-semibold mb-2">{feature.title}</h5>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}