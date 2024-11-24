import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./OurWorks.css";

const OurWorks = () => {
  return (
    <div className="works">
      <div className="heading-work">
        <h1>Our Finished Projects</h1>
      </div>
      <div className="projects-container">
        <div className="project-box">
          <div className="image-container">
            <img src="./project1.jpg" alt="Project 1" />
          </div>
          <a href="#" className="view-case">
            View Case <FaArrowRight />
          </a>
        </div>
        <div className="project-box">
          <div className="image-container">
            <img src="./project2.jpg" alt="Project 2" />
          </div>
          <a href="#" className="view-case">
            View Case <FaArrowRight />
          </a>
        </div>
        <div className="project-box">
          <div className="image-container">
            <img src="./project2.jpg" alt="Project 2" />
          </div>
          <a href="#" className="view-case">
            View Case <FaArrowRight />
          </a>
        </div>
        <div className="project-box">
          <div className="image-container">
            <img src="./project1.jpg" alt="Project 1" />
          </div>
          <a href="#" className="view-case">
            View Case <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
