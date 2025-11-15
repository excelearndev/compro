/** @format */

import Image from "next/image";

import Button from "../atomic/button";

import AboutPict from "@/assets/about.png";

import { ArrowRightFromLine } from "lucide-react";

export default function HeroAbout() {
  return (
    <div
      className="min-w-[99dvw] min-h-[100dvh] text-white flex items-center justify-start px-[10%]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./hero.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 px-[10%] py-[2.5%] rounded-lg grid grid-cols-1 md:grid-cols-2 w-full gap-10 bg-white/50 backdrop-blur-md border border-white/20 shadow-xl">
        <div className="flex items-center justify-center">
          <Image
            src={AboutPict}
            alt="testimoni pict"
            height={400}
            width={400}
          />
        </div>
        <div className="space-y-5 text-black flex flex-col items-start justify-center">
          <h2 className="text-[49px] font-[600] ">
            About <span className="text-[#00AEEF]">ExceLEARN</span>
          </h2>
          <p>
            ExceLEARN adalah pusat pengembangan SDM, teknologi, dan solusi
            bisnis yang berdedikasi untuk membantu organisasi meningkatkan
            produktivitas dan beradaptasi di era transformasi digital. Kami
            menghadirkan pelatihan IT, layanan IT managed service, serta solusi
            teknologi terintegrasi yang dirancang khusus sesuai kebutuhan klien.
          </p>
          <Button
            label="Get to Know Us"
            rounded
            type="primary"
            icon={<ArrowRightFromLine size={18} />}
          />
        </div>
      </div>
    </div>
  );
}
