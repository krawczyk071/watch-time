import React from "react";
import Products from "@/components/Products";
import { getPaginated } from "@/utils/sanity";
import Paginator from "@/components/Paginator";

const Shop = async ({ params }) => {
  const id = params.id ? parseInt(params.id) : 1;
  const products = await getPaginated(id * 24);
  // const team = router.query?.dimensionValueID;
  // console.log({ products });
  const last = Math.ceil(products.total / 24) - 1;
  return (
    <>
      <Products items={products.items} />
      <Paginator baseUrl={"/shop/"} current={id} last={last} />
    </>
  );
};

export default Shop;
