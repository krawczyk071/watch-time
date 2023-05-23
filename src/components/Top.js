"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { hotData } from "../utils/constants";
const TopItem = ({ hat }) => {
  const router = useRouter();

  return (
    <div
      className="top__item"
      onClick={() => router.push(`/detail/${hat._id}`)}
    >
      <div className="top__img">
        <img src={hat.url} alt="" />
      </div>
      <p>New Era {hat.price}$</p>
    </div>
  );
};

const Top = () => {
  const hots = hotData.map((h) => <TopItem key={h._id} hat={h} />);
  return (
    <div className="top">
      <h2>Hottest Items:</h2>
      <div className="top__box">{hots}</div>
    </div>
  );
};

export default Top;
