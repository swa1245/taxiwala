import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CaptainContext } from '../context/CaptainProvider';
import axiosInstance from '../utils/axios';

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axiosInstance.post('/captain/login', {
        email,
        password
      });
      
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
      }
      
      if (res.data.captain) {
        setCaptain(res.data.captain);
        navigate('/captain-home');
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.error || "Login failed. Please try again.");
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
            disabled={loading}
          />

          <h3 className="text-lg mb-2 font-medium capitalize">
            Enter your password
          </h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 text-lg placeholder:text-sm border w-full py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="••••••••"
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
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center tracking-tight capitalize mt-4">
          New here?{" "}
          <Link
            to="/captain-signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link 
          to='/login' 
          className="bg-[#30b11f] flex items-center justify-center text-white font-semibold tracking-wide rounded w-full py-2 transition duration-300 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
}

export default CaptainLogin;
