import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Clock, Globe, ChevronRight } from 'lucide-react';

const About = () => {
    // Animation states
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState("story");
    const [animating, setAnimating] = useState(false);
    const aboutRef = useRef(null);

    // Team members data
    const teamMembers = [
        {
            image: "/api/placeholder/300/300?text=Fabric+Executive",
            name: "Sanjay Singh",
            position: "Founder & CEO",
            bio: "With over 25 years in the textile industry, Sanjay has revolutionized fabric sourcing and production."
        },
        {
            image: "/api/placeholder/300/300?text=Fabric+Designer",
            name: "Priya Mehta",
            position: "Design Director",
            bio: "A graduate from NIFT with 15 years experience in creating stunning fabric designs for global clients."
        },
        {
            image: "/api/placeholder/300/300?text=Fabric+Operations",
            name: "Rajiv Kumar",
            position: "Operations Head",
            bio: "Ensuring seamless production and delivery processes across our facilities since 2010."
        },
        {
            image: "/api/placeholder/300/300?text=Sustainable+Fabrics",
            name: "Anjali Sharma",
            position: "Sustainability Manager",
            bio: "Leading our eco-friendly initiatives and ensuring ethical production practices."
        }
    ];

    // Stats data
    const stats = [
        { icon: <Users size={24} />, count: "50,000+", label: "Happy Customers" },
        { icon: <Award size={24} />, count: "25+", label: "Years of Excellence" },
        { icon: <Clock size={24} />, count: "500+", label: "Fabric Varieties" },
        { icon: <Globe size={24} />, count: "35+", label: "Countries Served" }
    ];

    // Mission & vision content
        const tabContent = {
            story: {
                title: "Our Story",
                content: "Founded in 1998, our journey began with a simple vision – to blend traditional craftsmanship with modern design sensibilities. What started as a small family venture in the vibrant textile hub of Surat has now evolved into one of India's premier fabric houses, serving clients across the globe. Our commitment to quality and innovation has remained unwavering throughout this incredible journey.",
                image: "/api/placeholder/600/400?text=Traditional+Fabric+Weaving"
            },
            mission: {
                title: "Our Mission",
                content: "We are dedicated to preserving the rich heritage of Indian textiles while embracing sustainable practices and innovative technologies. Our mission is to create fabrics that not only meet the highest standards of quality but also respect our planet. We work closely with artisans and communities to ensure fair trade practices and promote traditional craftsmanship.",
                image: "/api/placeholder/600/400?text=Sustainable+Textile+Production"
            },
            vision: {
                title: "Our Vision",
                content: "To be the world's most trusted and innovative source of premium fabrics, setting new benchmarks in design, quality, and sustainability. We envision a future where our fabrics become the preferred choice for designers and consumers who value craftsmanship, ethical production, and environmental responsibility.",
                image: "/api/placeholder/600/400?text=Modern+Fabric+Design+Studio"
            }
        };

    // Intersection observer to trigger animations when section becomes visible
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    // Handle tab change with animation
    const handleTabChange = (tab) => {
        if (tab === activeTab || animating) return;

        setAnimating(true);
        setTimeout(() => {
            setActiveTab(tab);
            setTimeout(() => {
                setAnimating(false);
            }, 300);
        }, 300);
    };

    return (
        <div ref={aboutRef} className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(/api/placeholder/1600/1000?text=Premium+Luxury+Fabrics)`,
                        backgroundPosition: "center 30%"
                    }}
                >
                    {/* Dark overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
                </div>

                <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
                    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'}`}>
                        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4">About Us</h1>
                        <div className="h-1 w-20 sm:w-32 md:w-40 bg-white mx-auto"></div>
                        <p className="text-white text-lg sm:text-xl mt-6 max-w-2xl mx-auto">
                            We craft stories through fabrics, weaving tradition with innovation
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Tabs Section */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-12">
                        <div className="border-b border-gray-200 inline-flex">
                            {Object.keys(tabContent).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => handleTabChange(tab)}
                                    className={`relative pb-2 px-6 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${activeTab === tab
                                            ? "border-b-2 border-black"
                                            : "text-gray-500 hover:text-black"
                                        }`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    <span className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${activeTab === tab ? "w-full" : "w-0 group-hover:w-full"
                                        }`}></span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content with Image */}
                    <div className="overflow-hidden">
                        <div className={`transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="md:flex md:items-center md:space-x-12 lg:space-x-20">
                                {/* Image side */}
                                <div className="md:w-1/2 mb-8 md:mb-0">
                                    <div className="relative overflow-hidden rounded-lg shadow-xl group">
                                        <img
                                            src={tabContent[activeTab].image}
                                            alt={tabContent[activeTab].title}
                                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </div>

                                {/* Content side */}
                                <div className="md:w-1/2">
                                    <h2 className="text-3xl sm:text-4xl font-serif mb-6">{tabContent[activeTab].title}</h2>
                                    <div className="h-1 w-20 bg-black mb-6"></div>
                                    <p className="text-gray-700 leading-relaxed mb-8">{tabContent[activeTab].content}</p>
                                    <button className="inline-flex items-center px-4 py-2 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-300 group">
                                        Learn More
                                        <ChevronRight size={18} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`text-center transform transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="p-3 rounded-full bg-white text-black">{stat.icon}</div>
                                </div>
                                <h3 className="text-3xl sm:text-4xl font-bold mb-2">{stat.count}</h3>
                                <p className="text-gray-300">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16 relative">
                        {/* Decorative line before */}
                        <div className="hidden md:block absolute left-0 top-1/2 w-1/4 h-px bg-gradient-to-r from-transparent to-gray-300"></div>

                        <h2 className="text-4xl font-serif mb-6 relative inline-block px-8">
                            <span className="relative z-10">Meet Our Team</span>
                            {/* Animated underline effect */}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full"></span>
                        </h2>

                        {/* Decorative line after */}
                        <div className="hidden md:block absolute right-0 top-1/2 w-1/4 h-px bg-gradient-to-l from-transparent to-gray-300"></div>

                        <p className="max-w-2xl mx-auto text-gray-600">
                            The passionate experts behind our beautiful fabrics
                        </p>
                    </div>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className={`group transform transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}
                            >
                                <div className="relative overflow-hidden rounded-lg mb-4">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full aspect-square object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                                </div>

                                <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                                <p className="text-gray-500 text-sm mb-3">{member.position}</p>
                                <p className="text-gray-700 text-sm">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section with Fabric Images */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-serif mb-6">Our Core Values</h2>
                        <div className="h-1 w-20 bg-black mx-auto mb-6"></div>
                        <p className="text-gray-700">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Quality', image: '/api/placeholder/400/300?text=Premium+Fabric+Quality' },
                            { name: 'Sustainability', image: '/api/placeholder/400/300?text=Eco-Friendly+Textiles' },
                            { name: 'Innovation', image: '/api/placeholder/400/300?text=Innovative+Fabric+Design' }
                        ].map((value, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-lg shadow-lg transform transition-all duration-1000 delay-${index * 200} hover:shadow-xl hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                                    }`}
                            >
                                <div className="h-48 overflow-hidden rounded-t-lg">
                                    <img
                                        src={value.image}
                                        alt={value.name}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-medium mb-4 text-center">{value.name}</h3>
                                    <p className="text-gray-600 text-center">
                                        {value.name === 'Quality' && 'We never compromise on excellence, ensuring every thread meets our high standards.'}
                                        {value.name === 'Sustainability' && 'Committed to eco-friendly practices that protect our planet for future generations.'}
                                        {value.name === 'Innovation' && 'Continuously pushing boundaries to create fabrics that inspire and delight.'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fabric Showcase Section - New Addition */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-serif mb-6">Our Fabric Collection</h2>
                        <div className="h-1 w-20 bg-black mx-auto mb-6"></div>
                        <p className="max-w-2xl mx-auto text-gray-600">
                            Explore our diverse range of premium fabrics crafted with passion and precision
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: 'Organic Cotton', type: 'Natural Fibers', image: '/api/placeholder/500/400?text=Organic+Cotton+Fabric' },
                            { name: 'Luxury Silk', type: 'Premium Collection', image: '/api/placeholder/500/400?text=Luxury+Silk+Fabric' },
                            { name: 'Sustainable Linen', type: 'Eco-Friendly', image: '/api/placeholder/500/400?text=Sustainable+Linen' },
                            { name: 'Jacquard Patterns', type: 'Decorative', image: '/api/placeholder/500/400?text=Jacquard+Pattern+Fabric' },
                            { name: 'Traditional Ikat', type: 'Heritage', image: '/api/placeholder/500/400?text=Traditional+Ikat+Fabric' },
                            { name: 'Modern Blends', type: 'Contemporary', image: '/api/placeholder/500/400?text=Modern+Fabric+Blends' }
                        ].map((fabric, index) => (
                            <div
                                key={index}
                                className={`group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'
                                    }`}
                                style={{
                                    transitionDelay: `${index * 100}ms`
                                }}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={fabric.image}
                                        alt={fabric.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <div className="p-4 w-full">
                                            <span className="inline-block px-3 py-1 bg-white text-black text-xs font-medium rounded-full mb-2">
                                                {fabric.type}
                                            </span>
                                            <h3 className="text-white text-xl font-medium">{fabric.name}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-medium">{fabric.name}</h3>
                                    <p className="text-gray-500 text-sm">{fabric.type}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-300">
                            View All Fabrics
                        </button>
                    </div>
                </div>
            </section>

            {/* Call to Action Section with Fabric Background */}
            <section className="py-20 relative">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(/api/placeholder/1600/1000?text=Luxury+Fabric+Textures)`,
                        backgroundPosition: "center",
                        filter: "brightness(0.3)"
                    }}
                />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Ready to transform your designs?</h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Join thousands of designers and brands who trust our fabrics for their creations
                    </p>
                    <button className="px-8 py-3 bg-white text-black font-medium text-lg hover:bg-gray-200 transition-colors duration-300">
                        Explore Our Collection
                    </button>
                </div>
            </section>
        </div>
    );
};

export default About;