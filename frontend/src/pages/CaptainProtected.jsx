import React, { useContext, useEffect } from "react";
import { CaptainContext } from "../context/CaptainProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainProtected = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { captain, setCaptain } = useContext(CaptainContext);
  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, [token]);
  axios
    .get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.status == 201) {
        setCaptain(res.data.captain);
      }
    }).catch((err) => {
        console.log(err);
        navigate("/captain-login");
    });
  return <div>{children}</div>;
};

export default CaptainProtected;
