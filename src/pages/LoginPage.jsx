import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const LoginPage = () => {
  let {  setLoggedInUser, registeredUser } = useContext(Auth);

  let navigate = useNavigate();
  let {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let formSubmitHandler = (data) => {
    let user = registeredUser.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("user not found");
      reset();
      return;
    }

    setLoggedInUser(user);
    toast.success("user login successfully");
    navigate("/main")
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(formSubmitHandler)}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-sm"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-900 mb-6">
          Login
        </h1>

        <div className="space-y-4">
          <input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-gray-500"
          />

          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}

          <input
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 6,
                message: "minium 6 characters is required",
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
            Login
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-5">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-black font-medium cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
