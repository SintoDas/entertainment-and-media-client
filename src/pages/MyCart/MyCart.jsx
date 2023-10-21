import React from "react";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const loadedCart = useLoaderData();
  const { img, name, brandName, type, price, description, rating } = loadedCart;
  console.log(name);
  const cartData = {
    img,
    name,
    brandName,
    type,
    price,
    description,
    rating,
  };

  // fetch("http://localhost:5000/cart", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(cartData),
  // })
  //   .then((res) => {
  //     res.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });

  return (
    <div>
      <h2>name</h2>
    </div>
  );
};

export default MyCart;
