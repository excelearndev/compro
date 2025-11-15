/** @format */

"use client";

import { useRouter } from "next/navigation";

import Tag from "./tag";
import Button from "./button";

import dayjs from "dayjs";

import { ScheduleProps } from "@/types/schedule";

interface CompProps {
  data: ScheduleProps;
}

export default function ScheduleCard({ data }: CompProps) {
  const router = useRouter();
  return (
    <div className="w-full space-y-2 p-[2%] rounded-xl bg-white/50 backdrop-blur-md border border-white/20 shadow-xl">
      <div className="flex gap-3 items-center justify-between">
        <Tag label={data?.status?.replace("_", " ") || "Unset"} />
        <span className="text-[12px]">{data?.location || "-"}</span>
      </div>
      <div className="max-w-[40%] text-left">
        <h3 className="text-[24px] font-[600] leading-7">
          {data.schedule_name}
        </h3>
      </div>
      <div className="flex justify-between items-end">
        <div className="flex items-center gap-2">
          <span className="text-[12px]">
            {dayjs(data?.schedule_date).format("DD MMMM YYYY")}
          </span>
          |
          <span className="text-[12px]">
            {data?.schedule_start || "-"} - {data?.schedule_end || "-"} WIB
          </span>
        </div>
        <Button
          label="Join Class"
          rounded
          type="primary"
          onClick={() => router.push(`/schedule/${data._id}`)}
        />
      </div>
    </div>
  );
}
