import React from "react";

const awards = [
  {
    id: 1,
    title: "2019",
    description: "Best Service Award",
  },
  {
    id: 2,
    title: "2020",
    description: "Best Service Award",
  },
  {
    id: 3,
    title: "2021",
    description: "Best Service Award",
  },
];

function Award() {
  return (
    <div className="containers">
      <div className="header-text text-center mb-10">Awards</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {awards.map((award) => (
          <div key={award.id} className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32px"
              viewBox="0 -960 960 960"
              width="32px"
              fill="#fff"
            >
              <path d="M240-40v-329L110-580l185-300h370l185 300-130 211v329l-240-80-240 80Zm80-111 160-53 160 53v-129H320v129Zm20-649L204-580l136 220h280l136-220-136-220H340Zm98 383L296-558l57-57 85 85 169-170 57 56-226 227ZM320-280h320-320Z" />
            </svg>
            <p className="font-bold text-lg mt-2"> {award.title}</p>
            <p className="font-bold text-sm"> {award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Award;
