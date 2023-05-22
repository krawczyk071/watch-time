import Products from "@/components/Products";
import React from "react";

const Filtered = () => {
  return (
    <div className="winter">
      <Products query={`dimensionValueID=Silhouette:Beanie`} />
    </div>
  );
};

export default Filtered;
