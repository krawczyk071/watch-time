// import Image from "next/image";

import { getProducts } from "@/utils/sanity";

export default async function Home() {
  const products = await getProducts();
  console.log({ products });

  return (
    <div className="homepage">
      <h1>HOME</h1>
    </div>
  );
}
