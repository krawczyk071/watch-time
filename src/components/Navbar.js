"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import { cartContext } from "../context/cartContext";
import CartBar from "./CartBar";

const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setBurgerOpen((prev) => !prev);
  };
  const [cartOpen, setCartOpen] = useState(false);
  function cartToggler() {
    setCartOpen((prev) => !prev);
  }
  const [cart] = useContext(cartContext);
  return (
    <div className="header">
      <nav className="navbar">
        <ul className={`navbar__list ${burgerOpen ? "open" : ""}`}>
          <li className="navbar__item">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="navbar__item">
            <Link href={"/shop"}>Explore</Link>
          </li>
          <li className="navbar__item">
            <Link href={"/sale"}>NBAedition</Link>
          </li>
          <li className="navbar__item">
            <Link href={"/filtered"}>
              WinterSpecial <i className="fa-regular fa-snowflake"></i>
            </Link>
          </li>
          <li className="navbar__item" onClick={cartToggler}>
            <div className="likeA">
              Basket (
              {cart.reduce((acc, item) => {
                return acc + item.qty;
              }, 0)}
              )
            </div>
          </li>
        </ul>
        <div className="navbar__logo">
          Watch<span>Time</span>
        </div>
        <button class="nobtn burger__btn" onClick={toggleBurger}>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </nav>
      <CartBar cartOpen={cartOpen} cartToggler={cartToggler} />
    </div>
  );
};

export default Navbar;
