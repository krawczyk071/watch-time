import React, { useContext } from "react";

import CartItem from "./CartItem";
import { cartContext } from "../context/cartContext";
import { useRouter } from "next/navigation";
import { formatPrice } from "../utils/helpers.js";
import getStripe from "@/utils/getStripe";
import { toast } from "react-hot-toast";

const Cart = () => {
  const [cart, dispatch] = useContext(cartContext);
  const router = useRouter();

  const cartItems = cart.map((item) => <CartItem item={item} key={item._id} />);
  const total = cart.reduce((acc, itm) => {
    return acc + itm.qty * (Number(itm.price) * 100);
  }, 0);
  async function handleOrder() {
    // router.push(`/confirm?t=${total}`);
    const stripe = await getStripe();
    try {
      const response = await fetch("/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      });

      const data = await response.json();
      clearCart();

      toast.loading("Redirecting...");

      stripe.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      console.log({ error });
    }
  }

  function clearCart() {
    dispatch({ type: "CLEAR" });
  }
  return (
    <div className="cart">
      <div className="cart__box">
        <h1>Your items:</h1>
        <div className="cart__list">{cartItems}</div>
        <div className="cart__total">
          <h2>Total:</h2>
          <h2>{formatPrice(total)}</h2>
        </div>

        <button className="btn" onClick={handleOrder}>
          Order
        </button>
        <button className="btn cart__btn--danger" onClick={clearCart}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Cart;
