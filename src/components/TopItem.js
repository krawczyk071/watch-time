"use client";
import React from "react";
import Link from "next/link";
import { urlForImage } from "../../sanity/lib/image";
import Image from "next/image";

const TopItem = ({ item }) => {
  return (
    <div className="top__item">
      <div className="top__img">
        <Link href={`/detail/${item._id}`}>
          <Image
            className="object-contain"
            width={185}
            height={185}
            src={urlForImage(item.images[0]).url()}
            alt=""
          />
        </Link>
      </div>
      <p>
        {item.brand} {item.price}$
      </p>
    </div>
  );
};

export default TopItem;
