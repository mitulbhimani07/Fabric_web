import React, { useState } from 'react';
import { Map, Mail, Phone, Clock, FileText, Truck, Building, ChevronRight, Check } from 'lucide-react';

function BulkOrder() {
  // States for fabric card hover
  const [activeCard, setActiveCard] = useState(null);

  // Fabric card data
  const fabricCards = [
    {
      id: 1,
      image: "/api/placeholder/400/400",
      title: "Premium Cotton",
      description: "Soft, breathable cotton fabric for everyday wear",
      minOrder: "500 meters",
      price: "₹250/meter"
    },
    {
      id: 2,
      image: "/api/placeholder/400/400",
      title: "Silk Blend",
      description: "Luxurious silk blend with natural sheen",
      minOrder: "300 meters",
      price: "₹850/meter"
    },
    {
      id: 3,
      image: "/api/placeholder/400/400",
      title: "Linen Collection",
      description: "Premium linen for breathable comfort",
      minOrder: "400 meters",
      price: "₹350/meter"
    },
    {
      id: 4,
      image: "/api/placeholder/400/400",
      title: "Banarasi Silk",
      description: "Traditional Banarasi silk with intricate designs",
      minOrder: "200 meters",
      price: "₹1,250/meter"
    }
  ];

  // Terms and conditions data
  const termsAndConditions = [
    "Minimum order quantity: 200 meters per design/color",
    "50% advance payment required at the time of order",
    "Balance payment before dispatch of goods",
    "Sample approval required before bulk production",
    "Production time: 15-20 working days after sample approval",
    "Free shipping for orders above ₹50,000",
    "No cancellation after production starts",
    "Price subject to change based on market fluctuations"
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Banner */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/api/placeholder/1600/600')",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        </div>

        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4 transform transition-all duration-700 translate-y-0 opacity-100">
              Bulk Order Services
            </h1>
            
            {/* Separator line */}
            <div className="relative h-px w-full bg-transparent my-4">
              <div className="h-0.5 bg-white w-24 sm:w-32 md:w-48 mx-auto"></div>
            </div>
            
            <p className="text-white text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
              Quality fabrics for your business needs with competitive pricing and reliable delivery
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Section Header with animated line */}
        <div className="text-center mb-12 relative">
          {/* Decorative line before */}
          <div className="hidden md:block absolute left-0 top-1/2 w-1/4 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
          
          <h2 className="text-4xl font-serif mb-6 relative inline-block px-8">
            <span className="relative z-10">Bulk Order Process</span>
            {/* Animated underline effect */}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full"></span>
          </h2>
          
          {/* Decorative line after */}
          <div className="hidden md:block absolute right-0 top-1/2 w-1/4 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-gray-200 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FileText size={28} className="text-gray-800" />
            </div>
            <h3 className="text-xl font-medium mb-2">1. Submit Inquiry</h3>
            <p className="text-gray-600">Fill in your details and requirements through our contact form or email us directly with your specifications.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-gray-200 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Clock size={28} className="text-gray-800" />
            </div>
            <h3 className="text-xl font-medium mb-2">2. Sample Approval</h3>
            <p className="text-gray-600">Receive and approve fabric samples before we proceed with bulk production to ensure quality matches your expectations.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-gray-200 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Truck size={28} className="text-gray-800" />
            </div>
            <h3 className="text-xl font-medium mb-2">3. Production & Delivery</h3>
            <p className="text-gray-600">Once approved, we begin production and deliver your order within the agreed timeframe with quality assurance.</p>
          </div>
        </div>

        {/* Featured Fabric Cards */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8 text-center">Featured Fabrics for Bulk Orders</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fabricCards.map((card) => (
              <div 
                key={card.id}
                className="group relative bg-white rounded-lg overflow-hidden border border-gray-200 transition-all duration-500 hover:shadow-xl"
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Image Container */}
                <div className="aspect-square overflow-hidden bg-gray-100 relative">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div 
                      className={`bg-white py-2 px-4 rounded-full font-medium text-sm transform transition-all duration-500 ${
                        activeCard === card.id ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                      }`}
                    >
                      View Details
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-1">{card.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{card.description}</p>
                  
                  <div className="flex flex-col space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Min. Order:</span>
                      <span className="font-medium">{card.minOrder}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Price:</span>
                      <span className="font-medium">{card.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terms & Conditions with Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Terms & Conditions */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-serif mb-6 pb-3 border-b border-gray-200">
              Terms & Conditions for Bulk Orders
            </h2>
            
            <ul className="space-y-3">
              {termsAndConditions.map((term, index) => (
                <li key={index} className="flex items-start">
                  <Check size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{term}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center mb-3">
                <Clock size={18} className="text-gray-700 mr-2" />
                <span className="text-gray-800 font-medium">Standard Production Time: 15-20 working days</span>
              </div>
              <div className="flex items-center">
                <Truck size={18} className="text-gray-700 mr-2" />
                <span className="text-gray-800 font-medium">Delivery Time: Depends on location (5-15 days)</span>
              </div>
            </div>
          </div>
          
          {/* Google Map */}
          <div className="bg-gray-50 p-6 rounded-lg overflow-hidden h-[400px]">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              {/* Placeholder for Google Map - in a real implementation, this would be replaced with an actual Google Map */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <Map size={48} className="text-gray-400" />
                <span className="absolute text-sm text-gray-500 mt-16">Google Map would be displayed here</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-serif mb-8 text-center">Contact Our Bulk Order Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4 transition-all duration-300 hover:bg-white hover:shadow-md rounded-lg">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Mail size={20} className="text-gray-800" />
              </div>
              <h3 className="text-lg font-medium mb-1">Email Us</h3>
              <p className="text-gray-600">bulk@fabriccompany.com</p>
              <p className="text-gray-600">support@fabriccompany.com</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 transition-all duration-300 hover:bg-white hover:shadow-md rounded-lg">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Phone size={20} className="text-gray-800" />
              </div>
              <h3 className="text-lg font-medium mb-1">Call Us</h3>
              <p className="text-gray-600">+91 9876543210</p>
              <p className="text-gray-600">+91 1234567890</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 transition-all duration-300 hover:bg-white hover:shadow-md rounded-lg">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Building size={20} className="text-gray-800" />
              </div>
              <h3 className="text-lg font-medium mb-1">Visit Us</h3>
              <p className="text-gray-600">123 Textile Street, Fashion District</p>
              <p className="text-gray-600">Mumbai, Maharashtra - 400001</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="mt-12">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-medium mb-6 text-center">Send us your requirements</h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all"
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Fabric Requirements</label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all h-32"
                      placeholder="Please describe your fabric requirements, quantity, and any specific details"
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all"
                    >
                      Submit Inquiry
                      <ChevronRight size={18} className="ml-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BulkOrder;