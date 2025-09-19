import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle } from 'lucide-react';
import { aboutData } from '../../../mock/aboutData';
import { SectionTitle } from './SectionTitle';

export const Milestones: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Our Journey So Far" subtitle="Milestones" />
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 to-orange-600 hidden md:block" />
          
          {aboutData.milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1" />
              
              <div className="relative z-10 flex items-center justify-center">
                <div className="w-6 h-6 bg-orange-400 rounded-full border-4 border-black" />
              </div>
              
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-orange-400/20 hover:border-orange-400/40 transition-all group">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-orange-400" />
                    <span className="text-orange-400 font-bold text-lg">{milestone.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-white/70">{milestone.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
