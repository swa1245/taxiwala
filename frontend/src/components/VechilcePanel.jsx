import React from "react";

const VechilcePanel = ({setVechiclepanel,setconfirmVechiclepanel}) => {
  return (
    <div>
      <h5 onClick={() => setVechiclepanel(false)} className="mb-4">
        <span className="text-sm font-semibold">leave now</span>{" "}
        <i className="ri-arrow-down-fill text-sm"></i>
      </h5>
      <h2 className="text-xl font-semibold mb-3">choose a vechicle</h2>
      <div onClick={()=>{
        setconfirmVechiclepanel(true)
      }} className="flex border-2 mb-2 border-gray-700 rounded-lg w-full p-3 items-center justify-between">
        <img
          className="h-14"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-lg ">
            uber1 <span>user icon</span>
            <span>4</span>
          </h4>
          <h5 className="font-medium text-xs ">2mins away</h5>
          <p className="font-medium text-xs ">affordable compact rides</p>
        </div>
        <h2 className="text-2xl font-semibold">rs193</h2>
      </div>
      <div className="flex border-2 mb-2 border-gray-700 rounded-lg w-full p-3 items-center justify-between">
        <img
          className="h-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWeN3hcqn-G2idpfomts-GZ5JWzcIhFKpyCmnMU9cz8wOiAwNCNRFsl5C-nkHGEYCPos&usqp=CAU"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-lg ">
            uber1 <span>user icon</span>
            <span>4</span>
          </h4>
          <h5 className="font-medium text-xs ">2mins away</h5>
          <p className="font-medium text-xs ">affordable compact rides</p>
        </div>
        <h2 className="text-2xl font-semibold">rs293</h2>
      </div>
      <div className="flex border-2 mb-2 border-gray-700 rounded-lg w-full p-3 items-center justify-between">
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-lg ">
            uber1 <span>user icon</span>
            <span>4</span>
          </h4>
          <h5 className="font-medium text-xs ">2mins away</h5>
          <p className="font-medium text-xs ">affordable compact rides</p>
        </div>
        <h2 className="text-2xl font-semibold">rs150</h2>
      </div>
    </div>
  );
};

export default VechilcePanel;
