/** @format */
import Image from "next/image";

import CountUp from "./atomic/countup";

import { PartnerProps } from "@/types/partner";

interface CompProps {
  data?: PartnerProps[];
}

export default function PartnerList({ data = [] }: CompProps) {
  return (
    <div className="w-full text-center py-[5%] px-[5%] md:px-0">
      <h2 className="font-[600] text-[32px] md:text-[40px] lg:text-[49px]">Partners</h2>
      <h3 className="text-[14px] md:text-[18px] lg:text-[20px] font-[600]">
        Over{" "}
        <CountUp
          from={0}
          to={17200}
          separator=","
          direction="up"
          duration={2}
        />{" "}
        companies grow their teams with ExceLEARN
      </h3>
      <div className="flex w-full items-center justify-center gap-3 md:gap-5 mt-5 md:mt-8 flex-wrap">
        {data?.map((each: PartnerProps, index: number) => (
          <span
            key={index}
            className="flex items-center justify-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] rounded-md"
          >
            <Image
              src={each.logo.url}
              alt={each.partner_name}
              width={100}
              height={100}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
