import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainContext } from "../context/CaptainProvider";
import { useContext } from "react";
import axiosInstance from "../utils/axios";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { setCaptain } = useContext(CaptainContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const captainData = {
        firstname: firstName,
        lastname: lastName,
        email,
        password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: parseInt(vehicleCapacity),
          type: vehicleType,
        },
      };

      console.log("Sending request to:", "/captain/register");
      const res = await axiosInstance.post('/captain/register', captainData);
      
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
      }
        
      if (res.data.captain) {
        setCaptain(res.data.captain);
        navigate("/captain-home");
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
            Create a password
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

          <h3 className="text-base mb-2 font-medium capitalize">
            Vehicle Details
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <input
              className="bg-[#eeeeee] rounded px-4 text-lg placeholder:text-sm border py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              required
              placeholder="Vehicle Color"
              disabled={loading}
            />
            <input
              className="bg-[#eeeeee] rounded px-4 text-lg placeholder:text-sm border py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              required
              placeholder="Vehicle Plate"
              disabled={loading}
            />
            <input
              className="bg-[#eeeeee] rounded px-4 text-lg placeholder:text-sm border py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              required
              placeholder="Capacity"
              min="1"
              disabled={loading}
            />
            <select
              className="bg-[#eeeeee] rounded px-4 text-lg placeholder:text-sm border py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              required
              disabled={loading}
            >
              <option value="">Select Type</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
            </select>
          </div>

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
          <Link to="/captain-login" className="text-blue-600 font-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/signup"
          className="bg-[#ff1010] flex items-center justify-center text-white font-semibold tracking-wide rounded w-full py-2 transition duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Sign up as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainSignup;