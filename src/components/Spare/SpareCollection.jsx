import React from "react";
import spare1 from "../../assets/image/spare/spare1.webp";
import spare2 from "../../assets/image/spare/spare2.webp";
import spare3 from "../../assets/image/spare/spare3.webp";
import spare4 from "../../assets/image/spare/spare4.webp";
import spare5 from "../../assets/image/spare/spare5.webp";
import spare6 from "../../assets/image/spare/spare6.webp";
import { FaFileAlt } from "react-icons/fa";

const spears = [
  {
    id: 1,
    image: spare1,
    name: "Air Filter",
  },
  {
    id: 2,
    image: spare2,
    name: "Air Conditional Filter",
  },
  {
    id: 3,
    image: spare3,
    name: "Break Pads",
  },
  {
    id: 4,
    image: spare4,
    name: "Oil Filter",
  },
  {
    id: 5,
    image: spare5,
    name: "Spark Plug",
  },
  {
    id: 6,
    image: spare6,
    name: "Wiper Blade",
  },
];

function SpareCollection() {
  return (
    <div className="containers">
      <p className="header-text mb-10">Spear Parts</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {spears.map((spear) => (
          <div key={spear.id}>
            <img src={spear.image} alt={spear.name} />
            <div className="flex flex-col items-center gap-4 mt-4">
              <p className="suzukipro text-2xl">{spear.name}</p>
              <button className="button">
                <p>Download PDF</p>
                <FaFileAlt />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpareCollection;
