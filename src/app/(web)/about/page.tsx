/** @format */
"use client";

import Container from "@/components/atomic/container";
import HeroAbout from "@/components/hero/heroabout";
import PartnerList from "@/components/partnerlist";
import ProductList from "@/components/productlist";
import ServiceList from "@/components/servicelist";
import Statistic from "@/components/statistic";
import Visi from "@/components/visi";
import WhyChoose from "@/components/whychoose";
import CTA from "@/components/cta";

import { usePartner } from "@/services/partner/hook";
import { useProduct } from "@/services/product/hook";

export default function About() {
  const { data: partner = [], isLoading: partnerLoading } = usePartner();
  const { data: product = [], isLoading: productLoading } = useProduct();

  return (
    <Container>
      <HeroAbout />
      <Visi />
      <PartnerList data={partner} />
      <Statistic />
      <ServiceList />
      <ProductList data={product} />
      <WhyChoose />
      <CTA />
    </Container>
  );
}
