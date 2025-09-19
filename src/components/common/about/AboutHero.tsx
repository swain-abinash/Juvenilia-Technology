import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';
import { aboutData } from '../../../mock/aboutData';
import aboutImg1 from '../../../assets/about1.jpg';
import aboutImg2 from '../../../assets/about2.jpg';

// A new component for a sparkle effect
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
        animate={{
          scale: [0, 1, 0.5, 0],
          opacity: [0, 1, 0.8, 0],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
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
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center bg-black px-6 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
      
      <SparkleEffect mousePosition={mousePosition} />

      {/* Enhanced mouse-based glow effect */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-tr from-orange-500/30 via-orange-400/20 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
        }}
        transition={{ type: "tween", stiffness: 50, damping: 20 }}
      />

      {/* Grid with 40/60 width split */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-10 gap-12 items-center max-w-7xl w-full">
        {/* Left side: Animated images (40% width) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-4 relative flex justify-center lg:justify-start"
        >
          <div className="relative w-full h-[500px]">
            {/* Top image, positioned partially outside the main grid area to create a unique flow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
              className="absolute w-[80%] max-w-[320px] h-[200px] top-0 left-0 rounded-xl overflow-hidden border-2 border-orange-400 shadow-2xl z-10"
            >
              <img src={aboutImg1} alt="Tech Setup" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* Bottom image, adjusted to overlap the top one */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
              className="absolute w-[80%] max-w-[320px] h-[200px] top-[140px] left-[80px] rounded-xl overflow-hidden border-2 border-orange-500 shadow-2xl z-20"
            >
              <img src={aboutImg2} alt="Office Setup" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </motion.div>

        {/* Right side: Animated text content (60% width) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-4 h-4" />
            {aboutData.hero.subtitle}
          </span>
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              {aboutData.hero.title}
            </span>
          </h1>
          
          <p className="text-lg text-white/70 mb-6 italic">
            {aboutData.hero.tagline}
          </p>
          
          <div 
            className="text-base text-white/80 leading-relaxed mb-6"
            dangerouslySetInnerHTML={{ __html: aboutData.hero.description }}
          />
          
          <p className="text-base text-orange-400/90 italic border-l-4 border-orange-400 pl-4">
            "{aboutData.hero.philosophy}"
          </p>
        </motion.div>
      </div>
    </section>
  );
};