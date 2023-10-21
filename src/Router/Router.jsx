import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../components/Fom/Login";
import Register from "../components/Fom/Register";
import AboutUs from "../pages/AboutUs/AboutUs";
import AddProduct from "../components/AddProduct";
import NotFound from "../components/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyCart from "../pages/MyCart/MyCart";
import MatchBranProduct from "../pages/MatchBrandProduct/MatchBranProducts";
import ProductDetails from "../pages/MatchBrandProduct/ProductDetails";
import UpdateData from "../pages/UpdateData/UpdateData";
import ContactUs from "../pages/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch(`./brandCategory.json`),
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
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },

      {
        path: "/addItem",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/media/:brand",
        element: <MatchBranProduct></MatchBranProduct>,
        loader: ({ params }) => {
          console.log(params);
          return fetch(
            `https://entertainment-and-media-server-site-13tngwua9-sinto-das.vercel.app/media/${params.brand}`
          );
        },
      },
      {
        path: "/single/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://entertainment-and-media-server-site-13tngwua9-sinto-das.vercel.app/single/${params.id}`
          ),
      },

      {
        path: "/update/:id",
        element: <UpdateData></UpdateData>,
        loader: ({ params }) => {
          return fetch(
            `https://entertainment-and-media-server-site-13tngwua9-sinto-das.vercel.app/update/${params.id}`
          );
        },
      },
      {
        path: "/cart/:id",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://entertainment-and-media-server-site-13tngwua9-sinto-das.vercel.app/cart/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
