import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false) // Default closed

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-indigo-50">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Overlay - only on mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="flex-grow container mx-auto px-4 py-8 mt-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Welcome to ShopEase
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover amazing products with premium quality and unbeatable prices. 
            Your one-stop destination for all your shopping needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/products" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Shop Now
            </Link>
            <Link 
              to="/deals" 
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              View Deals
            </Link>
          </div>
        </div>

        {/* Featured Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Electronics', icon: '📱', color: 'from-blue-500 to-cyan-500' },
              { name: 'Fashion', icon: '👗', color: 'from-pink-500 to-rose-500' },
              { name: 'Home & Garden', icon: '🏠', color: 'from-green-500 to-emerald-500' },
              { name: 'Sports', icon: '⚽', color: 'from-orange-500 to-red-500' }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 text-center">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Special Offers</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">New Customer Discount</h3>
              <p className="text-lg mb-4">Get 20% off your first purchase when you sign up!</p>
              <Link 
                to="/signup" 
                className="inline-block bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Sign Up Now
              </Link>
            </div>
            <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Free Shipping</h3>
              <p className="text-lg mb-4">Free shipping on all orders over $50. Limited time offer!</p>
              <Link 
                to="/products" 
                className="inline-block bg-white text-pink-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah Johnson', text: 'Amazing products and fast delivery! Highly recommended.', rating: '⭐⭐⭐⭐⭐' },
              { name: 'Mike Chen', text: 'Great customer service and quality products. Will shop again!', rating: '⭐⭐⭐⭐⭐' },
              { name: 'Emily Davis', text: 'Best online shopping experience I\'ve ever had.', rating: '⭐⭐⭐⭐⭐' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-yellow-400 text-lg mb-2">{testimonial.rating}</div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <p className="font-semibold text-gray-800">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}