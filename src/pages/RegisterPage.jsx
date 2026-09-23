import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const RegisterPage = () => {
  let {registeredUser, setRegisteredUser,setLoggedInUser} = useContext(Auth)
  let navigate = useNavigate()
  let {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let formSubmitHandler = (data) => {
    let arr = [...registeredUser,data]
    setRegisteredUser(arr)
    setLoggedInUser(data)
    localStorage.setItem("loggedInUser",JSON.stringify(data))
    toast.success("user registered successfully")
    navigate("/main")
    localStorage.setItem("registeredUser",JSON.stringify(arr))
    reset();
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(formSubmitHandler)}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-sm"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-900 mb-6">
          Register
        </h1>

        <div className="space-y-4">
          <input
            {...register("name", {
              required: "Name is required",
            })}
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-gray-500"
          />

          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-gray-500"
          />

          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <input
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 6,
                message: "minimum 6 characters is required",
              },
            })}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-gray-500"
          />

          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Register
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <span onClick={() => navigate("/")} className="text-black font-medium cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
