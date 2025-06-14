import { Link } from 'react-router-dom'
import { 
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-lg shadow-sm z-10 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and Menu */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
              aria-label="Toggle menu"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
            
            <Link to="/" className="flex items-center space-x-2 group">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                <SparklesIcon className="h-5 w-5 text-white" />
              </span>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ShopEase
              </span>
            </Link>
          </div>
          
          {/* Right side - Icons */}
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all relative group">
              <MagnifyingGlassIcon className="h-5 w-5" />
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-indigo-600 transform -translate-x-1/2 transition-all group-hover:w-4"></span>
            </button>
            
            <button className="p-2 rounded-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all relative group">
              <ShoppingCartIcon className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
                3
              </span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-indigo-600 transform -translate-x-1/2 transition-all group-hover:w-4"></span>
            </button>
            
            <Link 
              to="/login" 
              className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
            >
              <UserIcon className="h-4 w-4" />
              <span className="font-medium">Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}