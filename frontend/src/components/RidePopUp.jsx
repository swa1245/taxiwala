import React from 'react'

const RidePopUp = ({setVechicleFound,setVechiclepanel}) => {
  return (
    <div>
      <h5 onClick={() => setVechiclepanel(false)} className="mb-4">
        {/* <span className="text-sm font-semibold">leave now</span>{" "} */}
        {/* <i className="ri-arrow-down-fill text-sm"></i> */}
      </h5>
      <h2 className="text-xl font-semibold mb-3">Ride for u</h2>
      <div className="flex gap-3 flex-col justify-between items-center">
        {/* <img
          className="h-20 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWeN3hcqn-G2idpfomts-GZ5JWzcIhFKpyCmnMU9cz8wOiAwNCNRFsl5C-nkHGEYCPos&usqp=CAU"
          alt=""
        /> */}
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
          confirm
        </button>
      </div>
    </div>
  )
}

export default RidePopUp
