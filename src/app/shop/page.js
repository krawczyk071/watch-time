import React from "react";
import Products from "@/components/Products";
import { getPaginated } from "@/utils/sanity";
import Paginator from "@/components/Paginator";

const Shop = async () => {
  const products = await getPaginated();
  // const team = router.query?.dimensionValueID;
  console.log({ products });
  const last = Math.ceil(products.total / 24);
  return (
    <>
      <Products items={products.items} />
      <Paginator baseUrl={"/shop/"} current={1} last={last} />
    </>
  );
};

export default Shop;
