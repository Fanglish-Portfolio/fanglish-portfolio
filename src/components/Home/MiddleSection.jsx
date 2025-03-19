import React from "react";

function MiddleSection() {
  return (
    <div className="bg-white text-black">
      <div className="containers">
        <div className="flex flex-col lg:flex-row justify-between gap-4 items-center">
          <p className="text-4xl font-bold suzukipro hidden lg:block">
            Always ready to provide <br /> the{" "}
            <span className="text-primary">best service</span>
          </p>

          <div>
            <p className="text-xl font-bold text-black block mb-3">
              Contact Us
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdZRlGr4mVrxYHuNluSFm5Liq-NcmL_C8hzgCdqO3lxSE51Kg/viewform"
              target="_blank"
              className="text-primary suzukipro text-4xl"
            >
              09 5119806
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleSection;
