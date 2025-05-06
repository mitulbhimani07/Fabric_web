import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Eye, ShoppingBag, Filter, ArrowUpDown, Heart } from 'lucide-react';

const NewArrival = () => {
  // Banner image for the top of the page
  const bannerImage = "/api/placeholder/1920/600";

  // Products data for new arrivals
  const products = [
    {
      id: 1,
      image: "/api/placeholder/400/400",
      title: "Royal Blue Banarasi Silk With Gold Zari Work",
      price: "Rs. 7,499.00",
      originalPrice: "Rs. 9,999.00",
      discount: "25% OFF",
      category: "Silk",
      isNew: true
    },
    {
      id: 2,
      image: "/api/placeholder/400/400",
      title: "Emerald Green Chanderi Silk With Silver Motifs",
      price: "Rs. 4,250.00",
      originalPrice: "Rs. 5,000.00",
      discount: "15% OFF",
      category: "Chanderi",
      isNew: true
    },
    {
      id: 3,
      image: "/api/placeholder/400/400",
      title: "Crimson Red Embroidered Raw Silk Fabric",
      price: "Rs. 6,750.00",
      originalPrice: "Rs. 8,500.00",
      discount: "20% OFF",
      category: "Raw Silk",
      isNew: true
    },
    {
      id: 4,
      image: "/api/placeholder/400/400",
      title: "Deep Purple Georgette With Hand Embroidery",
      price: "Rs. 3,999.00",
      originalPrice: "Rs. 5,499.00",
      discount: "27% OFF",
      category: "Georgette",
      isNew: true
    },
    {
      id: 5,
      image: "/api/placeholder/400/400",
      title: "Ivory Tussar Silk With Gold Border",
      price: "Rs. 5,250.00",
      originalPrice: "Rs. 6,500.00",
      discount: "19% OFF",
      category: "Tussar",
      isNew: true
    },
    {
      id: 6,
      image: "/api/placeholder/400/400",
      title: "Ochre Yellow Pure Cotton With Block Print",
      price: "Rs. 2,799.00",
      originalPrice: "Rs. 3,499.00",
      discount: "20% OFF",
      category: "Cotton",
      isNew: true
    },
    {
      id: 7,
      image: "/api/placeholder/400/400",
      title: "Teal Blue Organza With Floral Embroidery",
      price: "Rs. 4,850.00",
      originalPrice: "Rs. 5,999.00",
      discount: "19% OFF",
      category: "Organza",
      isNew: true
    },
    {
      id: 8,
      image: "/api/placeholder/400/400",
      title: "Dusty Rose Linen Blend Textured Fabric",
      price: "Rs. 3,650.00",
      originalPrice: "Rs. 4,500.00",
      discount: "19% OFF",
      category: "Linen",
      isNew: true
    },
    {
      id: 9,
      image: "/api/placeholder/400/400",
      title: "Midnight Black Velvet With Gold Thread Work",
      price: "Rs. 8,250.00",
      originalPrice: "Rs. 11,000.00",
      discount: "25% OFF",
      category: "Velvet",
      isNew: true
    },
    {
      id: 10,
      image: "/api/placeholder/400/400",
      title: "Mint Green Chiffon With Silver Sequins",
      price: "Rs. 3,999.00",
      originalPrice: "Rs. 4,999.00",
      discount: "20% OFF",
      category: "Chiffon",
      isNew: true
    },
    {
      id: 11,
      image: "/api/placeholder/400/400",
      title: "Coral Pink Kanjivaram Silk With Temple Border",
      price: "Rs. 9,999.00",
      originalPrice: "Rs. 12,999.00",
      discount: "23% OFF",
      category: "Kanjivaram",
      isNew: true
    },
    {
      id: 12,
      image: "/api/placeholder/400/400",
      title: "Slate Grey Pashmina Blend With Embroidery",
      price: "Rs. 7,250.00",
      originalPrice: "Rs. 8,500.00",
      discount: "15% OFF",
      category: "Pashmina",
      isNew: true
    }
  ];

  // Categories for filter options
  const categories = [
    "All", "Silk", "Chanderi", "Raw Silk", "Georgette", 
    "Tussar", "Cotton", "Organza", "Linen", "Velvet", 
    "Chiffon", "Kanjivaram", "Pashmina"
  ];

  // State management
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [animateProducts, setAnimateProducts] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  
  const productsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Refs
  const filtersRef = useRef(null);
  const timeoutRef = useRef(null);

  // Handle initial loading animation
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setAnimateProducts(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Update visible products when filtered products or page changes
  useEffect(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    
    // Reset animation state
    setAnimateProducts(false);
    
    // Set timeout to trigger animations with a slight delay
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    timeoutRef.current = setTimeout(() => {
      setVisibleProducts(filteredProducts.slice(startIndex, endIndex));
      setAnimateProducts(true);
    }, 300);
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [filteredProducts, currentPage]);

  // Handle category filter change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === category));
    }
  };

  // Handle sort order change
  const handleSortChange = (order) => {
    setSortOrder(order);
    
    let sorted = [...filteredProducts];
    if (order === "price-asc") {
      sorted.sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')));
    } else if (order === "price-desc") {
      sorted.sort((a, b) => parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')));
    }
    
    setFilteredProducts(sorted);
    setCurrentPage(1);
  };

  // Add/remove from wishlist
  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  // Pagination navigation
  const goToPage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 500, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Banner Section with Parallax Effect */}
      <div className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-110 transition-transform duration-1000"
          style={{ 
            backgroundImage: `url(${bannerImage})`,
            transform: isLoading ? 'scale(1.2)' : 'scale(1.05)'
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center z-10 px-4">
          <h1 
            className={`text-5xl md:text-6xl font-serif text-white mb-6 transform transition-all duration-1000 ${
              isLoading ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
            }`}
          >
            New Arrivals
          </h1>
          <div 
            className={`h-0.5 w-0 bg-white mb-6 transition-all duration-1500 delay-300 ${
              isLoading ? 'w-0' : 'w-24 md:w-32'
            }`}
          ></div>
          <p 
            className={`text-lg md:text-xl text-white max-w-xl transform transition-all duration-1000 delay-200 ${
              isLoading ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
            }`}
          >
            Discover our latest collection of premium fabrics, crafted with care and designed to inspire.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Filters and Sort Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center text-sm font-medium mr-8 hover:text-gray-800 transition-colors"
              >
                <Filter size={18} className="mr-2" />
                Filter
              </button>
              
              <div className="relative">
                <button 
                  className="flex items-center text-sm font-medium hover:text-gray-800 transition-colors"
                  onClick={() => document.getElementById('sort-dropdown').classList.toggle('hidden')}
                >
                  <ArrowUpDown size={18} className="mr-2" />
                  Sort
                </button>
                
                {/* Sort Dropdown */}
                <div 
                  id="sort-dropdown" 
                  className="hidden absolute left-0 top-8 z-20 bg-white shadow-lg rounded-md py-2 w-48"
                >
                  <button 
                    onClick={() => handleSortChange('price-asc')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${sortOrder === 'price-asc' ? 'font-medium' : ''}`}
                  >
                    Price: Low to High
                  </button>
                  <button 
                    onClick={() => handleSortChange('price-desc')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${sortOrder === 'price-desc' ? 'font-medium' : ''}`}
                  >
                    Price: High to Low
                  </button>
                </div>
              </div>
            </div>
            
            <div className="text-sm text-gray-500">
              Showing {visibleProducts.length} of {filteredProducts.length} products
            </div>
          </div>
          
          {/* Filter Categories */}
          <div 
            ref={filtersRef}
            className={`transition-all duration-500 overflow-hidden ${
              showFilters ? 'max-h-48' : 'max-h-0'
            }`}
          >
            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <h3 className="text-sm font-medium mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-3 py-1 text-xs rounded-full transition-all duration-300 ${
                      selectedCategory === category 
                        ? 'bg-black text-white' 
                        : 'bg-white border border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {visibleProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`group relative transform transition-all duration-700 ${
                animateProducts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Product Image Container */}
              <div className="aspect-square overflow-hidden rounded-lg mb-3 bg-gray-100 relative">
                {/* Image */}
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* New Tag */}
                {product.isNew && (
                  <div className="absolute top-3 left-3 bg-black text-white text-xs font-medium px-2 py-1 rounded">
                    NEW
                  </div>
                )}
                
                {/* Discount Tag */}
                {product.discount && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                    {product.discount}
                  </div>
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  {/* Wishlist button */}
                  <button 
                    onClick={() => toggleWishlist(product.id)}
                    className={`bg-white text-black rounded-full p-3 mx-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white ${
                      wishlist.includes(product.id) ? 'text-red-500' : ''
                    }`}
                  >
                    <Heart 
                      size={18} 
                      fill={wishlist.includes(product.id) ? "currentColor" : "none"} 
                    />
                  </button>
                  
                  {/* Quick view button */}
                  <button className="bg-white text-black rounded-full p-3 mx-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-black hover:text-white">
                    <Eye size={18} />
                  </button>
                  
                  {/* Add to cart button */}
                  <button className="bg-white text-black rounded-full p-3 mx-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150 hover:bg-black hover:text-white">
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </div>
              
              {/* Product Details with animation */}
              <div className="relative overflow-hidden">
                <h3 className="text-sm font-medium line-clamp-2 mb-2 group-hover:text-black transition-colors duration-300">
                  {product.title}
                </h3>
                <div className="flex items-center">
                  <p className="font-medium relative text-black">
                    {product.price}
                    {/* Animated line that appears on hover */}
                    <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-black transition-all duration-500"></span>
                  </p>
                  {product.originalPrice && (
                    <p className="ml-2 text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </p>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">{product.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">No products found in this category.</p>
            <button 
              onClick={() => handleCategoryChange("All")}
              className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              View All Products
            </button>
          </div>
        )}
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-16">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-md ${
                  currentPage === 1 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <ChevronLeft size={20} />
              </button>
              
              {Array.from({ length: totalPages }).map((_, index) => {
                const pageNumber = index + 1;
                // Show first page, last page, current page, and pages around the current page
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => goToPage(pageNumber)}
                      className={`w-10 h-10 flex items-center justify-center rounded-md transition-colors ${
                        currentPage === pageNumber
                          ? 'bg-black text-white' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                } else if (
                  (pageNumber === currentPage - 2 && currentPage > 3) ||
                  (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
                ) {
                  return <span key={pageNumber} className="w-10 h-10 flex items-center justify-center">...</span>;
                }
                return null;
              })}
              
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-md ${
                  currentPage === totalPages 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
        
        {/* Newsletter Section */}
        <div className="mt-24 bg-gray-50 p-8 md:p-12 rounded-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-serif mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive updates about new arrivals, exclusive offers and fabric care tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;