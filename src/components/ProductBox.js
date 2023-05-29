import { getById } from "@/utils/sanity";
import { urlForImage } from "../../sanity/lib/image";
import OrderBox from "./OrderBox";
import Image from "next/image";

const ProductBox = async ({ id }) => {
  const [product] = await getById(id);

  const photos = product.images
    .slice(0, -1)
    .map((url) => (
      <Image
        className="object-contain"
        width={138}
        height={138}
        alt="additional"
        src={urlForImage(url).url()}
        key={url}
      />
    ));

  return (
    <div className="detail__box">
      <h1>{product.name}</h1>
      <div className="detail__box__reviews">
        Rating: {product.rating} ({product?.ratingCount})
      </div>
      <div className="detail__box__panel">
        <div className="detail__box__panel__left">
          <div className="detail__box__panel__left__photo">
            <div className="detail__box__panel__left__photo__img">
              <Image
                // className="object-contain"
                alt="main"
                fill={true}
                src={urlForImage(product.images[0]).url()}
              />
            </div>
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

export default ProductBox;
