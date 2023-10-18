import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../components/Fom/Login";
import Register from "../components/Fom/Register";
import AboutUs from "../pages/AboutUs/AboutUs";
import AddProduct from "../components/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/addItem",
        element: <AddProduct></AddProduct>,
      },
    ],
  },
]);

export default router;
