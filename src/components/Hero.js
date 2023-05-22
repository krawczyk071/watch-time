import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1>Be the first to shop our new models.</h1>
        <Link href="/shop">
          <button className="btn">Buy NOW</button>
        </Link>
      </div>
      <div className="hero__photo">
        <div className="thecap">
          <img src="./img/pngfind.com-blue-swoosh-png-5252264.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
