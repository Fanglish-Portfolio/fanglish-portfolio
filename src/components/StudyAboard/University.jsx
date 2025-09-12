import React, { useState, useEffect } from "react";
import { getStudyAbroad } from "../../api/getStudyAbroad";
import { countries as countryData } from "../../utils/country";

function University({ country }) {
  const [selectedCountry, setSelectedCountry] = useState(country);
  const [selectedType, setSelectedType] = useState("university");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [studyAbroadData, setStudyAbroadData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getStudyAbroad();
        setStudyAbroadData(response.data);
        setError(null);
      } catch (err) {
        setError("Failed to load study abroad data");
        console.error("Error fetching study abroad data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const countries = React.useMemo(() => {
    const countryMap = {};
    studyAbroadData.forEach((item) => {
      if (!countryMap[item.country]) {
        // Find the country data from our country list
        const countryInfo = countryData.find((c) => {
          const apiCountry = item.country.toLowerCase();
          const countryName = c.name.toLowerCase();

          // Direct match
          if (countryName === apiCountry) return true;

          // Handle common variations
          if (apiCountry === "uk" && countryName === "united kingdom")
            return true;
          if (apiCountry === "usa" && countryName === "united states")
            return true;
          if (apiCountry === "uae" && countryName === "united arab emirates")
            return true;
          if (apiCountry === "south korea" && countryName === "south korea")
            return true;
          if (apiCountry === "north korea" && countryName === "north korea")
            return true;

          return false;
        });

        countryMap[item.country] = {
          id: item.country.toLowerCase(),
          name: `Study in ${item.country}`,
          countryName: item.country,
          flag:
            countryInfo?.flag ||
            `https://flagcdn.com/w40/${item.country.toLowerCase()}.png`,
          universities: [],
        };
      }
      countryMap[item.country].universities.push({
        id: item._id,
        name: item.name,
        logo: item.image?.url,
        backgroundColor: "bg-white",
        type: item.type,
        link: item.url,
      });
    });
    return Object.values(countryMap);
  }, [studyAbroadData]);

  const currentCountry = countries.find(
    (country) => country.id === selectedCountry
  );

  const filteredUniversities =
    currentCountry?.universities?.filter(
      (university) => university.type === selectedType
    ) || [];

  if (loading) {
    return (
      <section className="containers">
        <div className="mt-20"></div>
        <h1 className="header-text mb-10">Study Abroad</h1>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="containers">
        <div className="mt-20"></div>
        <h1 className="header-text mb-10">Study Abroad</h1>
        <div className="flex justify-center items-center h-64">
          <div className="text-red-500 text-center">
            <p className="text-lg font-semibold mb-2">Error loading data</p>
            <p className="text-sm">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (!currentCountry) {
    return (
      <section className="containers">
        <div className="mt-20"></div>
        <h1 className="header-text mb-10">Study Abroad</h1>
        <div className="flex justify-center items-center h-64">
          <div className="text-gray-500 text-center">
            <p className="text-lg font-semibold">No data available</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="containers">
      <div className="mt-20"></div>
      <h1 className="header-text mb-10">Study Abroad</h1>
      <div className="">
        <div className="lg:hidden mb-6 px-6 bg-[#1a1a1a] py-5 sticky top-[80px] z-10">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full flex items-center justify-between p-4 bg-gray-800 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-3">
              <img
                src={currentCountry.flag}
                alt={`${currentCountry.countryName} flag`}
                className="w-6 h-4 object-cover rounded-sm"
              />
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
            ${
              isMobileMenuOpen
                ? " sticky top-[90px] bg-[#1a1a1a] z-10"
                : "hidden lg:block"
            }
          `}
          >
            <div className="space-y-10">
              {countries.map((country) => (
                <button
                  key={country.id}
                  onClick={() => {
                    setSelectedCountry(country.id);
                    setSelectedType("university");
                    setIsMobileMenuOpen(false);
                    setImageLoaded(false);
                  }}
                  className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 group ${
                    selectedCountry === country.id
                      ? "bg-white text-black"
                      : "hover:scale-[1.02] "
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={country.flag}
                      alt={`${country.countryName} flag`}
                      className="w-6 h-4 object-cover rounded-sm"
                    />
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
                  !currentCountry?.universities?.some(
                    (uni) => uni.type === "college"
                  )
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }  px-6 py-2 rounded-full border border-primary transition-all duration-300 ${
                  selectedType === "college"
                    ? "bg-primary text-black"
                    : "text-primary"
                }`}
                disabled={
                  !currentCountry?.universities?.some(
                    (uni) => uni.type === "college"
                  )
                }
                onClick={() => setSelectedType("college")}
              >
                College
              </button>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {filteredUniversities.map((university) => (
                  <div
                    key={university.id}
                    className="bg-[#161616]/20 rounded-2xl p-6 overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    {/* Card Image */}
                    <div className="relative flex items-center justify-center h-40">
                      {!university.logo && (
                        <div className="w-full h-40 bg-gray-700 rounded-xl animate-pulse" />
                      )}
                      {university.logo && (
                        <img
                          src={university.logo}
                          alt={university.name}
                          loading="lazy"
                          className="max-h-40 object-contain"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "block";
                          }}
                        />
                      )}
                      <div className="w-full h-40 bg-gray-700 rounded-xl animate-pulse hidden" />
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
                        onClick={() =>
                          university.link &&
                          window.open(university.link, "_blank")
                        }
                        disabled={!university.link}
                        className={`bg-transparent border-2 border-primary text-primary py-3 px-6 rounded-2xl font-medium transition-all duration-300 ${
                          !university.link
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:bg-primary hover:text-black"
                        }`}
                      >
                        View {selectedType}
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
