import {
  GraduationCap,
  Languages,
  Users,
  BookOpen,
  Award,
  Globe,
} from "lucide-react";
import {
  MdOutlineForum,
  MdOutlineLocalLibrary,
  MdOutlineCases,
  MdOutlineSchool,
} from "react-icons/md";
import service1 from "../../assets/image/service/service/service1.png";
import service2 from "../../assets/image/service/service/service2.png";
import service3 from "../../assets/image/service/service/service3.png";
import service4 from "../../assets/image/service/service/service4.png";
import service5 from "../../assets/image/service/service/service5.png";
import service6 from "../../assets/image/service/service/service6.png";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Consulting Service",
      image: service1,
      icon: <MdOutlineForum className="w-6 h-6" />,
      bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
      textOverlay: "JOIN OUR CONSULTATION!",
      description: "ESCALATE YOUR ACADEMIC JOURNEY",
    },
    {
      id: 2,
      title: "Language Class",
      image: service2,
      icon: <Languages className="w-6 h-6" />,
      bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
      textOverlay: "PACKAGE 5",
      description: "IELTS OR DUOLINGO PTE",
    },
    {
      id: 3,
      title: "Ausbildung",
      image: service3,
      icon: <MdOutlineLocalLibrary className="w-6 h-6" />,
      bgColor: "bg-gradient-to-br from-gray-800 to-blue-900",
      textOverlay: "Job Opportunities in Germany",
      description: "Ausbildung",
    },
    {
      id: 4,
      title: "Duales Studium",
      image: service4,
      icon: <MdOutlineCases className="w-6 h-6" />,
      bgColor: "bg-gradient-to-br from-yellow-400 to-blue-500",
      textOverlay: "Study and Work",
      description: "Duales Studium",
    },
    {
      id: 5,
      title: "Scholarship Programs",
      image: service5,
      icon: <MdOutlineSchool className="w-6 h-6" />,
      bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
      textOverlay: "SCHOLARSHIP MENTORING PROGRAM",
      description: "Academic Excellence",
    },
    {
      id: 6,
      title: "Study Abroad",
      image: service6,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path d="M123-440q-1-10-1.5-20t-.5-20q0-75 28-140.5t77-114q49-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 10-.5 20t-1.5 20h-81q2-10 2.5-20t.5-20q0-10-.5-20t-2.5-20H639q1 10 1 20v40q0 10-1 20h-79v-33q0-12-.5-24t-1.5-23H403q-1 11-1.5 23t-.5 24v33h-79q-1-10-1-20v-40q0-10 1-20H204q-2 10-2.5 20t-.5 20q0 10 .5 20t2.5 20h-81Zm105-160h103q8-43 20-77.5t26-62.5q-48 18-87 54.5T228-600Zm186 0h132q-10-43-25-84t-41-76q-26 35-41.5 76T414-600Zm216 0h103q-23-49-62.5-85.5T583-740q14 30 26.5 63.5T630-600ZM440-120v-40q0-50-35-85t-85-35H80v-80h240q48 0 89.5 21t70.5 59q29-38 70.5-59t89.5-21h240v80H640q-50 0-85 35t-35 85v40h-80Z" />
        </svg>
      ),
      bgColor: "bg-gradient-to-br from-red-600 to-yellow-500",
      textOverlay: "Germany/Austria Package 4",
      description: "IELTS Study Abroad",
    },
  ];

  return (
    <section>
      <div className="containers">
        {/* Section Header */}
        <h2 className="header-text mb-12">Our Services</h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#161616]/20 rounded-2xl p-6 overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Card Image */}
              <div className={`relative flex items-center justify-center`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
              </div>

              {/* Card Content */}
              <div className="mt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-white">{service.icon}</div>
                  <h3 className="text-white text-[14px]  md:text-[20px] font-semibold">
                    {service.title}
                  </h3>
                </div>

                <button className="text-[12px] md:text-[16px] bg-transparent border-2 border-primary text-primary py-3 px-6 rounded-2xl font-medium hover:bg-primary hover:text-black transition-all duration-300">
                  View Service Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
