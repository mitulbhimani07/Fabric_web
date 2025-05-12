import React, { useState, useEffect } from 'react';
import { Search, Filter, ShoppingCart, Heart, Eye, ArrowRight, Star } from 'lucide-react';
import cotton1 from '../../assets/images/cotton.png'
import cotton2 from '../../assets/images/cotton1.png';
import cotton3 from '../../assets/images/cotton2.png';
import cotton4 from '../../assets/images/cotton3.png';
import cotton5 from '../../assets/images/cotton4.png';
import cotton6 from '../../assets/images/cotton5.png';
import cotton7 from '../../assets/images/cotton6.png';
import cotton8 from '../../assets/images/cotton7.png';
import cotton9 from '../../assets/images/cotton8.png';
import cotton10 from '../../assets/images/cotton9.png';
import cotton11 from '../../assets/images/cotton10.png';
import cotton12 from '../../assets/images/cotton11.png';
import cotton13 from '../../assets/images/cotton12.png';

function PremiumCotton() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [displayedProducts, setDisplayedProducts] = useState([]);
  
  const categories = [
    { id: 'all', name: 'All Fabrics' },
    { id: 'printed', name: 'Printed Cotton' },
    { id: 'solid', name: 'Solid Cotton' },
    { id: 'organic', name: 'Organic Cotton' },
    { id: 'embroidered', name: 'Embroidered' },
    { id: 'dobby', name: 'Dobby Cotton' }
  ];
  
  const fabricProducts = [
    {
      id: 1,
      name: 'White Floral Block Print Cotton Fabric',
      price: 12.99,
      perUnit: 'per meter',
      category: 'printed',
      imageSrc: cotton1,
      rating: 4.8,
      reviewCount: 24,
      isNew: true,
      isBestseller: true,
      createdAt: new Date('2025-01-05')
    },
    {
      id: 2,
      name: 'Navy Blue Solid Cotton Fabric',
      price: 9.99,
      perUnit: 'per meter',
      category: 'solid',
      imageSrc: cotton2,
      rating: 4.5,
      reviewCount: 32,
      createdAt: new Date('2024-11-15')
    },
    {
      id: 3,
      name: '100% Organic Cotton Natural Dye Fabric',
      price: 15.99,
      perUnit: 'per meter',
      category: 'organic',
      imageSrc: cotton3,
      rating: 5.0,
      reviewCount: 18,
      isNew: true,
      createdAt: new Date('2025-03-21')
    },
    {
      id: 4,
      name: 'Gold Embroidered Cotton Fabric',
      price: 18.50,
      perUnit: 'per meter',
      category: 'embroidered',
      imageSrc: cotton4,
      rating: 4.7,
      reviewCount: 15,
      isBestseller: true,
      createdAt: new Date('2024-08-17')
    },
    {
      id: 5,
      name: 'Pink Floral Cotton Block Print',
      price: 11.99,
      perUnit: 'per meter',
      category: 'printed',
      imageSrc: cotton5,
      rating: 4.6,
      reviewCount: 29,
      createdAt: new Date('2024-10-22')
    },
    {
      id: 6,
      name: 'Blue Dobby Textured Cotton Fabric',
      price: 13.99,
      perUnit: 'per meter',
      category: 'dobby',
      imageSrc: cotton6,
      rating: 4.4,
      reviewCount: 12,
      isNew: true,
      createdAt: new Date('2025-02-14')
    },
    {
      id: 7,
      name: 'Light Green Solid Cotton Fabric',
      price: 8.99,
      perUnit: 'per meter',
      category: 'solid',
      imageSrc: cotton7,
      rating: 4.3,
      reviewCount: 21,
      createdAt: new Date('2024-09-30')
    },
    {
      id: 8,
      name: 'Traditional Block Print Red Cotton',
      price: 14.50,
      perUnit: 'per meter',
      category: 'printed',
      imageSrc: cotton8,
      rating: 4.9,
      reviewCount: 38,
      isBestseller: true,
      createdAt: new Date('2024-12-05')
    },
    {
      id: 9,
      name: 'Ivory Organic Cotton Muslin Fabric',
      price: 10.99,
      perUnit: 'per meter',
      category: 'organic',
      imageSrc: cotton9,
      rating: 4.7,
      reviewCount: 19,
      createdAt: new Date('2024-11-11')
    },
    {
      id: 10,
      name: 'Yellow Floral Embroidered Cotton',
      price: 17.99,
      perUnit: 'per meter',
      category: 'embroidered',
      imageSrc: cotton10,
      rating: 4.8,
      reviewCount: 16,
      createdAt: new Date('2024-10-07')
    },
    {
      id: 11,
      name: 'White Dotted Dobby Cotton Fabric',
      price: 12.50,
      perUnit: 'per meter',
      category: 'dobby',
      imageSrc: cotton11,
      rating: 4.6,
      reviewCount: 23,
      createdAt: new Date('2024-09-02')
    },
    {
      id: 12,
      name: 'Black Solid Premium Cotton Fabric',
      price: 9.99,
      perUnit: 'per meter',
      category: 'solid',
      imageSrc: cotton12,
      rating: 4.5,
      reviewCount: 27,
      createdAt: new Date('2024-08-25')
    }
  ];
  
  // Filter and sort products whenever these dependencies change
  useEffect(() => {
    let result = [...fabricProducts];
    
    // Apply category filter
    if (activeCategory !== 'all') {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Apply search filter
    if (searchTerm.trim()) {
      const lowercasedSearch = searchTerm.toLowerCase().trim();
      result = result.filter(product => 
        product.name.toLowerCase().includes(lowercasedSearch) ||
        product.category.toLowerCase().includes(lowercasedSearch)
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'latest':
        result.sort((a, b) => b.createdAt - a.createdAt);
        break;
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'popular':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    
    setDisplayedProducts(result);
  }, [activeCategory, searchTerm, sortBy]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative">
        <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative container mx-auto px-6 flex flex-col justify-center h-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Premium Cotton Fabrics</h1>
            <p className="mt-4 text-xl text-white max-w-xl">Discover our exclusive collection of high-quality cotton fabrics for all your creative needs.</p>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search cotton fabrics..." 
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Sort by:</span>
            <select 
              className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="latest">Latest</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="popular">Popular</option>
              <option value="rating">Best Rated</option>
            </select>
            <button className="flex items-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-5 w-5 mr-2" />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="border-b border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto py-4 no-scrollbar">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap px-5 py-2 text-sm font-medium rounded-full mr-3 transition-colors ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-6 py-8">
        {displayedProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products match your search criteria.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
                setSortBy('latest');
              }}
              className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedProducts.map(product => (
              <div key={product.id} className="group mt-7">
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src={product.imageSrc} 
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                    )}
                    {product.isBestseller && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">BESTSELLER</span>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 py-3 px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between">
                    <button className="text-white flex items-center text-sm">
                      <Eye className="h-4 w-4 mr-1" />
                      Quick View
                    </button>
                    <div className="flex space-x-3">
                      <button className="text-white">
                        <Heart className="h-5 w-5" />
                      </button>
                      <button className="text-white">
                        <ShoppingCart className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="mt-1 flex items-center">
                    {renderStars(product.rating)}
                    <span className="ml-1 text-xs text-gray-500">({product.reviewCount})</span>
                  </div>
                  <div className="mt-1 flex justify-between items-center">
                    <p className="font-medium text-gray-900">
                      ${product.price} <span className="text-sm text-gray-500">{product.perUnit}</span>
                    </p>
                    <button className="text-indigo-700 hover:text-indigo-900 text-sm font-medium flex items-center">
                      Details <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* New Arrivals Collection - Interactive Section */}
      <div className="bg-white mt-9">
        <div className="container mx-auto px-6">
          {/* Section 2 - Artisan Spotlight */}
          <div className="bg-gradient-to-r from-amber-50 to-rose-50 rounded-3xl p-8 md:p-12 mb-20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img 
                  src={cotton3} 
                  alt="Artisan Collection" 
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
              <div className="md:w-1/2 space-y-6">
                <span className="bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium">
                  Handcrafted Edition
                </span>
                <h2 className="text-4xl font-bold text-gray-900">Artisan Specials</h2>
                <p className="text-lg text-gray-600">
                  Limited edition block prints crafted by traditional artisans using 
                  natural dyes and centuries-old techniques
                </p>
                <div className="flex gap-4">
                  <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors">
                    Meet the Makers
                  </button>
                  <button className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-medium hover:bg-amber-50 transition-colors">
                    View Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features */}
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="h-16 flex items-center justify-center mb-4">
              <img
                src="https://img.icons8.com/ios-filled/100/40C057/sustainability.png"
                alt="Sustainable Fabrics"
                className="h-16"
              />
            </div>
            <h3 className="font-semibold text-gray-900">Sustainable Fabrics</h3>
            <p className="mt-2 text-gray-600 text-sm">Ethically sourced and environmentally friendly cotton fabrics</p>
          </div>
          <div className="text-center">
            <div className="h-16 flex items-center justify-center mb-4">
              <img
                src="https://img.icons8.com/ios-filled/100/40C057/high-quality.png"
                alt="Premium Quality"
                className="h-16"
              />
            </div>
            <h3 className="font-semibold text-gray-900">Premium Quality</h3>
            <p className="mt-2 text-gray-600 text-sm">Carefully selected fabrics meeting our high standards</p>
          </div>
          <div className="text-center">
            <div className="h-16 flex items-center justify-center mb-4">
              <img
                src="https://img.icons8.com/ios-filled/100/40C057/fast-delivery.png"
                alt="Fast Shipping"
                className="h-16"
              />
            </div>
            <h3 className="font-semibold text-gray-900">Fast Shipping</h3>
            <p className="mt-2 text-gray-600 text-sm">Quick delivery with tracked shipping options available</p>
          </div>
          <div className="text-center">
            <div className="h-16 flex items-center justify-center mb-4">
              <img
                src="https://img.icons8.com/ios-filled/100/40C057/secure-payment.png"
                alt="Secure Payment"
                className="h-16"
              />
            </div>
            <h3 className="font-semibold text-gray-900">Secure Payments</h3>
            <p className="mt-2 text-gray-600 text-sm">Shop with confidence using our secure payment methods</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumCotton;