"use client";
import NbaFilter from "@/components/NbaFilter";
import Products from "@/components/Products";
import { useRouter } from "next/navigation";
import React from "react";

const Sale = () => {
  const router = useRouter();
  const team = router.query?.dimensionValueID;
  return (
    <>
      <NbaFilter />
      <Products query={`dimensionValueID=${team}`} />
    </>
  );
};

export default Sale;
