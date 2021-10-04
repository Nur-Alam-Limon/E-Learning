import React from "react";
import "./About.css";
import cover from "../../about.jpg";

const About = () => {
  return (
    <div className="about">
      <img src={cover} alt="" />
      <h1>The world’s largest selection of online courses</h1>
      <p>
        Millions of people have used Kingster to decide which online course to
        take. We aggregate courses from many universities to help you find the
        best courses on almost any subject, wherever they exist. Our goal is to
        make online education work for everyone.
      </p>
    </div>
  );
};

export default About;
