"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import language1 from "./../../assets/image/home/languageClass/language1.png";
import language2 from "./../../assets/image/home/languageClass/language2.png";
import language3 from "./../../assets/image/home/languageClass/language3.png";
import language4 from "./../../assets/image/home/languageClass/language4.png";
// Import Swiper modules
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight, Languages } from "lucide-react";
import { useNavigate } from "react-router-dom";

const classes = [
  {
    id: 1,
    title: "German For Young Leaners",
    image: language1,
    icon: <Languages className="w-6 h-6" />,
    type: "German",
  },
  {
    id: 2,
    title: "German Language A1 to C2 Intensive Clasee ",
    image: language2,
    icon: <Languages className="w-6 h-6" />,
    type: "German",
  },
  {
    id: 3,
    title: "FuNglish Duolingo Intensive Class",
    image: language3,
    icon: <Languages className="w-6 h-6" />,
    type: "IELTS",
  },
  {
    id: 4,
    title: "FuNglish IELTS Class – Achieve a High Band Score",
    image: language4,
    icon: <Languages className="w-6 h-6" />,
    type: "IELTS",
  },
];

export default function LanguageClassCarousel() {
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  const [activeType, setActiveType] = useState("IELTS");

  const filteredClasses = classes.filter(
    (service) => service.type === activeType
  );

  // Custom previous button click handler
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Custom next button click handler
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section>
      <div className="containers">
        <div className="w-full">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
            <div>
              <h2 className="header-text">Language Class</h2>
            </div>

            <div className=" flex md:hidden md:items-center space-x-4 mt-4 md:mt-0">
              <button
                onClick={handlePrev}
                className={`p-2 rounded-full border border-primary  hover:bg-black/50 transition-colors shadow-md `}
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={handleNext}
                className={`p-2 rounded-full border border-primary hover:bg-black/50 transition-colors shadow-md`}
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>

          {/* Swiper Slider */}
          <div className="flex space-x-4 mt-10 ">
            <button
              onClick={() => setActiveType("IELTS")}
              className={`border font-semibold border-primary py-2 px-8 rounded-3xl transition-all duration-300 ${
                activeType === "IELTS"
                  ? "bg-primary text-black"
                  : "text-primary"
              }`}
            >
              IELTS
            </button>
            <button
              onClick={() => setActiveType("German")}
              className={`border font-semibold border-primary py-2 px-8 rounded-3xl transition-all duration-300 ${
                activeType === "German"
                  ? "bg-primary text-black"
                  : "text-primary"
              }`}
            >
              German
            </button>
          </div>
          <div className="mt-5 text-black overflow-x-hidden">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination]}
              // slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              loop={true}
              centeredSlides={false}
              className="mySwiper carousel-swiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              style={{
                "--swiper-pagination-color": "#FFBA08",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-inactive-opacity": "1",
              }}
            >
              {filteredClasses.map((service) => (
                <SwiperSlide key={service.id}>
                  <div className="bg-[#161616]/20 rounded-2xl p-6 overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    {/* Card Image */}
                    <div
                      className={`relative flex items-center justify-center`}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover rounded-xl "
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
                    </div>

                    {/* Card Content */}
                    <div className="mt-6">
                      <div className="flex items-center gap-3 mb-4 h-[60px]">
                        <div className="text-white">{service.icon}</div>
                        <h3 className="text-white text-[14px] sm:text-[26px] md:text-[16px] font-semibold">
                          {service.title}
                        </h3>
                      </div>

                      <button
                        onClick={() =>
                          navigate(`/language-detail/${service.id}`)
                        }
                        className="text-[12px] md:text-[16px] bg-transparent border-2 border-primary text-primary py-3 px-6 rounded-2xl font-medium hover:bg-primary hover:text-black transition-all duration-300"
                      >
                        View Service Details
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
