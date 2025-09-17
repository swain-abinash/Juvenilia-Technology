import React, { useState, useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import { aboutData } from "../../mock/about";
// Direct imports (no need to pass via aboutData)
import aboutImg1 from "../../assets/about1.jpg";
import aboutImg2 from "../../assets/about2.jpg";

const AboutUsSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mouse glow effect
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Scroll fade-in observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 3D Tilt effect
  const handleTilt = (e: React.MouseEvent, index: number) => {
    const card = imageRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 15;
    const rotateY = ((x / rect.width) - 0.5) * -15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const resetTilt = (index: number) => {
    const card = imageRefs.current[index];
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-black px-6 py-16 overflow-hidden"
    >
      {/* Gradient BG Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />

      {/* Mouse Glow */}
      <div
        className="absolute w-60 h-60 bg-gradient-to-tr from-orange-500/20 via-orange-400/10 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-500"
        style={{
          left: `${mousePosition.x - 150}px`,
          top: `${mousePosition.y - 150}px`,
        }}
      />

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full opacity-70 spark"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Content */}
      <div
        className={`relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl w-full transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        {/* Left Side - Overlapped Images */}
        <div className="relative flex justify-center lg:justify-start mt-[-300px] ml-[80px]">


          {/* First Image - Slide from Left */}
          <div
            ref={(el) => { if (el) imageRefs.current[0] = el; }}
            onMouseMove={(e) => handleTilt(e, 0)}
            onMouseLeave={() => resetTilt(0)}
            className={`absolute left-0 top-0 w-64 h-40 sm:w-72 sm:h-44 rounded-xl overflow-hidden border border-orange-400 shadow-lg transition-all duration-700 transform
              ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-32 opacity-0"}`}
          >
            <img src={aboutImg1} alt="Tech Setup" className="w-full h-full object-cover" />
          </div>

          {/* Second Image - Slide from Bottom */}
          <div
            ref={(el) => { if (el) imageRefs.current[1] = el; }}
            onMouseMove={(e) => handleTilt(e, 1)}
            onMouseLeave={() => resetTilt(1)}
            className={`absolute left-20 top-20 w-64 h-40 sm:w-72 sm:h-44 rounded-xl overflow-hidden border border-orange-500 shadow-lg transition-all duration-700 transform
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0"}`}
          >
            <img src={aboutImg2} alt="Office Setup" className="w-full h-full object-cover" />
          </div>
        </div>

   
        {/* Right Side - Text */}
        <div className={`text-center lg:text-left relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>


          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-white relative animate-heading hover-underline">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-gradient">
              About Us
            </span>
          </h1>

          {/* Subheading Tagline */}
          <p className="text-lg text-white/70 max-w-xl mx-auto lg:mx-0 mb-6 italic animate-tagline">
            {aboutData.tagline}
          </p>

          {/* Body Text */}
          <p className="text-base text-white/80 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-body" dangerouslySetInnerHTML={{ __html: aboutData.description }} />
        </div>


      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
          background-size: 300% 300%;
        }
        @keyframes floatSpark {
          0% { transform: translateY(0) scale(1); opacity: 0.5; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.5; }
        }
        .spark {
          animation: floatSpark 6s ease-in-out infinite;
        }
        @keyframes labelGlow {
          0%, 100% { box-shadow: 0 0 8px 2px #fb923c44; }
          50% { box-shadow: 0 0 24px 6px #fb923c88; }
        }
        .animate-label-glow {
          animation: labelGlow 2.5s ease-in-out infinite;
        }
        @keyframes sparkle {
          0%, 100% { filter: drop-shadow(0 0 2px #fb923c); }
          50% { filter: drop-shadow(0 0 8px #fb923c); }
        }
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        @keyframes headingFadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-heading {
          animation: headingFadeUp 1s cubic-bezier(.4,0,.2,1) forwards;
          animation-delay: 0.2s;
        }
        @keyframes barSlide {
          0% { width: 0; opacity: 0; }
          100% { width: 4rem; opacity: 1; }
        }
        .animate-bar {
          animation: barSlide 1s cubic-bezier(.4,0,.2,1) forwards;
          animation-delay: 0.7s;
        }
        @keyframes taglineFade {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-tagline {
          animation: taglineFade 1s cubic-bezier(.4,0,.2,1) forwards;
          animation-delay: 1.1s;
        }
        @keyframes bodyFade {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-body {
          animation: bodyFade 1s cubic-bezier(.4,0,.2,1) forwards;
          animation-delay: 1.5s;
        }
      `}</style>
      <style>{`
      @keyframes welcomeFade {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-welcome {
  animation: welcomeFade 1s cubic-bezier(.4,0,.2,1) forwards;
  animation-delay: 0.1s;
}

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animate-gradient {
    animation: gradient 6s ease infinite;
    background-size: 300% 300%;
  }
  /* Hover underline effect */
  .hover-underline {
    position: relative;
    display: inline-block;
  }
  .hover-underline::after,
  .hover-underline::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, #fb923c, #f97316);
    bottom: -6px;
    left: 0;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s ease-out;
  }
  .hover-underline::before {
    top: -6px;
    transform-origin: left;
  }
  .hover-underline:hover::after,
  .hover-underline:hover::before {
    transform: scaleX(1);
  }

  /* Other existing animations */
  @keyframes floatSpark {
    0% { transform: translateY(0) scale(1); opacity: 0.5; }
    50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
    100% { transform: translateY(0) scale(1); opacity: 0.5; }
  }
  .spark { animation: floatSpark 6s ease-in-out infinite; }

  @keyframes labelGlow {
    0%, 100% { box-shadow: 0 0 8px 2px #fb923c44; }
    50% { box-shadow: 0 0 24px 6px #fb923c88; }
  }
  .animate-label-glow { animation: labelGlow 2.5s ease-in-out infinite; }

  @keyframes sparkle {
    0%, 100% { filter: drop-shadow(0 0 2px #fb923c); }
    50% { filter: drop-shadow(0 0 8px #fb923c); }
  }
  .animate-sparkle { animation: sparkle 2s ease-in-out infinite; }

  @keyframes headingFadeUp {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-heading { animation: headingFadeUp 1s cubic-bezier(.4,0,.2,1) forwards; animation-delay: 0.2s; }

  @keyframes barSlide {
    0% { width: 0; opacity: 0; }
    100% { width: 4rem; opacity: 1; }
  }
  .animate-bar { animation: barSlide 1s cubic-bezier(.4,0,.2,1) forwards; animation-delay: 0.7s; }

  @keyframes taglineFade {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-tagline { animation: taglineFade 1s cubic-bezier(.4,0,.2,1) forwards; animation-delay: 1.1s; }

  @keyframes bodyFade {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-body { animation: bodyFade 1s cubic-bezier(.4,0,.2,1) forwards; animation-delay: 1.5s; }
`}</style>
    </section>
  );
};

export default AboutUsSection;
