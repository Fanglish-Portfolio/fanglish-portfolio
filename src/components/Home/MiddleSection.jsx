import React from "react";
import { useNavigate } from "react-router-dom";

function MiddleSection() {
  const navigate = useNavigate();
  return (
    <div className="bg-primary text-black">
      <div className="containers">
        <div className="flex flex-col gap-4 justify-center items-center h-[400px]">
          <h1 className="text-[20px] md:text-[36px] font-bold libre mb-2">
            Ready to Start Your Journey?
          </h1>
          <p className="text-[16px] md:text-[20px] text-center font-semibold">
            Consult with our experts to achieve your <br /> dream of studying
            abroad.
          </p>
          <button
            className="button"
            onClick={() => navigate("/booking")}
            style={{ backgroundColor: "#161616", color: "white" }}
          >
            Meet Our Counselors
          </button>
        </div>
      </div>
    </div>
  );
}

export default MiddleSection;
