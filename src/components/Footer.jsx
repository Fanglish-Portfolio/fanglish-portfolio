// src/ShowroomInfo.js
import React, { useState, useEffect } from "react";
import logo from "./../assets/image/logo/logo.png";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaLinkedin,
  FaMailBulk,
  FaTiktok,
  FaViber,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

import { BiPhoneCall } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCategory } from "../api/getAllCategory";
import { getStudyAbroad } from "../api/getStudyAbroad";
import { countries as countryData } from "../utils/country";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [servicesItems, setServicesItems] = useState([]);
  const [studyAbroadItems, setStudyAbroadItems] = useState([]);
  const [isLoadingServices, setIsLoadingServices] = useState(true);
  const [isLoadingStudyAbroad, setIsLoadingStudyAbroad] = useState(true);

  const defaultServices = [
    { name: "Language Class", link: "/language-class" },
    { name: "Study Abroad", link: "/study-abroad/us" },
  ];

  const handleRoute = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setIsLoadingServices(true);
        const services = await getAllCategory("services");
        setServicesItems(services);
      } catch (error) {
        console.error("Error fetching services:", error);
        setServicesItems([]);
      } finally {
        setIsLoadingServices(false);
      }
    };

    const fetchStudyAbroad = async () => {
      try {
        setIsLoadingStudyAbroad(true);
        const studyAbroadData = await getStudyAbroad();

        const countryMap = {};
        studyAbroadData.data.forEach((item) => {
          if (!countryMap[item.country]) {
            const countryInfo = countryData.find((c) => {
              const apiCountry = item.country.toLowerCase();
              const countryName = c.name.toLowerCase();

              if (countryName === apiCountry) return true;
              if (apiCountry === "uk" && countryName === "united kingdom")
                return true;
              if (apiCountry === "usa" && countryName === "united states")
                return true;
              if (
                apiCountry === "uae" &&
                countryName === "united arab emirates"
              )
                return true;

              return false;
            });

            countryMap[item.country] = {
              name: `Study in ${item.country.toUpperCase()}`,
              countryName: item.country,
              link: `/study-abroad/${item.country.toLowerCase()}`,
            };
          }
        });

        setStudyAbroadItems(Object.values(countryMap));
      } catch (error) {
        console.error("Error fetching study abroad data:", error);
        setStudyAbroadItems([]);
      } finally {
        setIsLoadingStudyAbroad(false);
      }
    };

    fetchServices();
    fetchStudyAbroad();
  }, []);
  return (
    <section className="max-w-[1280px] mx-auto">
      <div className="text-white py-20 px-5 flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" width={32} height={32} />
            <p className="text-[18px] libre font-medium text-primary">
              FuNglish Global Max
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
            <FaFacebook
              className="hover:translate-x-2 hover:scale-105 transition duration-300"
              size={24}
              onClick={() =>
                window.open("https://www.facebook.com/FunglishMyanmar?")
              }
            />
            <FaLinkedin
              className="hover:translate-x-2 hover:scale-105 transition duration-300"
              size={24}
              onClick={() =>
                window.open("https://www.linkedin.com/company/funglishmm/")
              }
            />
            <FaTiktok
              className="hover:translate-x-2 hover:scale-105 transition duration-300"
              size={24}
              onClick={() =>
                window.open(
                  "https://www.tiktok.com/@pinky.htut?_=8sTrsfrO1lo&_r=1"
                )
              }
            />
            <FaYoutube
              className="hover:translate-x-2 hover:scale-105 transition duration-300"
              size={24}
              onClick={() =>
                window.open("https://www.youtube.com/@FuNglishtotheMax1")
              }
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-2 mt-10 lg:mt-0 space-y-10 lg:space-y-0">
          <div className="flex lg:justify-center">
            <div>
              <h2 className="text-[23px] font-semibold mb-5 libre">
                Useful Links
              </h2>
              <ul className="space-y-4 ms-2 text-[12px] font-medium">
                {location.pathname !== "/" && (
                  <li
                    onClick={() => handleRoute("/")}
                    className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                  >
                    Home
                  </li>
                )}
                {location.pathname !== "/about" && (
                  <li
                    onClick={() => handleRoute("/about")}
                    className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                  >
                    About Us
                  </li>
                )}
                {location.pathname !== "/privacy-policy" && (
                  <li
                    onClick={() => handleRoute("/privacy-policy")}
                    className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                  >
                    Privacy Policy
                  </li>
                )}
                {location.pathname !== "/blog" && (
                  <li
                    onClick={() => handleRoute("/blog")}
                    className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                  >
                    Blogs
                  </li>
                )}
                {location.pathname !== "/package" && (
                  <li
                    onClick={() => handleRoute("/package")}
                    className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                  >
                    Package
                  </li>
                )}
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
                {isLoadingServices ? (
                  <li className="flex items-center justify-center py-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                  </li>
                ) : (
                  <>
                    {defaultServices.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handleRoute(item.link)}
                        className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                      >
                        {item.name}
                      </li>
                    ))}
                    {servicesItems.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handleRoute("/detail/" + item._id)}
                        className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                      >
                        {item.title}
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="flex lg:justify-center">
            <div>
              <h2 className="text-[23px] font-semibold mb-5 libre">
                Study Abroad
              </h2>
              <ul className="space-y-4 ms-2 text-[12px] font-medium">
                {isLoadingStudyAbroad ? (
                  <li className="flex items-center justify-center py-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                  </li>
                ) : (
                  studyAbroadItems.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleRoute(item.link)}
                      className="cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300"
                    >
                      {item.name}
                    </li>
                  ))
                )}
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
                    window.open("https://www.facebook.com/FunglishMyanmar")
                  }
                >
                  <FaFacebookMessenger />
                  FuNglish Facebook Page
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300">
                  <FaMailBulk />
                  <a href="mailto:pinky.htut@funglishedu.org" target="_blank">
                    pinky.htut@funglishedu.org
                  </a>
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300">
                  <FaViber />
                  <a href="viber://chat?number=+66969949572" target="_blank">
                    +66969949572
                  </a>
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300">
                  <FaWhatsapp />
                  <a href="https://wa.me/66969949572" target="_blank">
                    +66969949572
                  </a>
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:translate-x-2 hover:scale-105 transition duration-300">
                  <FaViber />
                  <a href="viber://chat?number=+66969949572" target="_blank">
                    +66969949572
                  </a>
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
