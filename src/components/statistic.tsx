/** @format */

import CountUp from "./atomic/countup";

export default function Statistic() {
  return (
    <div
      className="w-full py-[5%] px-[5%] md:px-[7%] lg:px-[10%] text-white flex flex-col md:flex-row items-center justify-evenly gap-5 md:gap-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./hero4.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "40% 40%",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <span className="text-[32px] md:text-[40px] lg:text-[49px] font-[700]">
          <CountUp from={0} to={10} separator="," direction="up" duration={2} />
          +
        </span>
        <span className="text-[12px] md:text-[14px] lg:text-[16px]">Years Experience</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-[32px] md:text-[40px] lg:text-[49px] font-[700]">
          <CountUp from={0} to={50} separator="," direction="up" duration={2} />
          K+
        </span>
        <span className="text-[12px] md:text-[14px] lg:text-[16px]">Participants</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-[32px] md:text-[40px] lg:text-[49px] font-[700]">
          <CountUp
            from={0}
            to={500}
            separator=","
            direction="up"
            duration={2}
          />
          +
        </span>
        <span className="text-[12px] md:text-[14px] lg:text-[16px]">Topics</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-[32px] md:text-[40px] lg:text-[49px] font-[700]">
          <CountUp from={0} to={4} separator="," direction="up" duration={2} />
          K+
        </span>
        <span className="text-[12px] md:text-[14px] lg:text-[16px]">Training Completed</span>
      </div>
    </div>
  );
}
