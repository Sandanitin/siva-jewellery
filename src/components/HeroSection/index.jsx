import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowRight, FaArrowLeft, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // High-quality jewelry images with optimized formats
  const hero1 = 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=85';
  const hero2 = 'https://images.unsplash.com/photo-1602173576902-8d9a7c934648?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=85';
  const hero3 = 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=85';
  
  const slides = [
    {
      image: hero1,
      title: 'Exquisite Diamond Collections',
      subtitle: 'Discover our latest diamond jewelry designs that embody elegance and sophistication.',
      cta: 'Shop Now',
      highlight: 'New Arrivals',
      buttonVariant: 'primary',
      overlay: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
    },
    {
      image: hero2,
      title: 'Luxury Gold Jewelry',
      subtitle: 'Timeless pieces crafted to perfection for every special occasion.',
      cta: 'View Collection',
      highlight: 'Best Sellers',
      buttonVariant: 'secondary',
      overlay: 'linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 100%)',
    },
    {
      image: hero3,
      title: 'Wedding Collections',
      subtitle: 'Make your special day even more memorable with our exclusive bridal jewelry.',
      cta: 'Explore',
      highlight: 'Limited Edition',
      buttonVariant: 'primary',
      overlay: 'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 100%)',
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Auto-sliding functionality with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Increased interval to 6 seconds for better UX
    
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Preload images to prevent white flash
  useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Animation variants - optimized for no flash
  const slideVariants = {
    hidden: { 
      opacity: 0,
      transition: { 
        duration: 0.001 // Near-instant hide
      } 
    },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for smooth fade
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.3, duration: 0.6 }
    }
  };

  return (
    <section 
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Slides with Optimized Crossfade */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              willChange: 'opacity',
              backgroundColor: 'black' // Prevents white flash
            }}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              opacity: { 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1],
                times: [0, 1]
              }
            }}
          >
            <div 
              className="absolute inset-0"
              style={{
                background: slides[currentSlide].overlay,
                willChange: 'opacity'
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={contentVariants}
            >
              {/* Highlight Badge */}
              <motion.span 
                className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 shadow-lg mx-auto"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
              >
                {slides[currentSlide].highlight}
              </motion.span>
              
              {/* Title with animated underline */}
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {slides[currentSlide].title}
                <motion.span 
                  className="block w-24 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 mt-6 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
                />
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p 
                className="text-lg md:text-xl text-gray-100 mb-10 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  whileTap={{ scale: 0.98 }}
                  className={`${
                    slides[currentSlide].buttonVariant === 'primary' 
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white' 
                      : 'bg-white text-gray-900 hover:bg-gray-100'
                  } font-medium py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg`}
                  onClick={() => console.log('Shop Now clicked')}
                >
                  <span>{slides[currentSlide].cta}</span>
                  <FaArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-4 px-8 rounded-full transition-all duration-300"
                  onClick={() => console.log('Learn More clicked')}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <motion.div 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden md:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ 
          opacity: isHovered ? 1 : 0.7,
          x: isHovered ? 0 : -10 
        }}
        transition={{ duration: 0.3 }}
      >
        <button 
          onClick={prevSlide}
          className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 shadow-lg"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>
      </motion.div>
      
      <motion.div 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden md:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ 
          opacity: isHovered ? 1 : 0.7,
          x: isHovered ? 0 : 10 
        }}
        transition={{ duration: 0.3 }}
      >
        <button 
          onClick={nextSlide}
          className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 shadow-lg"
          aria-label="Next slide"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
      </motion.div>

      {/* Pagination Dots */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 bg-gradient-to-r from-amber-400 to-amber-600' 
                : 'w-3 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            delay: 0.8,
            duration: 0.6 
          }
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white w-6 h-6"
            >
              <polyline points="7 13 12 18 17 13"></polyline>
              <polyline points="7 6 12 11 17 6"></polyline>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
