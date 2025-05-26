import HeroBanner from "../components/Home/HeroBanner";
import AboutUs from "../components/Home/AboutUs";
import Collaborate from "../components/Home/Collaborate";
import MiddleSection from "../components/Home/MiddleSection";
import ServiceSection from "../components/Home/ServiceSection";
import CarModel from "../components/Home/CarModel";
import ShowRoom from "../components/Home/ShowRoom";

function Home() {
  return (
    <div className=" mx-auto">
      <HeroBanner />
      <AboutUs />
      <Collaborate />
      <MiddleSection />
      <ServiceSection />
      <CarModel />
      <ShowRoom />
    </div>
  );
}

export default Home;
