import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  MapPin,
  User,
  ShoppingCart,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import logo from '../assets/images/logo.png';

const menuItems = [
  {
    label: "HOME",
    link: "/",
    submenu: []
  },
  {
    label: "ABOUT",
    link: "/about",
    submenu: []
  },
  {
    label: "FABRICS",
    link: "/fabrics",
    submenu: [
      { label: "Cotton", items: [
        { name: "Premium Cotton", link: "/fabrics/cotton/premium" },
        { name: "Printed Cotton", link: "/fabrics/cotton/printed" },
        { name: "Organic Cotton", link: "/fabrics/cotton/organic" }
      ]},
      { label: "Silk & Satin", items: [
        { name: "Raw Silk", link: "/fabrics/silk/raw" },
        { name: "Satin Shine", link: "/fabrics/silk/satin-shine" },
        { name: "Printed Satin", link: "/fabrics/silk/printed" }
      ]},
      { label: "Linen", items: [
        { name: "Natural Linen", link: "/fabrics/linen/natural" },
        { name: "Printed Linen", link: "/fabrics/linen/printed" },
        { name: "Wrinkle-Free Linen", link: "/fabrics/linen/wrinkle-free" }
      ]},
      { label: "Natural Fibers", items: [
        { name: "Hemp", link: "/fabrics/natural/hemp" },
        { name: "Bamboo", link: "/fabrics/natural/bamboo" },
        { name: "Jute", link: "/fabrics/natural/jute" }
      ]}
    ]
  },
  {
    label: "PRINTS & PATTERNS",
    link: "/prints",
    submenu: [
      { label: "Designer Prints", items: [
        { name: "Floral Prints", link: "/prints/designer/floral" },
        { name: "Geometric", link: "/prints/designer/geometric" },
        { name: "Digital Prints", link: "/prints/designer/digital" }
      ]},
      { label: "Embroidered", items: [
        { name: "Zari Work", link: "/prints/embroidered/zari" },
        { name: "Thread Work", link: "/prints/embroidered/thread" },
        { name: "Mirror Work", link: "/prints/embroidered/mirror" }
      ]}
    ]
  },
  {
    label: "HOME & DECOR",
    link: "/home-decor",
    submenu: [
      { label: "Upholstery", items: [
        { name: "Velvet", link: "/home-decor/upholstery/velvet" },
        { name: "Jacquard", link: "/home-decor/upholstery/jacquard" },
        { name: "Textured", link: "/home-decor/upholstery/textured" }
      ]},
      { label: "Curtains", items: [
        { name: "Sheer", link: "/home-decor/curtains/sheer" },
        { name: "Blackout", link: "/home-decor/curtains/blackout" },
        { name: "Printed", link: "/home-decor/curtains/printed" }
      ]},
      { label: "Bedding", items: [
        { name: "Quilts", link: "/home-decor/bedding/quilts" },
        { name: "Duvet Covers", link: "/home-decor/bedding/duvet-covers" },
        { name: "Sheets", link: "/home-decor/bedding/sheets" }
      ]}
    ]
  }
];

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveMenu(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleMenuEnter = (index) => setActiveMenu(index);
  const handleMenuLeave = () => setActiveMenu(null);

  const handleNavigation = (path) => {
    navigate(path);
    setActiveMenu(null);
    setMobileMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="w-full bg-green-800 text-white p-2 text-center">
        <span className="text-sm md:text-base">New Arrivals: Premium Cotton Collection</span>
        <button
          className="text-pink-300 font-bold ml-2 hover:underline cursor-pointer"
          onClick={() => handleNavigation('/newarrival')}
        >
          SHOP NOW
        </button>
      </div>

      <div className="container mx-auto py-3 px-4 flex items-center justify-between">
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-green-800 hover:text-green-600">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="flex items-center">
          <Link to="/" className="h-10 md:h-12 w-38 md:w-42 flex items-center justify-center">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="hidden md:flex flex-1 mx-6">
          <form onSubmit={handleSearch} className="relative flex w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search fabrics..."
              className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-green-600"
            />
            <button type="submit" className="bg-green-800 text-white px-4 py-2 hover:bg-green-700 transition">
              <Search size={20} />
            </button>
          </form>
        </div>

        <div className="flex items-center">
          <button onClick={() => handleNavigation('/stores')} className="hidden md:flex items-center mr-4 hover:text-green-600">
            <MapPin size={20} className="text-green-800 mr-1" />
            <div className="text-xs">
              <div className="font-bold text-green-800">STORE LOCATION</div>
              <div>Find Nearby</div>
            </div>
          </button>

          <button onClick={() => handleNavigation('/account')} className="hidden sm:flex items-center mr-4 hover:text-green-600">
            <User size={20} className="text-green-800 mr-1" />
            <div className="text-xs">
              <div>Login / Signup</div>
              <div className="font-medium">My account</div>
            </div>
          </button>

          <button onClick={() => handleNavigation('/account')} className="sm:hidden mr-3 hover:text-green-600">
            <User size={20} className="text-green-800" />
          </button>

          <button onClick={() => setIsCartModalOpen(true)} className="flex items-center hover:text-green-600">
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

      <div className="hidden lg:block border-t border-b border-gray-200" ref={dropdownRef}>
        <div className="container mx-auto flex justify-center">
          {menuItems.map((item, index) => (
            <div key={index} className="relative" onMouseEnter={() => handleMenuEnter(index)} onMouseLeave={handleMenuLeave}>
              <Link to={item.link} className={`py-3 px-6 flex items-center hover:bg-gray-100 transition ${activeMenu === index ? 'bg-gray-100 text-green-800' : ''}`}>
                <span className="text-sm font-semibold text-gray-800">{item.label}</span>
                {item.submenu.length > 0 && <ChevronDown size={14} className="ml-1 text-green-800" />}
              </Link>

              {activeMenu === index && item.submenu.length > 0 && (
                <div className="absolute left-0 bg-white shadow-lg border border-gray-200 z-20 w-64">
                  {item.submenu.map((submenu, subIndex) => (
                    <div key={subIndex} className="p-4 border-b border-gray-100 last:border-b-0">
                      <div className="font-medium text-green-800 mb-2">{submenu.label}</div>
                      <div className="grid">
                        {submenu.items.map((subItem, idx) => (
                          <Link key={idx} to={subItem.link} className="text-sm py-1 text-left text-gray-700 hover:text-green-800 transition">
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link to="/newarrival" className="py-3 px-6 hover:bg-gray-100 transition text-sm font-semibold text-gray-800">NEW ARRIVAL</Link>
          <Link to="/blog" className="py-3 px-6 hover:bg-gray-100 transition text-sm font-semibold text-gray-800">BLOG</Link>
          <Link to="/bulkorder" className="py-3 px-6 hover:bg-gray-100 transition text-sm font-semibold text-gray-800">BULK ORDER</Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200">
          <MobileMenu menuItems={menuItems} closeMenu={() => setMobileMenuOpen(false)} />
        </div>
      )}

      {isCartModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button className="absolute top-2 right-2 text-gray-600 hover:text-black" onClick={() => setIsCartModalOpen(false)}>
              <X size={20} />
            </button>
            <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
            <p className="text-sm text-gray-600">Cart functionality coming soon.</p>
          </div>
        </div>
      )}
    </div>
  );
}

function MobileMenu({ menuItems, closeMenu }) {
  const navigate = useNavigate();
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleItemClick = (link) => {
    navigate(link);
    closeMenu();
  };

  return (
    <div>
      {menuItems.map((item, index) => (
        <div key={index} className="border-t border-gray-100">
          <div
            className="py-3 px-4 text-sm font-semibold cursor-pointer flex justify-between items-center"
            onClick={() => {
              if (item.submenu.length === 0) handleItemClick(item.link);
              else setActiveSubmenu(activeSubmenu === index ? null : index);
            }}
          >
            <span>{item.label}</span>
            {item.submenu.length > 0 && <ChevronDown size={14} className={`transition-transform ${activeSubmenu === index ? 'rotate-180' : ''}`} />}
          </div>

          {activeSubmenu === index && item.submenu.length > 0 && (
            <div className="bg-gray-50">
              {item.submenu.map((submenu, i) => (
                <div key={i} className="border-t border-gray-100">
                  <div className="py-2 px-6 text-sm font-medium text-green-800">{submenu.label}</div>
                  <div className="px-8 pb-2">
                    {submenu.items.map((subItem, j) => (
                      <div
                        key={j}
                        className="py-2 text-sm cursor-pointer hover:text-green-800"
                        onClick={() => handleItemClick(subItem.link)}
                      >
                        {subItem.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <Link to="/contact" onClick={closeMenu} className="block border-t border-gray-100 py-3 px-4 font-semibold text-sm">
        CONTACT US
      </Link>
    </div>
  );
}