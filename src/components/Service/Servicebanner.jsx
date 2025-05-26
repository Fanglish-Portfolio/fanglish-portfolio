import React from "react";
import banner from "./../../assets/image/service/servicebanner.jpg";

function Servicebanner() {
  return (
    <div>
      <div
        className="h-[80vh]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url("https://suzukimyanmar.com/storage//ServicesContentImages/1680515817MC&CT-M.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default Servicebanner;
