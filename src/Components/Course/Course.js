import React from "react";
import "./Course.css";

const Course = (props) => {
  const { name, price, image, teacher } = props.course;

  return (
    <div>
      <div class="container">
        <div class="card">
          <div class="imgBx">
            <img src={image}></img>
          </div>
          <div class="contentBx">
            <h2>{name}</h2>
            <div class="price">
              <h3>${price}</h3>
            </div>
            <div class="teacher">
              <h3>Teacher: {teacher}</h3>
            </div>
            <a href="*">Purchase</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
