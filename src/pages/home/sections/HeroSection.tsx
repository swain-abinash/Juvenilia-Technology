import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { HomeData } from "../../../types";
import { ArrowDownIcon, RocketIcon, PhoneIcon } from "../../../components/Icons";

const HeroSection = ({ data }: { data: HomeData["hero"] }) => {
  const [index, setIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const navigate = useNavigate();

  // Background Image Rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [data.images.length]);

  // Typewriter effect for headline
  useEffect(() => {
    let i = 0;
    setTypedText("");
    const typingInterval = setInterval(() => {
      setTypedText(data.headline.slice(0, i + 1));
      i++;
      if (i === data.headline.length) clearInterval(typingInterval);
    }, 100);
    return () => clearInterval(typingInterval);
  }, [data.headline]);

  // Highlight keywords in Orange
  const highlightTech = (text: string) => {
    return text
      .replace(/Digital Marketing/g, '<span class="text-orange-400 font-semibold">Digital Marketing</span>')
      .replace(/Website Designing/g, '<span class="text-orange-400 font-semibold">Website Designing</span>')
      .replace(/Web Development/g, '<span class="text-orange-400 font-semibold">Web Development</span>')
      .replace(/App Development/g, '<span class="text-orange-400 font-semibold">App Development</span>')
      .replace(/Software Development/g, '<span class="text-orange-400 font-semibold">Software Development</span>');
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-black to-orange-950 text-white">
      {/* Background image */}
      <img
        src={data.images[index]}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      <div className="relative z-20 text-center px-6 md:px-10 max-w-5xl mx-auto">
        {/* Headline with typewriter effect */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
          <span dangerouslySetInnerHTML={{ __html: highlightTech(typedText) }} />
          <span className="border-r-2 border-white animate-pulse ml-1" />
        </h1>

        {/* Subheadline */}
        <p
          className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-10 bg-white/10 px-6 py-4 rounded-lg border border-white/10 shadow-md"
          dangerouslySetInnerHTML={{ __html: highlightTech(data.subheadline) }}
        />

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-6">
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] transition-all duration-300"
          >
            <RocketIcon className="w-5 h-5" />
            {data.ctas[0].text}
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,165,0,0.4)] transition-all duration-300"
          >
            <PhoneIcon className="w-5 h-5" />
            {data.ctas[1].text}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 z-20 animate-bounce">
        <ArrowDownIcon className="w-8 h-8 text-orange-400/70" />
      </div>

      {/* Gradient animation using Tailwind keyframes */}
      <style>
        {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradientBG {
            background-size: 400% 400%;
            animation: gradientBG 15s ease infinite;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
