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
      {/* Updated Gradient: from a dark-gray to a dark-orange to match the Service page's Hero section */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
      
      <div className="relative container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
        >
          {headerData.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300"
        >
          {headerData.subtitle}
        </motion.p>
      </div>
    </div>
  );
};