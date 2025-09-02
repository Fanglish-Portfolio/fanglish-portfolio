import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import logo from "./../../assets/image/logo/logo.png";
import { useNavigate } from "react-router-dom";
import {
  MdOutlineForum,
  MdOutlineLocalLibrary,
  MdOutlineCases,
  MdOutlineSchool,
  MdOutlineHotelClass,
} from "react-icons/md";
import flag from "../../assets/image/university/Flags.png";
import flag1 from "../../assets/image/university/Flags1.png";
import flag2 from "../../assets/image/university/Flags2.png";
import flag3 from "../../assets/image/university/Flags3.png";
import flag4 from "../../assets/image/university/Flags4.png";
import flag5 from "../../assets/image/university/Flags5.png";

import { Languages } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isStudyAbroadOpen, setIsStudyAbroadOpen] = useState(false);

  const servicesItems = [
    { name: "Consulting", icon: <MdOutlineForum />, link: "/service-detail/1" },
    { name: "Language Class", icon: <Languages />, link: "/language-class" },
    {
      name: "Ausbildung",
      icon: <MdOutlineLocalLibrary />,
      link: "/service-detail/3",
    },
    {
      name: (
        <p>
          Scholar Application <br /> Support Program
        </p>
      ),
      icon: <MdOutlineCases />,
      link: "/service-detail/4",
    },
    {
      name: "Duales Studium",
      icon: <MdOutlineSchool />,
      link: "/service-detail/5",
    },
    {
      name: "Study Abroad",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path d="M123-440q-1-10-1.5-20t-.5-20q0-75 28-140.5t77-114q49-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 10-.5 20t-1.5 20h-81q2-10 2.5-20t.5-20q0-10-.5-20t-2.5-20H639q1 10 1 20v40q0 10-1 20h-79v-33q0-12-.5-24t-1.5-23H403q-1 11-1.5 23t-.5 24v33h-79q-1-10-1-20v-40q0-10 1-20H204q-2 10-2.5 20t-.5 20q0 10 .5 20t2.5 20h-81Zm105-160h103q8-43 20-77.5t26-62.5q-48 18-87 54.5T228-600Zm186 0h132q-10-43-25-84t-41-76q-26 35-41.5 76T414-600Zm216 0h103q-23-49-62.5-85.5T583-740q14 30 26.5 63.5T630-600ZM440-120v-40q0-50-35-85t-85-35H80v-80h240q48 0 89.5 21t70.5 59q29-38 70.5-59t89.5-21h240v80H640q-50 0-85 35t-35 85v40h-80Z" />
        </svg>
      ),
      link: "/study-abroad/us",
    },
    // {
    //   name: "6 Months To The Max",
    //   icon: <MdOutlineHotelClass />,
    //   link: "/service-detail/7",
    // },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-7 bg-sub">
      <div className="lg:max-w-[1280px] px-5 md:px-10 lg:px-5 mx-auto flex items-center justify-between ">
        {/* Logo */}
        <Link to="/" className="">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" width={32} height={32} />
            <p className="text-[16px] libre font-medium text-primary">
              FuNglish Global Max
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex lg:space-x-5">
          <NavLink
            to="/"
            onClick={() => [
              setIsServicesOpen(false),
              setIsStudyAbroadOpen(false),
            ]}
            className={({ isActive }) =>
              isActive
                ? "libre text-[14px] lg:text-[14px] font-semibold text-primary"
                : "libre text-[14px] lg:text-[14px] text-white hover:text-primary"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => [
              setIsServicesOpen(false),
              setIsStudyAbroadOpen(false),
            ]}
            className={({ isActive }) =>
              isActive
                ? "libre text-[14px] lg:text-[14px] font-semibold text-primary"
                : "libre text-[14px] lg:text-[14px] text-white hover:text-primary"
            }
          >
            About Us
          </NavLink>
          {/* Our Services Dropdown */}
          <div className="relative">
            <button
              className="libre text-[14px] flex items-center space-x-1 hover:text-yellow-500 transition-colors"
              onClick={() => {
                setIsServicesOpen(!isServicesOpen);
                setIsStudyAbroadOpen(false);
              }}
            >
              <span>Our Services</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isServicesOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl py-2 z-50"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                onClick={() => setIsServicesOpen(false)}
              >
                <div className="absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45"></div>
                {servicesItems.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.link}
                    className={`flex items-center my-5 space-x-5 px-8 py-3 text-gray-800 hover:bg-primary/20 transition-colors ${
                      location.pathname === item.link ? "bg-primary/20" : ""
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          {/* Study Abroad Dropdown */}
          <div className="relative">
            <button
              className="libre text-[14px] flex items-center space-x-1 hover:text-yellow-500 transition-colors"
              onClick={() => {
                setIsStudyAbroadOpen(!isStudyAbroadOpen);
                setIsServicesOpen(false);
              }}
            >
              <span>Study Abroad</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isStudyAbroadOpen && (
              <div
                onMouseEnter={() => setIsStudyAbroadOpen(true)}
                onMouseLeave={() => setIsStudyAbroadOpen(false)}
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50"
              >
                <div className="absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45"></div>
                <NavLink
                  to="/study-abroad/us"
                  onClick={() => setIsStudyAbroadOpen(!isStudyAbroadOpen)}
                  className={`flex items-center gap-5 my-2 px-4 py-5 text-gray-800 hover:bg-primary/20 transition-colors ${
                    location.pathname === "/study-abroad/us"
                      ? "bg-primary/20"
                      : ""
                  }`}
                >
                  <img src={flag} alt="flag" />
                  Study in US
                </NavLink>
                <NavLink
                  to="/study-abroad/uk"
                  onClick={() => setIsStudyAbroadOpen(!isStudyAbroadOpen)}
                  className={`hover:bg-primary/20 flex items-center gap-5 my-2 px-4 py-5 text-gray-800 hover:bg-gray-50 transition-colors ${
                    location.pathname === "/study-abroad/uk"
                      ? "bg-primary/20"
                      : ""
                  }`}
                >
                  <img src={flag1} alt="flag" />
                  Study in UK
                </NavLink>
                <NavLink
                  to="/study-abroad/germany"
                  onClick={() => setIsStudyAbroadOpen(!isStudyAbroadOpen)}
                  className={`hover:bg-primary/20 flex items-center gap-5 my-2 px-4 py-5 text-gray-800 hover:bg-gray-50 transition-colors ${
                    location.pathname === "/study-abroad/germany"
                      ? "bg-primary/20"
                      : ""
                  }`}
                >
                  <img src={flag2} alt="flag" />
                  Study in GERMANY
                </NavLink>
                <NavLink
                  to="/study-abroad/austria"
                  onClick={() => setIsStudyAbroadOpen(!isStudyAbroadOpen)}
                  className={`hover:bg-primary/20 flex items-center gap-5 my-2 px-4 py-5 text-gray-800 hover:bg-gray-50 transition-colors ${
                    location.pathname === "/study-abroad/austria"
                      ? "bg-primary/20"
                      : ""
                  }`}
                >
                  <img src={flag3} alt="flag" />
                  Study in AUSTRIA
                </NavLink>
                <NavLink
                  to="/study-abroad/dubai"
                  onClick={() => setIsStudyAbroadOpen(!isStudyAbroadOpen)}
                  className={`hover:bg-primary/20 flex items-center gap-5 my-2 px-4 py-5 text-gray-800 hover:bg-gray-50 transition-colors ${
                    location.pathname === "/study-abroad/dubai"
                      ? "bg-primary/20"
                      : ""
                  }`}
                >
                  <img src={flag4} alt="flag" />
                  Study in DUBAI
                </NavLink>
                <NavLink
                  to="/study-abroad/malta"
                  onClick={() => setIsStudyAbroadOpen(!isStudyAbroadOpen)}
                  className={`hover:bg-primary/20 flex items-center gap-5 my-2 px-4 py-5 text-gray-800 hover:bg-gray-50 transition-colors ${
                    location.pathname === "/study-abroad/malta"
                      ? "bg-primary/20"
                      : ""
                  }`}
                >
                  <img src={flag5} alt="flag" />
                  Study in MALTA
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/package"
            onClick={() => [
              setIsServicesOpen(false),
              setIsStudyAbroadOpen(false),
            ]}
            className={({ isActive }) =>
              isActive
                ? "libre text-[14px] lg:text-[14px] font-semibold text-primary"
                : "libre text-[14px] lg:text-[14px] text-white hover:text-primary"
            }
          >
            Package
          </NavLink>
          {/* <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "libre text-[14px] lg:text-[14px] font-semibold text-primary"
                : "libre text-[14px] lg:text-[14px] text-white hover:text-primary"
            }
          >
            Contact Us
          </NavLink> */}
        </div>

        {/* Meet Our Counselors */}
        <div className="hidden lg:flex gap-8 items-center">
          <button onClick={() => navigate("/booking")} className="button">
            Meet Our Counselors
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-sub focus:outline-none">
            {isOpen ? (
              <IoClose size={25} className="text-primary" />
            ) : (
              <IoMenuSharp size={25} className="text-primary" />
            )}{" "}
            {/* Hamburger or Close icon */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden transition-all duration-300">
          <div className="flex flex-col space-y-4 px-4 py-8 w-full">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-[14px] lg:text-[14px] font-semibold text-primary"
                  : "text-[14px] lg:text-[14px] text-white hover:text-primary"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-[14px] lg:text-[14px] font-semibold text-primary"
                  : "text-[14px] lg:text-[14px] text-white hover:text-primary"
              }
            >
              About Us
            </NavLink>
            {/* Our Services Dropdown */}
            <div className="relative">
              <button
                className="text-[14px] flex items-center space-x-1 hover:text-yellow-500 transition-colors"
                onClick={() => {
                  setIsServicesOpen(!isServicesOpen);
                  setIsStudyAbroadOpen(false);
                }}
              >
                <span>Our Services</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl py-2 z-50">
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45"></div>
                  {servicesItems.map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.link}
                      onClick={() => {
                        setIsServicesOpen(false);
                        setIsStudyAbroadOpen(false);
                        isOpen(false);
                      }}
                      className="flex text-[14px] items-center my-2 space-x-2 px-4 py-2 text-gray-800 hover:bg-primary/20 transition-colors"
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
            {/* Study Abroad Dropdown */}
            <div className="relative">
              <button
                className="text-[14px] flex items-center space-x-1 hover:text-yellow-500 transition-colors"
                onClick={() => {
                  setIsStudyAbroadOpen(!isStudyAbroadOpen);
                  setIsServicesOpen(false);
                }}
              >
                <span>Study Abroad</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isStudyAbroadOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50">
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45"></div>
                  <NavLink
                    to="/study-abroad/us"
                    onClick={() => {
                      setIsStudyAbroadOpen(!isStudyAbroadOpen);
                      setIsServicesOpen(false);
                      isOpen(false);
                    }}
                    className="text-[14px] hover:bg-primary/20 flex items-center gap-5 my-2 px-4 py-2 text-gray-800 hover:bg-gray-50 transition-colors"
                  >
                    <img src={flag} alt="flag" />
                    Study in USA
                  </NavLink>
                  <NavLink
                    to="/study-abroad/uk"
                    onClick={() => {
                      setIsStudyAbroadOpen(!isStudyAbroadOpen);
                      setIsServicesOpen(false);
                      isOpen(false);
                    }}
                    className="text-[14px] hover:bg-primary/20 flex items-center gap-5 my-2 px-4 py-2 text-gray-800 hover:bg-gray-50 transition-colors"
                  >
                    <img src={flag1} alt="flag" />
                    Study in UK
                  </NavLink>
                  <NavLink
                    to="/study-abroad/germany"
                    onClick={() => {
                      setIsStudyAbroadOpen(!isStudyAbroadOpen);
                      setIsServicesOpen(false);
                      isOpen(false);
                    }}
                    className="text-[14px] hover:bg-primary/20 flex items-center gap-5 my-2 px-4 py-2 text-gray-800 hover:bg-gray-50 transition-colors"
                  >
                    <img src={flag2} alt="flag" />
                    Study in Germany
                  </NavLink>
                  <NavLink
                    to="/study-abroad/austria"
                    onClick={() => {
                      setIsStudyAbroadOpen(!isStudyAbroadOpen);
                      setIsServicesOpen(false);
                      isOpen(false);
                    }}
                    className="text-[14px] hover:bg-primary/20 flex items-center gap-5 my-2 px-4 py-2 text-gray-800 hover:bg-gray-50 transition-colors"
                  >
                    <img src={flag3} alt="flag" />
                    Study in Austria
                  </NavLink>
                  <NavLink
                    to="/study-abroad/dubai"
                    onClick={() => {
                      setIsStudyAbroadOpen(!isStudyAbroadOpen);
                      setIsServicesOpen(false);
                      isOpen(false);
                    }}
                    className="text-[14px] hover:bg-primary/20 flex items-center gap-5 my-2 px-4 py-2 text-gray-800 hover:bg-gray-50 transition-colors"
                  >
                    <img src={flag4} alt="flag" />
                    Study in Dubai
                  </NavLink>
                  <NavLink
                    to="/study-abroad/malta"
                    onClick={() => {
                      setIsStudyAbroadOpen(!isStudyAbroadOpen);
                      setIsServicesOpen(false);
                      isOpen(false);
                    }}
                    className="text-[14px] hover:bg-primary/20 flex items-center gap-5 my-2 px-4 py-2 text-gray-800 hover:bg-gray-50 transition-colors"
                  >
                    <img src={flag5} alt="flag" />
                    Study in Malta
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/package"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-[14px] lg:text-[14px] font-semibold text-primary"
                  : "text-[14px] lg:text-[14px] text-white hover:text-primary"
              }
            >
              Package
            </NavLink>
            {/* <NavLink
              to="/contact"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-[14px] lg:text-[14px] font-semibold text-primary"
                  : "text-[14px] lg:text-[14px] text-white hover:text-primary"
              }
            >
              Contact Us
            </NavLink> */}
          </div>
          <div className="px-4">
            <button onClick={() => navigate("/booking")} className="button">
              Meet Our Counselors
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
