import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaHandHoldingUsd } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Topbar() {
  return (
    <div className="w-full bg-gradient-to-r from-[#1b1b1b] via-[#222] to-[#1b1b1b] text-white border-b border-orange-500/10 shadow-[0_1px_10px_rgba(0,0,0,0.2)]">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center py-2.5 px-4 md:px-10 lg:px-16 gap-3 md:gap-0 text-sm">
        
        {/* Left - Social Media */}
        <div className="flex space-x-3">
          <a
            href="https://www.facebook.com/profile.php?id=61581051792812"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 transition-all duration-300 inline-flex items-center justify-center text-white hover:shadow-[0_0_10px_rgba(255,100,0,0.5)] hover:scale-110"
          >
            <FaFacebookF className="text-sm md:text-base"/>
          </a>

          <a
            href="https://x.com/JuveniliaTech"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 hover:from-orange-500 hover:to-orange-700 transition-all duration-300 inline-flex items-center justify-center text-white hover:shadow-[0_0_10px_rgba(255,100,0,0.5)] hover:scale-110"
          >
            <FaXTwitter className="text-sm md:text-base"/>
          </a>

          <a
            href="https://www.linkedin.com/company/juveniliatechnology/"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 transition-all duration-300 inline-flex items-center justify-center text-white hover:shadow-[0_0_10px_rgba(255,100,0,0.5)] hover:scale-110"
          >
            <FaLinkedinIn className="text-sm md:text-base"/>
          </a>
        </div>

        {/* Right - Contact Info + Become an Investor */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-gray-200 font-medium text-xs md:text-sm w-full sm:w-auto">
          
          {/* Phone */}
          <a
            href="tel:+919437010139"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2a2a2a] border border-orange-400/30 text-orange-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-[0_0_12px_rgba(255,100,0,0.5)] w-full sm:w-auto justify-center"
          >
            <FaPhoneAlt className="text-sm md:text-base" /> 
            <span className="truncate">+91 9437010139</span>
          </a>

          {/* Email */}
          <a
            href="mailto:support@juveniliatechnology.com"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2a2a2a] border border-orange-400/30 text-orange-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-[0_0_12px_rgba(255,100,0,0.5)] w-full sm:w-auto justify-center"
          >
            <FaEnvelope className="text-sm md:text-base" /> 
            <span className="truncate">support@juveniliatechnology.com</span>
          </a>

         
        </div>
      </div>
    </div>
  );
}
