// import NbaFilter from "@/components/NbaFilter";
import Products from "@/components/Products";
import { getKeyword } from "@/utils/sanity";
import React from "react";

const Sale = async () => {
  // const team = router.query?.dimensionValueID;
  const womens = await getKeyword("women");
  return (
    // <NbaFilter />
    // <Products query={`dimensionValueID=${team}`} />
    <Products items={womens} />
  );
};

export default Sale;
