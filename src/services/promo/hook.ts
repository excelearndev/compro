/** @format */

"use client";

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { PromoProps } from "@/types/promo";

import { PromoActiveService } from "./handler";

export const usePromo = (): UseQueryResult<PromoProps> => {
  return useQuery({
    queryKey: ["promo-active"],
    queryFn: async () => {
      const { data } = await PromoActiveService();
      return data;
    },
    refetchOnWindowFocus: false,
  });
};
