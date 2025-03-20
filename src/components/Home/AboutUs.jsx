import { useNavigate } from "react-router-dom";
import about from "../../assets/image/Home/aboutus.png";
const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="containers space-y-20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 h-[400px] flex flex-col justify-center">
          <h1 className="header-text mb-5">Our Story</h1>
          <p className="body-text mb-5 text-justify me-10">
            Founded in 2024, MEG was established to revolutionize medical and
            healthcare education by bridging the gap between ambition and
            achievement and excellence. Through our Medicine philosophy, we
            cultivate academic brilliance, ethical responsibility, and lifelong
            professional development.
          </p>
          <button
            className="button w-fit text-secondary bg-white"
            onClick={() => navigate("/about")}
          >
            Learn About Us
          </button>
        </div>
        <div className="md:ms-10 md:flex w-full md:w-1/2 justify-end">
          <img src={about} alt="about" className=" w-auto" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
