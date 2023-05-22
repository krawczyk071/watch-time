import React from "react";
import { colors } from "../utils/constants";
import Link from "next/link";

const ColorsFilter = () => {
  return (
    <div className="colorsfilter">
      <h1>Pick your color:</h1>
      {colors.map((c) => {
        return (
          <Link href={`?dimensionValueID=Color:${c}`} key={c}>
            <div
              className="colorsfilter__color"
              style={{ background: c }}
            ></div>
          </Link>
        );
      })}
      <Link href=".">
        <div className="colorsfilter__color" style={{ background: "silver" }}>
          reset
        </div>
      </Link>
    </div>
  );
};

export default ColorsFilter;
