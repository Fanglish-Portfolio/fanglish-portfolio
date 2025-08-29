import { useState } from "react";
import bg from "./../../assets/image/home/herobanner.jpg";

const HeroBanner = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="text-white md:my-32 my-16">
      <div className="w-full h-full flex justify-center items-center">
        <div className="relative rounded-xl overflow-hidden">
          <img
            src={bg}
            alt="bg"
            className="h-[500px] md:w-full md:h-full object-cover"
            onLoadCapture={() => {
              setIsImageLoaded(true);
            }}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 md:w-[60%] w-[80%]">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="banner-text text-center libre">
                We Empower learners of all levels to expand their skills , reach
                their goals and steps onto global stage.
              </h1>
              <button className="button mt-5">Meet Our Counselors</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
