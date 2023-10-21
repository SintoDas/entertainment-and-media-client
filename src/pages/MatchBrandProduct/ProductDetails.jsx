import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const singleData = useLoaderData();
  const { brandName, description, img, name, price, type, _id } = singleData;
  const handleCart = (id) => {
    fetch(
      `https://entertainment-and-media-server-site-13tngwua9-sinto-das.vercel.app/cart/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg">
        <div className="flex flex-col">
          {/* Image */}
          <img
            src={img}
            alt="Product Image"
            className="w-full h-48 object-cover rounded-t-lg"
          />

          {/* Content */}
          <div className="p-4">
            <p className="text-gray-600 text-sm mb-2">{brandName}</p>
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-700 text-sm mb-4">{description}</p>
            <div className="flex items-center justify-between mb-4">
              <p className="text-indigo-600 text-lg font-semibold">{price}</p>
            </div>
            <p className="text-gray-600 text-sm">{type}</p>
            <div className="mt-4 flex space-x-4">
              <Link to={`/cart/${_id}`}>
                <button
                  onClick={() => handleCart(_id)}
                  className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
                >
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
