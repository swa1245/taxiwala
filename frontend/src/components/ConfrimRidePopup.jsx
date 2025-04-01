import React from "react";

const ConfrimRidePopup = ({ setVechiclepanel, setRidepopuppanel,setConfrimRideuppanel}) => {
  return (
    <div>
      <h5
        onClick={() => {
          setVechiclepanel(false);
          setRidepopuppanel(false);
          setConfrimRideuppanel(false);
        }}
        className="mb-4"
      >
        {/* <span className="text-sm font-semibold">leave now</span>{" "} */}
        {/* <i className="ri-arrow-down-fill text-sm"></i> */}
      </h5>
      <h2 className="text-xl font-semibold mb-3">Ride for u</h2>
      <div className="flex items-center justify-between mb-5 bg-yellow-300 rounded-lg p-3">
        <div className="flex items-center gap-3">
          <img
            className="h-14 w-14 rounded-full object-cover "
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <h2 className="text-2xl font-semibold">Ride Details</h2>
        </div>
        <h5 className="font-semibold text-base">2.2 KM</h5>
      </div>
      <div className="flex gap-3 flex-col justify-center items-center ">
        <div className="w-full">
          <div className="flex items-center gap-5 p-4 border-b-2 border-gray-200 ">
            <i className="ri-map-pin-fill text-lg"></i>
            <div>
              <h3 className="text-sm font-semibold">5368/11-A</h3>
              <p className="text-sm  text-gray-400">24B, nears kappors cafe</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-4 border-b-2 border-gray-200 ">
            <i className="ri-map-pin-5-fill text-lg"></i>
            <div>
              <h3 className="text-sm font-semibold">5368/11-A</h3>
              <p className="text-sm  text-gray-400">24B, nears kappors cafe</p>
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
        <button
          onClick={() => {
            setVechicleFound(true);
            setVechiclepanel(false);
          }}
          className="w-full bg-green-600 rounded-lg mt-4 text-white font-semibold p-2"
        >
          Except
        </button>
        <button
          onClick={() => {
            setRidepopuppanel(false);
            setConfrimRideuppanel(false);
          }}
          className="w-full bg-gray-300 rounded-lg mt-1 text-gray-700 font-semibold p-2"
        >
          Ignore
        </button>
      </div>
    </div>
  );
};

export default ConfrimRidePopup;
