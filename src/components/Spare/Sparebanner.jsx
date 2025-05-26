import React from "react";
import banner from "./../../assets/image/spare/sparebanner.png";

function Sparebanner() {
  return (
    <div>
      <div className="h-[80vh] bg-black flex justify-center items-end">
        <img src={banner} alt="spare" />
      </div>
    </div>
  );
}

export default Sparebanner;
