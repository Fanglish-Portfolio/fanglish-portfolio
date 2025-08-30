import React, { useState } from "react";
import flag from "../../assets/image/university/Flags.png";
import flag1 from "../../assets/image/university/Flags1.png";
import flag2 from "../../assets/image/university/Flags2.png";
import flag3 from "../../assets/image/university/Flags3.png";
import flag4 from "../../assets/image/university/Flags4.png";

import uni1 from "./../../assets/image/university/schoolImage/us/usUni7.png";
import uni2 from "./../../assets/image/university/schoolImage/us/usUni2.png";
import uni3 from "./../../assets/image/university/schoolImage/us/usUni6.png";
import uni4 from "./../../assets/image/university/schoolImage/us/usUni4.png";
import uni5 from "./../../assets/image/university/schoolImage/us/usUni8.png";

import uni10 from "./../../assets/image/university/schoolImage/us/usCollage1.png";
import uni11 from "./../../assets/image/university/schoolImage/us/usCollage2.png";
import uni12 from "./../../assets/image/university/schoolImage/us/usCollage3.png";
import uni13 from "./../../assets/image/university/schoolImage/us/usCollage4.png";
import uni14 from "./../../assets/image/university/schoolImage/us/usCollage5.png";
import uni15 from "./../../assets/image/university/schoolImage/us/usCollage6.png";
import uni16 from "./../../assets/image/university/schoolImage/us/usCollage7.png";
import uni17 from "./../../assets/image/university/schoolImage/us/usCollage8.png";
import uni18 from "./../../assets/image/university/schoolImage/us/usCollage9.png";
import uni19 from "./../../assets/image/university/schoolImage/us/usCollage10.png";
import uni20 from "./../../assets/image/university/schoolImage/us/usCollage11.png";
import uni21 from "./../../assets/image/university/schoolImage/us/usCollage12.png";

import uni22 from "./../../assets/image/university/schoolImage/uk/ukUni1.png";
import uni23 from "./../../assets/image/university/schoolImage/uk/ukUni2.png";
import uni24 from "./../../assets/image/university/schoolImage/uk/ukUni3.png";
import uni25 from "./../../assets/image/university/schoolImage/uk/ukUni4.png";
import uni26 from "./../../assets/image/university/schoolImage/uk/ukUni5.png";
import uni27 from "./../../assets/image/university/schoolImage/uk/ukUni6.png";
import uni28 from "./../../assets/image/university/schoolImage/uk/ukUni7.png";
import uni29 from "./../../assets/image/university/schoolImage/uk/ukUni8.png";
import uni30 from "./../../assets/image/university/schoolImage/uk/ukUni9.png";
import uni31 from "./../../assets/image/university/schoolImage/uk/ukUni10.png";
import uni117 from "./../../assets/image/university/schoolImage/uk/ukUni.png";

import uni32 from "./../../assets/image/university/schoolImage/germany/GerUni1.png";
import uni33 from "./../../assets/image/university/schoolImage/germany/GerUni2.png";
import uni34 from "./../../assets/image/university/schoolImage/germany/GerUni3.png";
import uni35 from "./../../assets/image/university/schoolImage/germany/GerUni4.png";
import uni36 from "./../../assets/image/university/schoolImage/germany/GerUni5.png";

import uni37 from "./../../assets/image/university/schoolImage/aus/AusUni1.png";
import uni38 from "./../../assets/image/university/schoolImage/aus/AusUni2.png";
import uni39 from "./../../assets/image/university/schoolImage/aus/AusUni3.png";
import uni40 from "./../../assets/image/university/schoolImage/aus/AusUni4.png";

import dubai from "./../../assets/image/university/schoolImage/dubai/dubai.png";

