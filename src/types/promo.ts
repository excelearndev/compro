/** @format */

export interface PromoProps {
  _id: string;
  promo_name: string;
  promo_description: string;
  percentage: number;
  end_date: string;
  is_active: boolean;
  banner: {
    public_id: string;
    url: string;
  };
}
