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
import { useEffect, useState } from "react";
import { getAllCategory } from "../../api/getAllCategory";

const BlogSection = ({ id }) => {
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

  if (blogs.length === 0) {
    return null;
  }

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
          {blogs.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="bg-[#161616]/20 rounded-2xl p-6 overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Card Image */}
              <div className={`flex items-center justify-center`}>
                {!service?.image?.imageUrl && (
                  <div className="w-full h-full md:w-[350px] md:h-[345px] bg-gray-700 rounded-xl animate-pulse" />
                )}
                {service?.image?.imageUrl && (
                  <img
                    src={service.image?.imageUrl}
                    alt={service.title}
                    className="w-full h-full md:w-[350px] md:h-[345px] object-cover rounded-xl"
                  />
                )}
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

export default BlogSection;
