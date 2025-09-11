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
import { getAllCategory } from "../../api/banner/getAllCategory";
import { useEffect, useState } from "react";

const Blog = ({ id }) => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await getAllCategory("blog");
      // console.log(response);
      const filteredBlogs = response.filter((blog) => blog._id != id);
      setBlogs(filteredBlogs);
    };
    fetchServices();
  }, []);

  return (
    <section>
      <div className="containers">
        {/* Section Header */}
        <h2 className="header-text mb-12">Our Blogs</h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((service) => (
            <div
              key={service.id}
              className="bg-[#161616]/20 rounded-2xl p-6 overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Card Image */}
              <div className={`relative flex items-center justify-center`}>
                <img
                  src={service.image?.imageUrl}
                  alt={service.title}
                  className="w-full h-full md:w-[350px] md:h-[345px]  object-cover rounded-xl"
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
                  onClick={() => navigate(`/detail/${service._id}`)}
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
