import React from "react";
import { motion } from "framer-motion"; // ✅ import Framer Motion
import { footerData } from "../mock/footer";
import logo from "/logo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

import type { JSX } from "react";
import { siteMap } from "../mock/sitemap";

export default function Footer() {
  const navigate = useNavigate();

  const { company, columns, copyright } = footerData;
  const handleHomePageClick = () => {
    navigate("/");
  };

  // map key → icon component
const socialIcons: Record<string, JSX.Element> = {
  facebook: <FaFacebookF className="text-lg" />,
  instagram: <FaInstagram className="text-lg" />,
  linkedin: <FaLinkedinIn className="text-lg" />,
  x: <FaXTwitter className="text-lg" />, // X icon
};

  return (
    <footer className="bg-[#1f1f1f] text-gray-300">
      <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[30%_15%_15%_32%]  gap-8">
        {/* Logo + Company */}
        <div className="text-left">
          <div className="flex items-center gap-2">
            <div className="flex items-center space-x-2 gap-2">
              <img
                src={logo}
                alt="JT"
                className="lg:w-[70px] lg:h-[65px] w-[70px] h-[60px] cursor-pointer"
                onClick={handleHomePageClick}
              />
            </div>
            <span className="text-sx font-normal text-white ">
              {company.name}
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-400 mb-3">
            {company.description}
          </p>
          <h4>GSTIN: 21AAECJ1425H1Z4</h4>

          {/* Social icons */}
          <div className="flex gap-3 mt-5">
            {company.socials.map((s) => (
              <motion.a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-orange-600/90 inline-flex items-center justify-center text-white"
                aria-label={s.label}
                whileHover={{
                  scale: 1.2,
                  rotate: 8,
                  backgroundColor: "rgba(255,140,0,1)", // brighter orange
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="sr-only">{s.label}</span>
                {socialIcons[s.key]}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer links with hover effect */}
        {columns.slice(0, 2).map((col) => (
          <div key={col.title} className="my-3">
            <h4 className="text-white font-semibold mb-4 text-left">
              {col.title}
            </h4>
            <ul className="space-y-3">
              {"links" in col &&
                col.links?.map((l) => (
                  <li key={l.label} className="text-left">
                    <Link
                      to={l.href}
                      className="text-gray-400"   
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}

        

        {/* Map */}
        <div className="my-3">
          <h4 className="text-white font-semibold mb-4 text-left">Find Us</h4>
          <div className="w-full h-60 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=Juvenilia%20Technology%20Pvt%20Limited%20Bhubaneswar&z=13&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-5 text-center text-sm text-gray-400">
          {copyright}
        </div>
      </div>
    </footer>
  );
}
