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

import { useNavigate } from "react-router-dom";

const BlogSection = ({ id }) => {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      title:
        "Upgrade Your Academic English Skill With FuNglish‘s Be a Grammar Monster Series",
      image: blog1,
    },
    {
      id: 2,
      title: "Upgrade your Academic   English Skill with FuNglish ",
      image: blog2,
    },
    {
      id: 3,
      title: "About Goethe Exam",
      image: blog3,
    },
    // {
    //   id: 4,
    //   title:
    //     "Word Power Unleashed: English Skill with FuNglish's Vocab Amplifier Class",
    //   image: blog4,
    // },
    // {
    //   id: 5,
    //   title:
    //     "𝐁𝐨𝐨𝐬𝐭 𝐘𝐨𝐮𝐫 𝐄𝐧𝐠𝐥𝐢𝐬𝐡 𝐒𝐩𝐞𝐚𝐤𝐢𝐧𝐠 𝐒𝐤𝐢𝐥𝐥 𝐖𝐢𝐭𝐡 𝐅𝐮𝐍𝐠𝐥𝐢𝐬𝐡'𝐬 𝐒𝐭𝐞𝐩-𝐔𝐩 𝐒𝐩𝐞𝐚𝐤𝐢𝐧𝐠 𝐅𝐨𝐫 𝐂𝐨𝐧𝐯𝐞𝐫𝐬𝐚𝐭𝐢𝐨𝐧 𝐂𝐥𝐚𝐬𝐬 (Dec 20)",
    //   image: blog5,
    // },
    // {
    //   id: 6,
    //   title:
    //     "𝐋𝐢𝐭𝐭𝐥𝐞 𝐋𝐞𝐚𝐫𝐧𝐞𝐫𝐬 လေးတွေ အတွက် 𝐅𝐮𝐍𝐠𝐥𝐢𝐬𝐡 ရဲ့𝐆𝐞𝐫𝐦𝐚𝐧 𝐂𝐥𝐚𝐬𝐬-𝟐𝐧𝐝 𝐁𝐚𝐭𝐜𝐡(no starting date)",
    //   image: blog6,
    // },
    // {
    //   id: 7,
    //   title: "Chevening Scholarship",
    //   image: blog7,
    // },
  ];

  const filteredServices = services.filter((service) => service.id != id);

  return (
    <section>
      <div className="containers">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="header-text">Our Blogs</h2>
          <button onClick={() => navigate("/blog")} className="button">
            View Other Blogs
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#161616]/20 rounded-2xl p-6 overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Card Image */}
              <div className={`flex items-center justify-center`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Card Content */}
              <div className="mt-6">
                <div className="flex items-center gap-3 mb-4  md:h-[95px]">
                  <h3 className="text-white text-[14px] md:text-[20px] font-semibold">
                    {service.title}
                  </h3>
                </div>

                <button
                  onClick={() => navigate(`/blog-detail/${service.id}`)}
                  className="w-full text-[12px] md:text-[16px] bg-transparent border-2 border-primary text-primary py-3 px-6 rounded-2xl font-medium hover:bg-primary hover:text-black transition-all duration-300"
                >
                  Read Blog
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
