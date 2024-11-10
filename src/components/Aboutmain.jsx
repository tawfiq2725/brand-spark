import React from "react";
import video from "../assets/landing-main_icons.mp4";
import "./Aboutmain.css";

const Aboutmain = () => {
  return (
    <>
      <div className="main-about flex justify-center">
        <video className=" video" autoPlay loop muted width="700" height="200">
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Aboutmain;
