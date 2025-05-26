import React from "react";
import banner from "./../../assets/image/About/aboutbanner.jpg";

function Aboutbanner() {
  return (
    <div>
      <div
        className="h-[80vh] md:bg-red-500 lg:bg-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${banner})`,
          backgroundSize: "cover",
          backgroundPositionY: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default Aboutbanner;
