import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Eye, ShoppingBag } from 'lucide-react';

const TrendingDesigns = () => {
  // Hero Slider Data
  const heroSlides = [
    {
      backgroundImage: "https://fabricbysinghanias.com/cdn/shop/files/desktop_banner.png?v=1742377604&width=2000",
      title: "Underwater",
      titleLarge: "Monsters",
      subtitle: "Saltwater Crocodile",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      backgroundImage: "https://fabricbysinghanias.com/cdn/shop/files/9.png?v=1739023978&width=2000",
      title: "The",
      titleLarge: "Gates of Hell",
      subtitle: "Special inside volcanoes",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      backgroundImage: "https://fabricbysinghanias.com/cdn/shop/files/2_12_2024_db.jpg?v=1733141503&width=2000",
      title: "Exploring",
      titleLarge: "Deep Caves",
      subtitle: "Real Time Capsules",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  // Products data
  const products = [
    {
      image: "https://fabricbysinghanias.com/cdn/shop/products/5_2_db2cb20c-da37-4c7c-89f5-1e79533f15e4.jpg?v=1743752590&width=600",
      title: "Zinc Yellow Banarasi Ektara Silk Handloom Fabric With Floral Motifs",
      price: "Rs. 5,979.00",
      category: "bestseller"
    },
    {
      image: "https://fabricbysinghanias.com/cdn/shop/products/281788-1.jpg?v=1743752307&width=800",
      title: "Yellowish Orange Shade Printed Dupion Silk Fabric",
      price: "Rs. 1,854.00",
      category: "bestseller"
    },
    {
      image: "https://fabricbysinghanias.com/cdn/shop/files/486836-1.jpg?v=1743750607&width=800",
      title: "Yellow-Orange Printed Pichwai Rawsilk Fabric With Embroidery",
      price: "Rs. 1,848.00",
      category: "bestseller"
    },
    {
      image: "https://fabricbysinghanias.com/cdn/shop/files/477896-02.jpg?v=1743750972&width=800",
      title: "Yellow-Orange Georgette Fabric With Floral Print",
      price: "Rs. 974.00",
      category: "bestseller"
    },
    {
      image: "https://fabricbysinghanias.com/cdn/shop/products/455061-02_17d207d5-0408-4ee6-b81c-7003e988efc0.jpg?v=1743751319&width=800",
      title: "Yellow Tussar Floral Printed Fabric",
      price: "Rs. 853.00",
      category: "bestseller"
    },
    {
      image: "https://fabriccollection.com.au/cdn/shop/products/silk-cotton-fabric-periwinkle_400x.jpg?v=1674895662",
      title: "Blue Silk Cotton Blend",
      price: "Rs. 2,150.00",
      category: "new"
    },
    {
      image: "https://hpsingh-storage.s3.ap-south-1.amazonaws.com/media/2162625-(4).jpg",
      title: "Green Chanderi Silk",
      price: "Rs. 1,599.00",
      category: "new"
    },
    {
      image: "https://5.imimg.com/data5/ECOM/Default/2023/1/IO/EZ/IF/85504720/tradeunoday1-776-500x500.jpg",
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
  }, []);

  // Filter products based on active tab
  useEffect(() => {
    const filtered = products.filter(product => product.category === activeTab);
    setVisibleProducts(filtered);
    setCurrentPage(0);
  }, [activeTab, products]);

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
    }, 5000);
  };
  
  // Products slider autoplay
  const startProductsAutoplay = () => {
    clearInterval(productsAutoplayRef.current);
    if (visibleProducts.length > 0) {
      productsAutoplayRef.current = setInterval(() => {
        const totalPages = Math.ceil(visibleProducts.length / productsPerPage);
        if (currentPage < totalPages - 1) {
          handlePageChange(currentPage + 1, 'next');
        } else {
          handlePageChange(0, 'next');
        }
      }, 6000);
    }
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
    
    if (Math.abs(diffX) > 50) {
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
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
              
              <div className="relative z-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto w-full">
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
        <div className="text-center mb-12 relative">
          <div className="hidden md:block absolute left-0 top-1/2 w-1/4 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
          
          <h2 className="text-4xl font-serif mb-8 relative inline-block px-8">
            <span className="relative z-10">Trending Designs</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full"></span>
          </h2>
          
          <div className="hidden md:block absolute right-0 top-1/2 w-1/4 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          
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
                <span className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${
                  activeTab === "new" ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative py-8">
          <button 
            onClick={prevPage}
            onMouseEnter={() => clearInterval(productsAutoplayRef.current)}
            onMouseLeave={startProductsAutoplay}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>

          <div 
            ref={productsSliderRef}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 overflow-hidden"
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
                <div className="aspect-square overflow-hidden rounded-lg mb-3 bg-gray-100 relative">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="bg-white text-black rounded-full p-3 mx-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white">
                      <Eye size={18} />
                    </button>
                    <button className="bg-white text-black rounded-full p-3 mx-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-black hover:text-white">
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <h3 className="text-sm font-medium line-clamp-2 mb-2 group-hover:text-black transition-colors duration-300">{product.title}</h3>
                  <p className="font-medium relative">
                    {product.price}
                    <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-black transition-all duration-500"></span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={nextPage}
            onMouseEnter={() => clearInterval(productsAutoplayRef.current)}
            onMouseLeave={startProductsAutoplay}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>
          
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



    {/* Special Offer Section */}
<section className="relative py-20 bg-gradient-to-r from-amber-50 to-rose-50 overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-amber-200 blur-3xl opacity-20"></div>
  <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-rose-200 blur-3xl opacity-20"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="flex flex-col lg:flex-row items-center">
      {/* Left side - Image */}
      <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10 relative">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-700 h-[500px]"> {/* Increased height */}
          <img 
            src="https://fabricbysinghanias.com/cdn/shop/files/desktop_banner.png?v=1742377604&width=1000" 
            alt="Special Offer" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute top-5 left-5 bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            LIMITED TIME
          </div>
        </div>
        
        {/* Floating discount tag */}
        <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-full shadow-xl border-4 border-amber-400">
          <div className="bg-gradient-to-r from-amber-400 to-rose-500 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">30%</span>
            <span className="text-xs uppercase">OFF</span>
          </div>
        </div>
      </div>
      
      {/* Right side - Content */}
      <div className="lg:w-1/2 lg:pl-10">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          <span className="text-rose-600">Premium Textile</span> Exclusive Offer
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Elevate your wardrobe with our premium fabrics at unprecedented prices. 
          This exclusive offer won't last long - shop now before time runs out!
        </p>
        
        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="relative overflow-hidden bg-black text-white px-8 py-4 rounded-lg font-medium group">
            <span className="relative z-10">Shop The Sale</span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
          <button className="relative overflow-hidden bg-white text-black px-8 py-4 rounded-lg font-medium border border-black group">
            <span className="relative z-10">View Collection</span>
            <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </button>
        </div>
        
        {/* Small text */}
        <p className="text-sm text-gray-500 mt-6">
          *Offer valid on selected items only. Use code <span className="font-bold">SUMMER30</span> at checkout.
        </p>
      </div>
    </div>
  </div>
</section>



          {/* New Exclusive Fabric Offer Section */}
<section className="py-20 overflow-hidden bg-stone-50 relative">
  {/* Decorative elements */}
  <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-amber-100 mix-blend-multiply opacity-40 blur-3xl"></div>
  <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-rose-100 mix-blend-multiply opacity-30 blur-3xl"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-serif mb-4">
        <span className="text-amber-800">Seasonal</span> Collection
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-rose-500 mx-auto mb-4"></div>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Discover our handpicked selection of premium fabrics at exceptional prices
      </p>
    </div>
    
    {/* Image Mosaic Grid */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
      {/* Large feature image */}
      <div className="md:col-span-8 relative group overflow-hidden rounded-xl shadow-lg h-96 mt-7">
        <img 
          src="https://fabricbysinghanias.com/cdn/shop/files/2_12_2024_db.jpg?v=1733141503&width=1400" 
          alt="Premium Silk Collection" 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
  <div className="mb-3">
    <span className="bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block">
      30% OFF
    </span>
  </div>
  <h3 className="text-white text-2xl md:text-3xl font-serif mb-2">Premium Silk Collection</h3>
  <p className="text-white/90 mb-4">Handcrafted excellence for your wardrobe</p>
  <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
    <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-amber-400 transition-colors duration-300">
      Shop Now
    </button>
  </div>
</div>
      </div>
      
      {/* Right column stack */}
      <div className="md:col-span-4 grid grid-rows-2 gap-4 md:gap-6">
        {/* Top right image */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg">
          <img 
            src="https://fabricbysinghanias.com/cdn/shop/files/9.png?v=1739023978&width=800" 
            alt="Traditional Designs" 
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
  <div className="mb-2">
    <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block">
      NEW ARRIVAL
    </span>
  </div>
  <h3 className="text-white text-xl font-serif mb-1">Traditional Designs</h3>
  <div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
    <button className="text-white border-b border-white hover:border-amber-400 hover:text-amber-400 transition-colors duration-300 text-sm">
      Explore →
    </button>
  </div>
</div>
        </div>
        
        {/* Bottom right image */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg">
          <img 
            src="https://fabricbysinghanias.com/cdn/shop/files/desktop_banner.png?v=1742377604&width=800" 
            alt="Luxury Fabric" 
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
  <div className="mb-2">
    <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block">
    LIMITED STOCK
    </span>
  </div>
  <h3 className="text-white text-xl font-serif mb-1">Luxury Fabric</h3>
  <div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
    <button className="text-white border-b border-white hover:border-amber-400 hover:text-amber-400 transition-colors duration-300 text-sm">
    Discover →
    </button>
  </div>
</div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Premium Fabric Showcase */}
      <section className="relative py-20 bg-gradient-to-b from-stone-50 to-white overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-amber-100 blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-0 w-40 h-40 rounded-full bg-stone-200 blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">
              <span className="opacity-70">Luxury</span> Fabric Collections
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handcrafted elegance for the modern connoisseur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Royal Banarasi Silk",
                price: "From ₹6,999",
                image: "https://fabricbysinghanias.com/cdn/shop/files/2_12_2024_db.jpg?v=1733141503&width=600",
                tag: "Bestseller",
                hoverEffect: "hover:rotate-3 hover:scale-105"
              },
              {
                title: "Heritage Linen",
                price: "From ₹3,499",
                image: "https://fabricbysinghanias.com/cdn/shop/files/9.png?v=1739023978&width=600",
                tag: "Eco-Friendly",
                hoverEffect: "hover:-rotate-2 hover:scale-105"
              },
              {
                title: "Pichwai Silk",
                price: "From ₹4,899",
                image: "https://fabricbysinghanias.com/cdn/shop/files/desktop_banner.png?v=1742377604&width=600",
                tag: "Hand-Embroidered",
                hoverEffect: "hover:rotate-1 hover:scale-105"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`relative group overflow-hidden rounded-xl transition-all duration-500 ease-in-out shadow-lg ${item.hoverEffect}`}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-medium mb-1">{item.title}</h3>
                    <p className="text-white/90">{item.price}</p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-medium shadow-md transform translate-y-0 group-hover:-translate-y-2 transition-all duration-300">
                  {item.tag}
                </div>

                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-white text-black px-6 py-2 rounded-full font-medium shadow-lg transition-all duration-500 hover:bg-black hover:text-white">
                  View Collection
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="relative inline-flex items-center px-8 py-3 bg-black text-white rounded-full overflow-hidden group">
              <span className="relative z-10">Explore All Fabrics</span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute top-0 left-0 w-10 h-full bg-white/30 -skew-x-12 -translate-x-16 group-hover:translate-x-64 transition-all duration-700"></span>
            </button>
          </div>
        </div>
      </section>

      {/* Fabric Story Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 300L1440 0" stroke="black" strokeWidth="0.5" strokeDasharray="5,5" />
            <path d="M0 100L1440 400" stroke="black" strokeWidth="0.5" strokeDasharray="5,5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
              <span className="opacity-80">The Art of</span> <span className="italic">Weaving</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each thread tells a story. Discover the craftsmanship behind our fabrics.
            </p>
          </div>

          <div className="relative h-[800px] md:h-[1000px] mb-20">
            <div 
            
              className="absolute inset-0 bg-[url('https://fabricbysinghanias.com/cdn/shop/files/9.png?v=1739023978&width=1800')] bg-cover bg-center opacity-20"
              style={{ backgroundAttachment: 'fixed' }}
            ></div>

            <div className="relative h-full flex flex-col justify-center">
              <div 
                className="w-full md:w-2/3 bg-white p-8 md:p-12 shadow-xl mb-12 transform transition-all duration-1000 hover:rotate-1 hover:shadow-2xl"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
                    <img 
                      src="https://fabricbysinghanias.com/cdn/shop/files/2_12_2024_db.jpg?v=1733141503&width=800" 
                      alt="Banarasi Silk"
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <span className="text-sm font-medium text-amber-600 mb-2 block">Since 1927</span>
                    <h3 className="text-2xl md:text-3xl font-serif mb-4">Banarasi Silk Legacy</h3>
                    <p className="text-gray-700 mb-6">
                      Woven with gold & silver zari, our Banarasi silks carry generations of craftsmanship. 
                      Each piece takes 15-30 days to create by master weavers in Varanasi.
                    </p>
                    <button className="text-black border-b border-black pb-1 hover:border-amber-500 transition-all">
                      Explore the Collection →
                    </button>
                  </div>
                </div>
              </div>

              <div 
                className="w-full md:w-2/3 ml-auto bg-stone-50 p-8 md:p-12 shadow-xl transform transition-all duration-1000 hover:-rotate-1 hover:shadow-2xl"
              >
                <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                  <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
                    <img 
                      src="https://fabricbysinghanias.com/cdn/shop/files/9.png?v=1739023978&width=800" 
                      alt="Premium Linen"
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <span className="text-sm font-medium text-green-600 mb-2 block">Eco-Friendly</span>
                    <h3 className="text-2xl md:text-3xl font-serif mb-4">Linen: Nature's Luxury</h3>
                    <p className="text-gray-700 mb-6">
                      Grown from flax plants, our linen fabrics are breathable, durable, and become softer with every wash. 
                      Perfect for sustainable elegance.
                    </p>
                    <button className="text-black border-b border-black pb-1 hover:border-green-500 transition-all">
                      Discover Linen →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="relative inline-block px-8 py-4 bg-black text-white rounded-lg overflow-hidden group">
              <span className="relative z-10">Begin Your Fabric Journey</span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute top-0 left-0 w-10 h-full bg-white/30 -skew-x-12 -translate-x-16 group-hover:translate-x-96 transition-all duration-1000"></span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingDesigns;