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
import blog1 from "../../assets/image/home/blog/blog1.png";
import blog2 from "../../assets/image/home/blog/blog2.png";
import blog3 from "../../assets/image/home/blog/blog3.png";

const Blog = () => {
  const services = [
    {
      id: 1,
      title:
        "Word Power Unleashed: English Skill with FuNglish's Vocab Amplifier Class",
      image: blog1,
      icon: <MdOutlineForum className="w-6 h-6" />,
      bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
      textOverlay: "JOIN OUR CONSULTATION!",
      description: "ESCALATE YOUR ACADEMIC JOURNEY",
    },
    {
      id: 2,
      title: "About Goethe Exam",
      image: blog2,
      icon: <Languages className="w-6 h-6" />,
      bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
      textOverlay: "PACKAGE 5",
      description: "IELTS OR DUOLINGO PTE",
    },
    {
      id: 3,
      title:
        "𝐋𝐢𝐭𝐭𝐥𝐞 𝐋𝐞𝐚𝐫𝐧𝐞𝐫𝐬 လေးတွေ အတွက် 𝐅𝐮𝐍𝐠𝐥𝐢𝐬𝐡 ရဲ့𝐆𝐞𝐫𝐦𝐚𝐧 𝐂𝐥𝐚𝐬𝐬-𝟐𝐧𝐝 𝐁𝐚𝐭𝐜𝐡(no starting date)",
      image: blog3,
      icon: <MdOutlineLocalLibrary className="w-6 h-6" />,
      bgColor: "bg-gradient-to-br from-gray-800 to-blue-900",
      textOverlay: "Job Opportunities in Germany",
      description: "Ausbildung",
    },
  ];

  return (
    <section>
      <div className="containers">
        {/* Section Header */}
        <h2 className="header-text mb-12">Our Blogs</h2>

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
                  <h3 className="text-white text-[20px] h-[95px] font-semibold">
                    {service.title}
                  </h3>
                </div>

                <button className="bg-transparent border-2 border-primary text-primary py-3 px-6 rounded-2xl font-medium hover:bg-primary hover:text-black transition-all duration-300">
                  Read
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
