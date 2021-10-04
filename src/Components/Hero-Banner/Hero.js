import React from "react";
import banner from "../../cover.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <img className="cover-img" src={banner} alt=""></img>
    </div>
  );
};

export default Hero;
