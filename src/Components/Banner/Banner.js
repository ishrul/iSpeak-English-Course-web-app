import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="hero-image">
        <div className="hero-text">
          <h1 className="h1">
            IMPROVE YOUR <br /> <span className="english">ENGLISH</span> SKILLS
          </h1>
          <p>
            Our language center offers group and personal <br /> lessons in
            English and other modern languages <br /> for all ages and levels of
            knowledge.
          </p>
          <button>Hire me</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
