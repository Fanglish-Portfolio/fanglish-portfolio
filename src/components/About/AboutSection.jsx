import React from "react";
import about from "./../../assets/image/About/Founder.png";
import { motion } from "framer-motion";

function AboutSection() {
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

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3,
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
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
        className="header-text pt-20 text-center"
      >
        Meet our Founder
      </motion.p>

      <div className="flex flex-col md:flex-row mt-20 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInLeft}
          className="md:me-10 flex w-full md:w-1/2 lg:w-1/3 justify-center md:justify-start  "
        >
          <motion.img
            src={about}
            alt="about"
            className="w-auto h-[300px] md:h-auto object-cover"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRight}
          className="md:w-1/2 lg:w-2/3 md:justify-center pt-6 md:pt-0"
        >
          <p className="text-[18px] md:text-[24px] lg:text-[32px] text-start font-semibold leading-[1.5] letter-spacing-[2px]">
            At the heart of our mission is our founder, Pinky Htut, whose
            passion for education and community growth drives everything we do.
            Having studied across the UK, Japan, and Thailand, Tr. Pinky brings
            a truly global perspective to supporting students of all
            backgrounds.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="mt-10 max-w-5xl mx-auto pt-5 md:pt-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <motion.div variants={cardVariants}>
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
          </motion.div>

          <motion.div variants={cardVariants}>
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
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <motion.div variants={cardVariants}>
            <h1 className="text-[20px] md:text-[24px] lg:text-[32px] font-semibold libre mb-6">
              Mentor & Guide
            </h1>
            <p className="body-text font-medium letter-spacing-[2px]">
              Through mentoring, skills development, and mindset training, Tr.
              Pinky aspires to prepare students not only for academic success
              but also for the global market, helping them grow into confident,
              capable leaders who can shape the future.
            </p>
          </motion.div>

          <motion.div variants={cardVariants}>
            <h1 className="text-[20px] md:text-[24px] lg:text-[32px] font-semibold libre mb-6">
              Beyond Books
            </h1>
            <p className="body-text font-medium letter-spacing-[2px]">
              For me, education isn’t just about books, it’s about learning from
              community, growth, and creating opportunities. That’s why I
              dedicate myself to supporting young learners, sharing my
              experiences no matter where they come from or where they’re going.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutSection;
