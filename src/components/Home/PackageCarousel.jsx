"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdLibraryBooks } from "react-icons/md";
import package1 from "./../../assets/image/home/packageImage/package1.png";
import package2 from "./../../assets/image/home/packageImage/package2.png";
import package3 from "./../../assets/image/home/packageImage/package3.png";
import package4 from "./../../assets/image/home/packageImage/package4.png";
import package5 from "./../../assets/image/home/packageImage/package5.png";

import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper modules
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const classes = [
  {
    id: 1,
    title: "Dual Tack Package",
    image: package1,
    icon: <MdLibraryBooks className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "IELTS Preparation + Scholarship Mentoring Program",
    image: package2,
    icon: <MdLibraryBooks className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "German Dream Package",
    image: package3,
    icon: <MdLibraryBooks className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "IELTS Germany or Austria",
    image: package4,
    icon: <MdLibraryBooks className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "IELTS Or Duolingo Package",
    image: package5,
    icon: <MdLibraryBooks className="w-6 h-6" />,
  },
];

export default function PackageCarousel({ id }) {
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  const filteredClasses = classes.filter((service) => service.id != id);

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
              <h2 className="header-text">
                Explore Our Learning Packages for Student Success!
              </h2>
            </div>
            <div className="flex md:items-center space-x-4 mt-4 md:mt-0">
              <button
                onClick={handlePrev}
                className={`p-2 rounded-full text-primary border border-primary transition-colors shadow-md hover:bg-primary hover:text-black `}
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className={`p-2 rounded-full text-primary border  border-primary transition-colors shadow-md hover:bg-primary hover:text-black`}
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5" />
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
                        className="w-full h-full object-cover rounded-xl"
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
                          navigate(`/package-detail/${service.id}`)
                        }
                        className="w-full text-[12px] md:text-[16px] bg-transparent border-2 border-primary text-primary py-3 px-6 rounded-2xl font-medium hover:bg-primary hover:text-black transition-all duration-300"
                      >
                        View Package
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
