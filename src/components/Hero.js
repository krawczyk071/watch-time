import Image from "next/image";
import Link from "next/link";
import React from "react";
import rolexbw from "../../public/img/rolexbw.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__photo">
        <div className="hero__photo__img">
          <Image
            className="object-contain"
            alt="main"
            fill={true}
            src={rolexbw}
            placeholder="blur"
          />
        </div>
      </div>
      <div className="hero__text">
        <h1>Unlock the Essence of Time.</h1>
        <Link href="/shop/1">
          <button className="btn">select your watch</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
