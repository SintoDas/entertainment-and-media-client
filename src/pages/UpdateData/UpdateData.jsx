import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateData = () => {
  const singleData = useLoaderData();
  const updateHandle = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.image.value;
    const name = form.name.value;
    const brandName = form.brand.value;

    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const updateData = {
      img,
      name,
      brandName,
      type,
      price,
      description,
      rating,
    };
    console.log(updateData);
    fetch(`http://localhost:5000/update/${singleData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <form onSubmit={updateHandle}>
        <div className="mb-2">
          <label className="block text-gray-600 font-semibold mb-2">
            Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={singleData?.img}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-600 font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-md"
            defaultValue={singleData?.name}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-600 font-semibold mb-2">
            Brand Name
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            defaultValue={singleData?.brandName}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-600 font-semibold mb-2">Type</label>
          <select
            id="type"
            name="type"
            defaultValue={singleData?.type}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="music">Music</option>
            <option value="movie">Movie</option>
            <option value="drama">Drama</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block text-gray-600 font-semibold mb-2">
            Price
          </label>
          <input
            type="text"
            id="price"
            defaultValue={singleData?.price}
            name="price"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-600 font-semibold mb-2">
            Short Description
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={singleData?.description}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-600 font-semibold mb-2">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            defaultValue={singleData?.rating}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mt-2 text-center">
          <button
            type="submit"
            className="bg-orange-700 text-white px-4 py-2 rounded-md hover:bg-orange-500 "
          >
            Update Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateData;
