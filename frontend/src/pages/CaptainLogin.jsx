import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CaptainContext } from '../context/CaptainProvider';
import axios from 'axios';

const CaptainLogin = () => {
   const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [captainData, setCaptainData] = useState();

    const navigate = useNavigate();
    const { captain, setCaptain } = useContext(CaptainContext);
    const aybmithandler = async (e) => {
      e.preventDefault();
      // console.log(email, password);
      // setCaptainData({ email, password });
      const captain = {
        email: email,
        password: password
      }
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`, captain);
      if(res.status == 201){
        const data = res.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate('/captain-home');
      }
      // console.log(captainData);
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
            to="/captain-signup"
            className="text-blue-600 font-medium  hover:underline"
          >
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link to='/login' className="bg-[#30b11f] flex items-center justify-center text-white font-semibold tracking-wide rounded w-full py-2 transition duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
          Sign in as User
        </Link>
      </div>
    </div>
  );
}

export default CaptainLogin
