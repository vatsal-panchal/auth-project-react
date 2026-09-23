import React from "react";
import { useNavigate } from "react-router";

const LogoutPage = () => {
    let navigate = useNavigate()
  let logoutHandler = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/")

  };
  return (
    <button onClick={logoutHandler} className="px-5 py-2.5 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition">
      Logout
    </button>
  );
};

export default LogoutPage;
