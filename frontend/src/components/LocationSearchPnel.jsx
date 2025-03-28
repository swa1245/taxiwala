import React from "react";

const LocationSearchPnel = ({vechilePanel,setVechiclepanel}) => {
  const sampleData = [
    "24B, nears kappors cafe",
    "23B, nears kappors cafe",
    "25B, nears kappors cafe",
    "26B, nears kappors cafe",
  ];
  return (
    <div>
      {sampleData.map((items, index) => {
        return (
          <div onClick={
            () => {
              setVechiclepanel(!vechilePanel);
            }
          } className="flex items-center active:border-2 p-3 rounded-xl  gap-1 my-2 justify-start">
            <h2 className=" h-10 w-20 flex items-center justify-center">
              <i className="ri-map-pin-line text-base"></i>
            </h2>
            <h4 className="text-lg font-medium" key={index}>{items}</h4>
          </div>
        );
      })}
      {/*       
      <div className="flex items-center active:border-2 p-3 rounded-xl gap-1 my-2justify-start">
        <h2 className=" h-10 w-20 flex items-center justify-center">
          <i className="ri-map-pin-line text-base"></i>
        </h2>
        <h4 className="text-lg font-medium">24B, nears kappors cafe</h4>
      </div>
      <div className="flex items-center active:border-2 p-3 rounded-xl gap-1 my-2justify-start">
        <h2 className=" h-10 w-20 flex items-center justify-center">
          <i className="ri-map-pin-line text-base"></i>
        </h2>
        <h4 className="text-lg font-medium">24B, nears kappors cafe</h4>
      </div>
      <div className="flex items-center active:border-2 p-3 rounded-xl gap-1 my-2justify-start">
        <h2 className=" h-10 w-20 flex items-center justify-center">
          <i className="ri-map-pin-line text-base"></i>
        </h2>
        <h4 className="text-lg font-medium">24B, nears kappors cafe</h4>
      </div> */}
    </div>
  );
};

export default LocationSearchPnel;
