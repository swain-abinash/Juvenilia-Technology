import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { aboutData } from '../../../mock/aboutData';
import { SectionTitle } from './SectionTitle';

export const Team: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="The People Behind the Innovation" subtitle="Our Team" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-orange-400/20 hover:border-orange-400/40 transition-all">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400/20 to-orange-600/20 flex items-center justify-center">
                  <Users className="w-10 h-10 text-orange-400" />
                </div>
                
                <h4 className="text-lg font-bold text-white text-center mb-1">{member.name}</h4>
                <p className="text-orange-400 text-xs font-semibold text-center mb-2">{member.position}</p>
                <p className="text-white/60 text-sm text-center italic">"{member.tagline}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
