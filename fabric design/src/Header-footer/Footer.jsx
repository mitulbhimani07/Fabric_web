import React from 'react';
import {
  RotateCcw,
  Shield,
  Truck,
  Headphones,
  Instagram,
  Facebook,
  Twitter,
  Youtube
} from 'lucide-react';
import logo from '../assets/images/logo.png'; // Assuming you have a logo image

function Footer() {
  return (
    <footer className="w-full bg-green-900 text-white">
      {/* Top services section - Always centered */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-4 sm:py-6 border-b border-white/10 px-3 sm:px-4 text-center">
        <div className="flex flex-col items-center">
          <RotateCcw size={20} className="mb-1 sm:mb-2" />
          <span className="text-xs uppercase font-medium">Free returns</span>
        </div>

        <div className="flex flex-col items-center">
          <Shield size={20} className="mb-1 sm:mb-2" />
          <span className="text-xs uppercase font-medium">Safe & secure payment</span>
        </div>

        <div className="flex flex-col items-center">
          <Truck size={20} className="mb-1 sm:mb-2" />
          <span className="text-xs uppercase font-medium">Free Standard Delivery</span>
        </div>

        <div className="flex flex-col items-center">
          <Headphones size={20} className="mb-1 sm:mb-2" />
          <span className="text-xs uppercase font-medium">Customer Service</span>
        </div>
      </div>

      {/* Main footer content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        {/* Club Lacoste Section */}
        <div className="lg:col-span-2 flex flex-col items-center sm:items-start">
          <div className="w-32 sm:w-36 mb-4  p-2 sm:p-3 text-left sm:text-center">
            <div>
              <div className="text-xl font-bold">FABRIC HUB</div>
          
            </div>
          </div>
        </div>

        {/* Policies Column */}
        <div className="lg:col-span-2 w-full text-left sm:text-center">
          <div className="mb-3 sm:mb-4 border-b border-white/10 pb-2 sm:border-0 sm:pb-0">
            <h3 className="text-base font-medium">Policies</h3>
          </div>
          <ul className="space-y-2 mb-6 sm:mb-0">
            <li><a href="#" className="text-sm hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="text-sm hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="text-sm hover:underline">Terms of Service</a></li>
            <li><a href="#" className="text-sm hover:underline">Refund policy</a></li>
            <li><a href="#" className="text-sm hover:underline">Blogs</a></li>
            <li><a href="#" className="text-sm hover:underline">About us</a></li>
          </ul>
        </div>

        {/* Information Column */}
        <div className="lg:col-span-3 w-full text-left sm:text-center sm:ps-0 lg:ps-9">
          <div className="mb-3 sm:mb-4 border-b border-white/10 pb-2 sm:border-0 sm:pb-0">
            <h3 className="text-base font-medium">Information</h3>
          </div>
          <ul className="space-y-2 mb-6 sm:mb-0">
            <li><a href="#" className="text-sm hover:underline">Textile Abbreviations</a></li>
            <li><a href="#" className="text-sm hover:underline">Yarn Denomination</a></li>
            <li><a href="#" className="text-sm hover:underline">Woven Fabrics</a></li>
            <li><a href="#" className="text-sm hover:underline">Fabric Categorisation</a></li>
            <li><a href="#" className="text-sm hover:underline">Care Instructions</a></li>
          </ul>
        </div>

        {/* Help Column */}
        <div className="lg:col-span-3 w-full text-left sm:text-center">
          <div className="mb-3 sm:mb-4 border-b border-white/10 pb-2 sm:border-0 sm:pb-0">
            <h3 className="text-base font-medium">HELP & CONTACTS</h3>
          </div>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm hover:underline">FAQ</a></li>
            <li><a href="#" className="text-sm hover:underline">By Email</a></li>
            <li><a href="#" className="text-sm hover:underline">By phone</a></li>
            <li><a href="#" className="text-sm hover:underline">0120-4092045 *</a></li>
          </ul>
          <p className="text-xs mt-4 text-left sm:text-center">
            Our Customer Service team is at your service for you from Monday to Friday from 10:30 a.m. To 5:30 p.m.
          </p>
        </div>

        {/* Social Media Section */}
        <div className="lg:col-span-2 w-full flex flex-col space-y-4 mt-4 sm:mt-0 items-start sm:items-center">
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-4 text-left sm:text-center">
            <a href="#" className="flex items-center justify-start sm:justify-center group">
              <Instagram size={18} className="mr-2" />
              <span className="text-sm group-hover:underline">Instagram</span>
            </a>
            <a href="#" className="flex items-center justify-start sm:justify-center group">
              <Facebook size={18} className="mr-2" />
              <span className="text-sm group-hover:underline">Facebook</span>
            </a>
            <a href="#" className="flex items-center justify-start sm:justify-center group">
              <Twitter size={18} className="mr-2" />
              <span className="text-sm group-hover:underline">Twitter</span>
            </a>
            <a href="#" className="flex items-center justify-start sm:justify-center group">
              <Youtube size={18} className="mr-2" />
              <span className="text-sm group-hover:underline">Youtube</span>
            </a>
          </div>

          {/* Newsletter */}
          {/* <div className="w-full mt-6 sm:mt-4 text-left sm:text-center">
            <div className="flex items-center border-b border-white/30 justify-start sm:justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full py-2 bg-transparent border-none text-white text-xs sm:text-sm focus:outline-none text-left sm:text-center"
              />
            </div>
          </div> */}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 p-4 text-center text-xs">
        <p>© 2025 Lacoste. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
