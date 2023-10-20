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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`brandCategory.json`),
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
          return fetch(`http://localhost:5000/media/${params.brand}`);
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
          fetch(`http://localhost:5000/single/${params.id}`),
      },

      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
