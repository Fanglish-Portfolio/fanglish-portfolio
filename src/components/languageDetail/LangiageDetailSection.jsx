import React from "react";
import service1 from "../../assets/image/home/languageClass/language1.png";
import service2 from "../../assets/image/home/languageClass/language2.png";
import service3 from "../../assets/image/home/languageClass/language3.png";
import service4 from "../../assets/image/home/languageClass/language4.png";

import bg from "../../assets/image/Pattern-6.png";

const serviceData = [
  {
    id: 2,
    image: service2,
    title: "FuNglish German A1 + A2 Class",
    text: (
      <div className="">
        <p>
          FuNglish is pleased to announce the launch of German A1 to A2 + Exam
          Guideline Intensive Class (Batch 12), starting 16th September 2025.
          This program is designed for students who want to study in Germany,
          pursue Ausbildung, Duales Studium, or other programs, and improve
          their German language skills for academic or professional purposes.
        </p>

        <div>
          <h1 className="font-semibold text-primary">About the Class:</h1>
          <ul className="list-disc ms-6">
            <li>
              The class follows a student-centered approach with a small class
              size, ensuring effective and interactive learning.
            </li>
            <li>
              The program covers Reading, Writing, Speaking, and Listening
              skills from A1 to A2 level.
            </li>
            <li>
              Writing instruction focuses on structure, key phrases, and
              essential points. Speaking and writing are taught in connection to
              enhance communication skills systematically
            </li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold text-primary">
            Instructor Qualification
          </h1>
          <ul>
            <li>
              The course is taught by a qualified German language teacher with a
              Bachelor’s degree in German, Master’s degree candidacy, and
              extensive teaching experience.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h1 className="font-semibold text-primary">
            Class Schedule and Duration
          </h1>
          <ul>
            <li>Days: Monday to Thursday</li>
            <li>Duration: 2 hours per day, 4 days per week</li>
            <li>Time: 8:30 PM – 10:30 PM</li>
            <li>Start Date: 16th September 2025</li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold text-primary">Additional Features:</h1>
          <ul>
            <li>
              Lessons are recorded, allowing students to review content or catch
              up on missed classes
            </li>
            <li>Small group class sizes ensure personalized attention.</li>
          </ul>
        </div>

        <p>
          The course is suitable for beginners who are starting German for the
          first time
        </p>

        <p>
          Students interested in joining Batch 12 can register through FuNglish
          Page Messenger. Early registration is recommended, as classes fill
          quickly
        </p>
      </div>
    ),
  },
  {
    id: 1,
    image: service1,
    title: "FuNglish German Class for Young Learners – 2nd Batch",
    text: (
      <div className="">
        <p>
          FuNglish is pleased to announce the launch of the second batch of its
          German class for young learners. This program is designed for parents
          who want their children to start learning German as a second language
          and prepare for future academic opportunities in Germany.
        </p>

        <div>
          <h1 className="font-semibold text-primary">About the Class:</h1>
          <ul className="list-disc ms-6">
            <li>
              The program is structured as a weekend class, making it convenient
              for school-going children.
            </li>
            <li>
              The curriculum covers German from Basic to A1.2, with systematic
              and thorough instruction.
            </li>
            <li>
              Class size is limited to ensure personalized attention and
              effective learning for each student.
            </li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold text-primary">
            Instructor Qualification
          </h1>
          <ul>
            <li>
              Classes are taught by experienced instructors with a Bachelor’s
              degree in German and teaching experience in young learner
              programs.
            </li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold text-primary">
            Eligibility and Age Range:
          </h1>
          <ul>
            <li>The program is suitable for children aged 10 to 15 years.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h1 className="font-semibold text-primary">
            Class Schedule and Duration
          </h1>
          <ul>
            <li>
              Days: Saturday and Sunday
              <li>Duration: 4 months</li>
            </li>
          </ul>
        </div>

        <p>
          This class is ideal for parents seeking a structured German language
          pathway for their children and preparing them for future academic
          opportunities in Germany.
        </p>

        <p>
          Students interested in enrolling their children can register and
          inquire for more information via FuNglish Page Messenger.
        </p>
      </div>
    ),
  },

  {
    id: 3,
    image: service3,
    title: "FuNglish Duolingo Intensive Class (Online)",
    text: (
      <div className="">
        <p>
          FuNglish is offering an online Duolingo Intensive Class for students
          preparing for the DET and aiming to achieve high scores for admission
          to foreign universities. Registration is now open for the upcoming
          batch starting 11th August 2025.
        </p>

        <div>
          <h1 className="font-semibold text-primary">
            About the Duolingo Test
          </h1>
          <ul className="list-disc ms-6">
            <li>
              The Duolingo English Test (DET) is accepted by universities in
              Germany, UK, US, Austria, Canada, and many Asian countries
              including China, Japan, Thailand, and Singapore
            </li>
            <li>
              Students planning to study in these countries need a strong
              Duolingo score for university admission.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h1 className="font-semibold text-primary">Class Details:</h1>
          <ul>
            <li>Start Date: 11th August 2025</li>
            <li>Duration: 1 months</li>
            <li>Mode: Online</li>
            <li>Class Size: Limited to ensure personalized attention</li>
          </ul>
        </div>

        <div className="mb-6">
          <h1 className="font-semibold text-primary">What You Will Get:</h1>
          <ul>
            <li>
              Qualified instructors providing full support to help students
              achieve their desired scores.
            </li>
          </ul>
        </div>
        <p>Structured preparation covering all test sections</p>
      </div>
    ),
  },
  {
    id: 4,
    image: service4,
    title: "FuNglish IELTS Class – Achieve a High Band Score",
    text: (
      <div className="">
        <p>
          FuNglish is offering an IELTS preparation class for students who want
          to achieve a strong band score and for those who face challenges with
          self-study. Registration for the upcoming batch is now open.
        </p>

        <div>
          <h1 className="font-semibold text-primary">About the Class</h1>
          <ul className="list-disc ms-6">
            <li>
              Writing & Speaking: Taught directly by a Qualified Instructor,
              providing structured and practical guidance
            </li>
            <li>
              Reading: Taught by an experienced IELTS instructor, Julian,
              ensuring students are well-prepared across all test sections.
            </li>
            <li>
              Listening: Tips and strategies will be provided free of charge.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h1 className="font-semibold text-primary">Instructor Quality:</h1>
          <ul>
            <li>
              All instructors have extensive experience and provide personalized
              attention to each student.
            </li>
            <li>
              The class combines high-quality teaching with fair course fees.
            </li>
          </ul>
        </div>

        <p>
          For more details about the IELTS Class, please contact us via FuNglish
          Page Messenger.
        </p>
      </div>
    ),
  },
];

function LanguageDetailSection({ id }) {
  const service = serviceData.find((service) => service.id == id);

  return (
    <div>
      <div className="mt-24">
        <div className="">
          <div
            className="px-10 py-8 flex justify-center items-center overflow-hidden"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-14 md:-translate-x-0 z-10 "> */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 justify-center items-center ">
              <img src={service.image} alt="service1" className="rounded-xl" />
              <p className="libre text-black text-[18px] sm:text-[20px] md:text-[32px] lg:text-[40px] font-semibold letter-spacing-[2px] leading-[1.5]">
                {service.title}
              </p>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="mt-20 leading-[3.5] containers">{service.text}</div>
    </div>
  );
}

export default LanguageDetailSection;
