/** @format */

"use client";

import Button from "../atomic/button";
import {
  CornerRightUp,
  Users,
  BookOpenCheck,
  UserRound,
  Clock,
  ShieldCheck,
  CircleCheckBig,
  MapPin,
} from "lucide-react";
import dayjs from "dayjs";

import { ScheduleProps } from "@/types/schedule";

export default function HeroScheduleDetail({ data }: { data?: ScheduleProps }) {
  return (
    <div
      className="min-w-[99dvw] min-h-[100dvh] text-white flex items-center justify-start px-[10%]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(255,255,255)), url('./hero.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col gap-8 items-start bg-white/50 backdrop-blur-md border border-white/20 text-black rounded-lg w-full p-[5%] mt-[10%]">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-[49px] font-[600]">{data?.schedule_name}</h1>
          <Button label="Register Now" rounded type="primary" />
        </div>
        <div
          className="rounded-2xl w-full min-h-[450px] grid grid-cols-3 p-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${data?.banner?.url}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="col-span-2"></div>
          <div>
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl p-8 rounded-3xl space-y-3">
              <h5 className="font-[500] text-[24px]">Course Feature</h5>
              <div className="grid grid-cols-2 border-t border-[#00AEEF] pt-3">
                <div className="flex flex-col gap-2 font-[300]">
                  <span className="flex items-center gap-2">
                    <CornerRightUp size={14} color="#00AEEF" />
                    Skill Level
                  </span>
                  <span className="flex items-center gap-2">
                    <Users size={14} color="#00AEEF" />
                    Students
                  </span>
                  <span className="flex items-center gap-2">
                    <UserRound size={14} color="#00AEEF" />
                    Lecturers
                  </span>
                  <span className="flex items-center gap-2">
                    <BookOpenCheck size={14} color="#00AEEF" />
                    Language
                  </span>
                  <span className="flex items-center gap-2">
                    <ShieldCheck size={14} color="#00AEEF" />
                    Certification
                  </span>
                </div>
                <div className="flex flex-col gap-2 font-[400]">
                  <span className="capitalize">
                    {data?.skill_level?.toLowerCase().replace("_", " ") || "-"}
                  </span>
                  <span>{data?.quota || "-"}</span>
                  <span>{data?.lecturer || "-"}</span>
                  <span className="capitalize">
                    {data?.language?.toLowerCase() || "-"}
                  </span>
                  <span>{data?.is_assestment ? "Yes" : "No"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-[-10%] px-[3%]">
          <div className="flex bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-5 gap-4">
            <Clock size={34} color="#00AEEF" />
            <div className="flex flex-col">
              <span className="font-[600]">Start</span>
              <span>{data?.schedule_start || "-"} WIB</span>
              <span>{dayjs(data?.schedule_date).format("DD MMM YYYY")}</span>
            </div>
          </div>
          <div className="flex bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-5 gap-4">
            <CircleCheckBig size={34} color="#00AEEF" />
            <div className="flex flex-col">
              <span className="font-[600]">End</span>
              <span>{data?.schedule_end || "-"} WIB</span>
              <span>{dayjs(data?.schedule_date).format("DD MMM YYYY")}</span>
            </div>
          </div>
          <div className="flex bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-5 gap-4">
            <MapPin size={34} color="#00AEEF" />
            <div className="flex flex-col">
              <span className="font-[600]">Location</span>
              <span>{data?.location || "-"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
