import React, { useContext } from "react";
import LogoutPage from "../pages/LogoutPage";
import { Auth } from "../context/AuthContext";
import Theme from "./Theme";

const Navbar = () => {
  let { loggedInUser, toggle } = useContext(Auth);

  return (
    <nav
      className={`w-full border-b transition-colors duration-200 ${
        toggle
          ? "bg-black border-gray-800"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand */}
        <h1
          className={`text-xl font-bold ${
            toggle ? "text-white" : "text-gray-900"
          }`}
        >
          MyStore
        </h1>

        {/* Navigation */}
        <div
          className={`flex items-center gap-8 text-sm ${
            toggle ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <span className="cursor-pointer hover:text-white transition">
            Home
          </span>

          <span className="cursor-pointer hover:text-white transition">
            About
          </span>

          <span className="cursor-pointer hover:text-white transition">
            Products
          </span>
        </div>

        {/* User + Logout + Theme */}
        <div className="flex items-center gap-4">
          <div
            className={`px-3 py-2 rounded-md ${
              toggle ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <p
              className={`text-sm font-medium ${
                toggle ? "text-white" : "text-gray-900"
              }`}
            >
              {loggedInUser?.name}
            </p>
          </div>

          <LogoutPage />
          <Theme />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;