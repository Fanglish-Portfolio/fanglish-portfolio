import { motion } from "framer-motion";
import bg from "./../../assets/image/home/heroBanner.jpg";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const HeroBanner = () => {
  return (
    <div className="min-h-[100vh] text-white my-32">
      <div className="w-full h-full flex justify-center items-center">
        <div className="relative rounded-xl overflow-hidden">
          <img src={bg} alt="bg" />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[60%]">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="banner-text text-center libre">
                We Empower learners of all levels to expand their skills , reach
                their goals and steps onto global stage.
              </h1>
              <button className="button">Meet Our Counselors</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
