// Steps.js
import React from "react";
import "./Steps.css";

const Steps = () => {
  return (
    <div className="steps-container">
      <h1>
        3 Steps to <br />
        Partner with US
      </h1>
      <div className="cards">
        <div className="card" id="card1">
          <img src="/elements/ser2.png" width="100" />
          <h3>Consultation</h3>
          <p>Define your vision and set clear goals with our experts.</p>
        </div>
        <div className="card">
          <img src="/elements/ser1.png" width="140" />
          <h3>Design & Development</h3>
          <p>Craft visually compelling, strategically effective solutions.</p>
        </div>
        <div className="card" id="card2">
          <img src="/elements/ser3.png" width="100" />
          <h3>Review & Launch</h3>
          <p>Refine together and launch with impact, making it more premium.</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
