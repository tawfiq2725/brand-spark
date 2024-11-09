import React from "react";
import "./ClientBanner.css";

const ClientBanner = () => {
  return (
    <div className="client-banner-container">
      {/* Blue banner */}
      <div className="client-banner blue">
        <span>★ CLIENT </span>
        <span>★ CLIENT </span>
        <span>★ CLIENT </span>
        <span>★ CLIENT </span>
        <span>★ CLIENT </span>
      </div>

      {/* White banner */}
      <div className="client-banner white">
        <span>★ CLIENT </span>
        <span>★ CLIENT </span>
        <span>★ CLIENT </span>
        <span>★ CLIENT </span>
        <span>★ CLIENT </span>
      </div>
    </div>
  );
};

export default ClientBanner;
