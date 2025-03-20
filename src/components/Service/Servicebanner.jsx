import React from "react";
import banner from "./../../assets/image/About/aboutbanner.jpg";

function Servicebanner() {
  return (
    <div>
      <div
        className="h-[80vh]"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}

export default Servicebanner;
