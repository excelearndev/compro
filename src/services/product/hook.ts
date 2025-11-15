/** @format */

"use client";

import {
  useQuery,
  UseQueryResult,
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import {
  ProductProps,
  ProductListResponse,
  ProductListParams,
} from "@/types/product";

import {
  ProductListService,
  ProductListFilteredService,
  ProductDetailService,
} from "./handler";

export const useProduct = (
  params?: ProductListParams
): UseQueryResult<ProductProps[]> => {
  return useQuery({
    queryKey: ["product-list", params],
    queryFn: async () => {
      const { data } = await ProductListService(params);
      return data;
    },
    refetchOnWindowFocus: false,
  });
};

export const useProductFiltered = (
  params?: ProductListParams
): UseInfiniteQueryResult<{
  pageParams: number[];
  pages: ProductListResponse[];
}> => {
  return useInfiniteQuery({
    queryKey: ["product-list-filtered", params],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await ProductListFilteredService({
        ...params,
        page: pageParam,
      });
      return response;
    },
    getNextPageParam: (lastPage) => {
      return lastPage.pagination.has_next
        ? lastPage.pagination.current_page + 1
        : undefined;
    },
    initialPageParam: 1,
    refetchOnWindowFocus: false,
  });
};

export const useProductDetail = (params: {
  id: string;
}): UseQueryResult<ProductProps> => {
  return useQuery({
    queryKey: ["product-detail", params],
    queryFn: async () => {
      const { data } = await ProductDetailService(params.id);
      return data;
    },
    enabled: !!params,
    refetchOnWindowFocus: false,
  });
};
