import React from "react";
import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import Product from "./Product";

const MatchBranProduct = () => {
  const matchProducts = useLoaderData();
  return (
    <div>
      <Slider></Slider>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {matchProducts?.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default MatchBranProduct;
