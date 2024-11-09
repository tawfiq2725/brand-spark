import React from "react";
import "./Services.css";

const Servicesmain = () => {
  return (
    <div className="main flex justify-center gap-10 items-center ">
      <div className="left">
        <h1 className="service text-white">
          Our <br /> <span>Services</span>
        </h1>
        <img src="/elements/arrow.png" alt="" className="img " />
      </div>
      <div className="right flex flex-col">
        <div className="first-off flex">
          <div className="box">
            <img src="/elements/grid1.png" alt="" />
            <h4>Heading</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptas, non!
            </p>
          </div>
          <div className="box">
            <img src="/elements/grid2.png" alt="" />
            <h4>Heading</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptas, non!
            </p>
          </div>
          <div className="box">
            <img src="/elements/grid3.png" alt="" />
            <h4>Heading</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptas, non!
            </p>
          </div>
          <div className="box">
            <img src="/elements/grid4.png" alt="" />
            <h4>Heading</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptas, non!
            </p>
          </div>
        </div>

        <div className="second-off flex">
          <div className="box">
            <img src="/elements/grid5.png" alt="" />
            <h4>Heading</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptas, non!
            </p>
          </div>
          <div className="box">
            <img src="/elements/grid8.png" alt="" />
            <h4>Heading</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptas, non!
            </p>
          </div>
          <div className="box">
            <img src="/elements/grid6.png" alt="" />
            <h4>Heading</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptas, non!
            </p>
          </div>
          <div className="box">
            <img src="/elements/grid7.png" alt="" />
            <h4>Heading</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptas, non!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicesmain;
