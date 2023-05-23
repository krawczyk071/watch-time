"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ColorsFilter from "@/components/ColorsFilter";
import Products from "@/components/Products";
import { getProducts } from "@/utils/sanity";

const Shop = async () => {
  // const [searchParams] = useSearchParams();
  // const [team, setTeam] = useState("");
  const router = useRouter();
  const team = router.query?.dimensionValueID;
  // useEffect(() => {
  //   setTeam(searchParams.get("dimensionValueID"));
  // }, [searchParams]);
  const products = await getProducts();
  return (
    <>
      {/* <ColorsFilter /> */}
      <Products items={products} />
    </>
  );
};

export default Shop;
