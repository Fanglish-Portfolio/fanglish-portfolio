import React from "react";
import car1 from "./../../assets/image/cars/Ertiga.png";
import car2 from "./../../assets/image/cars/CarryPro.png";

function CarModel() {
  return (
    <div className="py-32">
      <p className="header-text text-center mb-10">Avaliable Models</p>

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-primary py-5">
          <div className="p-10 flex flex-col items-center justify-center">
            <img src={car1} alt="car1" className="w-[400px]" />
            <p className="header-text text-center">Ertiga</p>
            <button
              onClick={() => {
                window.open(
                  "https://suzukimyanmar.com/frontend/assets/pdf/models/Suzuki_Ertiga_Brochure.pdf"
                );
              }}
              className="button w-fit text-primary bg-white"
            >
              Explore Ertiga
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-sub py-5">
          <div className="p-10 flex flex-col items-center justify-center">
            <img src={car2} alt="car2" className="w-[400px]" />
            <p className="header-text text-center mt-4">Carry Pro</p>
            <button
              onClick={() => {
                window.open(
                  "https://suzukimyanmar.com/frontend/assets/pdf/models/Carry-Pro_Brochure.pdf"
                );
              }}
              className="button w-fit text-black bg-white"
            >
              Explore Carry Pro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarModel;
