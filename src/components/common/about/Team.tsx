// import React from 'react';
// import { motion } from 'framer-motion';
// import { Users } from 'lucide-react';
// import { aboutData } from '../../../mock/aboutData';
// import { SectionTitle } from './SectionTitle';

// export const Team: React.FC = () => {
//   return (
//     <section className="py-20 px-6 bg-black">
//       <div className="max-w-7xl mx-auto">
//         <SectionTitle title="The People Behind the Innovation" subtitle="Our Team" />

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {aboutData.team.map((member, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -10 }}
//               className="group relative"
//             >
//               <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-orange-400/20 hover:border-orange-400/40 transition-all">
//                 <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-orange-400">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>


//                 <h4 className="text-lg font-bold text-white text-center mb-1">{member.name}</h4>
//                 <p className="text-orange-400 text-xs font-semibold text-center mb-2">{member.position}</p>
//                 <p className="text-white/60 text-sm text-center italic">"{member.tagline}"</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


// import React from 'react';
// import { motion } from 'framer-motion';
// import { aboutData } from '../../../mock/aboutData';
// import { SectionTitle } from './SectionTitle';

// export const Team: React.FC = () => {
//   return (
//     <section className="py-20 px-6 bg-black">
//       <div className="max-w-7xl mx-auto">
//         <SectionTitle title="The People Behind the Innovation" subtitle="Our Team" />

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {aboutData.team.map((member, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
//               whileHover={{ scale: 1.05 }}
//               className="relative group"
//             >
//               <div className="p-6 rounded-2xl bg-gradient-to-tl from-gray-900 via-black to-gray-800 border border-orange-400/20 hover:border-orange-400/50 shadow-lg hover:shadow-2xl transition-all duration-300">
//                 <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-orange-400">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <h4 className="text-xl font-bold text-white text-center mb-1">{member.name}</h4>
//                 <p className="text-orange-400 text-sm font-semibold text-center mb-2">{member.position}</p>
//                 <p className="text-white/70 text-sm text-center italic">"{member.tagline}"</p>
//               </div>

//               {/* Optional floating icon on hover */}
//               <motion.div
//                 className="absolute -top-4 -right-4 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all"
//                 initial={{ scale: 0 }}
//                 whileHover={{ scale: 1.1 }}
//               >
//                 ⭐
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../../../mock/aboutData';
import { SectionTitle } from './SectionTitle';

export const Team: React.FC = () => {
  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      {/* Optional Abstract Background Shapes */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle title="Meet Our Visionaries" subtitle="Our Team" />

        {/* Flex horizontal layout with wrapping */}
        <div className="flex flex-wrap justify-center gap-8">
          {aboutData.team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 80 }}
              whileHover={{ scale: 1.05 }} // no rotation
              className={`w-64 h-72 p-6 bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-orange-400/20 shadow-2xl transition-transform duration-300
                ${index >= 3 ? 'mt-8' : 'mt-0'}`} // second row top margin
            >
              {/* Profile Image */}
              <div className="w-24 h-24 mx-auto -mt-12 mb-4 rounded-full overflow-hidden border-4 border-orange-400 shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h4 className="text-lg font-bold text-white text-center mb-1">{member.name}</h4>
              <p className="text-orange-400 text-xs font-semibold text-center mb-2">{member.position}</p>
              <p className="text-white/70 text-sm text-center italic">"{member.tagline}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



