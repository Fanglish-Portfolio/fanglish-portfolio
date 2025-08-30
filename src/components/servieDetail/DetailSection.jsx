import React from "react";
import service1 from "../../assets/image/service/service/service1.png";
import service2 from "../../assets/image/service/service/service2.png";
import service3 from "../../assets/image/service/service/service3.png";
import service4 from "../../assets/image/service/service/service4.png";
import service5 from "../../assets/image/service/service/service5.png";
import service6 from "../../assets/image/service/service/service6.png";
import service7 from "../../assets/image/service/service/service7.png";

import bg from "../../assets/image/Pattern-6.png";

const serviceData = [
  {
    id: 1,
    image: service1,
    title: "Consulting Service",
    text: (
      <div>
        {/* Title */}
        <h1>
          Personalized one-on-one guidance for students and working
          professionals
        </h1>

        {/* Intro */}
        <p>
          Interest in Germany and Austria is rising among students and
          professionals seeking high-quality education and strong career
          pathways. Whether you plan to apply to a university or pursue a work
          route, FuNglish helps you prepare the right documents, timelines, and
          strategy—efficiently and confidently.
        </p>
        <p>For Students: University Applications</p>
        <p>Academic background and program fit</p>
        <p>Application timelines and required documents</p>
        <p>Budget planning (tuition, living costs, insurance, etc.)</p>
        <p>
          We help you shortlist suitable programs and build a realistic,
          step-by-step plan to submit competitive applications.
        </p>

        {/* Section Header */}
        <h2 className="">For Working Professionals: Career Pathways</h2>
        <p>
          Germany, in particular, provides attractive options such as Ausbildung
          and the Opportunity Card. Choosing the right route depends on:
        </p>

        {/* Package details */}
        <h3 className="">Eligibility criteria for your field</h3>
        <p>Your education level and work experience</p>
        <p>Language expectations and documentation</p>
        <p>
          You’ll receive guidance on which path best matches your profile—and
          what to prepare next.
        </p>
        <p>One-on-One Consultation with Tr. Pinky (Founder)</p>
        <p>
          A structured session designed to clarify your pathway and save time
          and costs.
        </p>

        <h3 className="">What you’ll get</h3>
        <p>Up to 45 minutes of tailored advice</p>

        <p>Review of your academic/work background</p>
        <p>A clear pathway recommendation (study or work)</p>
        <p>
          A prioritized preparation checklist (documents, timeline, next steps)
        </p>

        {/* Benefits */}
        <h2 className="">Why FuNglish</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Clear, structured planning from the first conversation</li>
          <li>Program and pathway matching based on your profile</li>
          <li>Cost- and time-efficient guidance</li>
          <li>Experience with Germany and Austria application ecosystems</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    image: service2,
    title: "Language Class",
    text: <p></p>,
  },
  {
    id: 3,
    image: service3,
    title: "Ausbildung",
    text: (
      <div>
        <div className="flex justify-center mb-8">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mG5lW8CxLKM?si=C-D7gtQbGpeANtko"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <p className="font-semibold">
          At FuNglish, we not only provide services for applying to Germany’s
          Public and Private Universities, but we are now also offering one of
          Germany’s most in-demand opportunities — the Vocational Education &
          Training Program (Ausbildung) for Myanmar students.
          <br />
          Trainer Pinky has explained the key details of this program in the
          video provided.
          <br />
          What is Ausbildung?
          <br />
          The Ausbildung system combines practical work experience with academic
          learning, enabling students to gain both real-world skills and
          theoretical knowledge at the same time. It is one of the most
          attractive and well-established programs in Germany, widely respected
          by both international and local students.
          <br />
          Benefits of the Ausbildung Program
          <br />
          Earn While You Learn
          <br />
          Unlike traditional education programs, Ausbildung students receive a
          monthly salary throughout the training period. Training costs are
          covered by the company, while students also earn enough income to
          support their living expenses. Depending on the field, programs
          typically last between 3 to 5 years.
          <br />
          Gain Practical Experience
          <br />
          The Ausbildung program emphasizes hands-on training. Students work
          directly in professional environments while also learning theoretical
          knowledge in class. Upon completion, graduates are also eligible to
          apply for an 18-month visa extension.
          <br />
          High Career Prospects
          <br />
          Graduates of the Ausbildung program benefit from excellent career
          opportunities. German companies actively hire vocationally trained
          graduates who already have both practical and theoretical experience.
          Students also receive a state-recognized qualification, which can
          later provide access to university-level education if desired.
          <br />
          Applicants are expected to prepare a strong CV/Resume and demonstrate
          at least B1 level German language skills. At FuNglish, our trainer
          will guide you through comprehensive German language preparation.
          <br />
          Global Opportunities
          <br />
          After completing Ausbildung, students are eligible to work not only in
          Germany but also in other German-speaking countries such as Austria
          and Switzerland.
          <br />
          Fields of Training
          <br />
          The Vocational Education & Training Program offers opportunities in a
          wide range of fields, including:
          <br />
          Automotive and Mechanical Engineering
          <br />
          Nursing and Healthcare Logistics
          <br />
          Bakery and Culinary Arts
          <br />
          Hospitality and Tourism
          <br />
          And more
          <br />
          How to Apply
          <br />
          Consultations are now open at FuNglish. Our team will guide you step
          by step in preparing for the program and ensuring your application is
          strong and complete. Please contact us directly via our Chat Box to
          book a consultation session.
          <br />
          Additional Programs at FuNglish
          <br />
          In addition to Ausbildung, we also provide:
          <br />
          English Language Programs:
          <br />
          IELTS, Duolingo, Grammar Courses German Language Programs:
          <br />
          From A1.1 and A1.2 to higher levels
          <br />
          More detailed program announcements will be available soon on our
          website.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    image: service4,
    title: "Scholarship Application Support Program",
    text: (
      <p className="font-semibold">
        <br /> FuNglish is pleased to offer a CSR initiative for academically
        outstanding students with high GPA results who face challenges applying
        for scholarships. The Scholarship Application Support Program (SASP) is
        designed to assist students seeking scholarships for German public
        universities.
        <br /> <br />{" "}
        <span className="font-semibold">
          How FuNglish Supports Students:
        </span>{" "}
        <br /> Assist with securing admission to public universities in Germany.
        <br /> Help students apply for scholarships that provide at least €300
        monthly allowance for a minimum of 2 semesters.
        <br /> <br />
        <span className="font-semibold">Eligibility Criteria:</span> <br />
        Minimum education of Grade 13.
        <br /> Students who have completed at least the 3rd year of a Bachelor’s
        degree or hold a Bachelor’s degree.
        <br /> High proficiency in IELTS and all four skills in German. (For
        students without the required language level, FuNglish can provide
        language courses; charges may apply.)
        <br /> GPA above 3.8.
        <br /> Ability to participate in a multi-stage selection process.
        <br /> Highly motivated and committed students.
        <br /> <br />
        <span className="font-semibold">Program Benefits:</span> <br />
        Guidance from FuNglish Founder Tr. Pinky throughout the university
        admission and scholarship application process.
        <br /> Opportunity to secure full tuition scholarships or small semester
        fees through private donors and federal support (Stipendium) at German
        public universities.
        <br /> Access to a global network and career opportunities.
        <br /> Potential for permanent residency and citizenship opportunities
        in Germany.
        <br /> <br /> <span className="font-semibold">
          Selection Process:
        </span>{" "}
        <br /> FuNglish will select three final candidates from applicants and
        assist them with university admission and scholarship applications.
        <br /> Students not selected for SASP can still access other FuNglish
        services for applying to German public universities.
        <br /> <br /> For more details about the program, you can watch the
        FuNglish YouTube video:
        <br /> Scholarship Application Support Program Video
        <br /> Students interested in joining the SASP can apply through
        FuNglish Page Messenger.
      </p>
    ),
  },
  {
    id: 5,
    image: service5,
    title: "Duales Stadium Program",
    text: (
      <div>
        <div className="flex justify-center mb-8">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Adce4k4QgfA?si=4-4SeR_NNeKysyRe"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <span className="font-bold text-xl">
          Duales Studium Program in Germany: Study and Work While Pursuing a
          Bachelor’s Degree
        </span>{" "}
        <br />
        <span className="font-semibold">
          What is the Duales Studium Program?
        </span>{" "}
        <br /> The Duales Studium Program is a unique option that combines
        academic study with practical work experience. Unlike vocational
        Ausbildung programs, this program allows students to pursue a Bachelor’s
        degree while gaining experience in white-collar jobs. <br /> <br />{" "}
        <span className="font-semibold">Eligibility Requirements:</span> <br />{" "}
        Completion of 12th grade education IGCSE A Levels, <br /> IB Diploma, or
        High School Diploma + completion of the 1st year of university <br />{" "}
        <br />
        <span className="font-semibold">Program Duration:</span> <br /> The
        program typically lasts 3 to 3.5 years. Students alternate between study
        and practical work, either weekly or monthly, depending on the program
        structure. <br /> <br />{" "}
        <span className="font-semibold">Who is this program suitable for?</span>{" "}
        <br /> * Students with strong academic performance who can manage
        responsibilities efficiently <br /> * Students with a good GPA and
        completion of 12th grade <br /> * Students with German language
        proficiency at B2/C1 level <br /> * Students seeking an academic pathway
        rather than a vocational track while gaining practical work experience.
        <br /> <br />{" "}
        <span className="font-semibold">Fields of Study Include:</span>
        <ul className="list-disc ms-6">
          <li>Business Administration</li>
          <li>IT & Computer Science</li>
          <li>Engineering & Technology</li>
          <li>Health & Social Science</li>
          <li>Finance & Law</li>
          <li>Tourism & Hospitality</li>
          <li>Media & Design</li>
          <li>Agricultural Science</li>
          <li>Environment & Sustainability</li>
        </ul>
        <br />
        For more detailed information about the Duales Studium Program, you can
        watch our full explanation video here: Full YouTube Video <br />{" "}
        Students interested in the Duales Studium Program can consultation
        appointment with Tr. Pinky. Additionally, for those looking to improve
        their German language skills, A1 to A2 classes will be available in
        July. <br /> For more information, please contact us via FuNglish Page
        Messenger.
      </div>
    ),
  },
  {
    id: 6,
    image: service6,
    title: "Study Abroad",
    text: <p></p>,
  },
  {
    id: 7,
    image: service7,
    title: "6 Months To The Max",
    text: (
      <div>
        <p>6-Months-to-the-Max: 3-in-1 English Class Package</p>
        <p>
          Are you struggling with fluency, grammar, or confidence when speaking
          English? Do you want to prepare for studying or working abroad with
          strong language skills?
        </p>
        <p>
          FuNglish offers the “6-Months-to-the-Max” Power Skills Series – a
          structured 3-in-1 package designed to take you from building
          vocabulary and mastering grammar to achieving fluency in conversation.
        </p>
        <p>
          Unlike general English classes, this program focuses on practical
          communication skills, using a detailed syllabus and step-by-step
          learning across three interconnected classes.
        </p>
        <p>1. Vocabulary Amplifier Class</p>
        <p>
          Designed for students, professionals, and anyone who wants to expand
          vocabulary for daily life and the workplace.
          <br />
          Learn practical vocabulary through bite-sized lessons and interactive
          activities.
          <br />
          Improve your word choice for everyday communication and academic or
          professional use.
        </p>
        <p>
          Class Information
          <br />
          Start Date: 17th August 2025
          <br />
          Duration: 2 months
          <br />
          Schedule: Saturday & Sunday, 8:30 – 10:00 PM (MMT)
        </p>
        <p>
          2. Grammar Monster Series
          <br />
          Ideal for learners who want to build a strong grammar foundation for
          both communication and exams.
          <br />
          Master grammar from the basics to advanced use.
          <br />
          Strengthen daily communication and academic writing.
          <br />
          Suitable for IGCSE, GED, IELTS, Duolingo, and other test preparation.
        </p>
        <p>
          Class Information
          <br />
          Start Date: 17th October 2025
          <br />
          Duration: 2 months
          <br />
          Schedule: Monday & Friday, 8:00 – 9:30 PM (MMT)
        </p>
        <p>
          3. Step-Up Speaking for Conversation Skills
          <br />
          Aimed at learners who already have a grammar and vocabulary
          foundation.
          <br />
          Develop fluency and confidence through real-life conversations.
          <br />
          Practice weekly themes and interactive speaking activities.
          <br />
          Classes are taught by both local and native teachers for balanced
          learning.
        </p>
        <p>
          Class Information
          <br />
          Start Date: 20th December 2025
          <br />
          Duration: 2 months
          <br />
          Entry Requirements
          <br />
          Students must take a level test before joining.
        </p>
        <p>
          Only Pre-Intermediate level and above are eligible for enrollment.
          <br />
          Flexible Options & Discounts
          <br />
          Join a single class or the full 3-in-1 package.
          <br />
          Special promotional discounts are available for students who register
          for the full package.
          <br />
          Why Choose FuNglish?
          <br />
          Structured program covering vocabulary, grammar, and speaking.
          <br />
          Practical, real-life communication focus.
          <br />
          Taught by both local and native teachers.
          <br />
          Affordable pricing with fast results.
        </p>
      </div>
    ),
  },
];

function DetailSection({ id }) {
  const service = serviceData.find((service) => service.id == id);

  return (
    <div className="containers">
      <div className="mt-20">
        <div className="">
          <div
            className="px-10 py-8 flex justify-center items-center rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-14 md:-translate-x-0 z-10 "> */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 max-w-md justify-center items-center ">
              <img src={service.image} alt="service1" className="rounded-xl" />
              <p className="text-black text-[18px] sm:text-[20px] md:text-[32px] lg:text-[40px] font-semibold letter-spacing-[2px] leading-[1.5]">
                {service.title}
              </p>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="mt-20 leading-[3.5]">{service.text}</div>
    </div>
  );
}

export default DetailSection;
