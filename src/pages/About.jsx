import Aboutbanner from "../components/About/Aboutbanner";
import AboutSection from "../components/About/AboutSection";
import Award from "../components/About/Award";
import Mission from "../components/About/Mission";
import OurFounder from "../components/About/OurFounder";
import Collaborate from "../components/Home/Collaborate";
import MiddleSection from "../components/Home/MiddleSection";

function About() {
  return (
    <div>
      <Aboutbanner />
      <AboutSection />
      <Collaborate />
      <OurFounder />
      <Mission />
      <Award />
      <MiddleSection />
    </div>
  );
}

export default About;
