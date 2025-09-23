// import { motion } from 'framer-motion';
// import type { CareerPageData } from '../../../types';

// type CareerHeaderProps = {
//   headerData: CareerPageData['header'];
// };

// export const CareerHeader = ({ headerData }: CareerHeaderProps) => {
//   return (
//     <div className="relative bg-black text-white py-20 md:py-32 overflow-hidden">
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-30"
//         style={{ backgroundImage: `url(${headerData.mainImage})` }}
//       ></div>
//       <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
//       <div className="relative container mx-auto px-6 text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//           className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
//         >
//           {headerData.title}
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
//           className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300"
//         >
//           {headerData.subtitle}
//         </motion.p>
//       </div>
//     </div>
//   );
// };

import { motion } from 'framer-motion';
import type { CareerPageData } from '../../../types';

type CareerHeaderProps = {
  headerData: CareerPageData['header'];
};

export const CareerHeader = ({ headerData }: CareerHeaderProps) => {
 return (
  <div className="relative bg-black text-white py-20 md:py-32 overflow-hidden">
    {/* Background with subtle gradient overlay */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-40"
      style={{ backgroundImage: `url(${headerData.mainImage})` }}
    ></div>
    
    {/* Updated gradient to match AboutHero colors - black to gray-900 with orange accent */}
    <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
    
    {/* Add subtle orange glow effect like in AboutHero */}
    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-orange-400/5 to-transparent"></div>
    
    <div className="relative container mx-auto px-6 text-center z-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
      >
        {/* Apply the same gradient text effect as AboutHero */}
        <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
          {headerData.title}
        </span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="max-w-3xl mx-auto text-lg md:text-xl text-white/70"
      >
        {headerData.subtitle}
      </motion.p>
    </div>
  </div>
);
};