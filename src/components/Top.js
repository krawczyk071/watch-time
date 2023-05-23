import { getTopRated } from "@/utils/sanity";
import React from "react";
import TopItem from "./TopItem";

const Top = async () => {
  const top3 = await getTopRated(3);

  const hots = top3.map((h) => <TopItem key={h._id} item={h} />);
  return (
    <div className="top">
      <h2>Top Sellers:</h2>
      <div className="top__box">{hots}</div>
    </div>
  );
};

export default Top;
