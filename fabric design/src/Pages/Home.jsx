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
    }, 5000); // Change slide every 3 seconds
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
  
  return (
    <section className="relative w-full h-130 bg-white   overflow-hidden">
      <div 
        ref={sliderRef} 
        className={`w-full h-130 transition-transform duration-500 ease-in-out ${scaleOut ? 'scale-60' : 'scale-100'}`}
      >
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 flex items-center w-full h-full bg-cover bg-center transition-opacity duration-500 ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{ 
              backgroundImage: `url(${slide.backgroundImage})`,
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            
            <div className="relative z-20 px-8 max-w-6xl mx-auto w-full">
              {/* Title Section */}
              <div className="overflow-hidden mb-8">
               
                
                {/* Separator line */}
                <div className="relative h-px w-full bg-transparent mt-4 mb-8">
                 
                </div>
              </div>
              
              {/* Info Section */}
              <div className="max-w-md">
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
      
    
     
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
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
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-8' : 'bg-white bg-opacity-50'
            }`}
            disabled={animating}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default EnhancedSlider;