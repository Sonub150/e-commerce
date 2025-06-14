import { Link } from 'react-router-dom'
import { 
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  SparklesIcon,
  BellIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="sticky top-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Menu and Logo */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              aria-label="Toggle menu"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
            
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
                <SparklesIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ShopEase</span>
            </Link>
          </div>
          
          {/* Center - Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
          
          {/* Right side - Icons and Auth Buttons */}
          <div className="flex items-center space-x-1">
            {/* Search button for mobile */}
            <button className="md:hidden p-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
            
            {/* Wishlist */}
            <button className="p-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
              <HeartIcon className="h-5 w-5" />
            </button>
            
            {/* Notifications */}
            <button className="p-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
              <BellIcon className="h-5 w-5" />
            </button>
            
            {/* Cart */}
            <button className="p-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
              <ShoppingCartIcon className="h-5 w-5" />
            </button>
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-2 ml-2">
              <Link 
                to="/login" 
                className="flex items-center space-x-1 bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-sm"
              >
                <UserIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Login</span>
              </Link>
              <Link 
                to="/signup" 
                className="flex items-center space-x-1 border border-indigo-600 text-indigo-600 px-3 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-medium text-sm"
              >
                <span className="hidden sm:inline">Sign Up</span>
                <span className="sm:hidden">Join</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}