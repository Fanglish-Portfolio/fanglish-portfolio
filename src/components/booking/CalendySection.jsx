import { useEffect } from "react";

export default function CalendySection() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Only remove if script still exists
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full relative">
        {/* CTA section */}
        <div className="bg-primary flex flex-col text-black gap-4 pt-20 items-center h-[650px]">
          <h1 className="text-[48px] font-bold libre mt-28">
            Ready to Start Your Journey?
          </h1>
          <p className="text-[32px] text-center font-semibold">
            Consult with our experts to achieve your <br /> dream of studying
            abroad.
          </p>
        </div>
        {/* Booking Card */}
        <div className="overflow-hidden w-full mx-auto absolute top-[400px]">
          {/* Calendly Embed Container */}
          <div className="">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/funglishachievemax/30min?background_color=1a1a1a&text_color=ffffff&primary_color=feb609"
              style={{ minWidth: "320px", height: "800px" }}
            ></div>
          </div>
        </div>
        <div className="h-[550px]"></div>
      </div>
    </div>
  );
}
