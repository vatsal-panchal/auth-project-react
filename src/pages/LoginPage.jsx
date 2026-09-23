import React from 'react'

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form className="w-full max-w-sm bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-semibold text-center text-gray-900 mb-6">
          Login
        </h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-gray-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-gray-500"
          />

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Login
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-5">
          Don't have an account?{' '}
          <span className="text-black font-medium cursor-pointer hover:underline">
            Register
          </span>
        </p>
      </form>
    </div>
  )
}

export default LoginPage