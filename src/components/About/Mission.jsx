import React from "react";

const missions = [
  {
    id: 1,
    title: "Enhance Suzuki Ownership Experience ",
    description:
      "Offer reliable and efficient support services tailored to the needs of Suzuki users in Myanmar.",
  },
  {
    id: 2,
    title: "Ensure Easy Access to Spare Parts",
    description:
      "Provide a convenient platform for customers to purchase genuine Suzuki spare parts effortlessly.",
  },
  {
    id: 3,
    title: "Deliver Quality Service",
    description:
      "Maintain high service standards to ensure customer satisfaction and long-term trust",
  },
  {
    id: 4,
    title: "Strengthen Customer Support",
    description:
      "Build a responsive and helpful support system to assist Suzuki users with their vehicle-related concerns.",
  },
  {
    id: 5,
    title: "Expand Accessibility",
    description:
      "Develop innovative solutions to make Suzuki parts and services available across Myanmar",
  },
];

function Mission() {
  return (
    <div className="containers">
      <div className="header-text text-center mb-10">Our Mission</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {missions.map((mission) => (
          <div key={mission.id} className="body-text">
            <p className="font-bold text-sm mb-5 opacity-80">
              {" "}
              {mission.title}
            </p>
            <p className="suzukipro text-2xl">{mission.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mission;
