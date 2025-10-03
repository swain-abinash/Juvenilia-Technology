import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom'; // ✅ use NavLink
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import type { HomeData } from '../../../types';

const ServicesSnapshot = ({ data }: { data: HomeData['services'] }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <SectionWrapper>
            <SectionTitle>{data.title}</SectionTitle>
            <motion.div 
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {data.items.map((service, index) => (
                    <motion.div 
                        key={index}
                        className="group relative p-6 bg-gray-900 rounded-xl border border-white/10 transition-all duration-300 hover:border-orange-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10"
                        variants={itemVariants}
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                        <div className="relative z-10">
                            <div className="mb-4 p-3 bg-gray-800 border border-white/10 rounded-lg inline-block">
                                <service.icon className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <div className="text-center mt-12">
                <NavLink 
                    to={data.cta.link} 
                    end
                    className={({ isActive }) =>
                        `inline-block px-8 py-3 font-semibold rounded-lg border transition-all duration-300 ${
                            isActive
                                ? 'bg-orange-500 border-orange-500 text-white'
                                : 'bg-gray-800 border-white/20 text-white hover:bg-orange-500 hover:border-orange-500'
                        }`
                    }
                >
                    {data.cta.text} &rarr;
                </NavLink>
            </div>
        </SectionWrapper>
    );
};

export default ServicesSnapshot;
