import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__photo">
        <div className="hero__photo__img">
          <Image alt="main" width={1229} height={768} src="/img/cloud.jpg" />
        </div>
      </div>
      <div className="hero__text">
        <h1>Time is now!.</h1>
        <Link href="/shop">
          <button className="btn">Buy</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
