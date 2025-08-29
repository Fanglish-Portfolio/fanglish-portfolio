import React from "react";
import UniversityPlatform from "../components/StudyAboard/University";
import { useParams } from "react-router-dom";
import MiddleSection from "../components/Home/MiddleSection";

const StudyAboard = () => {
  const { country } = useParams();
  return (
    <div>
      <UniversityPlatform country={country} />
      <MiddleSection />
    </div>
  );
};

export default StudyAboard;
