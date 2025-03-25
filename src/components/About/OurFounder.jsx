import React from "react";
import founder from "../../assets/image/About/founder1.png";
import founder2 from "../../assets/image/About/founder2.png";

function OurFounder() {
  return (
    <div className="containers">
      <div className="header-text text-center mb-10">Our Founder</div>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row gap-20">
          <div>
            <img src={founder} alt="founder" />
            <p className="header-text text-center">U Kyaw Min Htun</p>
          </div>

          <div>
            <img src={founder2} alt="founder" />
            <p className="header-text text-center">Dr. Aung Naing Soe</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurFounder;
