import Image from "next/image";

import Banner from "@/components/Banner";
import Headline from "@/components/Headline";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Top from "@/components/Top";
import { getProducts } from "@/utils/sanity";

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Hero />
      <Top />
      <Headline />
      <Reviews />
    </>
  );
}
