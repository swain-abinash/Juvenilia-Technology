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
              <div className="w-20 h-25 mx-auto -mt-12 mb-4 rounded-full overflow-hidden shadow-lg bg-white">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
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



