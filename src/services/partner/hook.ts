/** @format */

"use client";

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { PartnerProps } from "@/types/partner";

import { PartnerListService } from "./handler";

export const usePartner = (): UseQueryResult<PartnerProps[]> => {
  return useQuery({
    queryKey: ["partner-list"],
    queryFn: async () => {
      const { data } = await PartnerListService();
      return data;
    },
    refetchOnWindowFocus: false,
  });
};
