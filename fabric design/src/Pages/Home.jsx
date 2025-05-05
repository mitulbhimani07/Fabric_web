import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Scissors, Clock } from 'lucide-react';

function Home() {
  // Updated slider images with placeholder images that will render correctly
  const sliderImages = [
    {
      src:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/db5b3d108340301.5fbbd8faa91f1.jpg",
      alt: "Elegant silk fabric with intricate patterns",
      title: 'Elegant Silk Collections',
      subtitle: 'Luxurious fabrics for special occasions',
      description: 'Handcrafted with care using traditional techniques passed down through generations',
      buttonText: 'Explore Premium Silks',
      tagline: 'The epitome of luxury since 1892',
      features: ['Premium quality', 'Hand-woven', 'Natural dyes'],
      discount: '15% off on first purchase',
      origin: 'Sourced from Varanasi, India'
    },
    {
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a6c33a108340301.5fbbd8fc70213.jpg",
      alt: "Traditional handloom sari with vibrant colors",
      title: 'Traditional Handloom Styles',
      subtitle: 'Authentic craftsmanship in every thread',
      description: 'Each piece tells a story of cultural heritage and meticulous attention to detail',
      buttonText: 'Discover Handlooms',
      tagline: 'Supporting artisans and preserving heritage',
      features: ['Eco-friendly', 'Supports local artisans', 'Unique designs'],
      discount: 'Free shipping on orders over $100',
      origin: 'Crafted in rural communities'
    },
    {
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/83dd3d108340301.5fbbd8fccd484.jpg",
      alt: "Modern wool textile with unique patterns",
      title: 'Modern Textile Patterns',
      subtitle: 'Contemporary designs with timeless appeal',
      description: 'Pushing boundaries with innovative techniques while honoring traditional craftsmanship',
      buttonText: 'View Modern Collections',
      tagline: 'Where tradition meets innovation',
      features: ['Stain-resistant', 'Long-lasting', 'Unique patterns'],
      discount: 'New collection - 20% off this week only',
      origin: 'Designed by award-winning textile artists'
    },
    {
      src: "https://content.api.news/v3/images/bin/6a0ae20aa25499df713e76535522611f?width=1440",
      alt: "Modern wool textile with unique patterns",
      title: 'Modern Textile Patterns',
      subtitle: 'Contemporary designs with timeless appeal',
      description: 'Pushing boundaries with innovative techniques while honoring traditional craftsmanship',
      buttonText: 'View Modern Collections',
      tagline: 'Where tradition meets innovation',
      features: ['Stain-resistant', 'Long-lasting', 'Unique patterns'],
      discount: 'New collection - 20% off this week only',
      origin: 'Designed by award-winning textile artists'
    },
  ];


  const fabricTypes = [
    { 
      name: 'Silk', 
      color: 'bg-amber-50', 
      icon: <Star className="text-amber-700" />,
      price: '$24.99/yard',
      image: 'https://images.unsplash.com/photo-1589891685391-a6748d5255ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'Cotton', 
      color: 'bg-blue-50', 
      icon: <Heart className="text-blue-700" />,
      price: '$12.99/yard',
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'Linen', 
      color: 'bg-green-50', 
      icon: <Scissors className="text-green-700" />,
      price: '$18.99/yard',
      image: 'https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'Wool', 
      color: 'bg-red-50', 
      icon: <Clock className="text-red-700" />,
      price: '$29.99/yard',
      image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
  ];
  
  
  const featuredFabrics = [
    { 
      name: 'Banarasi Silk', 
      type: 'Premium Collection', 
      price: '$34.99/yard',
      image: 'https://images.unsplash.com/photo-1616627052149-22c4f3f1946e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'Organic Cotton', 
      type: 'Natural Series', 
      price: '$16.99/yard',
      image: 'https://images.unsplash.com/photo-1605114824595-fc16e5c0a28d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'Khadi Handloom', 
      type: 'Heritage Line', 
      price: '$22.99/yard',
      image: 'https://images.unsplash.com/photo-1583922146273-68f11083858c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
  ];
  
  const categories = [
    { 
      name: 'Scarves', 
      color: 'bg-rose-100 hover:bg-rose-300',
      image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    { 
      name: 'Shawls', 
      color: 'bg-amber-100 hover:bg-amber-300',
      image: 'https://images.unsplash.com/photo-1631233859262-0d7b12ea7d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    { 
      name: 'Upholstery', 
      color: 'bg-emerald-100 hover:bg-emerald-300',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    { 
      name: 'Kurti Fabrics', 
      color: 'bg-sky-100 hover:bg-sky-300',
      image: 'https://images.unsplash.com/photo-1602810319428-019690571b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
  ];
  
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');
  const [animating, setAnimating] = useState(false);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection('right');
      setAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
        setTimeout(() => {
          setAnimating(false);
        }, 100);
      }, 300);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const nextSlide = () => {
    if (animating) return;
    setSlideDirection('right');
    setAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
      setTimeout(() => {
        setAnimating(false);
      }, 100);
    }, 300);
  };

  const prevSlide = () => {
    if (animating) return;
    setSlideDirection('left');
    setAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
      setTimeout(() => {
        setAnimating(false);
      }, 100);
    }, 300);
  };

  const goToSlide = (index) => {
    if (animating || index === currentSlide) return;
    setSlideDirection(index > currentSlide ? 'right' : 'left');
    setAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => {
        setAnimating(false);
      }, 100);
    }, 300);
  };

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) =>
  //     prev === 0 ? sliderImages.length - 1 : prev - 1
  //   );
  // };

  return (
    <div className="bg-amber-50 text-stone-800 font-sans">
      {/* Hero Slider with improved styling */}
      <section className="relative">
        <div className="w-full h-80 md:h-96 lg:h-screen max-h-[85vh] relative overflow-hidden">
          {sliderImages.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 translate-x-0' 
                  : `opacity-0 ${
                      slideDirection === 'right' 
                        ? index < currentSlide ? 'translate-x-full' : '-translate-x-full'
                        : index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                    }`
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-30"></div>
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for better text visibility */}
              <div className="absolute inset-0  bg-opacity-40"></div>
              
              <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 text-center transition-all duration-700 ease-in-out ${
                animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}>
                <div className="relative z-20">
                  <span className="inline-block px-4 py-1 bg-black bg-opacity-40 rounded-full text-amber-300 font-medium mb-3 tracking-wider text-sm md:text-base uppercase border border-amber-400">
                    {slide.subtitle}
                  </span>
                  <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-white text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-4 drop-shadow">
                    {slide.description}
                  </p>
                  
                  {/* Enhanced content */}
                  <div className="mb-4">
                    <p className="text-amber-200 text-sm md:text-base italic max-w-xl mx-auto mb-3">
                      {slide.tagline || "Experience the finest quality in every thread"}
                    </p>
                    
                    {/* Feature badges */}
                    <div className="flex flex-wrap justify-center gap-2 mb-3">
                      {slide.features && slide.features.map((feature, i) => (
                        <span key={i} className="bg-white bg-opacity-20 text-white text-xs px-3 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {/* Discount/promo banner */}
                    {slide.discount && (
                      <div className="bg-amber-600 text-white text-sm md:text-base font-medium py-2 px-4 rounded-lg mx-auto max-w-md mb-4 transform rotate-1">
                        {slide.discount}
                      </div>
                    )}
                    
                    {/* Origin info */}
                    {slide.origin && (
                      <p className="text-amber-100 text-xs mb-4">
                        {slide.origin}
                      </p>
                    )}
                    
                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mt-2">
                      <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full transition transform hover:scale-105 font-medium">
                        {slide.buttonText}
                      </button>
                      <button className="px-6 py-3 bg-transparent hover:bg-white hover:bg-opacity-20 text-white border border-white rounded-full transition transform hover:scale-105 font-medium">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows with improved styling */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-25 hover:bg-opacity-50 text-white p-2 rounded-full transition-all hover:scale-110 z-10"
          aria-label="Previous slide"
          disabled={animating}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-25 hover:bg-opacity-50 text-white p-2 rounded-full transition-all hover:scale-110 z-10"
          aria-label="Next slide"
          disabled={animating}
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots (Pagination) with improved styling */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-white scale-125 w-6' : 'bg-white bg-opacity-60 hover:bg-opacity-100'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              disabled={animating}
            ></button>
          ))}
        </div>
      </section>



      {/* Fabric Collection with icons and improved styling */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">Our Fabric Collection</h2>
          <p className="text-center text-stone-600 mb-8 max-w-2xl mx-auto">
            Discover our premium selection of handpicked fabrics, carefully sourced from the finest mills and craftsmen around the world.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {fabricTypes.map((fabric, index) => (
              <div
                key={index}
                className={`${fabric.color} shadow rounded-xl overflow-hidden hover:shadow-lg transition duration-300 hover:-translate-y-1 group`}
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={`/api/placeholder/500/400`}
                    alt={fabric.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 right-0 p-2 bg-white rounded-tl-lg">
                    {fabric.icon}
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-stone-800">{fabric.name}</h3>
                  <p className="text-stone-600 text-sm mt-1">Premium quality fabrics</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Fabrics with improved cards */}
      <section className="py-16 px-6 md:px-16 text-center bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">Featured Fabrics</h2>
          <p className="max-w-2xl mx-auto text-stone-600 mb-8">
            Discover our finest, most loved fabric types that blend tradition with trend – perfect for both daily wear and designer fashion.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {featuredFabrics.map((fabric, index) => (
              <div key={index} className="w-full md:w-72 group">
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300">
                  <img 
                    src={`/api/placeholder/400/500`} 
                    alt={fabric.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-left w-full">
                    <span className="text-amber-300 text-sm font-medium">{fabric.type}</span>
                    <h3 className="text-white text-xl font-bold">{fabric.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-10 px-6 py-3 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white rounded-full transition duration-300">
            View All Collections
          </button>
        </div>
      </section>

      {/* Craftsmanship & Process with improved layout */}
      <section className="bg-stone-100 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-left md:pr-10 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">Craftsmanship & Heritage</h2>
              <p className="text-stone-600 mb-4">
                Each piece of fabric we offer is a result of time-honored craftsmanship and attention to detail. Our artisans blend traditional techniques with modern innovation.
              </p>
              <p className="text-stone-600 mb-6">
                From selecting raw fibers to final weaving, our process is designed for beauty, durability, and sustainability.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <div className="bg-amber-100 p-2 rounded-full mr-2">
                    <Clock size={20} className="text-amber-700" />
                  </div>
                  <span className="text-sm font-medium">100+ Years Tradition</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-amber-100 p-2 rounded-full mr-2">
                    <Scissors size={20} className="text-amber-700" />
                  </div>
                  <span className="text-sm font-medium">Handcrafted</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img src="/api/placeholder/400/500" className="w-full h-56 object-cover rounded-lg shadow-md transform -rotate-2" alt="Weaving Process" />
              <img src="/api/placeholder/400/500" className="w-full h-56 object-cover rounded-lg shadow-md transform rotate-2 mt-6" alt="Handmade Detail" />
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category with color accents */}
      <section className="py-16 px-6 md:px-16 text-center bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">Shop by Category</h2>
          <p className="max-w-2xl mx-auto text-stone-600 mb-8">
            Browse our collection by category to find the perfect fabric for your next project
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, i) => (
              <div 
                key={i} 
                className={`${category.color} rounded-lg p-6 transition duration-300 text-stone-800 font-semibold flex flex-col items-center justify-center h-32 hover:shadow-lg cursor-pointer`}
              >
                <img src={`/api/placeholder/100/100`} alt={category.name} className="w-12 h-12 object-cover rounded-full mb-2" />
                <span>{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - New Addition */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-stone-600 italic mb-4">
                  "The quality of fabrics is exceptional. I've ordered multiple times and have never been disappointed with the colors or texture."
                </p>
                <div className="flex items-center">
                  <img src="/api/placeholder/100/100" alt="Customer" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <p className="font-medium">Customer Name</p>
                    <p className="text-sm text-stone-500">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter - New Addition */}
      
    </div>
  );
}

export default Home;