import React, { useState } from "react";
import flag from "../../assets/image/university/Flags.png";
import flag1 from "../../assets/image/university/Flags1.png";
import flag2 from "../../assets/image/university/Flags2.png";
import flag3 from "../../assets/image/university/Flags3.png";
import flag4 from "../../assets/image/university/Flags4.png";

import uni1 from "./../../assets/image/university/schoolImage/uni1.png";
import uni2 from "./../../assets/image/university/schoolImage/uni2.png";
import uni3 from "./../../assets/image/university/schoolImage/uni3.png";
import uni4 from "./../../assets/image/university/schoolImage/uni4.png";
import uni5 from "./../../assets/image/university/schoolImage/uni5.png";
import uni6 from "./../../assets/image/university/schoolImage/uni6.png";
import uni7 from "./../../assets/image/university/schoolImage/uni7.png";
import uni8 from "./../../assets/image/university/schoolImage/uni8.png";
import uni9 from "./../../assets/image/university/schoolImage/uni9.png";
// import uni10 from "./../../assets/image/university/schoolImage/uni10.png";
// import uni11 from "./../../assets/image/university/schoolImage/uni11.png";
// import uni12 from "./../../assets/image/university/schoolImage/uni12.png";
// import uni13 from "./../../assets/image/university/schoolImage/uni13.png";
// import uni14 from "./../../assets/image/university/schoolImage/uni14.png";
// import uni15 from "./../../assets/image/university/schoolImage/uni15.png";
// import uni16 from "./../../assets/image/university/schoolImage/uni16.png";
// import uni17 from "./../../assets/image/university/schoolImage/uni17.png";
// import uni18 from "./../../assets/image/university/schoolImage/uni18.png";
// import uni19 from "./../../assets/image/university/schoolImage/uni19.png";
// import uni20 from "./../../assets/image/university/schoolImage/uni20.png";

function University() {
  const [selectedCountry, setSelectedCountry] = useState("us");
  const [selectedType, setSelectedType] = useState("university");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        },
        {
          id: 2,
          name: "De Anza College",
          logo: uni2,
          backgroundColor: "bg-red-700",
          type: "college",
        },
        {
          id: 3,
          name: "Ohlone College",
          logo: uni3,
          backgroundColor: "bg-white",
          type: "college",
        },
        {
          id: 4,
          name: "Orange Coast College",
          logo: uni4,
          backgroundColor: "bg-white",
          type: "college",
        },
        {
          id: 5,
          name: "Orange Coast College",
          logo: uni5,
          backgroundColor: "bg-white",
          type: "college",
        },
        {
          id: 6,
          name: "Orange Coast College",
          logo: uni6,
          backgroundColor: "bg-white",
          type: "college",
        },
        {
          id: 7,
          name: "Orange Coast College",
          logo: uni7,
          backgroundColor: "bg-white",
          type: "college",
        },
        {
          id: 8,
          name: "Orange Coast College",
          logo: uni8,
          backgroundColor: "bg-white",
          type: "college",
        },
        {
          id: 9,
          name: "Orange Coast College",
          logo: uni9,
          backgroundColor: "bg-white",
          type: "college",
        },
      ],
    },
    {
      id: "uk",
      name: "Study in UK",
      flag: flag1,
      universities: [
        {
          id: 5,
          name: "University of Oxford",
          logo: "OXF",
          backgroundColor: "bg-blue-900",
          type: "university",
        },
        {
          id: 6,
          name: "Cambridge University",
          logo: "CAM",
          backgroundColor: "bg-blue-700",
          type: "university",
        },
        {
          id: 7,
          name: "London School of Economics",
          logo: "LSE",
          backgroundColor: "bg-purple-700",
          type: "university",
        },
        {
          id: 8,
          name: "Imperial College London",
          logo: "ICL",
          backgroundColor: "bg-blue-800",
          type: "university",
        },
      ],
    },
    {
      id: "germany",
      name: "Study in GERMANY",
      flag: flag2,
      universities: [
        {
          id: 9,
          name: "Technical University Munich",
          logo: "TUM",
          backgroundColor: "bg-blue-600",
          type: "university",
        },
        {
          id: 10,
          name: "University of Heidelberg",
          logo: "UH",
          backgroundColor: "bg-red-600",
          type: "university",
        },
        {
          id: 11,
          name: "Humboldt University",
          logo: "HU",
          backgroundColor: "bg-green-600",
          type: "university",
        },
        {
          id: 12,
          name: "RWTH Aachen University",
          logo: "RWTH",
          backgroundColor: "bg-blue-700",
          type: "university",
        },
      ],
    },
    {
      id: "austria",
      name: "Study in AUSTRIA",
      flag: flag3,
      universities: [
        {
          id: 13,
          name: "University of Vienna",
          logo: "UV",
          backgroundColor: "bg-blue-800",
          type: "university",
        },
        {
          id: 14,
          name: "Vienna University of Technology",
          logo: "VUT",
          backgroundColor: "bg-red-600",
          type: "university",
        },
        {
          id: 15,
          name: "University of Salzburg",
          logo: "US",
          backgroundColor: "bg-green-700",
          type: "university",
        },
        {
          id: 16,
          name: "University of Innsbruck",
          logo: "UI",
          backgroundColor: "bg-purple-600",
          type: "university",
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
          name: "American University of Dubai",
          logo: "AUD",
          backgroundColor: "bg-gold-600",
          type: "university",
        },
        {
          id: 18,
          name: "Zayed University",
          logo: "ZU",
          backgroundColor: "bg-green-600",
          type: "university",
        },
        {
          id: 19,
          name: "University of Dubai",
          logo: "UD",
          backgroundColor: "bg-blue-600",
          type: "university",
        },
        {
          id: 20,
          name: "Emirates Aviation University",
          logo: "EAU",
          backgroundColor: "bg-red-600",
          type: "university",
        },
      ],
    },
  ];

  console.log(countries[0].universities[0].type);

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
        <div className="lg:hidden mb-6 px-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full flex items-center justify-between p-4 bg-gray-800 rounded-xl border border-gray-700"
          >
            <span className="font-medium">Select Country</span>
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
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
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
                  onClick={() => setSelectedCountry(country.id)}
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
          <div className="flex-1 px-8">
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
                className={` px-6 py-2 rounded-full border border-primary transition-all duration-300 ${
                  selectedType === "college"
                    ? "bg-primary text-black"
                    : "text-primary"
                }`}
                onClick={() => setSelectedType("college")}
              >
                Collage
              </button>
            </div>
            <div className="max-w-6xl mx-auto">
              {/* University Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
                    </div>

                    {/* Card Content */}
                    <div className="mt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-white">{university.icon}</div>
                        <h3 className="text-white text-[20px] font-semibold">
                          {university.name}
                        </h3>
                      </div>

                      <button className="bg-transparent border-2 border-primary text-primary py-3 px-6 rounded-2xl font-medium hover:bg-primary hover:text-black transition-all duration-300">
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
