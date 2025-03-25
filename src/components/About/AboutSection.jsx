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
        <div className="md:ms-10 md:hidden w-full md:w-1/2 mb-10">
          <img src={about} alt="about" className=" w-auto object-cover" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="body-text mb-5 text-start me-5">
            At Suzuki Mega 6, our vision is to be the leading supporting force
            for Suzuki owners in Myanmar, providing a seamless and exceptional
            experience in vehicle sales, service, and parts accessibility. Since
            our establishment in 2018, we have been dedicated to exceeding
            expectations and building lasting relationships with our valued
            clients. Our Founders bring extensive experience in the automobile
            services industry to Suzuki Mega 6. Their vision and leadership have
            been instrumental in establishing our commitment to excellence and
            customer satisfaction. At Suzuki Mega 6, we are committed to being
            your trusted partner in all your Suzuki needs. We strive to provide
            exceptional service and build lasting relationships with every
            customer in Yangon and beyond.
          </p>
        </div>
        <div className="hidden md:ms-10 md:flex w-full md:w-1/2 justify-end">
          <img src={about} alt="about" className=" w-auto object-cover" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
