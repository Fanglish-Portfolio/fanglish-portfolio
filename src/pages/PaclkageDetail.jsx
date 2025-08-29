import { useParams } from "react-router-dom";
import PackageDetailSection from "../components/PackageDetail/PackageDetailSection";
import PackageCarousel from "../components/Home/PackageCarousel";
import MiddleSection from "../components/Home/MiddleSection";

function PackageDetail() {
  const { id } = useParams();
  //   console.log(id)  //   console.log(service);

  return (
    <div className="">
      <PackageDetailSection id={id} />
      <PackageCarousel id={id} />
      <MiddleSection />
    </div>
  );
}

export default PackageDetail;
