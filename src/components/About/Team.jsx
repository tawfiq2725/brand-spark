import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Team.css";

const teamMembers = [
  { name: "Abby", image: "./Team/Abby.jpg" },
  { name: "Cherian", image: "./Team/Cherian.jpeg.jpg" },
  { name: "Gayathry", image: "./Team/Gayathry.jpeg.jpg" },
  { name: "Induchoodan", image: "./Team/Induchoodan.jpeg.jpg" },
  { name: "Joel", image: "./Team/Joel.jpg" },
  { name: "Rohit", image: "./Team/Rohit.jpg" },
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getClass = (index) => {
    const diff =
      (index - currentIndex + teamMembers.length) % teamMembers.length;
    if (diff === 0) return "card-team center";
    if (diff === 1 || diff === -teamMembers.length + 1)
      return "card-team right";
    if (diff === -1 || diff === teamMembers.length - 1) return "card-team left";
    return "card-team hidden";
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {teamMembers.map((member, index) => (
          <div key={index} className={getClass(index)}>
            <img
              className="card-team__image"
              src={member.image}
              alt={member.name}
            />
            <h3 className="card-team__name">{member.name}</h3>
          </div>
        ))}
      </div>
      <div className="nav-buttons">
        <button
          className="nav-button"
          onClick={() =>
            setCurrentIndex(
              (currentIndex - 1 + teamMembers.length) % teamMembers.length
            )
          }
        >
          <FaChevronLeft />
        </button>
        <button
          className="nav-button"
          onClick={() =>
            setCurrentIndex((currentIndex + 1) % teamMembers.length)
          }
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Team;
