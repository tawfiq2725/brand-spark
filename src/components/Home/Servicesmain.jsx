import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const Servicesmain = () => {
  const navigate = useNavigate();

  return (
    <div className="main flex justify-center gap-10 items-center ">
      <div className="left-ser">
        <h1 className="service text-white">
          Our <br /> <span>Services</span>
        </h1>
        <img src="/elements/arrow.png" alt="" className="img " />
      </div>
      <div className="right-ser flex flex-col">
        <div className="first-off flex">
          <div className="box">
            <img src="/elements/grid1.png" alt="" />
            <h4>Heading</h4>
          </div>
          <div className="box">
            <img src="/elements/grid2.png" alt="" />
            <h4>Heading</h4>
          </div>
          <div className="box">
            <img src="/elements/grid3.png" alt="" />
            <h4>Heading</h4>
          </div>
          <div className="box">
            <img src="/elements/grid4.png" alt="" />
            <h4>Heading</h4>
          </div>
        </div>

        <div className="second-off flex">
          <div className="box">
            <img src="/elements/grid5.png" alt="" />
            <h4>Heading</h4>
          </div>
          <div className="box">
            <img src="/elements/grid8.png" alt="" />
            <h4>Heading</h4>
          </div>
          <div className="box">
            <img src="/elements/grid6.png" alt="" />
            <h4>Heading</h4>
          </div>
          <div className="box">
            <img src="/elements/grid7.png" alt="" />
            <h4>Heading</h4>
          </div>
        </div>

        {/* Styled Button */}
        <button className="explore-more" onClick={() => navigate("/services")}>
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Servicesmain;
