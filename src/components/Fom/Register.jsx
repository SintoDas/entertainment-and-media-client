import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, handleUpdateProfile } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const img = form.photo.value;
    console.log(name, email, password, img);
    const accepted = e.target.terms.checked;
    if (password.length < 6) {
      toast.error("please provide a password at least 6 characters");
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      toast.error(
        "Please provide a password at least 6 characters with a upper case letter and special characters"
      );
      return;
    } else if (!accepted) {
      toast.error("Accepted our terms and conditions");
      return;
    }

    // create user
    createUser(email, password)
      .then(() => {
        handleUpdateProfile(name, img).then(() => {
          toast.success("User created successfully");
          navigate("/login");
        });
      })
      .catch((err) => toast(err.message));
  };
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl text-center font-semibold text-orange-400 mb-4">
          Registration Now
        </h2>
        <form onSubmit={handleRegister}>
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
              name="photo"
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
          <input type="checkbox" name="terms" id="terms" />
          <label className="px-3">
            Accept our
            <a className="text-lg ml-2 underline text-green-700" href="">
              terms and conditions
            </a>
          </label>

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
