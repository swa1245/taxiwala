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
  const [vechilePanel, setVechiclepanel] = useState(false);
  const vechilcepanel = useRef(null);

  useGSAP(
    function () {
      if (panel) {
        gsap.to(panelref.current, {
          height: "70%",
        });
        gsap.to(panelarrow.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelref.current, {
          height: "0%",
        });
        gsap.to(panelarrow.current, {
          opacity: 0,
        });
      }
    },
    [panel]
  );
  useGSAP(function () {
    if (vechilePanel) {
      gsap.to(vechilcepanel.current, {
        transform: "translateY(0)",
      });
    }else{
      gsap.to(vechilcepanel.current, {
        transform: "translateY(100%)",
      });
    }
  },[vechilePanel]);
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
      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full">
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
          <LocationSearchPnel
            vechilePanel={vechilePanel}
            setVechiclepanel={setVechiclepanel}
          />
        </div>
      </div>
      <div
        ref={vechilcepanel}
        className="fixed z-10 w-full bg-white bottom-0 px-3 py-8 translate-y-full "
      >
        <h2 className="text-xl font-semibold mb-3">choose a vechicle</h2>
        <div className="flex border-2 mb-2 border-gray-700 rounded-lg w-full p-3 items-center justify-between">
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
    </div>
  );
};

export default Dashboard;
