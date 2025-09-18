// TopBar.tsx
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Topbar() {
  return (
    <>
      <div className="w-full bg-white">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center py-2 px-6 md:px-12 lg:px-20 text-sm">
          {/* Left - Social Media */}
          <div className="flex space-x-4 text-gray-600 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="hover:text-orange-600 cursor-pointer" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-orange-600 cursor-pointer" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="hover:text-orange-600 cursor-pointer" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-orange-600 cursor-pointer" />
            </a>
          </div>

          {/* Right - Contact Info */}
          <div className="text-gray-700 font-medium">
            <span className="md:mr-4">+91 1234567890</span> |{" "}
            <span className="ml-4">demo@gmail.com</span>
          </div>
        </div>
      </div>
      {/* Horizontal Line */}
      <hr className="border-t border-gray-200" />
    </>
  );
}
