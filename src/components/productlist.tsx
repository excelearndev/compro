/** @format */

"use client";

import { useRouter } from "next/navigation";

import Button from "./atomic/button";
import ProductCard from "./atomic/productcard";

import { ArrowRightFromLine } from "lucide-react";

import { ProductProps } from "@/types/product";

interface CompProps {
  title?: string;
  size?: string;
  data?: ProductProps[];
  fetchNext?: () => void;
  hasNext?: boolean;
  isFetching?: boolean;
}

export default function ProductList({
  size = "md",
  data = [],
  title = "Product",
  fetchNext,
  hasNext,
  isFetching,
}: CompProps) {
  const router = useRouter();

  if (size === "md") {
    return (
      <div className="w-full text-center py-[5%] flex flex-col items-center">
        <h2 className="font-[600] text-[49px]">{title}</h2>
        {title === "Product" && (
          <h3 className="text-[20px] font-[600]">Top-Rated Picks</h3>
        )}
        <div className="grid grid-cols-3 mt-8 px-[10%] gap-5 mb-8">
          {data.map((each: ProductProps, index: number) => (
            <ProductCard key={index} data={each} />
          ))}
        </div>
        <Button
          label="Load More"
          rounded
          type="primary"
          icon={<ArrowRightFromLine size={18} />}
          onClick={() => router.push("/product")}
        />
      </div>
    );
  } else if (size === "lg") {
    return (
      <div className="w-full text-center py-[5%] flex flex-col items-center">
        <div className="flex flex-col mt-8 px-[10%] gap-5 mb-8 w-full">
          {data.map((each: ProductProps, index: number) => (
            <ProductCard key={index} data={each} size="lg" />
          ))}
        </div>
        {hasNext && (
          <Button
            label="Load More"
            rounded
            type={isFetching ? "disable" : "primary"}
            icon={<ArrowRightFromLine size={18} />}
            onClick={() => fetchNext && fetchNext()}
          />
        )}
      </div>
    );
  } else {
    return;
  }
}
