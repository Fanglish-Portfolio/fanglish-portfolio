// Collaborate.js

import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

function Number({ n }) {
  const [ref, inView] = useInView();
  const { number } = useSpring({
    from: { number: 0 },
    number: inView ? n : 0,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return (
    <animated.span ref={ref}>{number.to((n) => n.toFixed(0))}</animated.span>
  );
}

const Collaborate = () => {
  return (
    <div className="containers">
      <div className="mb-10 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 justify-between">
        <div className="glass-card font-bold flex flex-col items-center justify-between py-5 w-[350px] lg:h-[350px] rounded-lg">
          <p className="libre text-[48px] md:text-[64px] italic py-5 ">
            <Number n={1500} /> +
          </p>
          <h3 className="text-[16px] md:text-[24px] font-semibold">
            Students Get <br /> Our Servivces
          </h3>
        </div>

        <div className="glass-card font-bold flex flex-col items-center justify-between py-5 w-[350px] lg:h-[350px] rounded-lg">
          <p className="libre text-[48px] md:text-[64px] italic py-5 ">
            <Number n={700} /> +
          </p>
          <h3 className="text-[16px] md:text-[24px] font-semibold">
            Students Get <br /> Approved Visa
          </h3>
        </div>

        <div className="glass-card font-bold flex flex-col items-center justify-between py-5 w-[350px] lg:h-[350px] rounded-lg">
          <p className="libre text-[48px] md:text-[64px] italic py-5 ">
            <Number n={15000} /> +
          </p>
          <h3 className="text-[16px] md:text-[24px] font-semibold">
            Proper Training & <br /> Consulting Session
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
