import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import logo from "./../../assets/image/logo/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-7 bg-sub">
      <div className="lg:w-[1280px] px-5 md:px-10 lg:px-0 mx-auto flex items-center justify-between ">
        {/* Logo */}
        <Link to="/" className="">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" width={32} height={32} />
            <p className="text-[16px] font-medium text-primary">
              FuNglish Global
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex md:space-x-5 lg:space-x-5 libre">
          <NavLink
            to="/"
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
            className={({ isActive }) =>
              isActive
                ? "text-[14px] lg:text-[14px] font-semibold text-primary"
                : "text-[14px] lg:text-[14px] text-white hover:text-primary"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive
                ? "text-[14px] lg:text-[14px] font-semibold text-primary"
                : "text-[14px] lg:text-[14px] text-white hover:text-primary"
            }
          >
            Our Services
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-[14px] lg:text-[14px] font-semibold text-primary"
                : "text-[14px] lg:text-[14px] text-white hover:text-primary"
            }
          >
            Study Abroad
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-[14px] lg:text-[14px] font-semibold text-primary"
                : "text-[14px] lg:text-[14px] text-white hover:text-primary"
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[14px] lg:text-[14px] font-semibold text-primary"
                : "text-[14px] lg:text-[14px] text-white hover:text-primary"
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Language Selector and Button */}
        <div className="hidden md:flex gap-8 items-center">
          <button onClick={() => navigate("/booking")} className="button">
            Meet Our Counselors
          </button>
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
            <NavLink
              to="/service"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-[14px] lg:text-[14px] font-semibold text-primary"
                  : "text-[14px] lg:text-[14px] text-white hover:text-primary"
              }
            >
              Our Services
            </NavLink>
            <NavLink
              to="/spare"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-[14px] lg:text-[14px] font-semibold text-primary"
                  : "text-[14px] lg:text-[14px] text-white hover:text-primary"
              }
            >
              Study Abroad
            </NavLink>
            <NavLink
              to="/blog"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-[14px] lg:text-[14px] font-semibold text-primary"
                  : "text-[14px] lg:text-[14px] text-white hover:text-primary"
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-[14px] lg:text-[14px] font-semibold text-primary"
                  : "text-[14px] lg:text-[14px] text-white hover:text-primary"
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
