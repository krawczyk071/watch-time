import ProductBox from "@/components/ProductBox";

const Detail = ({ params }) => {
  if (!params?.id) {
    return;
  }
  return (
    <div className="detail">
      <ProductBox id={params.id} />
    </div>
  );
};

export default Detail;
