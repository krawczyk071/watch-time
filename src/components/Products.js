import React from "react";
import Card from "./Card";

const Products = ({ items }) => {
  return (
    <div className="cards">
      <div className="cards__box">
        {items.map((item) => (
          <Card key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
