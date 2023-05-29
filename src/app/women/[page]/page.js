import React from "react";
import Products from "@/components/Products";
import { getKeywordPaginated } from "@/utils/sanity";
import Paginator from "@/components/Paginator";

const Women = async ({ params }) => {
  const page = params.page ? parseInt(params.page) : 1;
  const products = await getKeywordPaginated("women", page * 24);
  const last = Math.ceil(products.total / 24) - 1;
  return (
    <>
      <Products items={products.items} />
      <Paginator baseUrl={"/women/"} current={page} last={last} />
    </>
  );
};

export default Women;
