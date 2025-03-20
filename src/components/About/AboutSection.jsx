import React from "react";
import about from "./../../assets/image/service/repair.png";

function AboutSection() {
  return (
    <div className="containers text-center">
      <p className="header-text">About Us</p>
      <p className="body-text">
        “ To be the leading support hub for Suzuki users in Myanmar, providing a
        seamless experience in vehicle maintenance and spare parts accessibility
        “
      </p>
      <div className="flex flex-col md:flex-row mt-20">
        <div className="md:w-1/2 h-[400px] flex flex-col justify-center">
          <p className="body-text mb-5 text-justify me-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="hidden ms-10 md:flex w-full md:w-1/2 justify-end">
          <img src={about} alt="about" className=" w-auto" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
