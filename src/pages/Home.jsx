import HeroBanner from "../components/Home/HeroBanner";
import Collaborate from "../components/Home/Collaborate";
import MiddleSection from "../components/Home/MiddleSection";
import ServicesSection from "../components/Home/ServiceSection";
import LanguageClassCarousel from "../components/Home/LanguageClassCarousel";
import Testimonials from "../components/Home/Testmonial";
import BlogSection from "../components/Home/BlogSection";
import PackageCarousel from "../components/Home/PackageCarousel";

function Home() {
  return (
    <div>
      <HeroBanner />

      <ServicesSection />
      <PackageCarousel />
      <LanguageClassCarousel />
      <Testimonials />
      <BlogSection />
      <MiddleSection />
    </div>
  );
}

export default Home;
