import React from "react";
import PackageCarousel from "../components/Home/PackageCarousel";
import MiddleSection from "../components/Home/MiddleSection";

function Package() {
  return (
    <div className="containers">
      <div className="mt-20">
        <PackageCarousel />
        <MiddleSection />
      </div>
    </div>
  );
}

export default Package;
