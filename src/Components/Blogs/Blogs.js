import React, { useEffect, useState } from "react";
import "./Blogs.css";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("./blogsdb.JSON")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <Navigation />
      <div className="blogs-div d-flex flex-wrap">
        {blogs.map((blog) => (
          <Blog key={blog.title} blog={blog}></Blog>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
