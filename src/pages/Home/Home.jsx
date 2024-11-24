import React from "react";
import Homemain from "../../components/Home/Homemain";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <div className="home">
      <Homemain />
      <About />
      <Services />
      <Portfolio />
    </div>
  );
};

export default Home;
