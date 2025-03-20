import Servicebanner from "../components/Service/Servicebanner";
import CarRepair from "../components/Service/CarRepair";
import Collaborate from "../components/Home/Collaborate";
import MiddleSection from "../components/Home/MiddleSection";
import ShowRoom from "../components/Home/ShowRoom";

function ServicePage() {
  return (
    <div>
      <Servicebanner />
      <CarRepair />
      <Collaborate />
      <MiddleSection />
      <ShowRoom />
    </div>
  );
}

export default ServicePage;
