import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
const Main = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Toaster></Toaster>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
