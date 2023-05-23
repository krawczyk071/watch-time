"use client";

import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
// import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "./Loader";

const Related = () => {
  const router = useRouter();
  const [related, SetRelated] = useState({ data: {}, loading: true });

  useEffect(() => {
    SetRelated((prev) => ({ ...prev, loading: true }));
    fetchFromAPI(
      `products/list?limit=6&offset=${Math.floor(Math.random() * 50)}`
    )
      .then((data) =>
        SetRelated({ data: data.payload.products, loading: false })
      )
      .catch((err) => {
        console.log("API fail", err);
      });
  }, []);

  if (related.loading) {
    return <Loader />;
  }

  return (
    <div className="related">
      <h1>Related</h1>
      <div className="related__box">
        {related.data.map((item) => (
          <div
            key={item._id}
            className="related__item"
            onClick={() => router.push(`/detail/${item._id}`)}
          >
            <img src={item.image.url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Related;
