import { getById } from "@/utils/sanity";
import { urlForImage } from "../../sanity/lib/image";
import OrderBox from "./OrderBox";

const HatBox = async ({ id }) => {
  const [product] = await getById(id);

  const photos = product.images
    .slice(0, -1)
    .map((url) => <img src={urlForImage(url)} key={url} alt="additional" />);

  return (
    <div className="detail__box">
      <h1>{product.name}</h1>
      <div className="detail__box__reviews">
        Rating: {product.rating} ({product?.ratingCount})
      </div>
      <div className="detail__box__panel">
        <div className="detail__box__panel__left">
          <div className="detail__box__panel__left__photo">
            <img src={urlForImage(product.images[0])} alt="main" />
          </div>
          {photos && (
            <div className="detail__box__panel__left__photo-more">{photos}</div>
          )}
        </div>
        <div className="detail__box__panel__right">
          <OrderBox detail={product} />
        </div>
      </div>
      <h2>{product.brand}</h2>
      <div
        className="detail__box__desc"
        dangerouslySetInnerHTML={{ __html: product.details }}
      ></div>
    </div>
  );
};

export default HatBox;
