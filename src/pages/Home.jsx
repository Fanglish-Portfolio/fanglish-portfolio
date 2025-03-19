import HeroBanner from "../components/Home/HeroBanner";
import AboutUs from "../components/Home/AboutUs";
import Collaborate from "../components/Home/Collaborate";
import MiddleSection from "../components/Home/MiddleSection";

function Home() {
  return (
    <div className=" mx-auto">
      <HeroBanner />
      <AboutUs />
      <Collaborate />
      <MiddleSection />
    </div>
  );
}

export default Home;
