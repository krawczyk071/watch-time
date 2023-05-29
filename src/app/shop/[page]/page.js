import React from "react";
import Products from "@/components/Products";
import { getPaginated } from "@/utils/sanity";
import Paginator from "@/components/Paginator";

const Shop = async ({ params }) => {
  const page = params.page ? parseInt(params.page) : 1;
  const products = await getPaginated(page * 24);
  // const team = router.query?.dimensionValueID;
  // console.log({ products });
  const last = Math.ceil(products.total / 24) - 1;
  return (
    <>
      <Products items={products.items} />
      <Paginator baseUrl={"/shop/"} current={page} last={last} />
    </>
  );
};

export default Shop;
