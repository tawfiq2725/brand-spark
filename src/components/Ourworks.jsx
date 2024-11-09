// OurWorks.js
import React from "react";
import "./OurWorks.css";

const OurWorks = () => {
  const works = [
    {
      id: 1,
      imgSrc: "https://via.placeholder.com/300x400",
    },
    {
      id: 2,
      imgSrc: "https://via.placeholder.com/300x400",
    },
    {
      id: 3,
      imgSrc: "https://via.placeholder.com/300x400",
    },
    {
      id: 4,
      imgSrc: "https://via.placeholder.com/300x400",
    },
  ];

  return (
    <section className="our-works">
      <h2>OUR WORKS</h2>
      <div className="works-container">
        {works.map((work) => (
          <div key={work.id} className="work-card">
            <img src={work.imgSrc} alt={work.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorks;
