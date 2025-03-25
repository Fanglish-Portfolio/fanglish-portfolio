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
            <h1 className="header-text mb-5">Car Service</h1>
            <p className="body-text mb-5 text-justify me-10">
              At Suzuki Mega 6 , our skilled technicians are equipped to handle
              a wide range of car repair needs. Utilizing advanced diagnostics
              and genuine Suzuki parts, we provide reliable solutions for engine
              issues, transmission problems, brake system malfunctions,
              suspension and steering repairs, electrical system faults, air
              conditioning service, and more. Trust our expertise to get your
              Suzuki back on the road safely and efficiently.
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
          <div className="md:w-6/12 h-[400px] mt-10 flex flex-col justify-center">
            <h1 className="header-text mb-5 md:ms-10">
              Repair & Maintenance Service
            </h1>
            <p className="body-text mb-5 text-justify md:ms-10">
              Maintain the optimal performance and longevity of your Suzuki with
              our comprehensive car maintenance services at Suzuki Mega 6.
              Following Suzuki's recommended schedules, our expert team offers
              essential services such as oil and filter changes, brake
              inspections, tire rotations, fluid checks, battery testing, and
              thorough vehicle inspections. Regular maintenance at our Yangon
              service center helps prevent costly repairs and ensures your
              continued driving confidence.
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
