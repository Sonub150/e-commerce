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
  PhoneIcon
} from '@heroicons/react/24/outline'

export default function Sidebar({ isOpen, onClose }) {
  return (
    <div className={`fixed inset-y-0 left-0 w-72 bg-white shadow-xl z-30 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto`}>
      <div className="flex items-center justify-between p-6 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-indigo-600 flex items-center">
          <span className="bg-indigo-100 text-indigo-600 p-1.5 rounded-lg mr-3">
            <XMarkIcon className="h-5 w-5" onClick={onClose} />
          </span>
          Menu
        </h2>
      </div>
      
      <nav className="p-4 overflow-y-auto h-[calc(100vh-120px)]">
        <div className="space-y-1">
          <SidebarLink to="/" icon={<HomeIcon className="h-5 w-5" />} text="Home" onClick={onClose} />
          <SidebarLink to="/account" icon={<UserIcon className="h-5 w-5" />} text="My Account" onClick={onClose} />
          <SidebarLink to="/orders" icon={<ShoppingBagIcon className="h-5 w-5" />} text="My Orders" onClick={onClose} />
          <SidebarLink to="/wishlist" icon={<HeartIcon className="h-5 w-5" />} text="Wishlist" onClick={onClose} />
          
          <div className="border-t border-gray-100 my-3"></div>
          
          <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Shop</h3>
          <SidebarLink to="/products" icon={<Squares2X2Icon className="h-5 w-5" />} text="All Products" onClick={onClose} />
          <SidebarLink to="/new-arrivals" icon={<TrophyIcon className="h-5 w-5" />} text="New Arrivals" onClick={onClose} />
          <SidebarLink to="/deals" icon={<GiftIcon className="h-5 w-5" />} text="Special Deals" onClick={onClose} />
          
          <div className="border-t border-gray-100 my-3"></div>
          
          <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Support</h3>
          <SidebarLink to="/faq" icon={<QuestionMarkCircleIcon className="h-5 w-5" />} text="FAQs" onClick={onClose} />
          <SidebarLink to="/contact" icon={<PhoneIcon className="h-5 w-5" />} text="Contact Us" onClick={onClose} />
          <SidebarLink to="/settings" icon={<Cog6ToothIcon className="h-5 w-5" />} text="Settings" onClick={onClose} />
        </div>
      </nav>
    </div>
  )
}

function SidebarLink({ to, icon, text, onClick }) {
  return (
    <Link 
      to={to} 
      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors group"
      onClick={() => window.innerWidth < 1024 && onClick()}
    >
      <span className="text-gray-500 group-hover:text-indigo-600">{icon}</span>
      <span className="font-medium">{text}</span>
    </Link>
  )
}