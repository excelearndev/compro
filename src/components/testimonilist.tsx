/** @format */

import Image from "next/image";

import Promo from "./promo";
import TestimoniCard from "./atomic/testimonicard";

import ARROW_LEFT from "@/assets/icons/arrow-left.svg";
import ARROW_RIGHT from "@/assets/icons/arrow-right.svg";

import { usePromo } from "@/services/promo/hook";

export default function TestimoniList() {
  const { data: promo, isLoading: promoLoading } = usePromo();

  return (
    <div className="text-black w-full px-[5%] md:px-[7%] lg:px-[10%]">
      <div className="p-[5%] bg-white rounded-t-4xl">
        <h2 className="font-[600] text-[28px] md:text-[40px] lg:text-[49px] mb-6 md:mb-10">What They Say About Us</h2>
        <div className="flex items-center justify-center pt-3 md:pt-5 pb-5 md:pb-8">
          <TestimoniCard />
        </div>
        <div className="flex items-center justify-center gap-3">
          <button className="border-[#00AEEF] text-[#00AEEF] border-2 text-[18px] md:text-[24px] w-[35px] h-[35px] md:w-[45px] md:h-[45px] flex items-center justify-center rounded-full">
            <Image src={ARROW_LEFT} alt="arrow left" />
          </button>
          <button className="border-[#00AEEF] text-[#00AEEF] border-2 text-[18px] md:text-[24px] w-[35px] h-[35px] md:w-[45px] md:h-[45px] flex items-center justify-center rounded-full">
            <Image src={ARROW_RIGHT} alt="arrow right" />
          </button>
        </div>
      </div>
      {promo && <Promo size="lg" data={promo} />}
    </div>
  );
}
