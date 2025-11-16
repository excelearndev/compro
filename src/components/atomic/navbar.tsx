/** @format */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

import Promo from "../promo";
import Button from "./button";

import Logo from "@/assets/logo.png";

import { usePromo } from "@/services/promo/hook";

const servicesList = [
  { name: "IT Training", slug: "it-training" },
  { name: "IT Consultant", slug: "it-consultant" },
  { name: "IT Support", slug: "it-support" },
];

export default function Navbar() {
  const { data: promo, isLoading: promoLoading } = usePromo();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 left-0 right-0 z-50">
      <div className="bg-red-500">{promo && <Promo data={promo} />}</div>
      <div
        className={`flex justify-between text-white items-center px-[5%] md:px-[7%] lg:px-[10%] transition-all duration-300 ${
          isScrolled
            ? "bg-[#00AEEF] shadow-lg backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <Link href="/">
          <Image src={Logo} alt="logo" width={100} height={33} className="md:w-[120px] lg:w-[150px] h-auto" />
        </Link>
        <div className="space-x-3 md:space-x-6 lg:space-x-10 py-3 md:py-4 lg:py-5 flex items-center text-xs md:text-sm lg:text-base">
          <Link href="/" className="hover:text-gray-200 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-200 transition-colors">
            About Us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServiceOpen(true)}
            onMouseLeave={() => setIsServiceOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-gray-200 transition-colors">
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isServiceOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 min-w-[200px] ${
                isServiceOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {servicesList.map((service, index) => (
                <Link
                  key={index}
                  href={`/service?type=${service.slug}`}
                  className="block px-6 py-3 text-gray-800 hover:bg-[#00AEEF] hover:text-white transition-colors border-b border-gray-100 last:border-b-0"
                  onClick={() => setIsServiceOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/product"
            className="hover:text-gray-200 transition-colors"
          >
            Product
          </Link>
          <Link
            href="/schedule"
            className="hover:text-gray-200 transition-colors"
          >
            Schedule
          </Link>
          <Link href="/contact">
            <Button label="Contact Us" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
