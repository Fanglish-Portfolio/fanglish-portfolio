import React from "react";
import service1 from "./../assets/image/service/service/service1.png";
import service2 from "./../assets/image/service/service/service2.png";
import service3 from "./../assets/image/service/service/service3.png";
import service4 from "./../assets/image/service/service/service4.png";
import service5 from "./../assets/image/service/service/service5.png";
import service6 from "./../assets/image/service/service/service6.png";
import { useParams } from "react-router-dom";

const serviceData = [
  {
    id: 1,
    image: service1,
    title: "Consulting Service",
    text: (
      <p className="">
        🚀💯 𝐔𝐩𝐠𝐫𝐚𝐝𝐞 𝐘𝐨𝐮𝐫 𝐀𝐜𝐚𝐝𝐞𝐦𝐢𝐜 𝐄𝐧𝐠𝐥𝐢𝐬𝐡 𝐒𝐤𝐢𝐥𝐥 𝐰𝐢𝐭𝐡 𝐅𝐮𝐍𝐠𝐥𝐢𝐬𝐡'𝐬 𝐁𝐞 𝐚 𝐆𝐫𝐚𝐦𝐦𝐚𝐫
        𝐌𝐨𝐧𝐬𝐭𝐞𝐫 𝐒𝐞𝐫𝐢𝐞𝐬 🚀💯 <br /> 👩🏻‍💻 𝐀𝐜𝐚𝐝𝐞𝐦𝐢𝐜 𝐑𝐞𝐚𝐝𝐢𝐧𝐠 နဲ့ 𝐖𝐫𝐢𝐭𝐢𝐧𝐠
        မှာအားနည်းကြတဲ့ ကျောင်းသား/သူတွေ <br /> 😔 𝐆𝐫𝐚𝐦𝐦𝐚𝐫 𝐌𝐢𝐬𝐭𝐚𝐤𝐞𝐬
        တွေအမြဲလုပ်မိလို့ 𝐄𝐧𝐠𝐥𝐢𝐬𝐡 𝐋𝐚𝐧𝐠𝐮𝐚𝐠𝐞 မှာယုံကြည်မှု
        လျော့နည်းနေကြတဲ့သူတွေနဲ့ <br /> 👩🏻‍🎓 𝐀𝐜𝐚𝐝𝐞𝐦𝐢𝐜 𝐆𝐫𝐚𝐦𝐦𝐚𝐫 ပိုင်းကို စနစ်တကျ
        သင်ယူလိုတဲ့ 𝐈𝐆𝐂𝐒𝐄/𝐆𝐄𝐃 ကျောင်းသားတွေအတွက် <br /> 💼 လုပ်ငန်းခွင်နှင့်
        နေရာဒေသ၊နယ်ပယ် မျိုးစုံအားလုံးမှာ 𝐄𝐧𝐠𝐥𝐢𝐬𝐡 စကားပြောဆိုရာတွင်
        ပိုမိုတိုးတက်စေဖို့နဲ့ <br /> 👩🏻‍🎓 𝐎𝐯𝐞𝐫𝐬𝐞𝐚𝐬 𝐉𝐨𝐛 𝐈𝐧𝐭𝐞𝐫𝐯𝐢𝐞𝐰 တွေကို
        အလွယ်တကူဖြေဆိုနိုင်စေရန် <br /> 🚀 𝐅𝐮𝐍𝐠𝐥𝐢𝐬𝐡 ရဲ့ “𝟔 𝐦𝐨𝐧𝐭𝐡𝐬-𝐭𝐨-𝐭𝐡𝐞-𝐌𝐚𝐱”
        (𝟑-𝐢𝐧-𝟏 𝐏𝐨𝐰𝐞𝐫 𝐒𝐞𝐫𝐢𝐞𝐬) တွေထဲက 𝐆𝐫𝐚𝐦𝐦𝐚𝐫 𝐌𝐨𝐧𝐬𝐭𝐞𝐫 𝐂𝐥𝐚𝐬𝐬 လေးနဲ့
        မိတ်ဆက်ပေးချင်ပါတယ်။🤯🤯 <br /> 💁🏻‍♀️ ယခုဖွင့်လှစ်ပေးမယ့် 𝐆𝐫𝐚𝐦𝐦𝐚𝐫 𝐌𝐨𝐧𝐬𝐭𝐞𝐫
        𝐂𝐥𝐚𝐬𝐬 လေးမှာဆိုရင် <br /> 📖 𝐆𝐫𝐚𝐦𝐦𝐚𝐫 ကိုအခြေခံကနေ 𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞
        ကျကျသင်ကြားပေးမှာဖြစ်ပြီးတော့ 𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐜𝐚𝐭𝐢𝐨𝐧 အတွက်‌ရော၊
        စကားလုံးဝေါဟာရကြွယ်ဝလာမည့်အပြင် သဒ္ဒါမှန်မှန်ကန်ကန်နဲ့ 𝐩𝐫𝐨𝐟𝐞𝐬𝐬𝐢𝐨𝐧𝐚𝐥 ကျကျ
        ပြောလာနိုင်စေရန် 𝐠𝐫𝐚𝐦𝐦𝐚𝐫 𝐟𝐨𝐜𝐮𝐬𝐞𝐝 အတန်းလေးကို ဒုတိယအဆင့်အနေနဲ့ 𝐣𝐨𝐢𝐧
        နိုင််မှာဖြစ်ပြီး 𝐈𝐄𝐋𝐓𝐒, 𝐃𝐮𝐨𝐥𝐢𝐧𝐠𝐨 တို့စသည့် 𝐏𝐫𝐨𝐟𝐢𝐜𝐢𝐞𝐧𝐜𝐲 𝐓𝐞𝐬𝐭 လေးတွေကို
        ပြင်ဆင်မယ့်သူတွေအတွက်လဲ ဒီအတန်းလေးက အဆင်သင့် ဖြစ်သွားစေမှာပါ😍 ။ 👩🏻‍🏫🌟 👩🏻‍🏫
        <br /> 📖 𝐅𝐮𝐍𝐠𝐥𝐢𝐬𝐡 ရဲ့ “ 𝟔 𝐦𝐨𝐧𝐭𝐡𝐬-𝐭𝐨-𝐭𝐡𝐞-𝐌𝐚𝐱” (𝟑-𝐢𝐧-𝟏 𝐏𝐨𝐰𝐞𝐫 𝐒𝐞𝐫𝐢𝐞𝐬)
        လေးကိုတက်ချင်တဲ့ကျောင်းသူ/သားတွေကတော့ အတန်းအပ်တဲ့အခါမှာ Level Test
        ဖြေရမှာဖြစ်ပြီးတော့ 𝐏𝐫𝐞-𝐈𝐧𝐭𝐞𝐫𝐦𝐞𝐝𝐢𝐚𝐭𝐞 ရရှိသူတွေသာ
        တက်ရောက်ခွင့်ရမှာပဲဖြစ်ပါတယ်။ 🏆🏆 🏆 <br /> 𝐆𝐫𝐚𝐦𝐦𝐚𝐫 𝐌𝐨𝐧𝐬𝐭𝐞𝐫 𝐂𝐥𝐚𝐬𝐬
        တက်ပြီးရင်ဘယ်လို တွေရနိုင်မလဲ?? 🏆 ✨ <br /> 𝐒𝐞𝐧𝐭𝐞𝐧𝐜𝐞 𝐒𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞
        တွေမှန်ကန်အောင်တည်ဆောက်နိုင်မယ်၊ ✨ <br /> 𝐂𝐨𝐦𝐩𝐥𝐞𝐱 𝐒𝐞𝐧𝐭𝐞𝐧𝐜𝐞𝐬 တွေနဲ့
        𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐨𝐫𝐬 တွေကို 𝐏𝐫𝐨𝐟𝐞𝐬𝐬𝐢𝐨𝐧𝐚𝐥 ကျကျအသုံးပြုနိုင်မယ်၊ ✨ <br /> 𝐀𝐜𝐚𝐝𝐞𝐦𝐢𝐜
        𝐖𝐫𝐢𝐭𝐢𝐧𝐠 ပိုင်းမှာလည်း တိုးတက်လာမယ့်အပြင် ✨ <br /> ကိုယ့်အတွက်လိုအပ်တဲ့
        𝐏𝐫𝐨𝐟𝐢𝐜𝐢𝐞𝐧𝐜𝐲 𝐓𝐞𝐬𝐭 တွေဖြေဆိုတဲ့အခါမှာလည်း 𝐂𝐨𝐧𝐟𝐢𝐝𝐞𝐧𝐜𝐞 ရှိရှိ
        ဖြေဆိုနိုင်မှာဖြစ်ပါတယ်။ <br /> 📖 𝐂𝐥𝐚𝐬𝐬 𝐃𝐞𝐭𝐚𝐢𝐥𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 လေးကတော့ 🗓
        <br /> 𝐒𝐭𝐚𝐫𝐭𝐢𝐧𝐠 𝐃𝐚𝐭𝐞 - 𝟏𝟕𝐭𝐡, 𝐎𝐜𝐭 𝟐𝟎𝟐𝟓 ⏳𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧 - 𝟐 𝐌𝐨𝐧𝐭𝐡𝐬 🕰 𝐂𝐥𝐚𝐬𝐬
        𝐅𝐫𝐞𝐪𝐮𝐞𝐧𝐜𝐲 - 𝐌𝐨𝐧𝐝𝐚𝐲 & 𝐅𝐫𝐢𝐝𝐚𝐲 <br /> ⏰ 𝐓𝐢𝐦𝐞𝐭𝐚𝐛𝐥𝐞 - 𝟖:𝟎𝟎𝐏𝐌 𝐭𝐨 𝟗:𝟑𝟎𝐏𝐌 𝐌𝐌𝐓
        <br /> 💁🏻‍♀️ ကိုယ်က 𝐆𝐫𝐚𝐦𝐦𝐚𝐫 𝐄𝐫𝐫𝐨𝐫 တွေကြောင့်စိတ်ညစ်နေပြီ၊ စာမေးပွဲမှာလည်း
        အမှတ်တွေထပ်မလျော့ချင်တော့ဘူး ဆိုရင်တော့ ဒီ 𝐂𝐥𝐚𝐬𝐬 လေးကမဖြစ်မနေ 𝐉𝐨𝐢𝐧
        သင့်တဲ့ 𝐂𝐥𝐚𝐬𝐬 လေးပဲဖြစ်ပါတယ်။ <br /> 🔥💯💯 💁🏻‍♀️ ဒါ့အပြင် 𝐀𝐜𝐚𝐝𝐞𝐦𝐢𝐜 𝐖𝐫𝐢𝐭𝐢𝐧𝐠
        ပိုင်းကို 𝐒𝐭𝐫𝐨𝐧𝐠 ဖြစ်လိုတဲ့သူတွေအတွက် နောက်ထပ် မဖြစ်မနေလိုအပ်တဲ့
        𝐕𝐨𝐜𝐚𝐛𝐮𝐥𝐚𝐫𝐲 ကြွယ်ဝဖို့ကိုလည်း 𝟑-𝐢𝐧-𝟏 𝐏𝐨𝐰𝐞𝐫 𝐒𝐞𝐫𝐢𝐞𝐬 ထဲက 𝐕𝐨𝐜𝐚𝐛 𝐀𝐦𝐩𝐥𝐢𝐟𝐢𝐞𝐫
        𝐂𝐥𝐚𝐬𝐬 💁🏻‍♀️ 𝐒𝐩𝐞𝐚𝐤𝐢𝐧𝐠 𝐒𝐤𝐢𝐥𝐥 ကို 𝐅𝐨𝐜𝐮𝐬 ပြီး စနစ်တကျလေ့ကျင့်ချင်တဲ့သူ တွေအတွက်
        𝐒𝐭𝐞𝐩-𝐔𝐩 𝐒𝐩𝐞𝐚𝐤𝐢𝐧𝐠 𝐅𝐨𝐫 𝐂𝐨𝐧𝐯𝐞𝐫𝐬𝐚𝐭𝐢𝐨𝐧 𝐂𝐥𝐚𝐬𝐬 လေးလည်း ဖွင့်လှစ်ပေးထားပါတယ်။
      </p>
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
      <p>
        <br /> At FuNglish, we not only provide services for applying to
        Germany’s Public and Private Universities, but we are now also offering
        one of Germany’s most in-demand opportunities — the Vocational Education
        & Training Program (Ausbildung) for Myanmar students.
        <br /> <br /> <span className="font-semibold">
          What is Ausbildung?
        </span>{" "}
        <br />
        The Ausbildung system combines practical work experience with academic
        learning, enabling students to gain both real-world skills and
        theoretical knowledge at the same time. It is one of the most attractive
        and well-established programs in Germany, widely respected by both
        international and local students.
        <br /> <br />{" "}
        <span className="font-semibold">
          Benefits of the Ausbildung Program
        </span>{" "}
        <br />
        <span className="font-semibold text-primary">Earn While You Learn</span>
        <br />
        Unlike traditional education programs, Ausbildung students receive a
        monthly salary throughout the training period. Training costs are
        covered by the company, while students also earn enough income to
        support their living expenses. Depending on the field, programs
        typically last between 3 to 5 years.
        <br />
        <span className="font-semibold text-primary">
          Gain Practical Experience
        </span>
        <br /> TThe Ausbildung program emphasizes hands-on training. Students
        work directly in professional environments while also learning
        theoretical knowledge in class. Upon completion, graduates are also
        eligible to apply for an 18-month visa extension.
        <br />
        <span className="font-semibold text-primary pt-2">
          High Career Prospects
        </span>
        <br /> Graduates of the Ausbildung program benefit from excellent career
        opportunities. German companies actively hire vocationally trained
        graduates who already have both practical and theoretical experience.
        Students also receive a state-recognized qualification, which can later
        provide access to university-level education if desired.
        <br />
        Applicants are expected to prepare a strong CV/Resume and demonstrate at
        least B1 level German language skills. At FuNglish, our trainer will
        guide you through comprehensive German language preparation.
        <br />
        <span className="font-semibold text-primary">Global Opportunities</span>
        <br />
        After completing Ausbildung, students are eligible to work not only in
        Germany but also in other German-speaking countries such as Austria and
        Switzerland.
        <br />
        <span className="font-semibold text-primary pt-2">
          Fields of Training
        </span>
        <br />
        The Vocational Education & Training Program offers opportunities in a
        wide range of fields, including:
        <ul className="list-disc ms-6">
          <li>Automotive and Mechanical Engineering</li>
          <li>Nursing and Healthcare</li>
          <li>Logistics</li>
          <li>Hospitality and Tourism</li>
          <li>And more</li>
        </ul>
        <br /> <span className="font-semibold">How to Apply</span> <br />{" "}
        Consultations are now open at FuNglish. Our team will guide you step by
        step in preparing for the program and ensuring your application is
        strong and complete. Please contact us directly via our Chat Box to book
        a consultation session.
        <br />{" "}
        <span className="font-semibold">
          Additional Programs at FuNglish
        </span>{" "}
        <br />
        In addition to Ausbildung, we also provide:
        <br /> - English Language Programs: IELTS, Duolingo, Grammar Courses
        <br /> - German Language Programs: From A1.1 and A1.2 to higher levels
        <br />
        More detailed program announcements will be available soon on our
        website.
      </p>
    ),
  },
  {
    id: 4,
    image: service4,
    title:
      "FuNglish CSR Program – Scholarship Application Support Program (SASP)",
    text: (
      <p>
        <br /> FuNglish is pleased to offer a CSR initiative for academically
        outstanding students with high GPA results who face challenges applying
        for scholarships. The Scholarship Application Support Program (SASP) is
        designed to assist students seeking scholarships for German public
        universities.
        <br /> <br />{" "}
        <span className="font-semibold">
          How FuNglish Supports Students:
        </span>{" "}
        <br /> - Assist with securing admission to public universities in
        Germany.
        <br /> - Help students apply for scholarships that provide at least €300
        monthly allowance for a minimum of 2 semesters.
        <br /> <br />
        <span className="font-semibold">Eligibility Criteria:</span> <br /> -
        Minimum education of Grade 13.
        <br /> - Students who have completed at least the 3rd year of a
        Bachelor’s degree or hold a Bachelor’s degree.
        <br /> - High proficiency in IELTS and all four skills in German. (For
        students without the required language level, FuNglish can provide
        language courses; charges may apply.)
        <br /> - GPA above 3.8.
        <br /> - Ability to participate in a multi-stage selection process.
        <br /> - Highly motivated and committed students.
        <br /> <br />
        <span className="font-semibold">Program Benefits:</span> <br />-
        Guidance from FuNglish Founder Tr. Pinky throughout the university
        admission and scholarship application process.
        <br /> - Opportunity to secure full tuition scholarships or small
        semester fees through private donors and federal support (Stipendium) at
        German public universities.
        <br /> - Access to a global network and career opportunities.
        <br /> - Potential for permanent residency and citizenship opportunities
        in Germany.
        <br /> <br /> <span className="font-semibold">
          Selection Process:
        </span>{" "}
        <br /> * FuNglish will select three final candidates from applicants and
        assist them with university admission and scholarship applications.
        <br /> * Students not selected for SASP can still access other FuNglish
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
      <p>
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
        - Completion of 12th grade education IGCSE A Levels, <br /> - IB
        Diploma, or High School Diploma + completion of the 1st year of
        university <br /> <br />
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
      </p>
    ),
  },
  {
    id: 6,
    image: service6,
    title: "Study Abroad",
    text: <p></p>,
  },
];

function ServideDetail() {
  const { id } = useParams();
  console.log(id);

  const service = serviceData.find((service) => service.id == id);
  console.log(service);

  return (
    <div className="containers">
      <div className="mt-20">
        <div className="">
          <div
            className="px-10 py-8 rounded-2xl service-header h-[300px] md:h-[400px] rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-14 md:-translate-x-0 z-10 ">
              <div className="flex flex-col md:flex-row w-[350px] sm:w-[500px] md:w-auto gap-4 md:gap-12 items-center">
                <img
                  src={service.image}
                  alt="service1"
                  className="w-[200px] h-[200px] md:w-[312px] md:h-[312px] rounded-xl"
                />
                <p className="text-white text-[18px] sm:text-[20px] md:text-[32px] lg:text-[40px] font-semibold letter-spacing-[2px] leading-[1.5]">
                  {service.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 leading-[3.5]">{service.text}</div>
    </div>
  );
}

export default ServideDetail;
