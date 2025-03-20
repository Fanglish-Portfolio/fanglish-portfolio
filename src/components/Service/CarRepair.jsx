import React from "react";
import service1 from "../../assets/image/service/service1.png";
import service2 from "../../assets/image/service/service2.png";

function CarRepair() {
  return (
    <div className="containers">
      <p className="header-text mb-10">Car Repair & Maintenance Service</p>
      <div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 h-[400px] flex flex-col justify-center">
            <h1 className="header-text mb-5">Our Story</h1>
            <p className="body-text mb-5 text-justify me-10">
              Founded in 2024, MEG was established to revolutionize medical and
              healthcare education by bridging the gap between ambition and
              achievement and excellence. Through our Medicine philosophy, we
              cultivate academic brilliance, ethical responsibility, and
              lifelong professional development.
            </p>
          </div>
          <div className="md:flex w-full md:w-1/2 justify-end">
            <img src={service1} alt="service1" className="w-auto" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:flex w-full md:w-6/12 justify-start">
            <img src={service2} alt="service2" className=" w-auto" />
          </div>
          <div className="md:w-6/12 h-[400px] flex flex-col justify-center">
            <h1 className="header-text mb-5 md:ms-10">
              Repair & Maintenance Service
            </h1>
            <p className="body-text mb-5 text-justify md:ms-10">
              Founded in 2024, MEG was established to revolutionize medical and
              healthcare education by bridging the gap between ambition and
              achievement and excellence. Through our Medicine philosophy, we
              cultivate academic brilliance, ethical responsibility, and
              lifelong professional development.
            </p>
          </div>
          <div className="flex md:hidden w-full md:w-6/12 justify-start">
            <img src={service2} alt="service2" className=" w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarRepair;
