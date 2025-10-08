import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { aboutData } from '../../../mock/aboutData';
import aboutImg1 from '../../../assets/ABOUT-US.jpg';
import aboutImg2 from '../../../assets/ABOUT-US2.jpg';

// Sparkle Effect
const SparkleEffect = ({ count = 50, mousePosition }: { count?: number; mousePosition: { x: number; y: number } }) => {
  const sparkles = [...Array(count)].map((_, i) => {
    const size = Math.random() * 5 + 2;
    const x = Math.random() * 800 - 400 + mousePosition.x;
    const y = Math.random() * 600 - 300 + mousePosition.y;
    const duration = Math.random() * 2 + 1;
    const delay = Math.random() * 1.5;

    return (
      <motion.div
        key={i}
        initial={{ x, y, scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 0.5, 0], opacity: [0, 1, 0.8, 0] }}
        transition={{ duration, delay, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="absolute"
        style={{
          width: size,
          height: size,
          backgroundColor: '#ffedd5',
          borderRadius: '50%',
          filter: 'blur(1px)',
        }}
      />
    );
  });
  return <div className="absolute inset-0 pointer-events-none">{sparkles}</div>;
};

export const AboutHero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 md:px-10 py-16 overflow-hidden"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />

      <SparkleEffect mousePosition={mousePosition} />

      {/* Mouse Glow */}
      <motion.div
        className="absolute w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-tr from-orange-500/30 via-orange-400/20 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{
          left: `${mousePosition.x - 150}px`,
          top: `${mousePosition.y - 150}px`,
        }}
        transition={{ type: 'tween', stiffness: 50, damping: 20 }}
      />

      {/* Grid Responsive */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-10 gap-8 md:gap-12 items-center max-w-7xl w-full">
        {/* Left side - Images */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-4 relative flex justify-center lg:justify-start mb-10 lg:mb-0"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] h-[380px] sm:h-[450px] md:h-[500px]">
            {/* Top image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
              className="absolute w-[85%] sm:w-[90%] h-[200px] sm:h-[240px] top-0 left-0 rounded-xl overflow-hidden shadow-2xl z-10"
            >
              <img src={aboutImg1} alt="Tech Setup" className="w-full h-full object-cover" />
            </motion.div>

            {/* Bottom image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
              className="absolute w-[85%] sm:w-[90%] h-[200px] sm:h-[240px] top-[140px] sm:top-[160px] left-[70px] sm:left-[100px] md:left-[120px] rounded-xl overflow-hidden shadow-2xl z-20"
            >
              <img src={aboutImg2} alt="Office Setup" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </motion.div>

        {/* Right side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 text-center lg:text-left relative"
        >
          {/* Background Glow */}
          <div className="absolute -top-10 -left-10 w-80 sm:w-96 h-80 sm:h-96 bg-orange-500/10 blur-3xl rounded-full z-0" />

          {/* Subtitle */}
          <span className="inline-flex items-center justify-center lg:justify-start gap-2 text-transparent bg-clip-text bg-gradient-to-r from-[#ff914d] to-[#ffd4a3] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 relative z-10">
            <Sparkles className="w-4 h-4 text-[#ffb77a]" />
            {aboutData.hero.subtitle}
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug relative z-10">
            <span className="bg-gradient-to-r from-[#ff914d] via-[#ffb76b] to-[#ffd4a3] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,140,0,0.25)]">
              {aboutData.hero.title}
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-lg font-medium text-gray-200/90 mb-5 italic tracking-wide relative z-10">
            {aboutData.hero.tagline}
          </p>

          {/* Description */}
          <div
            className="text-sm sm:text-base text-gray-300 leading-relaxed mb-5 bg-white/5 p-4 sm:p-5 rounded-xl border border-white/10 shadow-md backdrop-blur-sm relative z-10"
            dangerouslySetInnerHTML={{ __html: aboutData.hero.description }}
          />
        </motion.div>
      </div>
    </section>
  );
};
