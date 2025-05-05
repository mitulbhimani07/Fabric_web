import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp, ShoppingBag, Heart, User, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFabricsOpen, setIsFabricsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  const fabricCategories = [
    {
      name: "Cotton",
      subcategories: ["Egyptian Cotton", "Organic Cotton", "Printed Cotton"]
    },
    {
      name: "Silk",
      subcategories: ["Raw Silk", "Mulberry Silk", "Art Silk"]
    },
    {
      name: "Wool",
      subcategories: ["Merino Wool", "Cashmere", "Tweed"]
    },
    {
      name: "Synthetic",
      subcategories: ["Polyester", "Nylon", "Rayon"]
    }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleFabricsDropdown = () => setIsFabricsOpen(!isFabricsOpen);

  return (
    <nav className="bg-[#E6DCD5] shadow-sm py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 flex items-center">
            <span className="text-3xl font-bold text-[#3E2723]">
              Tex<span className="text-[#D8A7B1]">ora</span>
            </span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-10">
            {["Home", "New Arrival"].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="text-[#3E2723] hover:text-[#A1887F] px-3 py-2 text-lg font-medium relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D8A7B1] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            {/* Fabrics Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-[#3E2723] hover:text-[#A1887F] px-3 py-2 text-lg font-medium">
                Fabrics
                <ChevronDown className="ml-1 h-5 w-5 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              {/* Dropdown */}
              <div className="absolute left-0 mt-2 w-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 ease-in-out bg-white rounded-md shadow-xl z-10 overflow-hidden transform origin-top scale-95 group-hover:scale-100 border-t-4 border-[#D8A7B1]">
                <div className="grid grid-cols-4 gap-4 p-6 min-w-max">
                  {fabricCategories.map((category, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-lg text-[#3E2723] mb-3 border-b pb-2 border-[#E6DCD5]">
                        {category.name}
                      </h3>
                      <ul className="space-y-2">
                        {category.subcategories.map((subcategory, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href="#"
                              className="block py-1 text-[#3E2723]/80 hover:text-[#D8A7B1] text-base transition-colors duration-200"
                            >
                              {subcategory}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-[#3E2723] hover:text-[#A1887F]">
              <Search className="h-6 w-6" />
            </button>
            <button className="text-[#3E2723] hover:text-[#A1887F]">
              <User className="h-6 w-6" />
            </button>
            <button className="text-[#3E2723] hover:text-[#A1887F] relative">
              <Heart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-[#D8A7B1] text-xs text-white rounded-full h-5 w-5 flex items-center justify-center font-medium">
                2
              </span>
            </button>
            <button className="text-[#3E2723] hover:text-[#A1887F] relative">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-[#D8A7B1] text-xs text-white rounded-full h-5 w-5 flex items-center justify-center font-medium">
                {cartCount}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="text-[#3E2723] hover:text-[#A1887F] relative">
              <Heart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-[#D8A7B1] text-xs text-white rounded-full h-5 w-5 flex items-center justify-center font-medium">
                2
              </span>
            </button>
            <button className="text-[#3E2723] hover:text-[#A1887F] relative">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-[#D8A7B1] text-xs text-white rounded-full h-5 w-5 flex items-center justify-center font-medium">
                {cartCount}
              </span>
            </button>
            <button onClick={toggleMenu} className="text-[#3E2723] hover:text-[#A1887F]">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-inner">
          <div className="px-4 py-4 space-y-2">
            <a href="#" className="block text-lg font-medium text-[#3E2723] hover:text-[#A1887F] hover:bg-[#E6DCD5]/50 rounded-md px-3 py-2 transition-all">
              Home
            </a>
            <a href="#" className="block text-lg font-medium text-[#3E2723] hover:text-[#A1887F] hover:bg-[#E6DCD5]/50 rounded-md px-3 py-2 transition-all">
              New Arrival
            </a>

            {/* Fabrics Mobile Dropdown */}
            <div>
              <button
                onClick={toggleFabricsDropdown}
                className="flex justify-between items-center w-full text-lg font-medium text-[#3E2723] hover:text-[#A1887F] hover:bg-[#E6DCD5]/50 rounded-md px-3 py-2 transition-all"
              >
                Fabrics
                {isFabricsOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {isFabricsOpen && (
                <div className="bg-[#F8F4F1] rounded-md mt-2">
                  {fabricCategories.map((category, index) => (
                    <div key={index} className="pl-4 py-2">
                      <span className="block font-medium text-[#3E2723] mb-1">{category.name}</span>
                      {category.subcategories.map((subcategory, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="block text-sm text-[#3E2723]/80 hover:text-[#A1887F] hover:bg-[#E6DCD5]/40 rounded px-3 py-1"
                        >
                          {subcategory}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Search/User Icons */}
            <div className="flex items-center space-x-6 pt-3 px-3">
              <button className="text-[#3E2723] hover:text-[#A1887F]">
                <Search className="h-6 w-6" />
              </button>
              <button className="text-[#3E2723] hover:text-[#A1887F]">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
