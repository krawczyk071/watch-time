import React from "react";
import Stars from "./Stars";

const ReviewItem = ({ review }) => {
  return (
    <div className="reviews__box__item">
      <Stars rating={review.rating} />
      <p>{review.short}</p>
      <p>{review.name}</p>
    </div>
  );
};

export default ReviewItem;
