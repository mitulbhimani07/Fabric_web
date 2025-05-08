import React, { useState } from 'react';
import { Map, Mail, Phone, Clock, FileText, Truck, Building, ChevronRight, Check } from 'lucide-react';

function BulkOrder() {
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);

  const fabricCards = [
    {
      id: 1,
      image: "/api/placeholder/400/400",
      title: "Premium Cotton",
      description: "Soft, breathable cotton fabric for everyday wear",
      minOrder: "500 meters",
      price: "₹250/meter",
      color: "bg-blue-100"
    },
    {
      id: 2,
      image: "/api/placeholder/400/400",
      title: "Silk Blend",
      description: "Luxurious silk blend with natural sheen",
      minOrder: "300 meters",
      price: "₹850/meter",
      color: "bg-pink-100"
    },
    {
      id: 3,
      image: "/api/placeholder/400/400",
      title: "Linen Collection",
      description: "Premium linen for breathable comfort",
      minOrder: "400 meters",
      price: "₹350/meter",
      color: "bg-green-100"
    },
    {
      id: 4,
      image: "/api/placeholder/400/400",
      title: "Banarasi Silk",
      description: "Traditional Banarasi silk with intricate designs",
      minOrder: "200 meters",
      price: "₹1,250/meter",
      color: "bg-purple-100"
    }
  ];

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

  const processSteps = [
    {
      id: 1,
      icon: <FileText size={28} className="text-gray-800" />,
      title: "1. Submit Inquiry",
      description: "Fill in your details and requirements through our contact form or email us directly with your specifications.",
      color: "bg-blue-50"
    },
    {
      id: 2,
      icon: <Clock size={28} className="text-gray-800" />,
      title: "2. Sample Approval",
      description: "Receive and approve fabric samples before we proceed with bulk production to ensure quality matches your expectations.",
      color: "bg-purple-50"
    },
    {
      id: 3,
      icon: <Truck size={28} className="text-gray-800" />,
      title: "3. Production & Delivery",
      description: "Once approved, we begin production and deliver your order within the agreed timeframe with quality assurance.",
      color: "bg-green-50"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/api/placeholder/1600/600')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        </div>

        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl mx-auto transform transition-all duration-500 hover:scale-105">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="inline-block pb-2 border-b-4 border-white/30 hover:border-white/60 transition-all duration-300">
                Bulk Order Services
              </span>
            </h1>
            
            <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Quality fabrics for your business needs with competitive pricing and reliable delivery
            </p>
            
            <div className="mt-8">
              <button className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-black hover:text-white border-2 border-white transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-6 relative inline-block">
            <span className="relative z-10 px-4 bg-white">
              Bulk Order Process
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-black to-transparent"></span>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures quality and timely delivery for all your bulk fabric needs
          </p>
        </div>

        {/* Process Steps with Enhanced Hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {processSteps.map((step) => (
            <div 
              key={step.id}
              className={`relative p-8 rounded-xl transition-all duration-500 ${step.color} hover:shadow-2xl border border-transparent hover:border-gray-200 overflow-hidden`}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Animated background element */}
              <div className={`absolute inset-0 opacity-0 ${hoveredStep === step.id ? 'opacity-100' : ''} transition-opacity duration-500`}>
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/20"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white/20"></div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${hoveredStep === step.id ? 'transform -translate-y-2 bg-white shadow-md' : 'bg-white/80'}`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Fabric Cards with 3D Hover Effect */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif mb-8 text-center">
            <span className="pb-2 border-b-2 border-gray-200 hover:border-black transition-all duration-300">
              Featured Fabrics for Bulk Orders
            </span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {fabricCards.map((card) => (
              <div 
                key={card.id}
                className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Image Container with gradient overlay */}
                <div className="aspect-square overflow-hidden bg-gray-100 relative">
                  <div className={`absolute inset-0 ${card.color} mix-blend-multiply opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Floating price tag */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-sm font-medium shadow-sm transform transition-all duration-500 ${
                    activeCard === card.id ? 'scale-110 bg-black text-white' : ''
                  }`}>
                    {card.price}
                  </div>
                </div>
                
                {/* Content with subtle animation */}
                <div className="p-5">
                  <h3 className="text-xl font-medium mb-2 group-hover:text-black transition-colors duration-300">{card.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 group-hover:text-gray-800 transition-colors duration-300">{card.description}</p>
                  
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                    <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Min. Order:</span>
                    <span className="text-sm font-medium">{card.minOrder}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terms & Conditions with Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Terms & Conditions with animated list */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-500">
            <h2 className="text-2xl font-serif mb-6 pb-3 border-b border-gray-200 hover:border-black transition-colors duration-300">
              Terms & Conditions
            </h2>
            
            <ul className="space-y-4">
              {termsAndConditions.map((term, index) => (
                <li 
                  key={index} 
                  className="flex items-start p-3 rounded-lg hover:bg-white hover:shadow-xs transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-0.5 mr-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check size={14} className="text-green-600" />
                    </div>
                  </div>
                  <span className="text-gray-700">{term}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 pt-5 border-t border-gray-200 space-y-3">
              <div className="flex items-center p-2 rounded-lg hover:bg-white hover:shadow-xs transition-all duration-300">
                <Clock size={18} className="text-gray-700 mr-3 flex-shrink-0" />
                <span className="text-gray-800 font-medium">Standard Production Time: 15-20 working days</span>
              </div>
              <div className="flex items-center p-2 rounded-lg hover:bg-white hover:shadow-xs transition-all duration-300">
                <Truck size={18} className="text-gray-700 mr-3 flex-shrink-0" />
                <span className="text-gray-800 font-medium">Delivery Time: Depends on location (5-15 days)</span>
              </div>
            </div>
          </div>
          
          {/* Google Map with hover effect */}
          <div className="relative group h-[500px] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-1000">
              <Map size={48} className="text-gray-400" />
              <span className="absolute text-sm text-gray-500 mt-16">Google Map would be displayed here</span>
            </div>
            
            {/* Overlay with address */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-medium mb-2">Our Headquarters</h3>
              <p className="text-white/90">123 Textile Street, Fashion District</p>
              <p className="text-white/90">Mumbai, Maharashtra - 400001</p>
            </div>
          </div>
        </div>

        {/* Contact Section with Floating Elements */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-500">
          <h2 className="text-3xl font-serif mb-12 text-center relative">
            <span className="relative z-10 px-4">
              Contact Our Bulk Order Team
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gray-300 group-hover:bg-black transition-all duration-300"></span>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="relative p-6 bg-white rounded-xl shadow-xs hover:shadow-md transition-all duration-300 group overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-blue-100/30 group-hover:bg-blue-100/50 transition-all duration-500"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                  <Mail size={20} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Email Us</h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">bulk@fabriccompany.com</p>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">support@fabriccompany.com</p>
              </div>
            </div>
            
            <div className="relative p-6 bg-white rounded-xl shadow-xs hover:shadow-md transition-all duration-300 group overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-green-100/30 group-hover:bg-green-100/50 transition-all duration-500"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors duration-300">
                  <Phone size={20} className="text-green-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Call Us</h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">+91 9876543210</p>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">+91 1234567890</p>
              </div>
            </div>
            
            <div className="relative p-6 bg-white rounded-xl shadow-xs hover:shadow-md transition-all duration-300 group overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-purple-100/30 group-hover:bg-purple-100/50 transition-all duration-500"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors duration-300">
                  <Building size={20} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Visit Us</h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">123 Textile Street</p>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Mumbai, Maharashtra</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form with Floating Labels */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 hover:shadow-lg transition-shadow duration-500">
              <h3 className="text-2xl font-medium mb-8 text-center relative">
                <span className="relative px-4">
                  Send us your requirements
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gray-200 group-hover:bg-black transition-all duration-300"></span>
                </span>
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-b border-gray-300 focus:border-black outline-none bg-transparent peer"
                      placeholder=" "
                    />
                    <label className="absolute left-0 -top-3 text-sm text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 transition-all duration-200 pointer-events-none">
                      Full Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-b border-gray-300 focus:border-black outline-none bg-transparent peer"
                      placeholder=" "
                    />
                    <label className="absolute left-0 -top-3 text-sm text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 transition-all duration-200 pointer-events-none">
                      Company Name
                    </label>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="email"
                      className="w-full px-4 py-3 border-b border-gray-300 focus:border-black outline-none bg-transparent peer"
                      placeholder=" "
                    />
                    <label className="absolute left-0 -top-3 text-sm text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 transition-all duration-200 pointer-events-none">
                      Email
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border-b border-gray-300 focus:border-black outline-none bg-transparent peer"
                      placeholder=" "
                    />
                    <label className="absolute left-0 -top-3 text-sm text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 transition-all duration-200 pointer-events-none">
                      Phone
                    </label>
                  </div>
                </div>
                
                <div className="relative">
                  <textarea
                    className="w-full px-4 py-3 border-b border-gray-300 focus:border-black outline-none bg-transparent peer h-32 resize-none"
                    placeholder=" "
                  ></textarea>
                  <label className="absolute left-0 -top-3 text-sm text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 transition-all duration-200 pointer-events-none">
                    Fabric Requirements
                  </label>
                </div>
                
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-black shadow-md hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Submit Inquiry
                    <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BulkOrder;