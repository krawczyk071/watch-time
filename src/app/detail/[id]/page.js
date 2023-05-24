"use client";
import ProductBox from "@/components/ProductBox";

const Detail = ({ params }) => {
  return (
    <div className="detail">{params.id && <ProductBox id={params.id} />}</div>
  );
};

export default Detail;
