import React, { useEffect } from "react";
import Card from "./utils/Card";
import ProductsData from "../../products.json";
import "./cards.scss";
const Cards = () => {
  let productData = ProductsData.arrayOfProducts;
  return (
    <div className="cards__Container">
      {productData.map((data) => (
        <Card key={data.Url} data={data} />
      ))}
    </div>
  );
};

export default Cards;
