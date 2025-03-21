import React from "react";
import spear from "../../assets/image/service/spare.webp";
import service from "../../assets/image/service/carservice.png";
import repair from "../../assets/image/service/repair.png";
import { BsArrowUpRight } from "react-icons/bs";

const services = [
  {
    id: 1,
    title: "Car Spear Parts",
    image: spear,
    link: "https://www.tokocarparts.com/category/spear",
    position: "center",
  },
  {
    id: 2,
    title: "Car Service",
    image: service,
    link: "https://www.tokocarparts.com/category/service",
    position: "right",
  },
  {
    id: 3,
    title: "Car Repair & Maintenance ",
    image: repair,
    link: "https://www.tokocarparts.com/category/repair",
    position: "center",
  },
];

function ServiceSection() {
  return (
    <div>
      <div className=" lg:w-[1000px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full h-[400px] flex items-end rounded-b-xl"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: `${service.position}`,
              }}
            >
              <div
                className="bg-sub p-4 w-fit"
                style={{
                  borderRadius: "0 8px 0 0",
                }}
              >
                <p className="suzukipro text-2xl font-bold mb-3">
                  {service.title}
                </p>
                <a
                  href={service.link}
                  target="_blank"
                  className="button w-fit flex items-center"
                >
                  Get Service
                  <BsArrowUpRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
