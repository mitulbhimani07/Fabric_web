import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Eye, ShoppingBag } from 'lucide-react';

const TrendingDesigns = () => {
  // Hero Slider Data
  const heroSlides = [
    {
      backgroundImage: "/api/placeholder/1200/600",
      title: "Underwater",
      titleLarge: "Monsters",
      subtitle: "Saltwater Crocodile",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      backgroundImage: "/api/placeholder/1200/600",
      title: "The",
      titleLarge: "Gates of Hell",
      subtitle: "Special inside volcanoes",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      backgroundImage: "/api/placeholder/1200/600",
      title: "Exploring",
      titleLarge: "Deep Caves",
      subtitle: "Real Time Capsules",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  // Products data
  const products = [
    {
      image: "/api/placeholder/400/400",
      title: "Zinc Yellow Banarasi Ektara Silk Handloom Fabric With Floral Motifs",
      price: "Rs. 5,979.00",
      category: "bestseller"
    },
    {
      image: "/api/placeholder/400/400",
      title: "Yellowish Orange Shade Printed Dupion Silk Fabric",
      price: "Rs. 1,854.00",
      category: "bestseller"
    },
    {
      image: "/api/placeholder/400/400",
      title: "Yellow-Orange Printed Pichwai Rawsilk Fabric With Embroidery",
      price: "Rs. 1,848.00",
      category: "bestseller"
    },
    {
      image: "/api/placeholder/400/400",
      title: "Yellow-Orange Georgette Fabric With Floral Print",
      price: "Rs. 974.00",
      category: "bestseller"
    },
    {
      image: "/api/placeholder/400/400",
      title: "Yellow Tussar Floral Printed Fabric",
      price: "Rs. 853.00",
      category: "bestseller"
    },
    {
      image: "/api/placeholder/400/400",
      title: "Blue Silk Cotton Blend",
      price: "Rs. 2,150.00",
      category: "new"
    },
    {
      image: "/api/placeholder/400/400",
      title: "Green Chanderi Silk",
      price: "Rs. 1,599.00",
      category: "new"
    },
    {
      image: "/api/placeholder/400/400",
      title: "Red Embroidered Organza",
      price: "Rs. 3,250.00",
      category: "new"
    }
  ];

  // Hero Slider States
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [scaleOut, setScaleOut] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const heroAutoplayTimerRef = useRef(null);
  const transitionTimerRef = useRef(null);
  
  // Product Slider States
  const [activeTab, setActiveTab] = useState("bestseller");
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const productsPerPage = 5;
  const productsSliderRef = useRef(null);
  const productsAutoplayRef = useRef(null);
  
  // Touch references for swipe functionality
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Handle initial animation on component mount for hero slider
  useEffect(() => {
    setInitialLoad(true);
    // Set initial animation timer
    const timer = setTimeout(() => {
      setInitialLoad(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Check if mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Setup auto slide functionality for hero slider
  useEffect(() => {
    startHeroAutoplay();

    return () => {
      clearInterval(heroAutoplayTimerRef.current);
      clearTimeout(transitionTimerRef.current);
    };
  }, []); // Run only once on component mount

  // Filter products based on active tab
  useEffect(() => {
    const filtered = products.filter(product => product.category === activeTab);
    setVisibleProducts(filtered);
    setCurrentPage(0);
  }, [activeTab]);

  // Set up autoplay for products slider
  useEffect(() => {
    startProductsAutoplay();
    return () => clearInterval(productsAutoplayRef.current);
  }, [currentPage, visibleProducts]);

  // Hero slider autoplay
  const startHeroAutoplay = () => {
    clearInterval(heroAutoplayTimerRef.current);
    heroAutoplayTimerRef.current = setInterval(() => {
      goToNextSlide();
    }, 5000); // Change slide every 5 seconds
  };
  
  // Products slider autoplay
  const startProductsAutoplay = () => {
    clearInterval(productsAutoplayRef.current);
    productsAutoplayRef.current = setInterval(() => {
      const totalPages = Math.ceil(visibleProducts.length / productsPerPage);
      if (currentPage < totalPages - 1) {
        handlePageChange(currentPage + 1, 'next');
      } else {
        handlePageChange(0, 'next');
      }
    }, 6000);
  };

  // Hero slider navigation
  const goToNextSlide = () => {
    if (animating) return;
    
    setAnimating(true);
    setScaleOut(true);
    
    transitionTimerRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      
      setTimeout(() => {
        setScaleOut(false);
        setTimeout(() => {
          setAnimating(false);
        }, 1000);
      }, 400);
    }, 600);
  };
  
  const goToPrevSlide = () => {
    if (animating) return;
    
    setAnimating(true);
    setScaleOut(true);
    
    transitionTimerRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
      
      setTimeout(() => {
        setScaleOut(false);
        setTimeout(() => {
          setAnimating(false);
        }, 1000);
      }, 400);
    }, 600);
  };
  
  // Swipe functionality for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const diffX = touchStartX.current - touchEndX.current;
    
    if (Math.abs(diffX) > 50) { // threshold of 50px
      if (diffX > 0) {
        goToNextSlide();
      } else {
        goToPrevSlide();
      }
    }
    
    touchStartX.current = null;
    touchEndX.current = null;
  };
  
  // Products slider page change with animation
  const handlePageChange = (newPage, dir) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection(dir);
    
    setTimeout(() => {
      setCurrentPage(newPage);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 300);
  };

  // Calculate products pagination
  const totalPages = Math.ceil(visibleProducts.length / productsPerPage);
  const startIndex = currentPage * productsPerPage;
  const endIndex = Math.min(startIndex + productsPerPage, visibleProducts.length);
  const currentProducts = visibleProducts.slice(startIndex, endIndex);

  // Products navigation
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      handlePageChange(currentPage + 1, 'next');
    } else {
      handlePageChange(0, 'next');
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      handlePageChange(currentPage - 1, 'prev');
    } else {
      handlePageChange(totalPages - 1, 'prev');
    }
  };

  return (
    <section 
      className="relative w-full h-130 sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        ref={sliderRef} 
        className={`w-full h-full transition-transform duration-500 ease-in-out ${scaleOut ? 'scale-90' : 'scale-100'}`}
      >
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 flex items-center w-full h-full bg-cover bg-center transition-opacity duration-500 ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{ 
              backgroundImage: `url(${slide.backgroundImage})`
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            
            <div className="relative z-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto w-full">
              {/* Title Section */}
              <div className="overflow-hidden mb-4 md:mb-8">
                {/* Separator line */}
                <div className="relative h-px w-full bg-transparent mt-2 md:mt-4 mb-4 md:mb-8">
                </div>
              </div>
              
              {/* Info Section */}
              <div className="max-w-xs sm:max-w-sm md:max-w-md">
                <div 
                  className={`transform transition-all duration-700 delay-300 ${
                    currentSlide === index && (initialLoad || !scaleOut) 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-32 opacity-0'
                  }`}
                >
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Button - Only right button, only on desktop */}
      <div className="hidden md:block absolute bottom-20 sm:bottom-24 md:bottom-32 lg:bottom-40 right-4 sm:right-8 md:right-12 lg:right-16 z-30">
        <button
          onClick={goToNextSlide}
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all duration-300"
          disabled={animating}
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
        </button>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (animating || index === currentSlide) return;
              
              setAnimating(true);
              setScaleOut(true);
              
              transitionTimerRef.current = setTimeout(() => {
                setCurrentSlide(index);
                
                setTimeout(() => {
                  setScaleOut(false);
                  setTimeout(() => {
                    setAnimating(false);
                  }, 1000);
                }, 400);
              }, 600);
            }}
            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-6 sm:w-8' : 'bg-white bg-opacity-50'
            }`}
            disabled={animating}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default EnhancedSlider;
    <>
      {/* Hero Slider Section */}
      <section 
        className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          ref={sliderRef} 
          className={`w-full h-full transition-transform duration-500 ease-in-out ${scaleOut ? 'scale-90' : 'scale-100'}`}
        >
          {heroSlides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 flex items-center w-full h-full bg-cover bg-center transition-opacity duration-500 ${
                currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              style={{ 
                backgroundImage: `url(${slide.backgroundImage})`
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
              
              <div className="relative z-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto w-full">
                {/* Title Section */}
                <div className="overflow-hidden mb-4 md:mb-8">
                  <h2 
                    className={`text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light transform transition-all duration-700 delay-100 ${
                      currentSlide === index && (initialLoad || !scaleOut) 
                        ? 'translate-y-0 opacity-100' 
                        : '-translate-y-16 opacity-0'
                    }`}
                  >
                    {slide.title}
                  </h2>
                  <h1 
                    className={`text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold transform transition-all duration-700 delay-200 ${
                      currentSlide === index && (initialLoad || !scaleOut) 
                        ? 'translate-y-0 opacity-100' 
                        : '-translate-y-16 opacity-0'
                    }`}
                  >
                    {slide.titleLarge}
                  </h1>
                  
                  {/* Separator line */}
                  <div className="relative h-px w-full bg-transparent mt-2 md:mt-4 mb-4 md:mb-8">
                    <div 
                      className={`h-0.5 bg-white transform transition-all duration-1000 delay-300 ${
                        currentSlide === index && (initialLoad || !scaleOut) 
                          ? 'w-20 sm:w-32 md:w-48 opacity-100' 
                          : 'w-0 opacity-0'
                      }`}
                    ></div>
                  </div>
                </div>
                
                {/* Info Section */}
                <div className="max-w-xs sm:max-w-sm md:max-w-md">
                  <div 
                    className={`transform transition-all duration-700 delay-300 ${
                      currentSlide === index && (initialLoad || !scaleOut) 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-32 opacity-0'
                    }`}
                  >
                    <h3 className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-4">{slide.subtitle}</h3>
                    <p className="text-white text-sm sm:text-base opacity-80">{slide.body}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Button - Only right button, only on desktop */}
        <div className="hidden md:block absolute bottom-20 sm:bottom-24 md:bottom-32 lg:bottom-40 right-4 sm:right-8 md:right-12 lg:right-16 z-30">
          <button
            onClick={goToNextSlide}
            onMouseEnter={() => clearInterval(heroAutoplayTimerRef.current)}
            onMouseLeave={startHeroAutoplay}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 transform hover:scale-110"
            disabled={animating}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </button>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-30">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (animating || index === currentSlide) return;
                
                setAnimating(true);
                setScaleOut(true);
                
                transitionTimerRef.current = setTimeout(() => {
                  setCurrentSlide(index);
                  
                  setTimeout(() => {
                    setScaleOut(false);
                    setTimeout(() => {
                      setAnimating(false);
                    }, 1000);
                  }, 400);
                }, 600);
              }}
              onMouseEnter={() => clearInterval(heroAutoplayTimerRef.current)}
              onMouseLeave={startHeroAutoplay}
              className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-6 sm:w-8' : 'bg-white bg-opacity-50'
              }`}
              disabled={animating}
            ></button>
          ))}
        </div>
      </section>

      {/* Trending Designs Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
        {/* Section Header with animated line before and after */}
        <div className="text-center mb-12 relative">
          {/* Decorative line before */}
          <div className="hidden md:block absolute left-0 top-1/2 w-1/4 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
          
          <h2 className="text-4xl font-serif mb-8 relative inline-block px-8">
            <span className="relative z-10">Trending Designs</span>
            {/* Animated underline effect */}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full"></span>
          </h2>
          
          {/* Decorative line after */}
          <div className="hidden md:block absolute right-0 top-1/2 w-1/4 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          
          {/* Tab Navigation */}
          <div className="flex justify-center">
            <div className="border-b border-gray-200 inline-flex">
              <button
                onClick={() => setActiveTab("bestseller")}
                className={`relative pb-2 px-6 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                  activeTab === "bestseller" 
                    ? "border-b-2 border-black" 
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Best Selling Products
                {/* Animated bottom line on hover */}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${
                  activeTab === "bestseller" ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </button>
              <button
                onClick={() => setActiveTab("new")}
                className={`relative pb-2 px-6 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                  activeTab === "new" 
                    ? "border-b-2 border-black" 
                    : "text-gray-500 hover:text-black"
                }`}
              >
                New Arrivals
                {/* Animated bottom line on hover */}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${
                  activeTab === "new" ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid with Enhanced Slider */}
        <div className="relative py-8">
          {/* Previous Button with animation */}
          <button 
            onClick={prevPage}
            onMouseEnter={() => clearInterval(productsAutoplayRef.current)}
            onMouseLeave={startProductsAutoplay}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Products with animation */}
          <div 
            ref={productsSliderRef}
            className="grid grid-cols-5 gap-6 overflow-hidden"
          >
            {currentProducts.map((product, index) => (
              <div 
                key={index} 
                className={`group relative transition-all duration-700 transform ${
                  isAnimating 
                    ? direction === 'next'
                      ? '-translate-x-full opacity-0'
                      : 'translate-x-full opacity-0'
                    : 'translate-x-0 opacity-100'
                }`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Product Image Container */}
                <div className="aspect-square overflow-hidden rounded-lg mb-3 bg-gray-100 relative">
                  {/* Image */}
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    {/* Quick view button */}
                    <button className="bg-white text-black rounded-full p-3 mx-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white">
                      <Eye size={18} />
                    </button>
                    {/* Add to cart button */}
                    <button className="bg-white text-black rounded-full p-3 mx-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-black hover:text-white">
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>
                
                {/* Product Details with animation */}
                <div className="relative overflow-hidden">
                  <h3 className="text-sm font-medium line-clamp-2 mb-2 group-hover:text-black transition-colors duration-300">{product.title}</h3>
                  <p className="font-medium relative">
                    {product.price}
                    {/* Animated line that appears on hover */}
                    <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-black transition-all duration-500"></span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button with animation */}
          <button 
            onClick={nextPage}
            onMouseEnter={() => clearInterval(productsAutoplayRef.current)}
            onMouseLeave={startProductsAutoplay}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Pagination Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index, index > currentPage ? 'next' : 'prev')}
                onMouseEnter={() => clearInterval(productsAutoplayRef.current)}
                onMouseLeave={startProductsAutoplay}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentPage === index 
                    ? 'w-6 bg-black' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingDesigns;