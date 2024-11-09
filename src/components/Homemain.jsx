import React from "react";
import mainImage from "/logo.png";
import "./Home.css";

const Homemain = () => {
  return (
    <div className="home-div w-full  flex justify-center items-center">
      <img src={mainImage} className="w-2/5 " />
    </div>
  );
};

export default Homemain;
