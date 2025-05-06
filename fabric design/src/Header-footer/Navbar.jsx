import React, { useState } from 'react';
import { Search, MapPin, User, ShoppingCart, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="flex flex-col w-full">
      {/* Top banner */}
      <div className="w-full bg-green-800 text-white p-2 text-center">
        <span>Click here to Shop for Women</span>
        <span className="text-pink-300 font-bold ml-2">RAMYYAM</span>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-12 w-32 bg-white border border-gray-200 flex items-center justify-center">
            <div className="font-bold text-yellow-500">RAMRAJ</div>
          </div>
        </div>
        
        {/* Search bar */}
        <div className="flex flex-1 mx-6">
          <div className="relative flex w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-200 focus:outline-none"
            />
            <button className="bg-green-800 text-white px-4 py-2">
              <Search size={20} />
            </button>
          </div>
        </div>
        
        {/* Store location */}
        <div className="flex items-center mr-6">
          <div className="mr-1">
            <MapPin size={20} className="text-green-800" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-green-800">STORE LOCATION</span>
            <span className="text-xs">Near You</span>
          </div>
        </div>
        
        {/* Account */}
        <div className="flex items-center mr-6">
          <div className="flex flex-col">
            <div className="text-sm">Login / Signup</div>
            <div className="text-sm font-medium">My account</div>
          </div>
        </div>
        
        {/* Cart */}
        <div className="flex items-center">
          <div className="relative">
            <ShoppingCart size={24} className="text-green-800" />
            <span className="absolute -top-2 -right-2 bg-green-800 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">0</span>
          </div>
          <span className="ml-2 font-medium">Cart</span>
        </div>
      </div>
      
      {/* Navigation menu */}
      <div className="border-t border-b border-gray-200">
        <div className="container mx-auto flex">
          <NavItem label="MEN" />
          <NavItem label="DHOTIS" />
          <NavItem label="SHIRTS" />
          <NavItem label="SILK/WEDDING" />
          <NavItem label="BOYS" />
          <NavItem label="TOWELS" />
          <NavItem label="ACCESSORIES" />
          <NavItem label="SUMMER COLLECTION" />
          <NavItem label="WOMEN" hasDropdown={false} />
          <NavItem label="SUPPORT" />
          <NavItem label="CORPORATE INFO" />
        </div>
      </div>
    </div>
  );
}

function NavItem({ label, hasDropdown = true }) {
  return (
    <div className="relative py-4 px-3 flex items-center hover:bg-gray-100 cursor-pointer group">
      <span className="text-sm font-medium">{label}</span>
      {hasDropdown && (
        <ChevronDown size={16} className="ml-1" />
      )}
      {/* Simple dropdown placeholder - would be expanded in a real implementation */}
      {hasDropdown && (
        <div className="absolute hidden group-hover:block top-full left-0 min-w-full bg-white shadow-lg z-10">
          <div className="p-2 whitespace-nowrap">
            <div className="py-1 px-2 hover:bg-gray-100">Submenu item 1</div>
            <div className="py-1 px-2 hover:bg-gray-100">Submenu item 2</div>
          </div>
        </div>
      )}
    </div>
  );
}