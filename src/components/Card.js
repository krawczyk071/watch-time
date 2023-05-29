import React from "react";
import { useRouter } from "next/navigation";
import { formatPrice } from "../utils/helpers";
import { urlForImage } from "../../sanity/lib/image";
import Image from "next/image";

const Card = ({ product }) => {
  const router = useRouter();
  return (
    <div
      className="card__item"
      onClick={() => router.push(`/detail/${product._id}`)}
    >
      <div className="card__item__img">
        {product.images && (
          <Image
            className="object-contain"
            width={200}
            height={200}
            src={urlForImage(product.images[0]).url()}
            alt=""
          />
        )}
      </div>
      <h3 className="card__item__price">{formatPrice(product.price * 100)}</h3>
      <p className="card__item__text">{product.name}</p>
    </div>
  );
};

export default Card;
// hat.productTitle
