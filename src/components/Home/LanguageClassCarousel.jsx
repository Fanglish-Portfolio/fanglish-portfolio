"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  MdOutlineForum,
  MdOutlineLocalLibrary,
  MdOutlineCases,
  MdOutlineSchool,
} from "react-icons/md";
import language1 from "./../../assets/image/home/languageClass/language1.png";
import language2 from "./../../assets/image/home/languageClass/language2.png";
import language3 from "./../../assets/image/home/languageClass/language3.png";

// Import Swiper modules
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight, Languages } from "lucide-react";

const classes = [
  {
    id: 1,
    title: "German For Young Leaners",
    image: language1,
    icon: <Languages className="w-6 h-6" />,
    bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
    textOverlay: "JOIN OUR CONSULTATION!",
    description: "ESCALATE YOUR ACADEMIC JOURNEY",
  },
  {
    id: 2,
    title: "German Language A1 to C2 Intensive Clasee ",
    image: language2,
    icon: <Languages className="w-6 h-6" />,
    bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
    textOverlay: "PACKAGE 5",
    description: "IELTS OR DUOLINGO PTE",
  },
  {
    id: 3,
    title: "German Dream Package",
    image: language3,
    icon: <Languages className="w-6 h-6" />,
    bgColor: "bg-gradient-to-br from-gray-800 to-blue-900",
    textOverlay: "Job Opportunities in Germany",
    description: "Ausbildung",
  },
];

export default function LanguageClassCarousel() {
  const swiperRef = useRef(null);

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
            <div className="flex md:items-center space-x-4 mt-4 md:mt-0">
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
          <div className="mt-10 text-black overflow-x-hidden">
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
              {classes.map((service) => (
                <SwiperSlide key={service.id}>
                  <div className="bg-[#161616]/20 rounded-2xl p-6 overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    {/* Card Image */}
                    <div
                      className={`relative flex items-center justify-center`}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
                    </div>

                    {/* Card Content */}
                    <div className="mt-6">
                      <div className="flex items-center gap-3 mb-4 h-[60px]">
                        <div className="text-white">{service.icon}</div>
                        <h3 className="text-white text-[20px] font-semibold">
                          {service.title}
                        </h3>
                      </div>

                      <button className="bg-transparent border-2 border-primary text-primary py-3 px-6 rounded-2xl font-medium hover:bg-primary hover:text-black transition-all duration-300">
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
