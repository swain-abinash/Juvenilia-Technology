// import React, { useMemo, useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import SectionWrapper from '../ui/SectionWrapper';
// import SectionTitle from '../ui/SectionTitle';
// import type { HomeData } from '../../../types';

// const OurProcess = ({ data }: { data: HomeData['process'] }) => {
//     const ref = useRef<HTMLDivElement>(null);
//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ["start end", "end start"]
//     });

//     // Helper: per-step progress based on overall scroll progress
//     const stepProgress = useMemo(
//         () => data.items.map((_, idx) =>
//             useTransform(scrollYProgress, [0, 1], [0, (idx + 1) / data.items.length])
//         ),
//         [data.items.length, scrollYProgress]
//     );

//     return (
//         <SectionWrapper className="bg-black">
//             <SectionTitle>{data.title}</SectionTitle>
//             <div ref={ref} className="relative max-w-4xl mx-auto">
//                 {/* Central timeline */}
//                 <svg className="absolute top-0 left-1/2 -ml-[1px] h-full w-[2px]" aria-hidden="true">
//                     <motion.path
//                         d={`M 0 0 V ${data.items.length * 220}`}
//                         fill="none"
//                         stroke="url(#gradient)"
//                         strokeWidth={2}
//                         initial={{ pathLength: 0 }}
//                         style={{ pathLength: scrollYProgress }}
//                     />
//                     <defs>
//                         <linearGradient id="gradient" gradientTransform="rotate(90)">
//                             <stop offset="0%" stopColor="#fb923c" />
//                             <stop offset="100%" stopColor="#1f2937" />
//                         </linearGradient>
//                     </defs>
//                 </svg>

//                 <div className="relative flex flex-col gap-20">
//                     {data.items.map((step, index) => (
//                         <motion.div
//                             key={index}
//                             className="relative flex items-center gap-6"
//                             initial={{ opacity: 0, x: (index % 2 === 0) ? -40 : 40 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true, amount: 0.4 }}
//                             transition={{ duration: 0.5 }}
//                         >
//                             {/* Step node with progress ring */}
//                             <div className="absolute left-1/2 -translate-x-1/2 z-10">
//                                 <div className="relative w-12 h-12">
//                                     <svg className="absolute inset-0" viewBox="0 0 36 36">
//                                         <circle cx="18" cy="18" r="16" stroke="#1f2937" strokeWidth="4" fill="none" />
//                                         <motion.circle
//                                             cx="18"
//                                             cy="18"
//                                             r="16"
//                                             stroke="#fb923c"
//                                             strokeWidth="4"
//                                             fill="none"
//                                             strokeDasharray={100}
//                                             style={{ strokeDashoffset: useTransform(stepProgress[index], [0, (index + 1) / data.items.length], [100, 0]) }}
//                                             strokeLinecap="round"
//                                         />
//                                     </svg>
//                                     <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400/20 to-orange-600/20 flex items-center justify-center text-white text-sm font-bold">
//                                         {String(index + 1).padStart(2, '0')}
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Step card */}
//                             <div className={`w-full md:w-5/12 p-6 rounded-lg border backdrop-blur-sm ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}
//                                             bg-gray-900/60 border-gray-800/60 shadow-xl hover:shadow-2xl transition-all`}
//                             >
//                                 <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
//                                 <p className="text-white/70 mb-4">{step.description}</p>
//                                 {/* Inner progress bar */}
//                                 <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
//                                     <motion.div
//                                         className="h-full bg-gradient-to-r from-orange-400 to-orange-600"
//                                         style={{ scaleX: useTransform(stepProgress[index], [0, (index + 1) / data.items.length], [0, 1]) }}
//                                         initial={{ scaleX: 0 }}
//                                         transition={{ duration: 0.5 }}
//                                         transformTemplate={({ transform }) => transform?.replace('scaleX', 'scaleX') || ''}
//                                         ></motion.div>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </SectionWrapper>
//     );
// };

// export default OurProcess;


import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import type { HomeData } from '../../../types';

const OurProcess = ({ data }: { data: HomeData['process'] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Step progress transforms at top level (no useMemo)
    const stepProgress = data.items.map((_, idx) =>
        useTransform(scrollYProgress, [0, 1], [0, (idx + 1) / data.items.length])
    );

    return (
        <SectionWrapper className="bg-black">
            <SectionTitle>{data.title}</SectionTitle>

            <div ref={ref} className="relative max-w-4xl mx-auto">
                {/* Central timeline */}
                <svg className="absolute top-0 left-1/2 -ml-[1px] h-full w-[2px]" aria-hidden="true">
                    <motion.path
                        d={`M 0 0 V ${data.items.length * 220}`}
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth={2}
                        initial={{ pathLength: 0 }}
                        style={{ pathLength: scrollYProgress }}
                    />
                    <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(90)">
                            <stop offset="0%" stopColor="#fb923c" />
                            <stop offset="100%" stopColor="#1f2937" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className="relative flex flex-col gap-20">
                    {data.items.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative flex items-center gap-6"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Step node with progress ring */}
                            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10">
                                <div className="relative w-12 h-12">
                                    <svg className="absolute inset-0" viewBox="0 0 36 36">
                                        <circle
                                            cx="18"
                                            cy="18"
                                            r="16"
                                            stroke="#1f2937"
                                            strokeWidth="4"
                                            fill="none"
                                        />
                                        <motion.circle
                                            cx="18"
                                            cy="18"
                                            r="16"
                                            stroke="#fb923c"
                                            strokeWidth="4"
                                            fill="none"
                                            strokeDasharray={100}
                                            style={{
                                                strokeDashoffset: useTransform(
                                                    stepProgress[index],
                                                    [0, (index + 1) / data.items.length],
                                                    [100, 0]
                                                )
                                            }}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400/20 to-orange-600/20 flex items-center justify-center text-white text-sm font-bold">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                </div>
                            </div>

                            {/* Step card */}
                            <div
                                className={`w-full md:w-5/12 p-6 rounded-lg border backdrop-blur-sm ${
                                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                                } bg-gray-900/60 border-gray-800/60 shadow-xl hover:shadow-2xl transition-all`}
                            >
                                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                                <p className="text-white/70 mb-4">{step.description}</p>

                                {/* Inner progress bar */}
                                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-orange-400 to-orange-600"
                                        style={{ scaleX: stepProgress[index] }}
                                        initial={{ scaleX: 0 }}
                                        transition={{ duration: 0.5 }}
                                        transformTemplate={({ transform }) => transform?.replace('scaleX', 'scaleX') || ''}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default OurProcess;
