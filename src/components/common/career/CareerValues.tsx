import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import type { CareerPageData } from "../../../types";
import * as LucideIcons from "lucide-react";

type CareerValuesProps = {
  values: CareerPageData["values"];
};

const iconContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const iconItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export const CareerValues = ({ values }: CareerValuesProps) => {
  // store only ONE expanded card title (or null if none)
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (title: string) => {
    setExpandedCard((prev) => (prev === title ? null : title));
  };

  return (
    <section className="bg-black py-16 sm:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      {/* Subtle orange glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-orange-400/3 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </h2>
          <p className="text-lg text-white/70 mt-2">
            The principles that guide us in everything we do.
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded"></div>
        </div>

      <motion.div
  variants={iconContainerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start"
>

          {values.map((value) => {
            const Icon =
              LucideIcons[value.icon as keyof typeof LucideIcons] ||
              LucideIcons["ShieldQuestion"];
            const isExpanded = expandedCard === value.title;

            return (
              <motion.div
                key={value.title}
                variants={iconItemVariants}
                className="flex flex-col justify-between  text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800/50 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:border-orange-400/30 transition-all duration-300"
              >
                {/* Icon + Title */}
                <div>
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-orange-400/20 to-orange-600/20 border-2 border-orange-400/30 text-orange-400 mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-sx font-semibold text-white mb-2">
                    {value.title}
                  </h3>

                  {/* Description with layout animation */}
                  <motion.div layout>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={isExpanded ? "expanded" : "collapsed"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={`text-white/70 text-left ${
                          !isExpanded ? "line-clamp-5" : ""
                        }`}
                      >
                        {value.description}
                      </motion.p>
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* Footer button */}
                {value.description.split(" ").length > 20 && (
                  <div className="flex justify-end mt-4">
                    <motion.button
                      onClick={() => toggleCard(value.title)}
                      className="flex items-center gap-1 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isExpanded ? (
                        <>
                          Read Less <ChevronDown className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Read More <ChevronRight className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
