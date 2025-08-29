"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonial1 from "../../assets/image/home/testmonial/student1.png";
import testimonial2 from "../../assets/image/home/testmonial/student2.png";
import testimonial3 from "../../assets/image/home/testmonial/student3.png";
import testimonial4 from "../../assets/image/home/testmonial/student4.png";
import testimonial5 from "../../assets/image/home/testmonial/student5.png";
import testimonial6 from "../../assets/image/home/testmonial/student6.png";

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
    title: "“FuNglish made my study abroad journey so smooth!”",
    image: testimonial1,
    quote:
      "With their All-in-One Service,I didn’t have to worry about anything— from documents to interview prep. I was accepted as a Bachelor of Environmental Science major, and with my GPA 5 and Honors Student background, my case was successfully approved at the U.S. Embassy in Cambodia. I’m so grateful for their guidance and support every step of the way!",
    hasVideo: true,
  },
  {
    id: 2,
    title: "“Becoming a teacher has always been my dream”",
    image: testimonial2,
    quote:
      " After three failed attempts, I finally got approved on my 4th try at the U.S. Embassy in Rangoon with the help of FuNglish and Tr. Pinky, who supported me every step of the way. Now I’m proudly studying at East Los Angeles College in the U.S.!”",
    hasVideo: true,
  },
  {
    id: 3,
    title: "“Thanks to FuNglish’s All-in-One Urgent Service”",
    image: testimonial3,
    quote:
      "My case was successfully approved at the U.S. Embassy in Rangoon just before . I’m now a student in the U.S!”",
    hasVideo: true,
  },
  {
    id: 4,
    title: "“ On my very first attempt, I got my U.S. visa approved  “",
    image: testimonial4,
    quote:
      "I got my U.S. visa approved at the Chiang Mai Embassy with FuNglish’s All-in-One Service. Their support made everything simple and stress-free, and now I’m studying at Los Angeles City College!",
    hasVideo: true,
  },
  {
    id: 5,
    title:
      "“After two failed attempts, I finally got my U.S. visa approved at the Hanoi Embassy“",
    image: testimonial5,
    quote:
      "With FuNglish’s All-in-One Service. Tr.Pinky and the team guided me through every step and never gave up on me. Now I’m so excited to start my journey at Mt. San Antonio College!",
    hasVideo: true,
  },
  {
    id: 6,
    title:
      "“ It took me six tries, but with FuNglish’s DS-160 service, I finally got approved at the U.S. Embassy in Rangoon! “",
    image: testimonial6,
    quote:
      "I can’t believe I’m achieveing my dreams to study in the U.S Borough of Manhattan College—thank you FuNglish for helping my dreams of studying in the U.S.",
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
              <h2 className="header-text">What Our Students Says</h2>
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
                        <div className="rounded-2xl overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <div className="flex-1 flex">
                        <div className="flex flex-col justify-between">
                          <blockquote className="text-white md:text-[24px] leading-relaxed font-medium letter-spacing-[2px]">
                            {testimonial.title}
                          </blockquote>

                          <p className="text-white text-[20px]">
                            {testimonial.quote}
                          </p>

                          {testimonial.hasVideo && (
                            <button className="w-[160px] mt-2 button-outline">
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
