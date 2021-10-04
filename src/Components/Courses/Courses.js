import React, { useState, useEffect } from "react";
import Course from "../Course/Course";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <div className="course-header">
        <h1>The world's largest selection of courses</h1>
        <h3>
          Choose from 130,000 online video courses with new additions published
          every month
        </h3>
      </div>
      <div className="course-container">
        {courses.map((course) => (
          <Course key={course.key} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
