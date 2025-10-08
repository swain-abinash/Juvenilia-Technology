import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion
import { getServicesByCategory } from '../../mock/service';
import ServiceCard from '../../components/common/service/ServiceCard';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const navigate = useNavigate();
  
  const servicesByCategory = getServicesByCategory();
  const categories = Object.keys(servicesByCategory);

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  const getFilteredServices = () => {
    if (activeCategory === 'all') {
      return Object.values(servicesByCategory).flat();
    }
    return servicesByCategory[activeCategory] || [];
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 }
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Juvenilia Technology - <span className="text-orange-500">Leading the Way to Digital Transformation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Trying to find top-notch digital marketing services that can take your business to the next level? Juvenilia Technology is your go-to place to get the cutting-edge Technology in Digital Marketing services alongside Website design, Web Development, App Development, and Software Development at the most affordable prices.
          </motion.p>
          
          {/* Service Categories Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-orange-500 mb-2">
                {servicesByCategory['Digital Marketing']?.length || 0}
              </div>
              <div className="text-white">Digital Marketing Services</div>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-orange-500 mb-2">
                {servicesByCategory['Web Design']?.length || 0}
              </div>
              <div className="text-white">Web Design Solutions</div>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-orange-500 mb-2">
                {servicesByCategory['Web Development']?.length || 0}
              </div>
              <div className="text-white">Development Services</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Filter Tabs and Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600 shadow-md hover:shadow-lg'
            }`}
          >
            All Services
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          key={activeCategory}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {getFilteredServices().map((service) => (
            <motion.div
              key={service.id}
              className="transform transition-all duration-300 hover:scale-[1.02]"
              variants={itemVariants}
            >
              <ServiceCard
                service={service}
                onClick={handleServiceClick}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {getFilteredServices().length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
            <p className="text-gray-300">Try selecting a different category or view all services.</p>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-orange-100 mb-8 leading-relaxed"
          >
            Get in touch with our expert team to discuss your project requirements 
            and discover how we can help you achieve your digital goals.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-100 shadow-lg"
            >
              Start Your Project
            </motion.button>
            <motion.button 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold rounded-xl"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
