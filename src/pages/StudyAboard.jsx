import React from "react";
import UniversityPlatform from "../components/StudyAboard/University";
import { useParams } from "react-router-dom";

const StudyAboard = () => {
  const { country } = useParams();
  return (
    <div>
      <UniversityPlatform country={country} />
    </div>
  );
};

export default StudyAboard;
