import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

const AboutUsSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement | null>(null);

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
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center bg-black overflow-hidden px-4 sm:px-6 lg:px-12 py-12"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>

      {/* Mouse Hover Glow */}
      <div
        className="absolute w-44 sm:w-52 md:w-60 h-44 sm:h-52 md:h-60 bg-gradient-to-tr from-orange-500/30 via-orange-400/20 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-500"
        style={{
          left: `${mousePosition.x - 120}px`,
          top: `${mousePosition.y - 120}px`,
        }}
      />

      {/* Particle Effects */}
      {[...Array(15)].map((_, index) => (
        <div
          key={index}
          className="absolute w-1 h-1 bg-orange-400 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Content Layout */}
      <div className="relative flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12 max-w-7xl w-full z-10">
        {/* Images Left -> Slightly Top Right */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-start mt-0 lg:mt-0 lg:ml-8">
          <div className="absolute top-0 left-4 sm:left-8 w-44 sm:w-52 md:w-64 h-28 sm:h-36 md:h-40 rounded-xl overflow-hidden shadow-lg transform -translate-y-4 sm:-translate-y-6 border-2 border-orange-400">
            <img
              src="https://via.placeholder.com/300x200.png?text=Tech+Setup"
              alt="Tech Setup"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-16 sm:top-20 left-20 sm:left-24 w-60 sm:w-72 md:w-72 h-36 sm:h-48 md:h-48 rounded-xl overflow-hidden shadow-2xl border-2 border-orange-500">
            <img
              src="https://via.placeholder.com/350x250.png?text=Office+Setup"
              alt="Office Setup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Right -> Move Slightly Left */}
        <div className="text-white lg:w-1/2 max-w-lg px-2 sm:px-0 lg:-ml-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-4 sm:mb-6">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-xs sm:text-sm font-medium">Welcome to Our Story</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-gradient">
            About Us
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
            At <span className="text-orange-400 font-semibold">TechNova</span>, we harness technology to create intuitive and powerful solutions. Our team of dedicated{' '}
            <span className="text-orange-500 font-semibold">developers</span> and{' '}
            <span className="text-orange-400 font-semibold">designers</span> bring ideas to life, enhancing user experiences and driving growth.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 5s ease infinite;
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default AboutUsSection;
