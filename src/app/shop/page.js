"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ColorsFilter from "@/components/ColorsFilter";
import Products from "@/components/Products";

const Shop = () => {
  // const [searchParams] = useSearchParams();
  // const [team, setTeam] = useState("");
  const router = useRouter();
  const team = router.query?.dimensionValueID;
  // useEffect(() => {
  //   setTeam(searchParams.get("dimensionValueID"));
  // }, [searchParams]);

  return (
    <>
      <ColorsFilter />
      <Products query={`dimensionValueID=${team}`} />
    </>
  );
};

export default Shop;
