import React from "react";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const loadedCart = useLoaderData();
  const { name } = loadedCart;
  console.log(name);
  // img, name, brandName, type, price, description, rating
  // const cartData = {
  //   img,
  //   name,
  //   brandName,
  //   type,
  //   price,
  //   description,
  //   rating,
  // };

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
      <h2>name:name</h2>
    </div>
  );
};

export default MyCart;
