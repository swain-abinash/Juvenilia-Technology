import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";
import logo from "/logo.png";


const ResponsiveNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [hoveredItem, setHoveredItem] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(0);
  const [activeItem, setActiveItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const listitem = [
    { link: "/", text: "Home", dropdown: [] },
    { link: "/about", text: "About", dropdown: [] },
    { link: "/services", text: "Services", dropdown: [] },

    // {
    //   link: "",
    //   text: "MOU",
    //   dropdown: [
    //     { link: "/mou/college_student", text: "College Student", desc: "One for College for students" },
    //     { link: "/mou/employment", text: "Employement", desc: "Another as Companies for employment" },

    //   ],
    // },
    { link: "/plans", text: "Plans", dropdown: [] },
    { link: "/career", text: "Career", dropdown: [] },

  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (index: any) => {
    setActiveDropdown(activeDropdown === index ? 0 : index);
  };

  const handleDropdownSelect = (dropdownText: any, mainItemText: any) => {
    setSelectedItem(dropdownText);
    setActiveItem(mainItemText);
    setHoveredItem("");
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomePageClick = () => {
    navigate("/");
    setSelectedItem("Home");
    setActiveItem("Home");
    setHoveredItem("");
  };

  const pathname = location.pathname;

  return (
    <header
      className={`transition-all duration-300 ease-in-out ${isFixed
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-gradient-to-r from-orange-50 to-white"
        } sticky top-0 z-500`}
    >
      <div className="max-w-[1600px] xl:mx-auto flex justify-between items-center lg:py-1 md:px-18 lg:px-19 px-5 md:mx-10">
        {/* Logo */}
        <div className="flex justify-center items-center gap-24 relative">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="JT"
              className="lg:w-[85px] lg:h-[80px] md:w-[80px] md:h-[75px]  w-[75px] h-[70px] cursor-pointer"
              onClick={handleHomePageClick}
            />
          </div>

        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6 text-[#000000] md:text-[16px] md:font-semibold">
          {listitem.map((item, index) => (
            <div
              key={index}
              className="group"
              onMouseEnter={() => setHoveredItem(item.text)}
              onMouseLeave={() => setHoveredItem("")}
            >
              {!item.link && (
                <span
                  className={`block py-2 cursor-pointer ${activeItem === item.text || pathname.includes("industries")
                      ? "text-orange-600"
                      : "text-black"
                    }`}
                >
                  <span className="flex gap-2">
                    <span>{item.text}</span>
                    <span
                      className={`mt-[2px] font-medium ${hoveredItem === item.text ? "rotate-180" : "rotate-0"
                        } transition-transform duration-200`}
                    >
                      <RiArrowDownSLine className="text-2xl" />
                    </span>
                  </span>
                </span>
              )}
              {item.link && (
                <Link
                  to={item.link}
                  className={`block py-2 ${activeItem === item.text || pathname === item.link
                      ? "text-orange-600"
                      : "text-black"
                    }`}
                  onClick={() => handleDropdownSelect(item.text, item.text)}
                >
                  {item.text}
                </Link>
              )}
              {/* {hoveredItem === item.text && item.dropdown.length > 0 && (
                  <div className="absolute  mt-0 rounded-md bg-white shadow-lg text-left space-y-2 z-50 w-[10vw] md:w-[15vw] lg:w-[20vw] grid grid-cols-1 gap-1 p-5 pb-8">
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        to={dropdownItem.link}
                        className={`block rounded-md px-4 py-2 ${
                          selectedItem === dropdownItem.text ||
                          pathname.includes(dropdownItem.link)
                            ? "text-orange-600"
                            : "text-black"
                        } hover:bg-orange-100`}
                        onClick={() =>
                          handleDropdownSelect(dropdownItem.text, item.text)
                        }
                      >
                        {dropdownItem.text}
                        <span className="text-sm block text-gray-500">
                          {dropdownItem.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                )} */}
            </div>
          ))}
        </nav>


        {/* Desktop CTA */}
        {/* <div className="hidden lg:flex space-x-4 text-center rounded-lg hover:bg-orange-100 transition">
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 text-white text-center bg-orange-600 hover:bg-orange-700 rounded-lg transition font-semibold"
          >
            TRY JT NOW
          </a>
        </div> */}

        {/* Mobile Menu Button */}
        <button className="lg:hidden flex flex-col space-y-1.5 my-8 text-orange-600" onClick={toggleMenu}>
          <HiMenuAlt3 className="text-3xl" />
        </button>

      </div>

      {/* Mobile Menu - Portal ensures overlay sits above all content even when scrolled */}
      {isOpen && createPortal(
        <div className="fixed inset-0 z-[1100]">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-100 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />
          {/* Drawer */}
          <nav className="lg:hidden bg-white/80 backdrop-blur-md text-[#000000] text-[16px] font-normal p-4 absolute top-0 right-0 w-3/4 h-full transform transition-transform duration-300 ease-in-out translate-x-0 shadow-xl">
            <div className="flex justify-between mx-5">
              <img
                src={logo}
                alt="JT"
                className="lg:w-[85px] lg:h-[80px] md:w-[80px] md:h-[75px]  w-[75px] h-[70px] cursor-pointer"
                onClick={() => navigate("/")}
              />
              <button onClick={() => setIsOpen(false)} className="text-4xl">
                <IoIosClose />
              </button>
            </div>
            <div className="border-b-2 border-gray-200 mt-5"></div>
            <div className="w-full my-5 overflow-y-auto h-[100%] pb-20">
              {listitem.map((item, index) => (
                <div key={index} className="flex justify-center items-start mx-5 my-2">
                  <div
                    className="flex flex-1 items-start space-x-2 cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  >
                    {!item.link && (
                      <div
                        className={`block py-2 cursor-pointer text-left font-medium ${activeItem === item.text ||
                            pathname.includes(item.link)
                            ? "text-orange-600"
                            : "text-black"
                          }`}
                      >
                        {item.text}
                        {/* {activeDropdown === index && (
                          <div className="mt-2 text-left">
                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                              <Link
                                key={dropdownIndex}
                                to={dropdownItem.link}
                                className={`block px-4 py-2 font-normal ${
                                  selectedItem === dropdownItem.text ||
                                  pathname.includes(dropdownItem.link)
                                    ? "text-orange-600"
                                    : "text-black"
                                }`}
                                onClick={() =>
                                  handleDropdownSelect(dropdownItem.text, item.text)
                                }
                              >
                                {dropdownItem.text}
                              </Link>
                            ))}
                          </div>
                        )} */}
                      </div>
                    )}
                    {item.link && (
                      <Link
                        to={item.link}
                        className={`block py-2 font-medium ${activeItem === item.text
                            ? "text-orange-600"
                            : "text-black"
                          }`}
                        onClick={() => handleDropdownSelect(item.text, item.text)}
                      >
                        {item.text}
                      </Link>
                    )}
                  </div>
                  {!item.link && (
                    <span
                      className={`mt-2 font-medium ${activeDropdown === index ? "rotate-180" : "rotate-0"
                        } transition-transform duration-200`}
                    >
                      <RiArrowDownSLine className="text-2xl" />
                    </span>
                  )}
                </div>
              ))}
              {/* <div className="flex flex-col flex-nowrap space-y-4 p-4 mt-4">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 text-white text-center bg-orange-600 rounded-lg transition font-semibold"
                >
                  TRY JT NOW
                </a>
              </div> */}
            </div>
          </nav>
        </div>, document.body)}
    </header>
  );
};

export default ResponsiveNavbar;
