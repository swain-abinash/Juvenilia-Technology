import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Award, TrendingUp, Shield, Users, Zap } from 'lucide-react';
import { aboutData } from '../../../mock/aboutData';
import { SectionTitle } from './SectionTitle';

const icons = [Award, TrendingUp, Shield, Users, Zap];

export const WhyChooseUs: React.FC = () => {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate('/contact');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Why Partner with Us" subtitle="Choose Excellence" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutData.whyChooseUs.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-orange-400/20 hover:border-orange-400/40 transition-all hover:transform hover:scale-105">
                  <Icon className="w-10 h-10 text-orange-400 mb-4" />
                  <p className="text-white/90 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button 
            onClick={handleStartJourney}
            className="px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-orange-400/30 transition-all transform hover:scale-105"
          >
            Start Your Journey With Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};