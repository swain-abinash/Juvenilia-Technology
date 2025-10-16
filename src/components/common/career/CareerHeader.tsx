// import { motion } from "framer-motion";
// import type { CareerPageData } from "../../../types";

// type CareerHeaderProps = {
//   headerData: CareerPageData["header"];
// };

// export const CareerHeader = ({ headerData }: CareerHeaderProps) => {
//   return (
//     <div className="relative bg-gradient-to-br from-black via-[#0d0d0d] to-[#1a1a1a] text-white py-24 md:py-40 overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-20"
//         style={{ backgroundImage: `url(${headerData.mainImage})` }}
//       ></div>

//       {/* Subtle orange glow overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-700/5 mix-blend-soft-light"></div>

//       {/* Animated floating gradient for liveliness */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           animate={{ x: ["-50%", "50%"] }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "linear",
//           }}
//           className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-orange-500/5 via-orange-400/10 to-transparent blur-3xl"
//         />
//       </div>

//       <div className="relative container mx-auto px-6 text-center z-10">
//         {/* Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight"
//         >
//           <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,100,0,0.3)]">
//             {headerData.title}
//           </span>
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//           className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed"
//         >
//           {headerData.subtitle}
//         </motion.p>

//         {/* Underline */}
//         <motion.div
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//           className="mx-auto mt-8 h-1 w-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full origin-left shadow-[0_0_10px_rgba(255,100,0,0.6)]"
//         ></motion.div>
//       </div>
//     </div>
//   );
// };

import { motion } from "framer-motion";
import type { CareerPageData } from "../../../types";

type CareerHeaderProps = {
  headerData: CareerPageData["header"];
};

export const CareerHeader = ({ headerData }: CareerHeaderProps) => {
  return (
    <div className="relative bg-black text-white py-24 md:py-40 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${headerData.mainImage})` }}
      ></div>

      {/* Optional subtle dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative container mx-auto px-6 text-center z-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight"
        >
          {headerData.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-white/85 leading-relaxed"
        >
          {headerData.subtitle}
        </motion.p>
      </div>
    </div>
  );
};
