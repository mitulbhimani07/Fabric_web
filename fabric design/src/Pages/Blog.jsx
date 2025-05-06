import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';

function Blog() {
  // Featured blog posts data
  const featuredPosts = [
    {
      backgroundImage: "https://images.unsplash.com/photo-1603912699214-92627f304eb6?q=80&w=2942&auto=format&fit=crop",
      title: "The History of Banarasi Silk: A Royal Legacy",
      category: "Fabric History",
      date: "May 2, 2025",
      author: "Asha Sharma",
      readTime: "8 min read"
    },
    {
      backgroundImage: "https://images.unsplash.com/photo-1586132134459-186dd101e04d?q=80&w=2940&auto=format&fit=crop",
      title: "Summer Fabric Guide: Staying Cool with Natural Textiles",
      category: "Fashion Guide",
      date: "April 28, 2025",
      author: "Raj Patel",
      readTime: "6 min read"
    },
    {
      backgroundImage: "https://images.unsplash.com/photo-1589891685744-f58d05e8e7d4?q=80&w=2940&auto=format&fit=crop",
      title: "Traditional Weaving Techniques of India",
      category: "Craftsmanship",
      date: "April 15, 2025",
      author: "Priya Nair",
      readTime: "10 min read"
    }
  ];

  // Recent blog posts data
  const recentPosts = [
    {
      image: "https://images.unsplash.com/photo-1604979362949-306e7a082937?q=80&w=2787&auto=format&fit=crop",
      title: "How to Care for Your Silk Fabrics: Essential Tips",
      excerpt: "Learn the proper methods to clean, store, and maintain your precious silk fabrics to ensure they last for generations...",
      category: "Fabric Care",
      date: "May 1, 2025",
      author: "Meena Singh"
    },
    {
      image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2080&auto=format&fit=crop",
      title: "The Rise of Sustainable Fabrics in Modern Fashion",
      excerpt: "Explore how eco-friendly textiles are revolutionizing the fashion industry and reducing environmental impact...",
      category: "Sustainability",
      date: "April 25, 2025",
      author: "Rahul Gupta"
    },
    {
      image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2940&auto=format&fit=crop",
      title: "Color Trends for 2025: What's Hot in Fabric Design",
      excerpt: "Discover the trending color palettes that are dominating the fabric and fashion industry this season...",
      category: "Trends",
      date: "April 20, 2025",
      author: "Nisha Mehta"
    },
    {
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2574&auto=format&fit=crop",
      title: "Fabric Mixing Guide: Creating Perfect Combinations",
      excerpt: "Master the art of combining different fabrics and textures to create stunning fashion pieces and home decor...",
      category: "Design Tips",
      date: "April 18, 2025",
      author: "Arjun Reddy"
    }
  ];

  // Category tabs
  const categories = [
    "All Posts",
    "Fabric Care",
    "Design Tips", 
    "Sustainability",
    "Trends",
    "Craftsmanship",
    "Fashion Guide"
  ];

  // Popular tags
  const tags = [
    "Silk", "Cotton", "Banarasi", "Sustainable", "Handloom",
    "Traditional", "Modern", "Designer", "Wedding", "Seasonal",
    "DIY", "Embroidery", "Print", "Dye", "Organic"
  ];

  // States
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [animating, setAnimating] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  // Handle initial animation on component mount
  useEffect(() => {
    setInitialLoad(true);
    const timer = setTimeout(() => {
      setInitialLoad(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Featured slider navigation
  const goToNextSlide = () => {
    if (animating) return;
    
    setAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
      setTimeout(() => {
        setAnimating(false);
      }, 500);
    }, 300);
  };
  
  const goToPrevSlide = () => {
    if (animating) return;
    
    setAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? featuredPosts.length - 1 : prev - 1));
      setTimeout(() => {
        setAnimating(false);
      }, 500);
    }, 300);
  };

  return (
    <div className="bg-white">
      {/* Blog Header Section */}
      <section className="relative w-full h-[300px] sm:h-[400px] overflow-hidden bg-gray-100">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1553242072-345b34e7b55b?q=80&w=2940&auto=format&fit=crop")` }}></div>
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
          <div className="overflow-hidden mb-4">
            <h1 className={`text-white text-4xl sm:text-5xl md:text-6xl font-bold transform transition-all duration-700 delay-200 ${
              initialLoad ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'
            }`}>
              Our Blog
            </h1>
          </div>
          <div className="relative h-px w-full max-w-xs bg-transparent mt-2 mb-4">
            <div className={`h-0.5 bg-white transform transition-all duration-1000 delay-300 ${
              initialLoad ? 'w-20 sm:w-32 md:w-48 opacity-100' : 'w-20 sm:w-32 md:w-48 opacity-100'
            }`}></div>
          </div>
          <p className={`text-white text-lg max-w-2xl transform transition-all duration-700 delay-400 ${
            initialLoad ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'
          }`}>
            Dive into the colorful world of fabrics, design inspirations, and fashion trends
          </p>
        </div>
      </section>

      {/* Featured Posts Slider */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Section Header with animated line */}
        <div className="text-center mb-10 relative">
          <div className="hidden md:block absolute left-0 top-1/2 w-1/4 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
          
          <h2 className="text-3xl font-serif mb-6 relative inline-block px-8">
            <span className="relative z-10">Featured Articles</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full"></span>
          </h2>
          
          <div className="hidden md:block absolute right-0 top-1/2 w-1/4 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
        </div>

        {/* Featured Posts Slider */}
        <div className="relative">
          {/* Previous Button */}
          <button 
            onClick={goToPrevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Featured Post */}
          <div className="overflow-hidden">
            {featuredPosts.map((post, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 transform ${
                  currentSlide === index ? 'opacity-100 translate-x-0' : 'opacity-0 absolute'
                }`}
                style={{ display: currentSlide === index ? 'block' : 'none' }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Image */}
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src={post.backgroundImage}
                      alt={post.title}
                      className="w-full h-80 object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 uppercase tracking-wider mb-2">{post.category}</span>
                    <h3 className="text-2xl md:text-3xl font-medium mb-4">{post.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button className="self-start group flex items-center font-medium text-black transition-all duration-300">
                      Read More 
                      <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button 
            onClick={goToNextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {featuredPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (animating || index === currentSlide) return;
                  setAnimating(true);
                  setTimeout(() => {
                    setCurrentSlide(index);
                    setTimeout(() => {
                      setAnimating(false);
                    }, 500);
                  }, 300);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'w-6 bg-black' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts with Sidebar */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content - Recent Posts */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-serif mb-8 relative inline-block">
              <span className="relative z-10">Recent Articles</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-black"></span>
            </h2>

            {/* Category Tabs */}
            <div className="flex flex-wrap mb-8 border-b border-gray-200">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`relative pb-2 px-4 text-sm font-medium tracking-wide transition-all duration-300 ${
                    activeCategory === category 
                      ? "border-b-2 border-black" 
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {category}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${
                    activeCategory === category ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Recent Posts Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              {recentPosts.map((post, index) => (
                <div 
                  key={index} 
                  className="group"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    transform: initialLoad ? 'translateY(20px)' : 'translateY(0)',
                    opacity: initialLoad ? 0 : 1,
                    transition: 'all 0.5s ease-out'
                  }}
                >
                  {/* Post Image */}
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-52 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Post Details */}
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{post.category}</span>
                  <h3 className="text-lg font-medium mt-2 mb-2 group-hover:text-black transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>By {post.author}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-10 text-center">
              <button className="px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1 space-y-8">
            {/* Search Bar */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-4">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full border border-gray-200 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all"
                />
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-100 hover:bg-black hover:text-white rounded-md transition-all duration-300"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-gray-600 mb-4">Stay updated with our latest articles and fabric trends.</p>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full border border-gray-200 rounded-md py-2 px-4 mb-3 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all"
              />
              <button className="w-full py-2 bg-black text-white hover:bg-gray-800 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Inspiration Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 relative">
            <div className="hidden md:block absolute left-0 top-1/2 w-1/4 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            
            <h2 className="text-3xl font-serif mb-4 relative inline-block px-8">
              <span className="relative z-10">Fabric Inspiration</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full"></span>
            </h2>
            
            <div className="hidden md:block absolute right-0 top-1/2 w-1/4 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore stunning fabric combinations and creative ideas for your next project
            </p>
          </div>

          {/* Inspiration Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1589365278144-c9e705f843ba?q=80&w=2787&auto=format&fit=crop" 
                alt="Fabric inspiration 1"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="px-4 text-center transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white font-medium mb-2">Silk Collection</h3>
                  <button className="text-sm text-white underline hover:no-underline">
                    View Collection
                  </button>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1621812975736-de701798127d?q=80&w=2787&auto=format&fit=crop" 
                alt="Fabric inspiration 2"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="px-4 text-center transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white font-medium mb-2">Cotton Collection</h3>
                  <button className="text-sm text-white underline hover:no-underline">
                    View Collection
                  </button>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1617184003107-0df15fea4903?q=80&w=2787&auto=format&fit=crop" 
                alt="Fabric inspiration 3"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="px-4 text-center transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white font-medium mb-2">Linen Collection</h3>
                  <button className="text-sm text-white underline hover:no-underline">
                    View Collection
                  </button>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2880&auto=format&fit=crop" 
                alt="Fabric inspiration 4"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="px-4 text-center transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white font-medium mb-2">Traditional Collection</h3>
                  <button className="text-sm text-white underline hover:no-underline">
                    View Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;