"use client";
import HatBox from "@/components/HatBox";
import Loader from "@/components/Loader";
import OrderBox from "@/components/OrderBox";
import Related from "@/components/Related";
import { getById } from "@/utils/sanity";
import React, { useState } from "react";

const Detail = async ({ params }) => {
  const [product] = await getById(params.id);
  console.log({ product });
  // const [detail, setDetail] = useState({
  //   data: {},
  //   loading: true,
  //   error: false,
  // });

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

  return (
    <div className="detail">
      <div className="detail__box">
        <HatBox detail={product} />
        <div className="detail__sidebar">
          <OrderBox detail={product} />
          {/* <Related /> */}
        </div>
      </div>
    </div>
  );
};

export default Detail;
