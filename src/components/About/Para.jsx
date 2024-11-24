import React, { useEffect } from "react";
import "./Para.css";

const Para = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <div className="head animate-on-scroll">
        <h1>Brand Spark Team</h1>
      </div>
      <div className="para animate-on-scroll">
        <p>
          Brands struggle to establish a unique and captivating visual identity,
          restricting themselves from standing out in a crowded marketplace. At
          Brand Spark, we specialise in designing effective logos, brand
          identities and packaging materials. By combining creativity, strategic
          thinking, and expert craftsmanship, we empower brands to convey unique
          stories and values through captivating designs. Our collaborative
          approach ensures that each brand receives personalised attention and a
          tailored solution that captures its essence. Our vision is to
          transform brands’ ideas into compelling visuals that resonate with
          their target audience.
        </p>
      </div>
    </>
  );
};

export default Para;
