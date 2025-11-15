/** @format */

"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import Button from "./atomic/button";

import { PromoProps } from "@/types/promo";

dayjs.extend(duration);

interface CompProps {
  size?: string;
  data: PromoProps | null;
}

export default function Promo({ size = "md", data }: CompProps) {
  const router = useRouter();

  const promoEndDate = useMemo(() => {
    if (data && data?.end_date) {
      return typeof data?.end_date === "string"
        ? dayjs(data?.end_date)
        : data?.end_date;
    }
    return dayjs().add(3, "day").hour(23).minute(59).second(59);
  }, [data?.end_date]);

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = dayjs();
      const diff = promoEndDate.diff(now);

      if (diff <= 0) {
        setIsExpired(true);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const dur = dayjs.duration(diff);

      setTimeLeft({
        hours: Math.floor(dur.asHours()),
        minutes: dur.minutes(),
        seconds: dur.seconds(),
      });
    };

    calculateTimeLeft();

    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [promoEndDate]);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  if (isExpired) {
    return null;
  }

  return (
    <div
      className={`bg-red-500 flex justify-between text-white items-center z-100 rounded-2xl text-left ${
        size === "lg" ? "py-[1%] px-[3%]" : "px-[5%]"
      }`}
    >
      <div className={`${size === "lg" ? "space-y-2" : "space-y-0"}`}>
        <h1
          className={`${
            size === "lg" ? "text-[24px]" : "text-[20px]"
          } font-[600]`}
        >
          {data?.promo_name}{" "}
          <span className="font-[700]">{data?.percentage}% OFF!</span>
        </h1>
        <p className="text-[16px] font-[200]">{data?.promo_description}</p>
      </div>
      <div
        className={`py-5 flex items-center  ${
          size === "lg" ? "flex-col gap-3" : "gap-5"
        }`}
      >
        <div className="flex gap-2">
          <div className="flex flex-col items-center">
            <span className="text-[24px] font-[600]">
              {formatNumber(timeLeft.hours)}
            </span>
            <span className="text-[10px]">Hours</span>
          </div>
          <div>
            <span className="text-[24px] font-[600]">:</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[24px] font-[600]">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="text-[10px]">Mins</span>
          </div>
          <div>
            <span className="text-[24px] font-[600]">:</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[24px] font-[600]">
              {formatNumber(timeLeft.seconds)}
            </span>
            <span className="text-[10px]">Secs</span>
          </div>
        </div>
        <Button
          label="Grab The Deal"
          rounded
          onClick={() => router.push("/")}
        />
      </div>
    </div>
  );
}
