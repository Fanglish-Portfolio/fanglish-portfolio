import React from "react";
import BlogDetailSection from "../components/blogDetail/blogDetailSection";
import { useParams } from "react-router-dom";
import Blog from "../components/Home/Blog";
import MiddleSection from "../components/Home/MiddleSection";

function BlogDetailPage() {
  const { id } = useParams();
  return (
    <div>
      <BlogDetailSection id={id} />
      <Blog id={id} />
      <MiddleSection />
    </div>
  );
}

export default BlogDetailPage;
