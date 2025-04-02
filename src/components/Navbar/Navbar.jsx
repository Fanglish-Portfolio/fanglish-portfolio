import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import logo from "./../../assets/image/logo/logo.png";
import { TfiWorld } from "react-icons/tfi";
import { FaPhoneVolume } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-7 bg-sub">
      <div className="lg:w-[1000px] px-5 md:px-10 lg:px-0 mx-auto flex items-center justify-between ">
        {/* Logo */}
        <Link to="/" className="">
          <img src={logo} alt="Logo" className="w-24 md:w-20" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex md:space-x-5 lg:space-x-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[14px] lg:text-[18px] font-semibold text-primary"
                : "text-[14px] lg:text-[18px] text-white hover:text-primary"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[14px] lg:text-[18px] font-semibold text-primary"
                : "text-[14px] lg:text-[18px] text-white hover:text-primary"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive
                ? "text-[14px] lg:text-[18px] font-semibold text-primary"
                : "text-[14px] lg:text-[18px] text-white hover:text-primary"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/spare"
            className={({ isActive }) =>
              isActive
                ? "text-[14px] lg:text-[18px] font-semibold text-primary"
                : "text-[14px] lg:text-[18px] text-white hover:text-primary"
            }
          >
            Spear Parts
          </NavLink>
        </div>

        {/* Language Selector and Button */}
        <div className="hidden md:flex gap-8 items-center">
          {/* <span className="text-gray-800">MYA / EN</span> */}
          <a
            href="https://www.globalsuzuki.com/"
            target="_blank"
            className="flex items-center gap-2 cursor-pointer hover:scale-105 transition duration-300"
          >
            <p>Global</p>
            <TfiWorld size={20} />
          </a>

          <a
            href="tel:095119806"
            className="button hover:scale-105 transition duration-300"
          >
            <p>Call Us</p>
            <FaPhoneVolume size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
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
        <div className="md:hidden transition-all duration-300">
          <div className="flex flex-col space-y-4 px-4 py-10 w-full">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-primary font-semibold"
                  : "text-black text-lg  text-white hover:text-primary"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-primary font-semibold"
                  : "text-black text-lg text-white hover:text-primary"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/service"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-primary font-semibold"
                  : "text-black text-lg text-white hover:text-primary"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/spare"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-primary font-semibold"
                  : "text-black text-lg text-white hover:text-primary"
              }
            >
              Spear Parts
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
