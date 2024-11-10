// OurWorks.js
import React from "react";
import "./OurWorks.css";
import Image1 from "/project2.jpg";
import Image2 from "/project3.jpg";
import Image3 from "/project4.jpg";
import Image4 from "/project5.jpg";

const OurWorks = () => {
  const works = [
    {
      id: 1,
      imgSrc: Image1, // Use imported path
    },
    {
      id: 2,
      imgSrc: Image2,
    },
    {
      id: 3,
      imgSrc: Image3,
    },
    {
      id: 4,
      imgSrc: Image4,
    },
  ];

  return (
    <section className="our-works">
      <h2>OUR WORKS</h2>
      <div className="works-container">
        {works.map((work) => (
          <div key={work.id} className="work-card">
            <img src={work.imgSrc} alt={`Work ${work.id}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorks;
