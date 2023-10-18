import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl text-center font-semibold text-orange-400 mb-4">
          Registration Now
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              placeholder="enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              placeholder="enter your email address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Photo URL</label>
            <input
              type="text"
              id="photoUrl"
              name="photoUrl"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              placeholder="Enter your photo url here..."
              required
            />
          </div>

          <div className="flex items-center justify-between ">
            <p className="text-lg font-medium">Already have an account?</p>
            <Link to="/login">
              <p className="text-orange-700 text-lg font-bold underline">
                Login
              </p>
            </Link>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-orange-700 text-white rounded-md py-2 px-4 hover:bg-orange-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
