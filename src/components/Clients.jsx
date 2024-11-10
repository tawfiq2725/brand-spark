import React from "react";
import "./Clients.css";

const Clients = () => {
  return (
    <div className="main-client flex justify-center items-center flex-col gap-10">
      <div className="top-row">
        {[...Array(10)].map((_, i) => (
          <img
            key={`top-${i}`}
            className="client-icon"
            src={`/icons/${i + 1}.png`}
            alt={`client-${i + 1}`}
          />
        ))}
        {/* Duplicate the images for seamless scrolling */}
        {[...Array(10)].map((_, i) => (
          <img
            key={`top-dup-${i}`}
            className="client-icon"
            src={`/icons/${i + 1}.png`}
            alt={`client-${i + 1}`}
          />
        ))}
      </div>
      <div className="bottom-row">
        {[...Array(10)].map((_, i) => (
          <img
            key={`bottom-${i}`}
            className="client-icon"
            src={`/icons/${10 - i}.png`}
            alt={`client-${10 - i}`}
          />
        ))}
        {/* Duplicate the images for seamless scrolling */}
        {[...Array(10)].map((_, i) => (
          <img
            key={`bottom-dup-${i}`}
            className="client-icon"
            src={`/icons/${10 - i}.png`}
            alt={`client-${10 - i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
