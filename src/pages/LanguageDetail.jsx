import LanguageClassCarousel from "../components/Home/LanguageClassCarousel";
import LanguageDetailSection from "../components/languageDetail/LangiageDetailSection";
import { useParams } from "react-router-dom";

function LanguageDetail() {
  const { id } = useParams();

  return (
    <div>
      <LanguageDetailSection id={id} />
      <LanguageClassCarousel id={id} />
    </div>
  );
}

export default LanguageDetail;
