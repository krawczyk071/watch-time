import Products from "@/components/Products";
import { getSpecial } from "@/utils/sanity";

const Special = async () => {
  const special = await getSpecial();
  return <Products items={special} />;
};

export default Special;
