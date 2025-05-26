import { useNavigate } from "react-router-dom";
import about from "../../assets/image/home/aboutus.png";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="containers space-y-20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 h-[400px] flex flex-col justify-center">
          <h1 className="header-text mb-5">Our Story</h1>
          <p className="body-text mb-5 md:me-10">
            Founded in 2018 and led by experienced directors in the automobile
            services industry, Suzuki Mega 6 is your authorized Suzuki reseller
            and premier car repair and maintenance provider. We are committed to
            building lasting relationships with our customers through trust,
            expertise, and exceptional service.
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
