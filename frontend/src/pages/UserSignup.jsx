import React from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <h2 className="w-14 mb-10 text-2xl font-bold italic text-black">
          TaxiWala
        </h2>
        <form>
          
            <h3 className="text-base mb-2 font-medium capitalize">
              What's your name?
            </h3>
            <div className="flex justify-between items-center gap-3 mb-5">
            <input
              className="bg-[#eeeeee]  rounded px-4 text-lg placeholder:text-sm border w-1/2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="name"
              required
              placeholder="first name"
            />
            <input
              className="bg-[#eeeeee]  rounded px-4 text-lg placeholder:text-sm border w-1/2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="name"
              required
              placeholder="last name"
            />
          </div>
          <h3 className="text-base mb-2 font-medium capitalize">
            What's your email?
          </h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 text-lg placeholder:text-sm border w-full py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            required
            placeholder="name@example.com"
          />

          <h3 className="text-base mb-2 font-medium capitalize">
            What's your password?
          </h3>
          <input
            type="password"
            className="bg-[#eeeeee] mb-5 rounded px-4 text-lg placeholder:text-sm border w-full py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="••••••••"
          />

          <button
            type="submit"
            className="bg-[#111] text-white font-semibold tracking-wider rounded w-full py-2 transition duration-300 hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-700"
          >
            Signup
          </button>
        </form>

        <p className=" text-center font-semibold tracking-tight capitalize mt-4">
          Already Register?
          <Link
            to="/login"
            className="text-blue-600 font-medium  hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#ff1010] flex items-center justify-center text-white font-semibold tracking-wide rounded w-full py-2 transition duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserSignup;
