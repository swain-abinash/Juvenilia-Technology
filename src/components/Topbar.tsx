
import {
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Topbar() {
  return (
    <>
      <div className="w-full bg-white/70 backdrop-blur-md border-b border-gray-200/40">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center py-2.5 px-4 md:px-10 lg:px-16 text-sm">
          
          {/* Left - Social Media */}
          <div className="flex space-x-3 text-gray-700 text-lg">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61581051792812"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-sm hover:scale-110 hover:shadow-md transition-all duration-300 inline-flex items-center justify-center text-white"
            >
              <FaFacebookF />
            </a>
            {/* X (Twitter) */}
            <a
              href="https://x.com/JuveniliaTech"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-700 to-black shadow-sm hover:scale-110 hover:shadow-md transition-all duration-300 inline-flex items-center justify-center text-white"
            >
              <FaXTwitter />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/juveniliatechnology/"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-sm hover:scale-110 hover:shadow-md transition-all duration-300 inline-flex items-center justify-center text-white"
            >
              <FaLinkedinIn />
            </a>


          </div>

          {/* Right - Contact Info */}
          <div className="flex items-center gap-4 text-gray-800 font-semibold text-xs md:text-sm">
            <a
              href="tel:+919437010139"
              className="px-3 py-1 rounded-full bg-orange-50 text-orange-700 hover:bg-orange-100 transition"
            >
              +91 9437010139
            </a>
            <a
              href="mailto:support@juveniliatechnology.com"
              className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
            >
              support@juveniliatechnology.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
