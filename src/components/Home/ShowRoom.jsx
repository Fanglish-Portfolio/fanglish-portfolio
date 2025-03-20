import React from "react";
import showroom from "../../assets/image/home/showroom.png";

function ShowRoom() {
  return (
    <div className="containers">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div>
          <p className="header-text mb-5">Office Location</p>
          <p className="body-text">
            No(96), Pearl Street, Shwe Pyi Thar <br /> Industrial Zone (3), Near
            Danyingone <br /> Market, Yangon, Myanmar
          </p>
        </div>
        <div>
          <img src={showroom} alt="showroom" />
        </div>
      </div>
    </div>
  );
}

export default ShowRoom;
