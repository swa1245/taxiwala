import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userData, setUserData] = useState();
  const aybmithandler = (e) => {
    e.preventDefault();
    // console.log(email, password);
    setUserData({ email, password });
    console.log(userData);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <h2 className="w-14 mb-10 text-2xl font-bold italic text-black">
          TaxiWala
        </h2>
        <form onSubmit={aybmithandler}>
          <h3 className="text-lg mb-2 font-medium capitalize">
            What's your email?
          </h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 text-lg placeholder:text-sm border w-full py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="name@example.com"
          />

          <h3 className="text-lg mb-2 font-medium capitalize">
            What's your password?
          </h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 text-lg placeholder:text-sm border w-full py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="••••••••"
          />

          <button
            type="submit"
            className="bg-[#111] text-white font-semibold tracking-wide rounded w-full py-2 transition duration-300 hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-700"
          >
            Login
          </button>
        </form>

        <p className=" text-center tracking-tight capitalize mt-4">
          New here?
          <Link
            to="/signup"
            className="text-blue-600 font-medium  hover:underline"
          >
            Create a new account
          </Link>
        </p>
      </div>
      <div>
        <Link to='/captain-login' className="bg-[#ff1010] flex items-center justify-center text-white font-semibold tracking-wide rounded w-full py-2 transition duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
