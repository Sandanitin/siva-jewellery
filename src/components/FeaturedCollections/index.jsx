import React, { useState } from 'react';
import { FaGem, FaHandsHelping, FaShieldAlt, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FeaturedCollections = ({ showOnlyFeatured = false }) => {
  const whatsappNumber = '919505492525'; // WhatsApp number with country code

  const [quantities, setQuantities] = useState({});

  const handleWhatsAppOrder = (item) => {
    const quantity = quantities[item.id] || 1;
    const totalPrice = item.price * quantity;
    const message = encodeURIComponent(
      `Hi, I would like to order ${quantity} ${item.name} (${item.count})\n\n` +
      `Price: ₹${item.price.toLocaleString('en-IN')} x ${quantity} = ₹${totalPrice.toLocaleString('en-IN')}\n\n` +
      `Total: ₹${totalPrice.toLocaleString('en-IN')}\n\n` +
      'Please confirm availability and provide payment details.'
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const updateQuantity = (itemId, change) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(1, (prev[itemId] || 1) + change)
    }));
  };

  const collections = [
    {
      id: 1,
      name: 'Diamond Rings',
      count: '24 items',
      category: 'Featured',
      price: 25999,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
    },
    {
      id: 2,
      name: 'Gold Necklaces',
      count: '18 items',
      category: 'Popular',
      price: 34999,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
    },
    {
      id: 3,
      name: 'Statement Earrings',
      count: '22 items',
      category: 'New',
      price: 12999,
      image: 'https://images.unsplash.com/photo-1535632066927-ab6c9ed70e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
    },
    {
      id: 4,
      name: 'Luxury Watches',
      count: '15 items',
      category: 'Luxury',
      price: 89999,
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
    },
    {
      id: 5,
      name: 'Pearl Jewelry',
      count: '14 items',
      category: 'Elegant',
      price: 18999,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
    },
    {
      id: 6,
      name: 'Charm Bracelets',
      count: '10 items',
      category: 'Trending',
      price: 14999,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
    },
    {
      id: 7,
      name: 'Engagement Rings',
      count: '20 items',
      category: 'Featured',
      price: 45999,
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
    },
    {
      id: 8,
      name: 'Men\'s Jewelry',
      count: '16 items',
      category: 'Popular',
      price: 28999,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
    },
  ];

  // Filter collections based on showOnlyFeatured prop
  const displayedCollections = showOnlyFeatured ? collections.slice(0, 4) : collections;

  const features = [
    {
      title: 'Premium Quality',
      description: 'Only the finest materials and craftsmanship',
      icon: <FaGem className="w-8 h-8 text-amber-600" />,
    },
    {
      title: 'Expert Craftsmanship',
      description: 'Handcrafted by skilled artisans',
      icon: <FaHandsHelping className="w-8 h-8 text-amber-600" />,
    },
    {
      title: 'Secure Shopping',
      description: 'Safe and secure online transactions',
      icon: <FaShieldAlt className="w-8 h-8 text-amber-600" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Our Collections
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            Featured <span className="text-amber-600">Collections</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Discover our most exquisite jewelry pieces, handcrafted with precision and care.
          </p>
        </motion.div>

        {/* Collections Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {displayedCollections.map((item) => (
            <motion.div 
              key={item.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col h-full border border-gray-100"
              variants={itemVariants}
            >
              <div className="relative h-56 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                <div className="w-full h-full">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <span className="absolute top-3 right-3 bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                  {item.category}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{item.name}</h3>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-600 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-1.5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                    </svg>
                    {item.count}
                  </p>
                  <div className="text-lg font-bold text-amber-700">₹{item.price.toLocaleString('en-IN')}</div>
                </div>
                
                <div className="flex items-center justify-between mb-4 bg-gray-50 rounded-lg p-1">
                  <button 
                    onClick={(e) => { e.stopPropagation(); updateQuantity(item.id, -1); }}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-amber-600 hover:bg-amber-50 font-bold text-lg shadow-sm"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="font-semibold text-gray-800">{quantities[item.id] || 1}</span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); updateQuantity(item.id, 1); }}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-amber-600 hover:bg-amber-50 font-bold text-lg shadow-sm"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                
                <button 
                  onClick={() => handleWhatsAppOrder(item)}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-sm font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Order Now ({(quantities[item.id] || 1) > 1 ? `${quantities[item.id]} items` : '1 item'})
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

    
      </div>
    </section>
  );
};

export default FeaturedCollections;
