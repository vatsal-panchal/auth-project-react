import React from "react";
import LogoutPage from "../pages/LogoutPage";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

        <h1 className="text-xl font-bold text-gray-900">
          MyStore
        </h1>

        <div className="flex items-center gap-10 text-sm text-gray-600">
          <span className="cursor-pointer hover:text-black transition">
            Home
          </span>

          <span className="cursor-pointer hover:text-black transition">
            About
          </span>

          <span className="cursor-pointer hover:text-black transition">
            Products
          </span>
        </div>

        <LogoutPage />

      </div>
    </nav>
  );
};

export default Navbar;