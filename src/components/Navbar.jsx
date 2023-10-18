import { Link, NavLink } from "react-router-dom";
import navImg from "../assets/entertainment.png";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline text-orange-700 px-5 mr-3 py-3 text-lg rounded-lg"
            : ""
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline text-orange-700 px-5 mr-3 py-3 text-lg rounded-lg"
            : ""
        }
      >
        Add Products
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline text-orange-700 px-5 mr-3 py-3 text-lg rounded-lg"
            : ""
        }
      >
        My Cart
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="normal-case text-xl flex items-center gap-2">
            <img
              className="w-6 h-6 object-cover"
              src={navImg}
              alt="media-image"
            />
            <span className="text-orange-00">Entertainment & media</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn text-orange-700">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
