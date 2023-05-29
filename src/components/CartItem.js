import React from "react";
import QtySelector from "./QtySelector";
import { urlForImage } from "../../sanity/lib/image";
import Image from "next/image";

const CartItem = ({ item }) => {
  return (
    <div className="cart__list__item">
      <div className="cart__list__item__photo">
        <Image
          className="object-contain"
          width={100}
          height={100}
          src={urlForImage(item.images[0])}
          alt=""
        />
      </div>
      <h3 className="cart__list__item__name">{item.name}</h3>
      <QtySelector
        product={item}
        where="cart"
        className="cart__list__item__qty"
      />
      {/* <div className="cart__list__item__qty">
        <div className="cart__list__item__qty__pm">+</div>
        <div className="cart__list__item__qty__num">
          <input type="text" className="ipt" />
        </div>
        <div className="cart__list__item__qty__pm">-</div>
      </div> */}
    </div>
  );
};

export default CartItem;
