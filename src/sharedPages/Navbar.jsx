import React, { use, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-medium transition-colors duration-300 ${
              isActive ? "text-[#ffd166]" : "text-white hover:text-[#ffd166]"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-games"
          className={({ isActive }) =>
            `font-medium transition-colors duration-300 ${
              isActive ? "text-[#ffd166]" : "text-white hover:text-[#ffd166]"
            }`
          }
        >
          Games
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/recommended-games"
          className={({ isActive }) =>
            `font-medium transition-colors duration-300 ${
              isActive ? "text-[#ffd166]" : "text-white hover:text-[#ffd166]"
            }`
          }
        >
          Recommended Games
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#075b66] text-white shadow-lg rounded-md sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="navbar-start">
        <Link to="/" className="ml-2 normal-case text-xl font-bold">
          Game<span className="text-[#ffd166] ">Hub</span>
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex items-center gap-5">
        <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>

        {!user ? (
          <>
            <Link
              to="/login"
              className="btn bg-[#004953] hover:bg-[#036e7a] border-0 text-white"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="btn bg-[#ffd166] hover:bg-[#ffca3a] border-0 text-black"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to="/my-profile">
              <img
                src={
                  user.photoURL || "https://i.ibb.co/2nYVQbR/default-avatar.png"
                }
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-[#ffd166] hover:scale-105 transition"
              />
            </Link>
            <button
              onClick={handleLogOut}
              className="btn bg-[#ffd166] hover:bg-[#ffca3a] border-0 text-black"
            >
              Log Out
            </button>
          </>
        )}
      </div>

      {/* Mobile Dropdown */}
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn border-0  bg-[#076d7b] text-white hover:text-[#ffd166] shadow-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 p-3 shadow bg-[#004953] rounded-box w-52 space-y-2 transition-all duration-300 ${
              isOpen
                ? "block opacity-100 scale-100"
                : "hidden opacity-0 scale-95"
            }`}
          >
            {links}
            <div className="border-t border-[#06636e] my-2"></div>
            {!user ? (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-sm bg-[#036e7a] border-0 text-white w-full"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-sm bg-[#ffd166] border-0 text-black w-full"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link to="/my-profile" onClick={() => setIsOpen(false)}>
                  <img
                    src={
                      user.photoURL ||
                      "https://i.ibb.co/2nYVQbR/default-avatar.png"
                    }
                    alt="Profile"
                    className="w-12 h-12 rounded-full border-2 border-[#ffd166] mx-auto"
                  />
                </Link>
                <button
                  onClick={handleLogOut}
                  className="btn bg-[#ffd166] hover:bg-[#ffca3a] border-0 text-black w-full"
                >
                  Log Out
                </button>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
