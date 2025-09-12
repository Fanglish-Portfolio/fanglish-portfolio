import { useEffect, useState } from "react";
import bg from "./../../assets/image/home/herobanner.webp";
import background from "./../../assets/image/home/herobg.png";
import { useNavigate } from "react-router-dom";
import Collaborate from "./Collaborate";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { getAllbanner } from "../../api/getAllbanner";

const HeroBanner = () => {
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const [banner, setBanner] = useState([]);

  const getBanner = async () => {
    const response = await getAllbanner();
    // console.log(response.data);
    setBanner(response.data);
  };

  useEffect(() => {
    getBanner();
  }, []);

  console.log(banner);

  return (
    <div
      className="text-white mt-0 md:mt-24 "
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {!isImageLoaded && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/30 border-t-white"></div>
        </div>
      )}
      <div className="w-full h-full flex justify-center items-center py-20">
        <div className="relative rounded-xl overflow-hidden md:w-[80%] w-[92%]">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="h-[500px] md:h-full"
          >
            {[bg].map((imageSrc, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[500px] md:h-full">
                  <img
                    src={imageSrc}
                    alt="hero"
                    className="h-[500px] md:w-full md:h-full object-cover"
                    onLoadCapture={() => setIsImageLoaded(true)}
                    onError={() => setIsImageLoaded(true)}
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 md:w-[60%] w-[80%]">
                    <div className="flex flex-col items-center justify-center gap-4">
                      <h1 className="banner-text text-center libre">
                        We Empower learners of all levels to expand their skills
                        , reach their goals and steps onto global stage.
                      </h1>
                      <button
                        onClick={() => navigate("/booking ")}
                        className="button mt-5"
                      >
                        Meet Our Counselors
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {banner.map((banner) => (
              <SwiperSlide key={banner._id}>
                <div className="relative h-[500px] md:h-full">
                  <img
                    src={banner.imageUrl}
                    alt={banner.title}
                    className="h-[500px] md:w-full md:h-[700px] object-cover"
                    onLoadCapture={() => setIsImageLoaded(true)}
                    onError={() => setIsImageLoaded(true)}
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 md:w-[60%] w-[80%]">
                    <div className="flex flex-col items-center justify-center gap-4">
                      <h1 className="banner-text text-center libre">
                        We Empower learners of all levels to expand their skills
                        , reach their goals and steps onto global stage.
                      </h1>
                      <button
                        onClick={() => navigate("/booking ")}
                        className="button mt-5"
                      >
                        Meet Our Counselors
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Collaborate />
    </div>
  );
};

export default HeroBanner;
