import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-red-400 bg-cover bg-bottom bg-[url('/src/assets/bg.jpg')] h-screen pt-8 w-full flex justify-between flex-col">
        <h2 className="w-14 ml-8 text-2xl font-bold  text-white">TaxiWala</h2>
        <div className=" bg-white pb-7 py-5 px-5 text-black">
          <h2 className="text-3xl font-bold">Get started with TaxiWala</h2>
          <Link
          to='/login'
            className="w-full  flex items-center justify-center bg-black text-white py-3 mt-4
           rounded-lg"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
