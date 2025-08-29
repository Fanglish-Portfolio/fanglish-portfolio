import DetailSection from "../components/servieDetail/DetailSection";
import ServiceSection from "../components/Home/ServiceSection";
import MiddleSection from "../components/Home/MiddleSection";
import { useParams } from "react-router-dom";
function ServideDetail() {
  const { id } = useParams();

  return (
    <div>
      <DetailSection id={id} />
      <ServiceSection id={id} />
      <MiddleSection />
    </div>
  );
}

export default ServideDetail;
