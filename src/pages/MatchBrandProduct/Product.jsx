import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { brandName, img, name, price, rating, type, _id } = product;

  const handleSingleProduct = (id) => {
    fetch(
      `https://entertainment-and-media-server-site-6ucuaj3ll-sinto-das.vercel.app/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const handleUpdateProduct = (id) => {
    fetch(
      `https://entertainment-and-media-server-site-6ucuaj3ll-sinto-das.vercel.app/update/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={img} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-500">{brandName}</p>
          <p className="text-gray-500">{type}</p>
          <p className="text-lg font-semibold text-indigo-600">${price}</p>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm0 18a8 8 0 110-16 8 8 0 010 16zm1-5a1 1 0 01-2 0V7a1 1 0 112 0v6z"
              />
            </svg>
            <span className="text-gray-600">{rating}</span>
          </div>
          <div className="mt-4 flex space-x-4">
            <Link to={`/single/${_id}`}>
              <button
                onClick={() => handleSingleProduct(_id)}
                className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
              >
                Details
              </button>
            </Link>
            <Link to={`/update/${_id}`}>
              <button
                onClick={() => handleUpdateProduct(_id)}
                className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
              >
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
