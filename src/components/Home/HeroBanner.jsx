import { motion } from "framer-motion";
import bg from "./../../assets/image/home/heroBanner.svg";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const HeroBanner = () => {
  return (
    <div
      className="min-h-[100vh] text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "0 25%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="containers flex flex-col justify-end h-screen"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl suzukipro font-bold mb-10">
          Always ready to provide <br /> the best service
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mt-10 md:mt-0">
          <a
            href="tel:+123456789"
            target="_blank"
            className="button bg-white text-secondary text-lg font-semibold"
          >
            Call Us
            <MdOutlinePhoneInTalk size={25} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroBanner;
