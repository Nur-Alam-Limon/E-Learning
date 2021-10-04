import React from "react";
import "./Course.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Course = (props) => {
  const { name, author, price, rating, img } = props.course;
  return (
    <div className="course-card">
      <img src={img} alt="" />
      <div className="info">
        <h3>{name}</h3>
        <p>
          by <span className="bold">{author}</span>
        </p>
        <span className="rating">({rating})</span>
        <Rating name="size-large" defaultValue={5} size="medium" readOnly />
        <h2>${price}</h2>
      </div>
    </div>
  );
};

export default Course;
