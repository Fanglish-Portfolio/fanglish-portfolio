import React from "react";
import about from "./../../assets/image/About/Founder.png";

function AboutSection() {
  return (
    <div className="containers">
      <p className="header-text pt-20 text-center">Meet our Founder</p>

      <div className="flex flex-col md:flex-row mt-20 max-w-5xl mx-auto">
        <div className="md:me-10 flex w-full md:w-1/2 lg:w-1/3 justify-center md:justify-start  ">
          <img
            src={about}
            alt="about"
            className="w-auto h-[300px] md:h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 lg:w-2/3 md:justify-center pt-6 md:pt-0">
          <p className="body-text text-start font-semibold leading-[1.5] letter-spacing-[2px]">
            At the heart of our mission is our founder, Pinky Htut, whose
            passion for education and community growth drives everything we do.
            Having studied across the UK, Japan, and Thailand, Tr. pinky brings
            a truly global perspective to supporting students of all
            backgrounds.
          </p>
        </div>
      </div>

      <div className="mt-10 max-w-5xl mx-auto pt-5 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div>
            <h1 className="text-[20px] md:text-[24px] lg:text-[32px] font-semibold libre mb-6">
              Life Long Learner
            </h1>
            <p className="body-text font-medium letter-spacing-[2px]">
              With a bachelor’s degree in English from the University of West
              Yangon, a Postgraduate Diploma and master’s in hospitality
              management from the University of West London (UK), and an MBA
              from Ritsumeikan Asia Pacific University (Japan), as well as a
              third master’s degree in Thailand, our founder understands
              firsthand the transformative power of education.
            </p>
          </div>

          <div>
            <h1 className="text-[20px] md:text-[24px] lg:text-[32px] font-semibold libre mb-6">
              Education for All
            </h1>
            <p className="body-text font-medium letter-spacing-[2px]">
              Beyond personal achievements, we are deeply committed to ensuring
              that education is accessible to everyone—whether students choose
              academic pathways with scholarships or vocational training. The
              belief is simple yet powerful: learning should be continuous,
              inclusive, and adaptable to every culture.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div>
            <h1 className="text-[20px] md:text-[24px] lg:text-[32px] font-semibold libre mb-6">
              Life Long Learner
            </h1>
            <p className="body-text font-medium letter-spacing-[2px]">
              With a bachelor’s degree in English from the University of West
              Yangon, a Postgraduate Diploma and master’s in hospitality
              management from the University of West London (UK), and an MBA
              from Ritsumeikan Asia Pacific University (Japan), as well as a
              third master’s degree in Thailand, our founder understands
              firsthand the transformative power of education.
            </p>
          </div>

          <div>
            <h1 className="text-[20px] md:text-[24px] lg:text-[32px] font-semibold libre mb-6">
              Education for All
            </h1>
            <p className="body-text font-medium letter-spacing-[2px]">
              Beyond personal achievements, we are deeply committed to ensuring
              that education is accessible to everyone—whether students choose
              academic pathways with scholarships or vocational training. The
              belief is simple yet powerful: learning should be continuous,
              inclusive, and adaptable to every culture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
