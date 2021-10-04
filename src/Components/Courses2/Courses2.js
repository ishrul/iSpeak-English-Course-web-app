import React, { useEffect, useState } from "react";
import Course from "../Course/Course";
import "./Courses2.css";

const Courses2 = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./Fakedb.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="courses2">
      {courses.map((course) => (
        <Course key={course.name} course={course}></Course>
      ))}
    </div>
  );
};

export default Courses2;
