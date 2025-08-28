import HeroBanner from "../components/Home/HeroBanner";
import Collaborate from "../components/Home/Collaborate";
import MiddleSection from "../components/Home/MiddleSection";
import ServicesSection from "../components/Home/ServiceSection";
import LanguageClassCarousel from "../components/Home/LanguageClassCarousel";
import Testimonials from "../components/Home/Testmonial";
import Blog from "../components/Home/Blog";
import PackageCarousel from "../components/Home/PackageCarousel";

function Home() {
  return (
    <div className=" mx-auto">
      <HeroBanner />
      <Collaborate />
      <ServicesSection />
      <PackageCarousel />
      <LanguageClassCarousel />
      <Testimonials />
      <Blog />
      <MiddleSection />
    </div>
  );
}

export default Home;
