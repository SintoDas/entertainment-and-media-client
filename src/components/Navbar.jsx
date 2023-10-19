import { Link, NavLink } from "react-router-dom";
import navImg from "../assets/entertainment.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    logOut();
  };
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline text-orange-700 px-5 mr-3 py-3 text-lg rounded-lg"
            : "px-5 mr-3 py-3 text-lg rounded-lg"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/addItem"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline text-orange-700 px-5 mr-3 py-3 text-lg rounded-lg"
            : " px-5 mr-3 py-3 text-lg rounded-lg"
        }
      >
        Add Item
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline text-orange-700 px-5 mr-3 py-3 text-lg rounded-lg "
            : "px-5 mr-3 py-3 text-lg rounded-lg"
        }
      >
        My Cart
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline text-orange-700 px-5 mr-3 py-3 text-lg rounded-lg "
            : "px-5 mr-3 py-3 text-lg rounded-lg"
        }
      >
        About Us
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
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost">
                    {user.displayName}
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-sm  btn-ghost"
                    onClick={handleSignOut}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm  btn-ghost">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
