"use client";
import React from "react";
import Link from "next/link";
import { urlForImage } from "../../sanity/lib/image";

const TopItem = ({ item }) => {
  const iurl = urlForImage(item.images[0]);
  console.log(iurl);
  console.log(item.images);

  return (
    <div className="top__item">
      <div className="top__img">
        <Link href={`/detail/${item._id}`}>
          <img src={iurl} alt="" />
        </Link>
      </div>
      <p>
        {item.brand} {item.price}$
      </p>
    </div>
  );
};

export default TopItem;
