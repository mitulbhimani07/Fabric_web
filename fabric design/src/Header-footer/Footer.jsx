import React from 'react';

function Footer() {
  return (
    <footer className="bg-stone-800 text-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-amber-400 mb-2">Texora</h3>
          <p className="text-stone-300 text-sm">
            Premium handcrafted fabrics blending tradition and elegance. Trusted by designers and artisans worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 text-stone-300 text-sm">
            <li><a href="#" className="hover:text-amber-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-amber-400 transition">Shop</a></li>
            <li><a href="#" className="hover:text-amber-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-amber-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Customer Service</h4>
          <ul className="space-y-2 text-stone-300 text-sm">
            <li><a href="#" className="hover:text-amber-400 transition">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-amber-400 transition">FAQs</a></li>
            <li><a href="#" className="hover:text-amber-400 transition">Size Guide</a></li>
            <li><a href="#" className="hover:text-amber-400 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Get In Touch</h4>
          <p className="text-stone-300 text-sm">123 Fabric Lane, Surat, India</p>
          <p className="text-stone-300 text-sm mt-1">Email: support@marutdron.com</p>
          <p className="text-stone-300 text-sm mt-1">Phone: +91 98765 43210</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-amber-400 transition">🌐</a>
            <a href="#" className="hover:text-amber-400 transition">📘</a>
            <a href="#" className="hover:text-amber-400 transition">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-stone-700 pt-6 text-center text-sm text-stone-400">
        &copy; {new Date().getFullYear()} Marut Dron. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
