/** @format */

"use client";

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ScheduleProps, ScheduleFilterParams } from "@/types/schedule";

import {
  ScheduleListService,
  ScheduleListFilteredService,
  ScheduleDetailService,
} from "./handler";

export const useSchedule = (): UseQueryResult<ScheduleProps[]> => {
  return useQuery({
    queryKey: ["schedule-list"],
    queryFn: async () => {
      const { data } = await ScheduleListService();
      return data;
    },
    refetchOnWindowFocus: false,
  });
};

export const useScheduleFiltered = (
  filters?: ScheduleFilterParams
): UseQueryResult<ScheduleProps[]> => {
  return useQuery({
    queryKey: ["schedule-list-filtered", filters],
    queryFn: async () => {
      const { data } = await ScheduleListFilteredService(filters);
      return data;
    },
    refetchOnWindowFocus: false,
  });
};

export const useScheduleDetail = (params: {
  id: string;
}): UseQueryResult<ScheduleProps> => {
  return useQuery({
    queryKey: ["schedule-detail", params],
    queryFn: async () => {
      const { data } = await ScheduleDetailService(params.id);
      return data;
    },
    enabled: !!params,
    refetchOnWindowFocus: false,
  });
};
