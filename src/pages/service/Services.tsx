// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getServicesByCategory } from '../../mock/service';
// import ServiceCard from '../../components/common/service/ServiceCard';

// const Services: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState<string>('all');
//   const navigate = useNavigate();
  
//   const servicesByCategory = getServicesByCategory();
//   const categories = Object.keys(servicesByCategory);

//   const handleServiceClick = (serviceId: string) => {
//     navigate(`/services/${serviceId}`);
//   };

//   const getFilteredServices = () => {
//     if (activeCategory === 'all') {
//       return Object.values(servicesByCategory).flat();
//     }
//     return servicesByCategory[activeCategory] || [];
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-black via-gray-900 to-black py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
//             Our <span className="text-orange-500">Services</span>
//           </h1>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//             Comprehensive digital solutions to help your business thrive in the modern world. 
//             From digital marketing to custom development, we've got you covered.
//           </p>
          
//           {/* Service Categories Stats */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
//               <div className="text-3xl font-bold text-orange-500 mb-2">
//                 {servicesByCategory['Digital Marketing']?.length || 0}
//               </div>
//               <div className="text-white">Digital Marketing Services</div>
//             </div>
//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
//               <div className="text-3xl font-bold text-orange-500 mb-2">
//                 {servicesByCategory['Web Design']?.length || 0}
//               </div>
//               <div className="text-white">Web Design Solutions</div>
//             </div>
//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
//               <div className="text-3xl font-bold text-orange-500 mb-2">
//                 {servicesByCategory['Web Development']?.length || 0}
//               </div>
//               <div className="text-white">Development Services</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Filter Tabs */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           <button
//             onClick={() => setActiveCategory('all')}
//             className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//               activeCategory === 'all'
//                 ? 'bg-orange-500 text-white shadow-lg transform scale-105'
//                 : 'bg-white text-gray-700 hover:bg-orange-100 shadow-md hover:shadow-lg'
//             }`}
//           >
//             All Services
//           </button>
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//                 activeCategory === category
//                   ? 'bg-orange-500 text-white shadow-lg transform scale-105'
//                   : 'bg-white text-gray-700 hover:bg-orange-100 shadow-md hover:shadow-lg'
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {getFilteredServices().map((service) => (
//             <div
//               key={service.id}
//               className="transform transition-all duration-300 hover:scale-[1.02]"
//             >
//               <ServiceCard
//                 service={service}
//                 onClick={handleServiceClick}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Empty State */}
//         {getFilteredServices().length === 0 && (
//           <div className="text-center py-16">
//             <div className="text-6xl mb-4">🔍</div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-2">No Services Found</h3>
//             <p className="text-gray-600">Try selecting a different category or view all services.</p>
//           </div>
//         )}
//       </div>

//       {/* Bottom CTA Section */}
//       <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//             Ready to Transform Your Business?
//           </h2>
//           <p className="text-xl text-orange-100 mb-8 leading-relaxed">
//             Get in touch with our expert team to discuss your project requirements 
//             and discover how we can help you achieve your digital goals.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button 
//               onClick={() => navigate('/contact')}
//               className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
//             >
//               Start Your Project
//             </button>
//             <button 
//               onClick={() => navigate('/contact')}
//               className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold rounded-xl transition-all duration-300"
//             >
//               Schedule Consultation
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;


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

  // Define animation variants for a cleaner look
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: {
        staggerChildren: 0.1,
      }
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Hero Section with Animations */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Our <span className="text-orange-500">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive digital solutions to help your business thrive in the modern world. 
            From digital marketing to custom development, we've got you covered.
          </motion.p>
          
          {/* Service Categories Stats with Staggered Animation */}
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

      {/* Filter Tabs and Service Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* The filter buttons already have a smooth transition via Tailwind, so we don't need Framer Motion here */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-orange-100 shadow-md hover:shadow-lg'
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
                  : 'bg-white text-gray-700 hover:bg-orange-100 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid with Staggered Animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          key={activeCategory} // Use a key to re-trigger animation on category change
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
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Services Found</h3>
            <p className="text-gray-600">Try selecting a different category or view all services.</p>
          </div>
        )}
      </div>

      {/* Bottom CTA Section */}
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