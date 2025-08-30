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
import blog4 from "../../assets/image/home/blog/blog4.png";
import blog5 from "../../assets/image/home/blog/blog5.png";
import blog6 from "../../assets/image/home/blog/blog6.png";
import blog7 from "../../assets/image/home/blog/blog7.png";
import { useNavigate } from "react-router-dom";

const Blog = ({ id }) => {
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
      title: "Upgrade your Academic English Skill with FuNglish ",
      image: blog2,
    },
    {
      id: 3,
      title: "About Goethe Exam",
      image: blog3,
    },
    {
      id: 4,
      title:
        "Word Power Unleashed: English Skill with FuNglish's Vocab Amplifier Class",
      image: blog4,
    },
    {
      id: 5,
      title:
        "Boost Your English Speaking Skill With FuNglish's Step Up Speaking For Conversation Class (Dec 20)",
      image: blog5,
    },
    {
      id: 6,
      title: "Little Learners လေးတွေ အတွက် FuNglish ရဲ့ German Class-2nd Batch",
      image: blog6,
    },
    {
      id: 7,
      title: "Chevening Scholarship",
      image: blog7,
    },
  ];

  const filteredServices = services.filter((service) => service.id != id);

  return (
    <section>
      <div className="containers">
        {/* Section Header */}
        <h2 className="header-text mb-12">Our Blogs</h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
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

export default Blog;
