import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axios";
import { UserDataContext } from "../context/UserContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const newUser = {
        firstname: firstName,
        lastname: lastName,
        email,
        password,
      };

      const res = await axiosInstance.post('/user/register', newUser);

      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      }
        
      if (res.data.user) {
        setUser(res.data.user);
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError(err.response?.data?.error || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <h2 className="w-14 mb-10 text-2xl font-bold italic text-black">
          TaxiWala
        </h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            {error}
          </div>
        )}
        <form onSubmit={submitHandler}>
          <h3 className="text-base mb-2 font-medium capitalize">
            What's your name?
          </h3>
          <div className="flex justify-between items-center gap-3 mb-5">
            <input
              className="bg-[#eeeeee] rounded px-4 text-lg placeholder:text-sm border w-1/2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="First name"
              disabled={loading}
            />
            <input
              className="bg-[#eeeeee] rounded px-4 text-lg placeholder:text-sm border w-1/2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name (optional)"
              disabled={loading}
            />
          </div>
          <h3 className="text-base mb-2 font-medium capitalize">
            What's your email?
          </h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 text-lg placeholder:text-sm border w-full py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="name@example.com"
            disabled={loading}
          />

          <h3 className="text-base mb-2 font-medium capitalize">
            What's your password?
          </h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 text-lg placeholder:text-sm border w-full py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Minimum 8 characters"
            minLength="8"
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded font-semibold tracking-wider text-white transition duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#111] hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-700"
            }`}
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>
        </form>

        <p className="text-center font-semibold tracking-tight capitalize mt-4">
          Already registered?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="privaypolicy text-[7px] text-center capitalize mt-4">
          By signing up, you agree to our Terms, Data Policy and Cookies Policy
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
