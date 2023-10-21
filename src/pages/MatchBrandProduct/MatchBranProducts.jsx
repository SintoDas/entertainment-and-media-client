import React, { useState } from "react";
import { matchPath, useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import Product from "./Product";

const MatchBranProduct = () => {
  const matchProducts = useLoaderData();
  if (matchProducts.length === 0) {
    return ` No match products available `;
  }

  return (
    <div>
      <Slider></Slider>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {matchProducts.slice(0, 4)?.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default MatchBranProduct;
