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
      className="bg-white border border-gray-200 overflow-hidden mb-4 rounded-lg shadow-sm"
    >
      <motion.header
        initial={false}
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center p-4 md:p-6 cursor-pointer"
      >
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-black">{job.title}</h3>
          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
            <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1.5" /> {job.department}</span>
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-1.5" /> {job.location}</span>
          </div>
        </div>
        <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
        >
            <ChevronDown className="w-5 h-5 text-gray-500" />
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
            <div className="p-4 md:p-6 border-t border-gray-200">
              <p className="text-gray-700 mb-6">{job.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                      <h4 className="font-semibold text-black mb-2">Responsibilities</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {job.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
                      </ul>
                  </div>
                  <div>
                      <h4 className="font-semibold text-black mb-2">Qualifications</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {job.qualifications.map((item, index) => <li key={index}>{item}</li>)}
                      </ul>
                  </div>
              </div>

              <button className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
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
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Current Openings</h2>
          <p className="text-lg text-gray-600 mt-2">Find your place on our team. Your journey starts here.</p>
          <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto rounded"></div>
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

