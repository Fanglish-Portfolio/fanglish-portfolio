// src/ShowroomInfo.js
import React from "react";
import logo from "./../assets/image/logo/logo.png";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebook, FaViber } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleRoute = (path) => {
    navigate(path);
  };
  return (
    <div className="bg-[#2B2B2B] text-white py-20 px-5 flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-1/3">
        <img src={logo} alt="logo" />
        <h1 className="header-text">
          Always ready to provide <br /> the best service
        </h1>
        <p className="mt-4">No(96), Pearl Street, Shwe Pyit Thar</p>
        <p>Industrial Zone (3), Near Danyingone Market, Yangon, Myanmar</p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 md:mt-0 space-y-10 md:space-y-0">
        <div className="flex md:justify-center">
          <div>
            <h2 className="text-2xl font-semibold mb-5">Services</h2>
            <ul className="space-y-4 ms-2 text-lg">
              <li
                onClick={() => handleRoute("/spare")}
                className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
              >
                Spear Parts
              </li>
              <li
                onClick={() => handleRoute("/service")}
                className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
              >
                Car repair and <br /> Maintenance services
              </li>
            </ul>
          </div>
        </div>
        <div className="flex md:justify-center">
          <div>
            <h2 className="text-2xl font-semibold mb-5">About Us</h2>
            <ul className="space-y-4 ms-2 text-lg">
              <li
                onClick={() => handleRoute("/about")}
                className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
              >
                Our Story
              </li>
              <li
                onClick={() => handleRoute("/about")}
                className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
              >
                Meet Our Founders
              </li>
            </ul>
          </div>
        </div>
        <div className="flex md:justify-center">
          <div>
            <h2 className="text-2xl font-semibold mb-5">Contact Us</h2>
            <ul className="space-y-4 ms-2 text-lg">
              <li
                className="flex items-center gap-2 cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                onClick={() =>
                  window.open("https://www.facebook.com/suzukimega6.spt")
                }
              >
                <FaFacebook />
                Facebook
              </li>
              <li
                className="flex items-center gap-2 cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                onClick={() => window.open("viber://chat?number=+959420054395")}
              >
                <FaViber />
                Viber
              </li>

              <a
                href="tel:095119806"
                className="flex items-center gap-2 cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
              >
                <BiPhoneCall />
                095119806
              </a>
              <a
                href="tel:09443364499"
                className="flex items-center gap-2 cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
              >
                <BiPhoneCall />
                09443364499
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
