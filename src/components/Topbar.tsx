// TopBar.tsx
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Topbar() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-orange-50 to-white">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center py-2 px-6 md:px-12 lg:px-20 text-sm">
          {/* Left - Social Media */}
          <div className="flex space-x-2 text-gray-600 text-xl">
            <a
              href="https://www.facebook.com/profile.php?id=61581051792812"
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-full bg-orange-600/90 hover:bg-orange-600 transition inline-flex items-center justify-center text-white"
            >
              <FaFacebookF className="hover:text-black cursor-pointer" />
            </a>
            {/* <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-full bg-orange-600/90 hover:bg-orange-600 transition inline-flex items-center justify-center text-white"
            >
              <FaInstagram className="hover:text-black cursor-pointer" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-full bg-orange-600/90 hover:bg-orange-600 transition inline-flex items-center justify-center text-white"
            >
              <FaLinkedinIn className="hover:text-black cursor-pointer" />
            </a> */}
            <a
              href="https://x.com/JuveniliaTech"
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-full bg-orange-600/90 hover:bg-orange-600 transition inline-flex items-center justify-center text-white"
            >
              <FaTwitter className="hover:text-black cursor-pointer" />
            </a>
            {/* <ThemeToggle /> */}
            
          </div>

          {/* Right - Contact Info */}
          <div className="text-gray-700 font-medium flex ">
            
            <p className="md:mr-4">+91 9437010139</p> |{" "}
            <p className="ml-4">support@juveniliatechnology.com</p>
          </div>
        </div>
      </div>
      {/* Horizontal Line */}
      <hr className="border-t border-gray-200" />
    </>
  );
}
