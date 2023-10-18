import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-gray-100 flex items-center justify-center h-screen mt-10">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl text-center font-semibold mb-4 text-orange-400">
            Login Now
          </h2>
          <form>
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

            <div className="flex items-center justify-between ">
              <p className="text-lg font-medium">Have an account?</p>
              <Link to="/register">
                <p className="text-orange-700 text-lg underline">Register</p>
              </Link>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-orange-700 text-white rounded-md py-2 px-4 hover:bg-orange-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
