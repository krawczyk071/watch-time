import React from "react";
import { useRouter } from "next/navigation";
import { formatPrice } from "../utils/helpers";
import { urlForImage } from "../../sanity/lib/image";

const Card = ({ hat }) => {
  const router = useRouter();
  return (
    <div
      className="card__item"
      onClick={() => router.push(`/detail/${hat._id}`)}
    >
      <div className="card__item__img">
        <img src={urlForImage(hat.images[0])} alt="" />
      </div>
      <h3 className="card__item__price">{formatPrice(hat.price * 100)}</h3>
      <p className="card__item__text">{hat.name}</p>
    </div>
  );
};

export default Card;
// hat.productTitle
