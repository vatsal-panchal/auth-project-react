import React, { useContext } from "react";
import { Auth } from "../context/AuthContext";

const Theme = () => {
  let { toggle, setToggle } = useContext(Auth);

  return (
    <button
      onClick={() => setToggle((prev) => !prev)}
      className={`w-10 h-10 flex items-center justify-center rounded-full border transition ${
        toggle
          ? "bg-gray-800 border-gray-700 text-yellow-400 hover:bg-gray-700"
          : "bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0-1.414-1.414M7.05 7.05 5.636 5.636M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        />
      </svg>
    </button>
  );
};

export default Theme;