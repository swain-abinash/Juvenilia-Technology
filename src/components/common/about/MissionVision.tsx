
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import { aboutData } from '../../../mock/aboutData';
import { SectionTitle } from './SectionTitle';

export const MissionVision: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Mission & Vision" subtitle="Our Purpose" />
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-orange-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <Target className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">{aboutData.mission.title}</h3>
            <p className="text-white/70 leading-relaxed">{aboutData.mission.content}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-orange-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <Eye className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">{aboutData.vision.title}</h3>
            <p className="text-white/70 leading-relaxed">{aboutData.vision.content}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
