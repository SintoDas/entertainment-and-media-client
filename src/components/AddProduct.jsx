import React from "react";

const AddProduct = () => {
  const handlePostData = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.image.value;
    const name = form.name.value;
    const brandName = form.brand.value;

    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    console.log(img, name, brandName, type, price, description, rating);

    const postData = {
      img,
      name,
      brandName,
      type,
      price,
      description,
      rating,
    };
    console.log(postData);
    fetch(
      "https://entertainment-and-media-server-site-1ywkw62q4-sinto-das.vercel.app/media",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }
    )
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="bg-slate-100 px-2 py-2 rounded-md shadow-sm">
      <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
        <form onSubmit={handlePostData}>
          <div className="mb-2">
            <label className="block text-gray-600 font-semibold mb-2">
              Image
            </label>
            <input
              type="text"
              id="image"
              name="image"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-600 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-md"
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
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-600 font-semibold mb-2">
              Type
            </label>
            <select
              id="type"
              name="type"
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
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mt-2 text-center">
            <button
              type="submit"
              className="bg-orange-700 text-white px-4 py-2 rounded-md hover:bg-orange-500 "
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
