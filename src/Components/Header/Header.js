import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <h1 className="logo">E-Learning</h1>
      <div className="nav-container">
        <NavLink className="nav" to="/home">
          Home
        </NavLink>
        <NavLink className="nav" to="/services">
          Services
        </NavLink>
        <NavLink className="nav" to="/about">
          About Us
        </NavLink>
        <NavLink className="nav" to="/contact">
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
