import React from "react";
import about from "./../../assets/image/About/Founder.png";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

function Number({ n }) {
  const [ref, inView] = useInView();
  const { number } = useSpring({
    from: { number: 0 },
    number: inView ? n : 0,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return (
    <animated.span ref={ref}>{number.to((n) => n.toFixed(0))}</animated.span>
  );
}

function AboutSection() {
  return (
    <div className="containers">
      <p className="header-text pt-20 text-center">Meet our Founder</p>

      <div className="flex flex-col md:flex-row mt-20 max-w-5xl mx-auto">
        <div className="md:me-10 flex w-full md:w-1/3 justify-center md:justify-start  ">
          <img src={about} alt="about" className="w-auto object-cover" />
        </div>
        <div className="md:w-2/3 md:justify-center pt-6 md:pt-0">
          <p className="text-[32px] text-start font-semibold leading-[1.5] letter-spacing-[2px]">
            At the heart of our mission is our founder, Pinky Htut, whose
            passion for education and community growth drives everything we do.
            Having studied across the UK, Japan, and Thailand, Tr. pinky brings
            a truly global perspective to supporting students of all
            backgrounds.
          </p>
        </div>
      </div>

      <div className="mt-10 max-w-5xl mx-auto">
        <h1 className="text-[32px] font-semibold libre mb-6">
          Education Journey
        </h1>
        <p className="text-[24px] font-medium letter-spacing-[2px]">
          With a bachelor’s degree in English from the University of West
          Yangon, a Postgraduate Diploma and master’s in hospitality management
          from the University of West London (UK), and an MBA from Ritsumeikan
          Asia Pacific University (Japan), as well as a third master’s degree in
          Thailand, our founder understands firsthand the transformative power
          of education.
        </p>

        <h1 className="text-[32px] font-semibold libre mb-6 mt-10">
          FuNglish Global Goal
        </h1>
        <p className="text-[24px] font-medium letter-spacing-[2px]">
          Beyond personal achievements, we are deeply committed to ensuring that
          education is accessible to everyone—whether students choose academic
          pathways with scholarships or vocational training. The belief is
          simple yet powerful: learning should be continuous, inclusive, and
          adaptable to every culture.
        </p>

        <div className="my-10 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 justify-between">
          <div className="glass-card font-bold flex flex-col w-[312px] h-[209px] items-center justify-between py-5 rounded-lg">
            <p className="libre text-[48px] italic ">
              <Number n={1500} /> +
            </p>
            <h3 className="text-[16px] font-semibold">
              Students Get <br /> Our Servivces
            </h3>
          </div>

          <div className="glass-card font-bold flex flex-col w-[312px] h-[209px] items-center  justify-between py-5 rounded-lg">
            <p className="libre text-[48px] italic ">
              <Number n={700} /> +
            </p>
            <h3 className="text-[16px] font-semibold">
              Students Get <br /> Approved Visa
            </h3>
          </div>

          <div className="glass-card font-bold flex flex-col w-[312px] h-[209px] items-center justify-between py-5 rounded-lg">
            <p className="libre text-[48px] italic ">
              <Number n={15000} /> +
            </p>
            <h3 className="text-[16px] font-semibold">
              Proper Training & <br /> Consulting Session
            </h3>
          </div>
        </div>

        <p className="text-[24px] font-medium letter-spacing-[2px]">
          Through mentoring, skills development, and mindset training, Tr. Pinky
          aspires to prepare students not only for academic success but also for
          the global market, helping them grow into confident, capable leaders
          who can shape the future.
        </p>

        <h1 className="text-[32px] font-semibold libre mb-6 mt-10">
          FuNglish Vision
        </h1>
        <p className="text-[24px] font-medium letter-spacing-[2px]">
          For me, education isn’t just about books, it’s about learning from
          community, growth, and creating opportunities. That’s why I dedicate
          myself to supporting young learners, sharing my experiences no matter
          where they come from or where they’re going.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
