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
      <div className="mb-10 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 justify-between">
        <div className="font-bold">
          <h3>Service & Maintained</h3>
          <p className="header-text">
            {" "}
            Over <Number n={2700} /> Cars Yearly
          </p>
        </div>

        <div className="font-bold">
          <h3>Professional </h3>
          <p className="header-text">
            {" "}
            <Number n={23} /> Employees
          </p>
        </div>

        <div className="font-bold">
          <h3>Proudly Service </h3>
          <p className="header-text">
            {" "}
            For <Number n={7} /> Years
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
