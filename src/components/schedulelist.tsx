/** @format */

"use client";

import { useRouter } from "next/navigation";

import Button from "./atomic/button";
import ScheduleCard from "./atomic/schedulecard";
import TestimoniList from "./testimonilist";

import { ArrowRightFromLine } from "lucide-react";

import { ScheduleProps } from "@/types/schedule";

interface CompProps {
  data?: ScheduleProps[];
}

export default function ScheduleList({ data = [] }: CompProps) {
  const router = useRouter();
  return (
    <div
      className="w-full text-white flex flex-col items-center justify-center text-center py-[3%] space-y-5"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 58, 79, 0.8) 20%, rgba(255,255,255) 85%), url('./hero4.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="font-[600] text-[49px] mb-10">Running Schedule</h2>
      <div className="flex flex-col w-full px-[10%] gap-5 mb-8">
        {data.map((each: ScheduleProps, index: number) => (
          <ScheduleCard key={index} data={each} />
        ))}
      </div>
      <Button
        label="Load More"
        rounded
        type="primary"
        icon={<ArrowRightFromLine size={18} />}
        onClick={() => router.push("/schedule")}
      />
      <TestimoniList />
    </div>
  );
}
