import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Auth } from "../context/AuthContext";

const MainLayout = () => {

   let {toggle} = useContext(Auth)
  return (
    <div className= {toggle ? "bg-black text-white min-h-screen" :  "bg-white text-black min-h-screen"}>
      <Navbar />
    </div>
  );
};

export default MainLayout;