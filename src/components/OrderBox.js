"use client";
import React, { useContext } from "react";
// import { cartContext } from "../context/cartContext";
import { formatPrice } from "../utils/helpers";
import { useState } from "react";
import QtySelector from "./QtySelector";

const OrderBox = ({ detail }) => {
  // const [, dispatch] = useContext(cartContext);
  const [qty, setQty] = useState(1);
  const addQty = (i) => {
    setQty((prev) => (prev + i > 1 ? prev + i : 1));
  };

  return (
    <div className="order__box">
      <h1>{formatPrice(detail.price.regularPrice.minPrice * 100)}</h1>
      <p>
        This product is not eligible for coupons. However, you are able to earn
        and redeem Kohls Cash® and Kohls Rewards® on this product.
      </p>
      <QtySelector product={detail} qty={qty} addQty={addQty} />

      <button
        className="btn"
        onClick={() => {
          dispatch({
            type: "ADD_TO_CART",
            payload: { item: detail, qty: qty },
          });
          setQty(1);
          alert("Added");
        }}
      >
        Add to order
      </button>
    </div>
  );
};

export default OrderBox;
