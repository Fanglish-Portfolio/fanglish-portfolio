// src/ShowroomInfo.js
import React from "react";
import logo from "./../assets/image/logo/logo.png";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaLinkedin,
  FaMailBulk,
  FaTiktok,
  FaViber,
} from "react-icons/fa";

import { BiPhoneCall } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleRoute = (path) => {
    navigate(path);
  };
  return (
    <section className="max-w-[1280px] mx-auto">
      <div className="text-white py-20 px-5 flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" width={32} height={32} />
            <p className="text-[16px] font-medium text-primary">
              FuNglish Global
            </p>
          </div>
          <div className="flex w-full text-[8px] font-medium gap-2 mt-2">
            <span>University Admissions</span>
            <div className="border border-primary"></div>
            <span>Career Coaching</span>
            <div className="border border-primary"></div>
            <span>Professional Development</span>
          </div>
          <div className="flex gap-8 text-white cursor-pointer mt-8">
            <FaFacebook size={24} />
            <FaLinkedin size={24} />
            <FaTiktok size={24} />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-2 mt-10 lg:mt-0 space-y-10 lg:space-y-0">
          <div className="flex lg:justify-center">
            <div>
              <h2 className="text-[23px] font-semibold mb-5 libre">
                Useful Links
              </h2>
              <ul className="space-y-4 ms-2 text-[12px] font-medium">
                <li
                  onClick={() => handleRoute("/about")}
                  className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                >
                  About Us
                </li>
                {/* <li
                  onClick={() => handleRoute("/service")}
                  className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                >
                  Privacy Policy
                </li> */}
                <li
                  onClick={() => handleRoute("/blog")}
                  className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                >
                  Blogs
                </li>
                {/* <li
                  onClick={() => handleRoute("/service")}
                  className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                >
                  Contact Us
                </li> */}
              </ul>
            </div>
          </div>
          <div className="flex lg:justify-center">
            <div>
              <h2 className="text-[23px] font-semibold mb-5 libre">
                Our Services
              </h2>
              <ul className="space-y-4 ms-2 text-[12px] font-medium">
                <li
                  onClick={() => handleRoute("/service-detail/1")}
                  className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                >
                  Consultation
                </li>
                <li
                  onClick={() => handleRoute("/language-class")}
                  className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                >
                  Language Class
                </li>
                <li
                  onClick={() => handleRoute("/service-detail/3")}
                  className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                >
                  Ausbildung
                </li>
                <li
                  onClick={() => handleRoute("/service-detail/4")}
                  className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                >
                  Scholarship Programs
                </li>
                <li
                  onClick={() => handleRoute("/service-detail/5")}
                  className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                >
                  Duales Stadium
                </li>
                <li
                  onClick={() => handleRoute("/study-abroad/us")}
                  className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                >
                  Study Abroad
                </li>
                <li
                  onClick={() => handleRoute("/service-detail/7")}
                  className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                >
                  6 Months To The Max
                </li>
              </ul>
            </div>
          </div>
          <div className="flex lg:justify-center">
            <div>
              <h2 className="text-[23px] font-semibold mb-5 libre">
                Study Abroad
              </h2>
              <ul className="space-y-4 ms-2 text-[12px] font-medium">
                <li
                  onClick={() => handleRoute("/study-abroad/austria")}
                  className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                >
                  Study in Austria
                </li>
                <li
                  onClick={() => handleRoute("/study-abroad/germany")}
                  className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                >
                  Study in GERMANY
                </li>

                <li
                  onClick={() => handleRoute("/study-abroad/uk")}
                  className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                >
                  Study in UK
                </li>
                <li
                  onClick={() => handleRoute("/study-abroad/us")}
                  className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                >
                  Study in US
                </li>
              </ul>
            </div>
          </div>
          <div className="flex lg:justify-center">
            <div>
              <h2 className="text-[23px] font-semibold mb-5 libre">
                Contact Us
              </h2>
              <ul className="space-y-4 ms-2 text-[12px] font-medium">
                <li
                  className="flex items-center gap-2 cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                  onClick={() =>
                    window.open("https://www.facebook.com/suzukimega6.spt")
                  }
                >
                  <FaFacebookMessenger />
                  FuNglish Facebook Page
                </li>
                <li
                  className="flex items-center gap-2 cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                  onClick={() =>
                    window.open("https://www.facebook.com/suzukimega6.spt")
                  }
                >
                  <FaMailBulk />
                  pinky.htut@funglishedu.org
                </li>
                <li
                  className="flex items-center gap-2 cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                  onClick={() =>
                    window.open("viber://chat?number=+959420054395")
                  }
                >
                  <FaViber />
                  +66969949572
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
