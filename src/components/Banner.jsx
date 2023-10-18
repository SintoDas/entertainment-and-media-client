import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-16 px-4 text-white">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold mb-4">
            Your Entertainment Hub
          </h1>
          <p className="text-lg mb-6">
            Explore the world of music, movies, and more!
          </p>
          <a
            href="#"
            className="bg-white text-red-500 font-semibold py-2 px-6 rounded-full hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
