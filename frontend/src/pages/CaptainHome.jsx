import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CapatinDetails from "../components/CapatinDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfrimRidePopup from "../components/confrimRidePopup";

const CaptainHome = () => {
  const [ridepopuppanel, setRidepopuppanel] = useState(true);
  const [confrimRidepanel, setConfrimRideuppanel] = useState(true);
  const ridepopupref = useRef(null);
  const confrimRidepopupref = useRef(null);

  useGSAP(() => {
    gsap.to(ridepopupref.current, {
      y: ridepopuppanel ? "0%" : "100%",
    });
  }, [ridepopuppanel]);
  useGSAP(() => {
    gsap.to(confrimRidepopupref.current, {
      y: confrimRidepanel ? "0%" : "100%",
    });
  }, [confrimRidepanel]);
  return (
    <div className="h-screen">
      <div className="fixed flex items-center justify-between">
        <h2 className="w-10 h-10 left-0 top-2 opacity-70 absolute ml-4 text-2xl font-bold  text-black">
          TaxiWala
        </h2>
        <Link
          to="/captain-login"
          className="fixed  right-2 top-2 h-10 w-10 bg-amber-50 flex items-center justify-center rounded-full"
        >
          <i className="ri-logout-circle-line text-lg font-medium"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6 ">
        <CapatinDetails />
      </div>
      <div
        ref={ridepopupref}
        className="fixed translate-y-full z-10 w-full bg-white bottom-0 px-3 py-6 pt-12 "
      >
        <RidePopUp setRidepopuppanel={setRidepopuppanel} />
      </div>
      <div
        ref={confrimRidepopupref}
        className="fixed translate-y-full z-10 w-full bg-white bottom-0 px-3 py-6 pt-12 "
      >
        <ConfrimRidePopup setConfrimRideuppanel={setConfrimRideuppanel} setRidepopuppanel={setRidepopuppanel} />
      </div>
    </div>
  );
};

export default CaptainHome;
