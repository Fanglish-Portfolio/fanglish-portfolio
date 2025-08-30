import React from "react";
import { useNavigate } from "react-router-dom";

import backgroud from "./../../../image/Pattern-6.png";

function Policybanner() {
  const navigate = useNavigate();
  return (
    <div
      className="text-black mt-20"
      style={{
        backgroundImage: `url(${backgroud})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="containers">
        <div className="flex flex-col gap-4 justify-center items-center h-[200px] ">
          <h1 className="text-[20px] md:text-[36px] font-bold libre">
            FuNglish Privacy Policy
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Policybanner;
