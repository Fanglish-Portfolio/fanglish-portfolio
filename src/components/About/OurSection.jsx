import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

import { motion } from "framer-motion";

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

function OurSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="containers">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-5xl mx-auto"
      >
        <p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="header-text text-center mb-20"
        >
          About FuNglish
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <motion.div variants={cardVariants}>
            <p className="body-text font-medium letter-spacing-[2px]">
              FuNglish began with a focus on Business English classes and has
              grown into a leading destination for international education.
              Founded by Tr. Pinky during the COVID-19 pandemic in 2020,
              FuNglish has rapidly developed into a premier educational
              consultancy, helping students—especially from Myanmar—achieve
              their global education goals.
            </p>
          </motion.div>

          <motion.div variants={cardVariants}>
            <p className="body-text font-medium letter-spacing-[2px]">
              At FuNglish, we serve our students and clients with care, respect,
              and genuine dedication. Our founder, along with a team of
              experienced administrators and educators, is committed to
              delivering timely and reliable support tailored to each
              individual’s needs.
            </p>
          </motion.div>
        </div>

        <div className="my-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 justify-between">
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

        <div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10"
        >
          <motion.div variants={cardVariants}>
            <h1 className="text-[20px] md:text-[24px] lg:text-[32px] font-semibold libre mb-6">
              Trusted & Proven
            </h1>
            <p className="body-text font-medium letter-spacing-[2px]">
              Over the years, FuNglish has become one of Myanmar’s top
              educational consultancies, renowned for producing a high number of
              U.S. visa success stories. At our peak, we’ve supported nearly 200
              students each month, with a notable milestone of 12 visa approvals
              out of 22 applications in a single day—a truly unforgettable
              achievement.
            </p>
          </motion.div>

          <motion.div variants={cardVariants}>
            <h1 className="text-[20px] md:text-[24px] lg:text-[32px] font-semibold libre mb-6">
              Global Reach
            </h1>
            <p className="body-text font-medium letter-spacing-[2px]">
              Our support extends beyond Myanmar. We have successfully assisted
              our Myanmar students with their U.S student visas from various
              countries including Thailand, Taiwan, Singapore, Japan, Korea, the
              Philippines, and Papua New Guinea. We’ve earned the trust of
              students and parents alike by offering honest guidance, thorough
              preparation, and unwavering support throughout their education
              journey.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
          <div variants={cardVariants}>
            <h1 className="text-[20px] md:text-[24px] lg:text-[32px] font-semibold libre mb-6">
              A Lifeline for Students
            </h1>
            <p className="body-text font-medium letter-spacing-[2px]">
              One of our most impactful initiatives is the Virtual Office—a
              lifeline for students who feel lost or overwhelmed in their
              pursuit of studying abroad. We offer a free 20-minute consultation
              where students receive personal, heart-centered guidance. Many of
              those who initially came seeking advice have become long-term
              clients, transformed from uncertain individuals into confident,
              empowered students.
            </p>
          </div>

          <motion.div variants={cardVariants}>
            <h1 className="text-[20px] md:text-[24px] lg:text-[32px] font-semibold libre mb-6">
              Turning Setbacks Success
            </h1>
            <p className="body-text font-medium letter-spacing-[2px]">
              Our ability to support even the most challenging cases has set us
              apart. We've helped numerous students obtain U.S. visas after
              multiple prior rejections—some even after three to six failed
              attempts. These success stories are a testament to our
              persistence, expertise, and heartfelt commitment.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default OurSection;
