import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPnel from "../components/LocationSearchPnel";


const Dashboard = () => {
  const [pick, setpick] = useState("");
  const [dest, setdest] = useState("");
  const [panel, setPanel] = useState(false);
  const panelref = useRef(null);
  const panelarrow = useRef(null);

  useGSAP(
    function () {
      if (panel) {
        gsap.to(panelref.current, {
          height: "70%",
        });
        gsap.to(panelarrow.current, {
          opacity: 1,
        })
      } else {
        gsap.to(panelref.current, {
          height: "0%",
        });
        gsap.to(panelarrow.current, {
          opacity: 0,
        })
      }
    },
    [panel]
  );
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <h2 className="w-14 absolute ml-8 text-2xl font-bold  text-black">
        TaxiWala
      </h2>
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="bg-amber-50 flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
           ref={panelarrow}
            className="absolute opacity-0 top-6 right-6 text-2xl "
            onClick={() => {
              setPanel(false);
            }}
          >
            <i className="ri-arrow-down-fill"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a Trip</h4>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="line absolute h-16 left-8 w-1 top-[38%] bg-gray-700 rounded-full "></div>
            <input
              onClick={() => setPanel(true)}
              type="text"
              name=""
              value={pick}
              onChange={(e) => setpick(e.target.value)}
              placeholder="add a pickup location"
              id=""
              className="px-8 py-2 text-base rounded-lg mt-3 w-full mb-2 "
            />
            <input
              onClick={() => setPanel(true)}
              className="px-8 py-2 text-base rounded-lg w-full r"
              type="text"
              name=""
              value={dest}
              onChange={(e) => setdest(e.target.value)}
              placeholder="enter ur destination"
              id=""
            />
          </form>
        </div>
        <div ref={panelref} className=" bg-amber-50  h-0">
          <LocationSearchPnel />
        </div>
      </div>
      <div className="fixed z-10 bg-white bottom-0 p-3">
            <div className="flex border-2 border-gray-700 rounded-lg w-full p-3 items-center justify-between">
              <img className="h-12" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
              <div className="w-1/2">
                <h4 className="font-medium text-lg ">uber1 <span>user icon</span><span>4</span></h4>
                <h5 className="font-medium text-xs ">2mins away</h5>
                <p className="font-medium text-xs ">affordable compact rides</p>
              </div>
              <h2  className="text-2xl font-semibold">rs193</h2>
            </div>
            
      </div>
    </div>
  );
};

export default Dashboard;
