import { footerData, companyLocation } from "../mock/footer";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import type { JSX } from "react";

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
    twitter: <FaTwitter className="text-lg" />,
  };
  return (
    <footer className="bg-[#1f1f1f] text-gray-300">
      <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt="JT"
                className="lg:w-[70px] lg:h-[54px] w-[60px] h-[45px] cursor-pointer"
                onClick={handleHomePageClick}
              />
            </div>
            <span className="text-xl font-semibold text-white ">
              {company.name}
            </span>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-400 text-left">
            {company.description}
          </p>
          <div className="flex gap-3 mt-5">
            {company.socials.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-orange-600/90 hover:bg-orange-600 transition inline-flex items-center justify-center text-white"
                aria-label={s.label}
              >
                <span className="sr-only">{s.label}</span>
                {socialIcons[s.key]} {/* render icon here */}
              </a>
            ))}
          </div>
        </div>

        {columns.slice(0, 2).map((col) => (
          <div key={col.title}>
            <h4 className="text-white font-semibold mb-4 text-left">{col.title}</h4>
            <ul className="space-y-3 ">
              {"links" in col &&
                col.links?.map((l) => (
                  <li key={l.label} className="text-left">
                    <a href={l.href} className="hover:text-white transition">
                      {l.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        ))}

        {/* <div>
          <h4 className="text-white font-semibold mb-4">{columns[2].title}</h4>
          <ul className="space-y-3">
            {"contacts" in columns[2] && columns[2].contacts?.map((c) => (
              <li key={c.type} className="flex items-start gap-3">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-orange-600" />
                <span className="text-gray-400">{c.value}</span>
              </li>
            ))}
          </ul>
        </div> */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-left">Find Us</h4>
          <div className="w-full h-48 rounded-lg overflow-hidden shadow-md">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1141406531883!2d85.8427807739111!3d20.295542112560252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909de50d2e393%3A0xd855e1f03678a6e2!2sJuvenilia%20Technology%20Pvt%20Limited!5e0!3m2!1sen!2sin!4v1758221983062!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{border:0}}
              loading="lazy"
            ></iframe> */}
           
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
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-5 text-center text-sm text-gray-400">
          {copyright}
        </div>
      </div>
    </footer>
  );
}
