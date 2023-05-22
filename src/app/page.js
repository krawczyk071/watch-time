import Image from "next/image";

import Banner from "@/components/Banner";
import Headline from "@/components/Headline";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Top from "@/components/Top";
import { getProducts } from "@/utils/sanity";

export default async function Home() {
  const products = await getProducts();
  console.log({ products });

  return (
    <>
      <Hero />
      <Top />

      <Headline />
      <Banner />
      <Reviews />
      <Image
        alt="x"
        width={300}
        height={200}
        src="https://images.unsplash.com/photo-1508962914676-134849a727f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      />
    </>
  );
}
