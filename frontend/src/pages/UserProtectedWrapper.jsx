import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";

const UserProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(()=>{
    if(!token){
      navigate("/login");
    }
  },[token]);
  return <div>{children}</div>;
};

export default UserProtectedWrapper;
