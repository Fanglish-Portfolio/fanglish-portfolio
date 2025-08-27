"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  MdOutlineForum,
  MdOutlineLocalLibrary,
  MdOutlineCases,
  MdOutlineSchool,
} from "react-icons/md";
import testimonial1 from "../../assets/image/home/testmonial/student1.png";

// Import Swiper modules
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight, Languages } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Khin Chit Su Thein",
    university: "Weber State University",
    scholarship: "8,000 USD Scholarship",
    image: testimonial1,
    quote:
      "FuNglish made my study abroad journey so smooth! With their All-in-One Service, I didn’t have to worry about anything— from documents to interview prep. I was accepted as a Bachelor of Environmental Science major, and with my GPA 5 and Honors Student background, my case was successfully approved at the U.S. Embassy in Cambodia. I’m so grateful for their guidance and support every step of the way!",
    hasVideo: true,
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    university: "University of Toronto",
    scholarship: "12,000 CAD Scholarship",
    image: testimonial1,
    quote:
      "The language preparation program was exceptional. I improved my IELTS score from 6.0 to 8.5 in just 3 months. The personalized coaching and mock interviews gave me the confidence I needed for my visa application.",
    hasVideo: true,
  },
];

export default function Testimonials() {
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
              slidesPerView={1}
              // spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              loop={true}
              centeredSlides={false}
              className="mySwiper carousel-swiper"
              style={{
                "--swiper-pagination-color": "#FFBA08",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-inactive-opacity": "1",
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="rounded-2xl p-8 border border-gray-700 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Student Image */}
                      <div className="flex flex-col sm:flex-row lg:flex-col gap-4 md:gap-8">
                        <div className="md:w-[278px] md:h-[278px] rounded-2xl overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Student Info */}
                        <div className="mt-6 text-center lg:text-left">
                          <h3 className="text-xl font-semibold text-white mb-1">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-300 text-sm mb-1">
                            {testimonial.university}
                          </p>
                          <p className="text-yellow-500 font-medium text-sm">
                            {testimonial.scholarship}
                          </p>
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <div className="flex-1 flex">
                        <div className="space-y-8 md:space-y-24">
                          <blockquote className="text-white md:text-[24px] leading-relaxed font-medium letter-spacing-[2px]">
                            "{testimonial.quote}"
                          </blockquote>

                          {testimonial.hasVideo && (
                            <button className="button-outline">
                              Watch Interview
                            </button>
                          )}
                        </div>
                      </div>
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
