import MiddleSection from "../components/Home/MiddleSection";
import ShowRoom from "../components/Home/ShowRoom";
import Sparebanner from "../components/Spare/Sparebanner";
import SpareCollection from "../components/Spare/SpareCollection";

function Spare() {
  return (
    <div>
      <Sparebanner />
      <SpareCollection />
      <MiddleSection />
      <ShowRoom />
    </div>
  );
}

export default Spare;
