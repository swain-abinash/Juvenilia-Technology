// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import type { HomeData } from '../../../types';
// import { ArrowDownIcon, RocketIcon, PhoneIcon } from '../../../components/Icons';
// import { Typewriter } from 'react-simple-typewriter';

// const HeroSection = ({ data }: { data: HomeData['hero'] }) => {
//   const [index, setIndex] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % data.images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [data.images.length]);

//   return (
//     <div className="relative flex items-center justify-center overflow-hidden bg-black min-h-[100vh] sm:min-h-[90vh] md:min-h-[100vh]">
//       {/* Background Image Slider */}
//       <AnimatePresence>
//         <motion.img
//           key={index}
//           src={data.images[index]}
//           alt="Background"
//           className="absolute inset-0 w-full h-full object-cover"
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 1.05 }}
//           transition={{ duration: 1.5, ease: 'easeInOut' }}
//         />
//       </AnimatePresence>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/70 sm:bg-black/60 z-10"></div>

//       {/* Text Content */}
//       <div className="relative z-20 text-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-[90%] sm:max-w-3xl mx-auto">
//         {/* Headline */}
//         <motion.h1
//           className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight leading-tight"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {data.headline}
//         </motion.h1>

//         {/* Typewriter Subtitle */}
//         <motion.p
//           className="text-base sm:text-lg md:text-xl bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent font-medium max-w-2xl mx-auto mb-8 leading-relaxed"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <Typewriter
//             words={[data.subheadline]}
//             loop={false}
//             cursor
//             cursorStyle="|"
//             typeSpeed={60}
//             deleteSpeed={30}
//             delaySpeed={1500}
//           />
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 md:gap-6"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <button
//             onClick={() => navigate('/contact')}
//             className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 bg-orange-500 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
//           >
//             <RocketIcon className="w-4 h-4 sm:w-5 sm:h-5" /> {data.ctas[0].text}
//           </button>
//           <button
//             onClick={() => navigate('/contact')}
//             className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 bg-transparent border-2 border-white text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
//           >
//             <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5" /> {data.ctas[1].text}
//           </button>
//         </motion.div>
//       </div>

//       {/* Scroll Down Icon */}
//       <motion.div
//         className="absolute bottom-6 sm:bottom-8 md:bottom-10 z-20"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
//       >
//         <ArrowDownIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white/50" />
//       </motion.div>
//     </div>
//   );
// };

// export default HeroSection;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import type { HomeData } from '../../../types';
import { ArrowDownIcon, RocketIcon, PhoneIcon } from '../../../components/Icons';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = ({ data }: { data: HomeData['hero'] }) => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data.images.length]);

  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-black min-h-[100vh] sm:min-h-[90vh] md:min-h-[100vh]">
      {/* Background Image Slider */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 sm:bg-black/60 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-[90%] sm:max-w-3xl mx-auto">
        {/* Headline */}
        <motion.h1
          className="font-extrabold text-white mb-3 sm:mb-4 tracking-tight leading-tight 
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Two-line for small, one-line for large screens */}
          <span className="block sm:hidden">
            Smart Technology <br /> to Boost Your Business
          </span>
          <span className="hidden sm:block">
            Smart Technology to Boost Your Business
          </span>
        </motion.h1>

        {/* Typewriter Subtitle */}
        <motion.p
          className="text-base sm:text-lg md:text-xl bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent font-medium max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typewriter
            words={[data.subheadline]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 md:gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 bg-orange-500 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
          >
            <RocketIcon className="w-4 h-4 sm:w-5 sm:h-5" /> {data.ctas[0].text}
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 bg-transparent border-2 border-white text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5" /> {data.ctas[1].text}
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Icon */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDownIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white/50" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
