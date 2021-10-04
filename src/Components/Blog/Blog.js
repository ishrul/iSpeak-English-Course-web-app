import React from "react";
import "./Blog.css";

const Blog = (props) => {
  const { image, date, title } = props.blog;
  return (
    <div>
      <div className="card-container">
        <div className="card u-clearfix">
          <div className="card-body">
            <span className="card-number card-circle subtle">01</span>
            <span className="card-author subtle">John Smith</span>
            <h2 className="card-title">{title}</h2>
            <span className="card-description subtle">
              These last few weeks I have been working hard on a new brunch
              recipe for you all.
            </span>
            <div className="card-read">{date}</div>
            <span className="card-tag card-circle subtle">C</span>
          </div>
          <div>
            <img src={image} alt="" className="card-media" />
          </div>
        </div>
        <div className="card-shadow"></div>
      </div>
    </div>
  );
};

export default Blog;
