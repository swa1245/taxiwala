import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPnel from "../components/LocationSearchPnel";
import VechilcePanel from "../components/VechilcePanel";
import ConfirmedVechile from "../components/ConfirmedVechile";
import LookingForDriver from "../components/LookingForDriver";
import WaitForDriver from "../components/WaitForDriver";

const Dashboard = () => {
  const [pick, setpick] = useState("");
  const [dest, setdest] = useState("");
  const [panel, setPanel] = useState(false);
  const panelref = useRef(null);
  const panelarrow = useRef(null);
  const [vechilePanel, setVechiclepanel] = useState(false);
  const [confirmvechilePanel, setconfirmVechiclepanel] = useState(false);
  const [VechileFound, setVechicleFound] = useState(false);
  const [waitingVechile, setWaitingVechile] = useState(false);
  const vechilcepanel = useRef(null);
  const vechilceFoundpanel = useRef(null);
  const confrinmvechilcepanel = useRef(null);
  const waitingvechilcepanel = useRef(null);

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
  useGSAP(
    function () {
      if (vechilePanel) {
        gsap.to(vechilcepanel.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vechilcepanel.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vechilePanel]
  );
  useGSAP(
    function () {
      if (confirmvechilePanel) {
        gsap.to(confrinmvechilcepanel.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confrinmvechilcepanel.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmvechilePanel]
  );
  useGSAP(
    function () {
      if (VechileFound) {
        gsap.to(vechilceFoundpanel.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vechilceFoundpanel.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [VechileFound]
  );
  useGSAP(
    function () {
      if (waitingVechile) {
        gsap.to(waitingvechilcepanel.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingvechilcepanel.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingVechile]
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
            panel={panel}
            setPanel={setPanel}
          />
        </div>
      </div>
      <div
        ref={vechilcepanel}
        className="fixed z-10 w-full bg-white bottom-0 px-3 py-8 translate-y-full "
      >
        <VechilcePanel
          setconfirmVechiclepanel={setconfirmVechiclepanel}
          setVechiclepanel={setVechiclepanel}
        />
      </div>
      <div
        ref={confrinmvechilcepanel}
        className="fixed z-10 w-full bg-white bottom-0 px-3 py-6 pt-12 translate-y-full "
      >
        <ConfirmedVechile
          setVechicleFound={setVechicleFound}
          setconfirmVechiclepanel={setconfirmVechiclepanel}
        />
      </div>
      <div
        ref={vechilceFoundpanel}
        className="fixed z-10 w-full bg-white bottom-0 px-3 py-6 pt-12 translate-y-full "
      >
        <LookingForDriver />
      </div>
      <div
        ref={waitingvechilcepanel}
        waitingVechile={waitingVechile}
        className="fixed z-10 w-full bg-white bottom-0 px-3 py-6 pt-12 "
      >
        <WaitForDriver />
      </div>
    </div>
  );
};

export default Dashboard;