const countries = [
  {
    id: "us",
    name: "Study in US",
    flag: flag,
    universities: [
      {
        id: 1,
        name: "Weber State University",
        logo: uni1,
        backgroundColor: "bg-white",
        type: "university",
        link: "https://www.weber.edu/map",
      },
      {
        id: 2,
        name: "Lawrence Technological University",
        logo: uni2,
        backgroundColor: "bg-red-700",
        type: "university",
        link: "https://www.ltu.edu/",
      },
      {
        id: 3,
        name: "Texas State University",
        logo: uni3,
        backgroundColor: "bg-white",
        type: "university",
        link: "https://www.txst.edu/",
      },
      {
        id: 4,
        name: "Skyline College",
        logo: uni4,
        backgroundColor: "bg-white",
        type: "College",
      },
      {
        id: 5,
        name: "San Jose State University",
        logo: uni5,
        backgroundColor: "bg-white",
        type: "university",
        link: "https://www.sjsu.edu/",
      },
      {
        id: 9,
        name: "De Anza College",
        logo: uni10,
        backgroundColor: "bg-white",
        type: "college",
        link: "https://www.deanza.edu/",
      },
      {
        id: 10,
        name: "Ohlone College",
        logo: uni11,
        backgroundColor: "bg-white",
        type: "college",
        link: "https://www.ohlone.edu/",
      },
      {
        id: 11,
        name: "Orange Coast College",
        logo: uni12,
        backgroundColor: "bg-white",
        type: "college",
        link: "https://orangecoastcollege.edu/",
      },
      {
        id: 12,
        name: "Skyline College",
        logo: uni13,
        backgroundColor: "bg-white",
        type: "college",
        link: "https://skylinecollege.edu/",
      },

      {
        id: 14,
        name: "Houston Community College ",
        logo: uni15,
        backgroundColor: "bg-white",
        type: "college",
        link: "https://www.hccs.edu/",
      },
      {
        id: 15,
        name: "Santa Monica College",
        logo: uni16,
        backgroundColor: "bg-white",
        type: "college",
        link: "https://www.smc.edu/",
      },
      {
        id: 16,
        name: " East Los Angeles College",
        logo: uni17,
        backgroundColor: "bg-white",
        type: "college",
        link: "https://www.elac.edu/",
      },
      {
        id: 17,
        name: "Los Angeles City College",
        logo: uni18,
        backgroundColor: "bg-white",
        type: "college",
        link: "https://www.lacc.edu/",
      },
      {
        id: 18,
        name: " Queens College, CUNY",
        logo: uni19,
        backgroundColor: "bg-white",
        type: "college",
        link: "https://www.qc.cuny.edu/",
      },
      {
        id: 19,
        name: "Mt. San Antonio College",
        logo: uni20,
        backgroundColor: "bg-white",
        type: "college",
        link: "https://www.mtsac.edu/",
      },
      {
        id: 20,
        name: "Borough of Manhattan Community College, CUNY",
        logo: uni21,
        backgroundColor: "bg-white",
        type: "college",
        link: "https://www.bmcc.cuny.edu/",
      },
    ],
  },
  {
    id: "uk",
    name: "Study in UK",
    flag: flag1,
    universities: [
      {
        id: 117,
        name: "University Of Bristo",
        logo: uni117,
        backgroundColor: "bg-blue-900",
        type: "university",
        link: "https://www.bristol.ac.uk/",
      },
      {
        id: 17,
        name: "University of Edinbrugh",
        logo: uni22,
        backgroundColor: "bg-blue-900",
        type: "university",
        link: "https://www.ed.ac.uk/",
      },
      {
        id: 18,
        name: "University of Birmingham",
        logo: uni23,
        backgroundColor: "bg-blue-900",
        type: "university",
        link: "https://www.birmingham.ac.uk/",
      },
      {
        id: 19,
        name: "University of Southampton",
        logo: uni24,
        backgroundColor: "bg-blue-900",
        type: "university",
        link: "https://www.southampton.ac.uk/",
      },
      {
        id: 20,
        name: "Manchester Metropolitan University",
        logo: uni25,
        backgroundColor: "bg-blue-900",
        type: "university",
        link: "https://www.mmu.ac.uk/",
      },
      {
        id: 21,
        name: "University of Hertfordshire",
        logo: uni26,
        backgroundColor: "bg-blue-900",
        type: "university",
        link: "https://www.herts.ac.uk/",
      },
      {
        id: 22,
        name: "University of Essex",
        logo: uni27,
        backgroundColor: "bg-blue-900",
        type: "university",
        link: "https://www.essex.ac.uk/",
      },
      {
        id: 23,
        name: " University of Sussex",
        logo: uni28,
        backgroundColor: "bg-blue-900",
        type: "university",
        link: "https://www.sussex.ac.uk/",
      },
      {
        id: 24,
        name: "University of Leeds",
        logo: uni29,
        backgroundColor: "bg-blue-900",
        type: "university",
        link: "https://www.leeds.ac.uk/",
      },
      {
        id: 25,
        name: " University of Glasgow",
        logo: uni30,
        backgroundColor: "bg-blue-900",
        type: "university",
        link: "https://www.gla.ac.uk/",
      },
      {
        id: 26,
        name: "University of London",
        logo: uni31,
        backgroundColor: "bg-blue-900",
        type: "university",
        link: "https://www.london.ac.uk/",
      },
    ],
  },
  {
    id: "germany",
    name: "Study in GERMANY",
    flag: flag2,
    universities: [
      {
        id: 27,
        name: "HSB Hochschule Bremen",
        logo: uni32,
        backgroundColor: "bg-blue-600",
        type: "university",
        link: "https://www.hs-bremen.de/en/study/before/step-by-step-to-university  ",
      },
      {
        id: 28,
        name: "Nordhausen University of Applied Science",
        logo: uni33,
        backgroundColor: "bg-red-600",
        type: "university",
        link: "https://www.hs-nordhausen.de/en/",
      },
      {
        id: 29,
        name: "Hochschule München University of Applied Sciences",
        logo: uni34,
        backgroundColor: "bg-green-600",
        type: "university",
        link: "https://hm.edu/en/index.en.html",
      },
      {
        id: 30,
        name: "Deggendorf Institute Technology",
        logo: uni35,
        backgroundColor: "bg-blue-700",
        type: "university",
        link: "https://ec.dit.edu/why-study-at-dit",
      },
      {
        id: 31,
        name: "Technology Arts Science TH Köln",
        logo: uni36,
        backgroundColor: "bg-red-700",
        type: "university",
        link: "https://www.th-koeln.de/en/homepage_26.php",
      },
    ],
  },
  {
    id: "austria",
    name: "Study in AUSTRIA",
    flag: flag3,
    universities: [
      {
        id: 32,
        name: "FH University of Applied Science Upper Austria",
        logo: uni37,
        backgroundColor: "bg-blue-800",
        type: "university",
        link: "https://fh-ooe.at/en",
      },
      {
        id: 33,
        name: "University of Vienna",
        logo: uni38,
        backgroundColor: "bg-red-600",
        type: "university",
        link: "https://www.univie.ac.at/en/",
      },
      {
        id: 34,
        name: "University of Graz",
        logo: uni39,
        backgroundColor: "bg-green-700",
        type: "university",
        link: "https://www.uni-graz.at/en/",
      },
      {
        id: 35,
        name: "University of Applied Sciences, Burgenland",
        logo: uni40,
        backgroundColor: "bg-purple-600",
        type: "university",
        link: "https://hochschule-burgenland.at/en/",
      },
    ],
  },
  {
    id: "dubai",
    name: "Study in DUBAI",
    flag: flag4,
    universities: [
      {
        id: 17,
        name: "Comming Soon",
        logo: dubai,
        backgroundColor: "bg-gold-600",
        type: "university",
      },
      {
        id: 18,
        name: "Comming Soon",
        logo: dubai,
        backgroundColor: "bg-green-600",
        type: "university",
      },
    ],
  },
];

