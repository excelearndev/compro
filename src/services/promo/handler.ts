/** @format */

import AxiosClient from "@/lib/axios";
import { PromoProps } from "@/types/promo";

export async function PromoActiveService(): Promise<{
  status: number;
  message: string;
  data: PromoProps;
}> {
  try {
    const { data: response } = await AxiosClient.get("/promo/public/promo");

    const { status, message, data } = response;

    if (status !== 200) throw new Error(message);

    return {
      status,
      message,
      data,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
