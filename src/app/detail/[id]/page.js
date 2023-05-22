"use client";
import HatBox from "@/components/HatBox";
import Loader from "@/components/Loader";
import OrderBox from "@/components/OrderBox";
import Related from "@/components/Related";
import React, { useState } from "react";

const Detail = ({ id }) => {
  const [detail, setDetail] = useState({
    data: {},
    loading: true,
    error: false,
  });

  // useEffect(() => {
  //   setDetail((prev) => ({ ...prev, loading: true }));
  //   fetchFromAPI(`products/detail?webID=${id}`)
  //     .then((data) => {
  //       setDetail({
  //         data: data.payload.products[0],
  //         loading: false,
  //         error: false,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log("APIfail", err);
  //       //Loading placeholder data
  //       setDetail({
  //         data: detailsEx.payload.products[0],
  //         loading: false,
  //         error: true,
  //       });
  //     });
  // }, [id]);

  return !detail.loading ? (
    <div className="detail">
      <div className="detail__box">
        <HatBox detail={detail.data} />
        <div className="detail__sidebar">
          <OrderBox detail={detail.data} />
          <Related />
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Detail;
