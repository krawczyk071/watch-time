import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__photo">
        <div className="hero__photo__img">
          <Image
            className="object-contain"
            alt="main"
            width={500}
            height={365}
            src="/img/rolexbw.png"
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
