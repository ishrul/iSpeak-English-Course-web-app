import React, { useEffect, useState } from "react";
import Course from "../Course/Course";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  // data load
  useEffect(() => {
    fetch("./fakedb.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data.slice(0, 4)));
  }, []);
  return (
    <div className="courses">
      {courses.map((course) => (
        <Course key={course.name} course={course}></Course>
      ))}
    </div>
  );
};

export default Courses;
