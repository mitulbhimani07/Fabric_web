import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  MapPin,
  User,
  ShoppingCart,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

// Dropdown menu structure
const menuItems = [
  {
    label: "FABRICS",
    submenu: [
      { label: "Cotton", items: ["Premium Cotton", "Printed Cotton", "Organic Cotton"] },
      { label: "Silk & Satin", items: ["Raw Silk", "Satin Shine", "Printed Satin"] },
      { label: "Linen", items: ["Natural Linen", "Printed Linen", "Wrinkle-Free Linen"] },
      { label: "Natural Fibers", items: ["Hemp", "Bamboo", "Jute"] }
    ]
  },
  {
    label: "PRINTS & PATTERNS",
    submenu: [
      { label: "Designer Prints", items: ["Floral Prints", "Geometric", "Digital Prints"] },
      { label: "Embroidered", items: ["Zari Work", "Thread Work", "Mirror Work"] }
    ]
  },
  {
    label: "HOME & DECOR",
    submenu: [
      { label: "Upholstery", items: ["Velvet", "Jacquard", "Textured"] },
      { label: "Curtains", items: ["Sheer", "Blackout", "Printed"] },
      { label: "Bedding", items: ["Quilts", "Duvet Covers", "Sheets"] }
    ]
  }
];

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const dropdownRef = useRef(null);

  // No need for click outside handler with hover dropdowns

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close any active dropdown when toggling mobile menu
    setActiveMenu(null);
  };

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  // Menu hover handlers
  const handleMenuEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top banner */}
      <div className="w-full bg-green-800 text-white p-2 text-center">
        <span className="text-sm md:text-base">New Arrivals: Premium Cotton Collection</span>
        <button
          className="text-pink-300 font-bold ml-2 hover:underline cursor-pointer"
          onClick={() => console.log('Shop now clicked')}
        >
          SHOP NOW
        </button>
      </div>

      {/* Main header */}
      <div className="container mx-auto py-3 px-4 flex items-center justify-between">
        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-green-800 hover:text-green-600">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <button
            className="h-10 md:h-12 w-24 md:w-32 bg-white border border-gray-200 flex items-center justify-center hover:border-green-600 transition duration-200"
            onClick={() => console.log('Logo clicked')}
          >
            <div className="font-bold text-yellow-500 text-sm md:text-base">FABRIC HUB</div>
          </button>
        </div>

        {/* Search bar */}
        <div className="hidden md:flex flex-1 mx-6">
          <div className="relative flex w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search fabrics..."
              className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-green-600"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="bg-green-800 text-white px-4 py-2 hover:bg-green-700 transition duration-200"
            >
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center">
          <button
            className="hidden md:flex items-center mr-4 lg:mr-6 hover:text-green-600"
            onClick={() => console.log('Store locator clicked')}
          >
            <MapPin size={20} className="text-green-800 mr-1" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-green-800">STORE LOCATION</span>
              <span className="text-xs">Find Nearby</span>
            </div>
          </button>

          <button
            className="hidden sm:flex items-center mr-4 lg:mr-6 hover:text-green-600"
            onClick={() => console.log('Account clicked')}
          >
            <User size={20} className="text-green-800 mr-1" />
            <div className="flex flex-col">
              <div className="text-xs">Login / Signup</div>
              <div className="text-xs font-medium">My account</div>
            </div>
          </button>

          <button
            className="sm:hidden mr-3 hover:text-green-600"
            onClick={() => console.log('Mobile account clicked')}
          >
            <User size={20} className="text-green-800" />
          </button>

          <button
            className="flex items-center hover:text-green-600"
            onClick={() => console.log('Cart clicked')}
          >
            <div className="relative">
              <ShoppingCart size={22} className="text-green-800" />
              <span className="absolute -top-2 -right-2 bg-green-800 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            </div>
            <span className="ml-1 text-sm font-medium">Cart</span>
          </button>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="md:hidden px-4 py-2 border-t border-gray-200">
        <div className="relative flex w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search fabrics..."
            className="w-full px-3 py-1 text-sm border border-gray-200 focus:outline-none focus:border-green-600"
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="bg-green-800 text-white px-2 py-1 hover:bg-green-700 transition duration-200"
          >
            <Search size={16} />
          </button>
        </div>
      </div>

      {/* Desktop navigation with hover dropdown style */}
      
      <div className="hidden lg:block border-t border-b border-gray-200" ref={dropdownRef}>
        
        <div className="container mx-auto flex justify-center">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className="relative"
              onMouseEnter={() => handleMenuEnter(index)}
              onMouseLeave={handleMenuLeave}
            >
              <div
                className={`py-3 px-6 flex items-center hover:bg-gray-100 transition cursor-pointer ${activeMenu === index ? 'bg-gray-100 text-green-800' : ''}`}
              >
                <span className="text-sm font-semibold text-gray-800">{item.label}</span>
                <ChevronDown size={14} className="ml-1 text-green-800" />
              </div>
              
              {/* Hover dropdown menu */}
              {activeMenu === index && (
                <div className="absolute left-0 bg-white shadow-lg border border-gray-200 z-20 w-64">
                  {item.submenu.map((submenu, subIndex) => (
                    <div key={subIndex} className="p-4 border-b border-gray-100 last:border-b-0">
                      <div className="font-medium text-green-800 mb-2">{submenu.label}</div>
                      <div className="grid">
                        {submenu.items.map((subItem, idx) => (
                          <button
                            key={idx}
                            className="text-sm py-1 text-left text-gray-700 hover:text-green-800 transition"
                            onClick={() => console.log(`Selected: ${submenu.label} > ${subItem}`)}
                          >
                            {subItem}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* Other menu items without dropdowns */}
          <div className="py-3 px-6 cursor-pointer hover:bg-gray-100 transition">
            <span className="text-sm font-semibold text-gray-800">NEW ARRIVAL</span>
          </div>
          <div className="py-3 px-6 cursor-pointer hover:bg-gray-100 transition">
            <span className="text-sm font-semibold text-gray-800">BLOG</span>
          </div>
          <div className="py-3 px-6 cursor-pointer hover:bg-gray-100 transition">
            <span className="text-sm font-semibold text-gray-800">BULK ORDER</span>
          </div>
          <div className="py-3 px-6 cursor-pointer hover:bg-gray-100 transition">
            <span className="text-sm font-semibold text-gray-800">ABOUT</span>
          </div>
         
        </div>
      </div>

      {/* Mobile menu accordion style */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200">
          {menuItems.map((item, index) => (
            <MobileMenuItem key={index} item={item} />
          ))}
          <div className="border-t border-gray-100 py-3 px-4 font-semibold text-sm">BLOG</div>
          <div className="border-t border-gray-100 py-3 px-4 font-semibold text-sm">CONTACT US</div>
          <div className="border-t border-gray-100 py-3 px-4 font-semibold text-sm">ABOUT</div>
        </div>
      )}
    </div>
  );
}

function MobileMenuItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (index) => {
    if (activeSubmenu === index) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(index);
    }
  };

  return (
    <div className="border-t border-gray-100">
      <div
        className="flex items-center justify-between py-3 px-4 cursor-pointer"
        onClick={toggleOpen}
      >
        <span className="text-sm font-semibold">{item.label}</span>
        <ChevronDown
          size={16}
          className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {isOpen && (
        <div className="bg-gray-50">
          {item.submenu.map((submenu, index) => (
            <div key={index} className="border-t border-gray-100">
              <div
                className="flex items-center justify-between py-2 px-6 cursor-pointer"
                onClick={() => toggleSubmenu(index)}
              >
                <span className="text-sm font-medium text-green-800">{submenu.label}</span>
                <ChevronDown
                  size={14}
                  className={`transform transition-transform ${activeSubmenu === index ? 'rotate-180' : ''}`}
                />
              </div>

              {activeSubmenu === index && (
                <div className="px-8 pb-2">
                  {submenu.items.map((subItem, idx) => (
                    <div
                      key={idx}
                      className="py-2 text-sm cursor-pointer hover:text-green-800"
                      onClick={() => console.log(`Selected: ${submenu.label} > ${subItem}`)}
                    >
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}