import React from "react";
import { useRouter } from "next/navigation";
import { formatPrice } from "../utils/helpers";

const Card = ({ hat }) => {
  const router = useRouter();
  return (
    <div
      className="card__item"
      onClick={() => router.push(`/detail/${hat.webID}`)}
    >
      <div className="card__item__img">
        <img src={hat.image ? hat.image.url : "non"} alt="" />
      </div>
      <h3 className="card__item__price">
        {formatPrice(hat.prices[0].regularPrice.minPrice * 100)}
      </h3>
      <p className="card__item__text">{hat.productTitle}</p>
    </div>
  );
};

export default Card;
// hat.productTitle
