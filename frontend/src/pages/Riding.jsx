import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to='/dashboard' className="fixed  right-2 top-2 h-10 w-10 bg-amber-50 flex items-center justify-center rounded-full">
        <i className="ri-home-8-line text-lg font-medium"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4 ">
        <div className="flex gap-3 flex-col justify-between items-center">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-4 border-b-2 border-gray-200 ">
              <i className="ri-map-pin-fill text-lg"></i>
            </div>
            <div className="flex items-center gap-5 p-4 border-b-2 border-gray-200 ">
              <i className="ri-map-pin-5-fill text-lg"></i>
              <div>
                <h3 className="text-sm font-semibold">5368/11-A</h3>
                <p className="text-sm  text-gray-400">
                  24B, nears kappors cafe
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-4  ">
              <i className="ri-currency-fill text-lg"></i>
              <div>
                <h3 className="text-sm font-semibold">rs193.20</h3>
                <p className="text-sm  text-gray-400">Cash Cash</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <button className="w-full bg-green-600 rounded-lg mt-4 text-white font-semibold p-2">
          Make A Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
