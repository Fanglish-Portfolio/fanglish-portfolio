import React, { useState } from "react";
import flag from "../../assets/image/university/Flags.png";
import flag1 from "../../assets/image/university/Flags1.png";
import flag2 from "../../assets/image/university/Flags2.png";
import flag3 from "../../assets/image/university/Flags3.png";
import flag4 from "../../assets/image/university/Flags4.png";

function University() {
  const [selectedCountry, setSelectedCountry] = useState("us");
  const [selectedType, setSelectedType] = useState("university");

  const countries = [
    {
      id: "us",
      name: "Study in US",
      flag: flag,
      universities: [
        {
          id: 1,
          name: "Weber State University",
          logo: "WSU",
          backgroundColor: "bg-white",
          type: "university",
        },
        {
          id: 2,
          name: "De Anza College",
          logo: "DAC",
          backgroundColor: "bg-red-700",
          type: "college",
        },
        {
          id: 3,
          name: "Ohlone College",
          logo: "OC",
          backgroundColor: "bg-white",
          type: "college",
        },
        {
          id: 4,
          name: "Orange Coast College",
          logo: "OCC",
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
      <div className="min-h-screen flex ">
        {/* Left Sidebar */}
        <div className="w-80 p-6 border-r border-gray-700">
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
                  <span className="font-medium text-left">{country.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 px-8">
          <div className="flex gap-4 mb-10">
            <button
              className="button"
              onClick={() => setSelectedType("university")}
            >
              University
            </button>
            <button
              className="button"
              onClick={() => setSelectedType("college")}
            >
              Collage
            </button>
          </div>
          <div className="max-w-6xl mx-auto">
            {/* University Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredUniversities.map((university) => (
                <div
                  key={university.id}
                  className="bg-gray-800 rounded-2xl p-1 hover:bg-gray-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group"
                >
                  <div className="bg-gray-800 rounded-2xl overflow-hidden">
                    {/* University Logo Area */}
                    <div
                      className={`h-48 ${university.backgroundColor} flex items-center justify-center relative overflow-hidden`}
                    >
                      {university.name === "Weber State University" && (
                        <div className="text-center">
                          <div className="w-16 h-16 bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-white font-bold text-xl">
                              W
                            </span>
                          </div>
                          <div className="text-purple-800 font-bold text-sm">
                            WEBER STATE
                            <br />
                            UNIVERSITY
                          </div>
                        </div>
                      )}
                      {university.name === "De Anza College" && (
                        <div className="text-center text-white">
                          <div className="w-20 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2">
                            <div className="w-8 h-8 bg-red-700 rounded"></div>
                          </div>
                          <div className="font-bold text-2xl">
                            DeAnza
                            <br />
                            College
                          </div>
                        </div>
                      )}
                      {university.name === "Ohlone College" && (
                        <div className="text-center">
                          <div className="mb-2">
                            <div className="w-16 h-8 bg-yellow-400 rounded-full mx-auto mb-1"></div>
                            <div className="w-20 h-3 bg-green-500 rounded mx-auto"></div>
                          </div>
                          <div className="text-green-600 font-bold text-xl">
                            OHLONE
                            <br />
                            <span className="text-yellow-500">COLLEGE</span>
                          </div>
                        </div>
                      )}
                      {university.name === "Orange Coast College" && (
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-2">
                            <div className="w-full h-full bg-gradient-to-br from-orange-400 to-blue-600 rounded-full flex items-center justify-center">
                              <div className="w-8 h-8 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <div className="text-gray-800 font-bold">
                            <span className="text-orange-500">ORANGE</span>
                            <br />
                            <span className="text-blue-600">COAST</span>
                            <br />
                            <span className="text-gray-600">College</span>
                          </div>
                        </div>
                      )}
                      {![
                        "Weber State University",
                        "De Anza College",
                        "Ohlone College",
                        "Orange Coast College",
                      ].includes(university.name) && (
                        <div className="text-center text-white">
                          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold">
                              {university.logo}
                            </span>
                          </div>
                          <div className="text-lg font-semibold">
                            {university.name}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* University Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 text-center">
                        {university.name}
                      </h3>

                      <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                        View University
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default University;