function University({ country }) {
  const [selectedCountry, setSelectedCountry] = useState(country);
  const [selectedType, setSelectedType] = useState("university");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentCountry = countries.find(
    (country) => country.id === selectedCountry
  );

  const filteredUniversities = currentCountry.universities.filter(
    (university) => university.type === selectedType
  );

  return (
    <section className="containers">
      <div className="mt-20"></div>
      <h1 className="header-text mb-10">Study Abroad</h1>
      <div className="min-h-screen">
        <div className="lg:hidden mb-6 px-6 bg-[#1a1a1a] py-5 sticky top-[80px] z-10">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full flex items-center justify-between p-4 bg-gray-800 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-3">
              <img src={currentCountry.flag} alt="" />
              <span className="font-medium text-left">
                {currentCountry.name}
              </span>
            </div>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                isMobileMenuOpen ? "rotate-180" : ""
              }`}
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
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 ">
          {/* Left Sidebar */}
          <div
            className={`
            lg:w-80 lg:block px-6 md:px-0
            ${isMobileMenuOpen ? "block" : "hidden lg:block"}
          `}
          >
            <div className="space-y-10">
              {countries.map((country) => (
                <button
                  key={country.id}
                  va
                  onClick={() => {
                    setSelectedCountry(country.id);
                    setSelectedType("university");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 group ${
                    selectedCountry === country.id
                      ? "bg-white text-black"
                      : "hover:scale-[1.02] "
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <img src={country.flag} alt="" />
                    <span className="font-medium text-left">
                      {country.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 px-8 overflow-y-auto md:h-[600px] pb-50 university">
            {selectedCountry !== "dubai" && (
              <div className="flex gap-4 mb-10">
                <button
                  className={` px-6 py-2 rounded-full border border-primary transition-all duration-300 ${
                    selectedType === "university"
                      ? "bg-primary text-black"
                      : " text-primary text-primary"
                  }`}
                  onClick={() => setSelectedType("university")}
                >
                  University
                </button>
                <button
                  className={`${
                    selectedCountry !== "us"
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }  px-6 py-2 rounded-full border border-primary transition-all duration-300 ${
                    selectedType === "college"
                      ? "bg-primary text-black"
                      : "text-primary"
                  }`}
                  disabled={selectedCountry !== "us"}
                  onClick={() => setSelectedType("college")}
                >
                  College
                </button>
              </div>
            )}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {filteredUniversities.map((university) => (
                  <div
                    key={university.id}
                    className="bg-[#161616]/20 rounded-2xl p-6 overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    {/* Card Image */}
                    <div
                      className={`relative flex items-center justify-center`}
                    >
                      <img
                        src={university.logo}
                        alt={university.name}
                        className="lg:w-full lg:h-full object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
                    </div>

                    {/* Card Content */}
                    <div className="mt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-white">{university.icon}</div>
                        <h3 className="text-white md:h-[50px] mb-2 text-[14px] md:text-[16px] lg:text-[18px] font-semibold">
                          {university.name}
                        </h3>
                      </div>

                      <button
                        onClick={() => window.open(university.link, "_blank")}
                        className={`bg-transparent border-2 border-primary text-primary py-3 px-6 rounded-2xl font-medium transition-all duration-300 ${
                          country === "dubai"
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:bg-primary hover:text-black"
                        }`}
                      >
                        View University
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default University;
