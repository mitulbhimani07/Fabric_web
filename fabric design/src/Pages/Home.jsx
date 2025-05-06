import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EnhancedSlider = () => {
  // Slider data - similar to your Blue Planet slides
  const slides = [
    {
      backgroundImage: "https://cdn.shopify.com/s/files/1/0648/9836/7707/files/Banner-4.jpg?v=1745578338",
      title: "Underwater",
      titleLarge: "Monsters",
      subtitle: "Saltwater Crocodile",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      backgroundImage: "https://cdn.shopify.com/s/files/1/0648/9836/7707/files/LINEN_f6e5cfa7-2c77-43e6-84c3-8afbdcaee958.png?v=1744014788",
      title: "The",
      titleLarge: "Gates of Hell",
      subtitle: "Special inside volcanoes",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      backgroundImage: "https://cdn.shopify.com/s/files/1/0648/9836/7707/files/Banner-2.jpg?v=1744288305",
      title: "Exploring",
      titleLarge: "Deep Caves",
      subtitle: "Real Time Capsules",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [scaleOut, setScaleOut] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const autoplayTimerRef = useRef(null);
  const transitionTimerRef = useRef(null);
  
  // Handle initial animation on component mount
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
  
  // Setup auto slide functionality
  useEffect(() => {
    startAutoplay();

    return () => {
      clearInterval(autoplayTimerRef.current);
      clearTimeout(transitionTimerRef.current);
    };
  }, []); // Run only once on component mount

  const startAutoplay = () => {
    clearInterval(autoplayTimerRef.current);
    autoplayTimerRef.current = setInterval(() => {
      goToNextSlide();
    }, 5000); // Change slide every 5 seconds
  };
  
  const goToNextSlide = () => {
    if (animating) return;
    
    setAnimating(true);
    setScaleOut(true);
    
    transitionTimerRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      
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
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      
      setTimeout(() => {
        setScaleOut(false);
        setTimeout(() => {
          setAnimating(false);
        }, 1000);
      }, 400);
    }, 600);
  };
  
  // Swipe functionality for mobile
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  
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