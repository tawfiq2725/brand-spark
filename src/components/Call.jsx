import React from "react";
import "./Call.css";

const Call = () => {
  return (
    <>
      <div className="call bg-black  flex justify-center flex-col items-center py-4 px-4">
        <p className="text-white pt-4 text-justify ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae,
        </p>
        <div className="btns flex gap-8 py-4">
          <a href="#" className="call-btn text-white px-7 py-1 rounded-md">
            Shedule a call
          </a>
          <a
            href="#"
            className="border-2 border-white text-white px-7 py-1 rounded-md"
          >
            Our work
          </a>
        </div>
      </div>
    </>
  );
};

export default Call;
