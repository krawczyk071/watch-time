import ProductBox from "@/components/ProductBox";

const Detail = ({ params }) => {
  if (!params?.id) {
    return;
  }
  console.log({ params });
  return (
    <div className="detail">
      <ProductBox id={params.id} />
    </div>
  );
};

export default Detail;
