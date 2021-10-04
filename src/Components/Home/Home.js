import React, { useEffect, useState } from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import Course from "../Course/Course";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Courses from "../Courses/Courses";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Courses />
      <Footer />
    </div>
  );
};

export default Home;
