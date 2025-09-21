import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { HomeData } from '../../../types';
import { ArrowDownIcon, RocketIcon, PhoneIcon } from '../../../components/Icons';

const HeroSection = ({ data }: { data: HomeData['hero'] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [data.images.length]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <AnimatePresence>
        <motion.img
          key={index}
          src={data.images[index]}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      <div className="relative z-20 text-center px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {data.headline}
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {data.subheadline}
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href={data.ctas[0].link} className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
              <RocketIcon className="w-5 h-5" /> {data.ctas[0].text}
          </a>
          <a href={data.ctas[1].link} className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300">
              <PhoneIcon className="w-5 h-5" /> {data.ctas[1].text}
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDownIcon className="w-8 h-8 text-white/50" />
      </motion.div>
    </div>
  );
};

export default HeroSection;

