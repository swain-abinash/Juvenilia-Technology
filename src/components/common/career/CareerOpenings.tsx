import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { CareerPageData } from '../../../types';
import { MapPin, Briefcase, ChevronDown } from 'lucide-react';

type CareerOpeningsProps = {
  openings: CareerPageData['openings'];
};

const JobListItem = ({ job }: { job: CareerPageData['openings'][0] }) => {
  const [isOpen, setIsOpen] = useState(false);

 return (
  <motion.div
    layout
    initial={{ borderRadius: 8 }}
    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 overflow-hidden mb-4 rounded-lg shadow-xl hover:shadow-2xl hover:border-orange-400/30 transition-all duration-300"
  >
    <motion.header
      initial={false}
      onClick={() => setIsOpen(!isOpen)}
      className="flex justify-between items-center p-4 md:p-6 cursor-pointer hover:bg-gray-800/30 transition-colors duration-200"
    >
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-white">{job.title}</h3>
        <div className="flex items-center space-x-4 text-sm text-white/60 mt-1">
          <span className="flex items-center">
            <Briefcase className="w-4 h-4 mr-1.5 text-orange-400" /> 
            {job.department}
          </span>
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-1.5 text-orange-400" /> 
            {job.location}
          </span>
        </div>
      </div>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown className="w-5 h-5 text-orange-400" />
      </motion.div>
    </motion.header>
    
    <AnimatePresence>
      {isOpen && (
        <motion.section
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="overflow-hidden"
        >
          <div className="p-4 md:p-6 border-t border-gray-800/50">
            <p className="text-white/70 mb-6">{job.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-white mb-2 flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  Responsibilities
                </h4>
                <ul className="list-disc list-inside space-y-1 text-white/60 ml-4 text-left">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="marker:text-orange-400">{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2 flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  Qualifications
                </h4>
                <ul className="list-disc list-inside space-y-1 text-white/60 ml-4 text-left">
                  {job.qualifications.map((item, index) => (
                    <li key={index} className="marker:text-orange-400">{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <button className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50">
              Apply Now
            </button>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  </motion.div>
);
};


export const CareerOpenings = ({ openings }: CareerOpeningsProps) => {
 return (
  <section className="bg-black py-16 sm:py-24 relative overflow-hidden">
    {/* Background gradient similar to AboutHero */}
    <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
    
    {/* Subtle orange glow effect */}
    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-orange-400/3 to-transparent"></div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            Current Openings
          </span>
        </h2>
        <p className="text-lg text-white/70 mt-2">Find your place on our team. Your journey starts here.</p>
        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded"></div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {openings.map((job) => (
          <JobListItem key={job.id} job={job} />
        ))}
      </div>
    </div>
  </section>
);
};

