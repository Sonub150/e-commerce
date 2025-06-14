import { Link } from 'react-router-dom'
import { 
  XMarkIcon,
  UserIcon,
  Cog6ToothIcon,
  ShoppingBagIcon,
  HeartIcon,
  HomeIcon,
  Squares2X2Icon,
  TrophyIcon,
  GiftIcon,
  QuestionMarkCircleIcon,
  PhoneIcon,
  SparklesIcon,
  CreditCardIcon,
  TruckIcon,
  ShieldCheckIcon,
  StarIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  BellIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  TagIcon,
  FireIcon,
  ClockIcon,
  BookmarkIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export default function Sidebar({ isOpen, onClose }) {
  return (
    <div className={`fixed top-16 bottom-0 left-0 w-80 bg-white shadow-xl z-30 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
            <SparklesIcon className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">ShopEase</h2>
            <p className="text-xs text-gray-600">Premium Shopping</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-2 rounded-lg text-gray-500 hover:text-indigo-600 hover:bg-white transition-all"
          aria-label="Close menu"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
      
      {/* Content */}
      <div className="overflow-y-auto h-[calc(100vh-80px-64px)]">
        {/* User Account Section */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
              <UserIcon className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Welcome Guest</p>
              <p className="text-sm text-gray-600">Sign in for personalized experience</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Link 
              to="/login" 
              className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-indigo-700 transition-colors"
              onClick={onClose}
            >
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className="flex-1 border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-indigo-50 transition-colors"
              onClick={onClose}
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-2">
            <SidebarLink to="/orders" icon={<ShoppingBagIcon className="h-4 w-4" />} text="My Orders" onClick={onClose} />
            <SidebarLink to="/wishlist" icon={<HeartIcon className="h-4 w-4" />} text="Wishlist" onClick={onClose} />
            <SidebarLink to="/cart" icon={<ShoppingCartIcon className="h-4 w-4" />} text="Cart" onClick={onClose} />
            <SidebarLink to="/notifications" icon={<BellIcon className="h-4 w-4" />} text="Notifications" onClick={onClose} />
          </div>
        </div>

        {/* Main Navigation */}
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Navigation</h3>
          <div className="space-y-1">
            <SidebarLink to="/" icon={<HomeIcon className="h-4 w-4" />} text="Home" onClick={onClose} />
            <SidebarLink to="/products" icon={<Squares2X2Icon className="h-4 w-4" />} text="All Products" onClick={onClose} />
            <SidebarLink to="/new-arrivals" icon={<TrophyIcon className="h-4 w-4" />} text="New Arrivals" onClick={onClose} />
            <SidebarLink to="/deals" icon={<GiftIcon className="h-4 w-4" />} text="Special Deals" onClick={onClose} />
          </div>
        </div>

        {/* Categories */}
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Categories</h3>
          <div className="space-y-1">
            <CategoryLink to="/category/electronics" icon="📱" text="Electronics" color="from-blue-500 to-cyan-500" onClick={onClose} />
            <CategoryLink to="/category/fashion" icon="👗" text="Fashion & Clothing" color="from-pink-500 to-rose-500" onClick={onClose} />
            <CategoryLink to="/category/home" icon="🏠" text="Home & Garden" color="from-green-500 to-emerald-500" onClick={onClose} />
            <CategoryLink to="/category/sports" icon="⚽" text="Sports & Outdoors" color="from-orange-500 to-red-500" onClick={onClose} />
            <CategoryLink to="/category/books" icon="📚" text="Books & Media" color="from-purple-500 to-indigo-500" onClick={onClose} />
            <CategoryLink to="/category/beauty" icon="💄" text="Beauty & Health" color="from-rose-500 to-pink-500" onClick={onClose} />
            <CategoryLink to="/category/toys" icon="🎮" text="Toys & Games" color="from-yellow-500 to-orange-500" onClick={onClose} />
            <CategoryLink to="/category/automotive" icon="🚗" text="Automotive" color="from-gray-500 to-gray-700" onClick={onClose} />
          </div>
        </div>

        {/* Special Offers */}
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Special Offers</h3>
          <div className="space-y-2">
            <OfferLink to="/flash-sale" icon={<FireIcon className="h-4 w-4" />} text="Flash Sale" badge="50% OFF" onClick={onClose} />
            <OfferLink to="/clearance" icon={<TagIcon className="h-4 w-4" />} text="Clearance Sale" badge="Up to 70%" onClick={onClose} />
            <OfferLink to="/new-customer" icon={<StarIcon className="h-4 w-4" />} text="New Customer Deal" badge="20% OFF" onClick={onClose} />
            <OfferLink to="/free-shipping" icon={<TruckIcon className="h-4 w-4" />} text="Free Shipping" badge="Over $50" onClick={onClose} />
          </div>
        </div>

        {/* Account & Settings */}
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Account & Settings</h3>
          <div className="space-y-1">
            <SidebarLink to="/profile" icon={<UserIcon className="h-4 w-4" />} text="My Profile" onClick={onClose} />
            <SidebarLink to="/addresses" icon={<MapPinIcon className="h-4 w-4" />} text="My Addresses" onClick={onClose} />
            <SidebarLink to="/payments" icon={<CreditCardIcon className="h-4 w-4" />} text="Payment Methods" onClick={onClose} />
            <SidebarLink to="/settings" icon={<Cog6ToothIcon className="h-4 w-4" />} text="Settings" onClick={onClose} />
          </div>
        </div>

        {/* Support */}
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Support</h3>
          <div className="space-y-1">
            <SidebarLink to="/help" icon={<QuestionMarkCircleIcon className="h-4 w-4" />} text="Help Center" onClick={onClose} />
            <SidebarLink to="/contact" icon={<PhoneIcon className="h-4 w-4" />} text="Contact Us" onClick={onClose} />
            <SidebarLink to="/shipping" icon={<TruckIcon className="h-4 w-4" />} text="Shipping Info" onClick={onClose} />
            <SidebarLink to="/returns" icon={<ArrowRightIcon className="h-4 w-4" />} text="Returns & Exchanges" onClick={onClose} />
            <SidebarLink to="/privacy" icon={<ShieldCheckIcon className="h-4 w-4" />} text="Privacy Policy" onClick={onClose} />
            <SidebarLink to="/terms" icon={<BookmarkIcon className="h-4 w-4" />} text="Terms of Service" onClick={onClose} />
          </div>
        </div>

        {/* Footer */}
        <div className="p-6">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">© 2024 ShopEase. All rights reserved.</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <span className="sr-only">Facebook</span>
                <span className="text-sm">📘</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <span className="sr-only">Twitter</span>
                <span className="text-sm">🐦</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <span className="sr-only">Instagram</span>
                <span className="text-sm">📷</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SidebarLink({ to, icon, text, onClick }) {
  return (
    <Link 
      to={to} 
      className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 group"
      onClick={onClick}
    >
      <span className="text-gray-500 group-hover:text-indigo-600 transition-colors duration-200">{icon}</span>
      <span className="font-medium text-sm">{text}</span>
    </Link>
  )
}

function CategoryLink({ to, icon, text, color, onClick }) {
  return (
    <Link 
      to={to} 
      className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 group"
      onClick={onClick}
    >
      <div className={`w-6 h-6 bg-gradient-to-r ${color} rounded flex items-center justify-center text-xs`}>
        {icon}
      </div>
      <span className="font-medium text-sm">{text}</span>
    </Link>
  )
}

function OfferLink({ to, icon, text, badge, onClick }) {
  return (
    <Link 
      to={to} 
      className="flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 group"
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        <span className="text-gray-500 group-hover:text-indigo-600 transition-colors duration-200">{icon}</span>
        <span className="font-medium text-sm">{text}</span>
      </div>
      <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium">{badge}</span>
    </Link>
  )
}