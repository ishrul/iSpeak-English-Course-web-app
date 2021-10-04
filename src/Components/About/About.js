import React from "react";
import "./About.css";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Teachers from "../Teachers/Teachers";
import { EmojiHeartEyes, EmojiSmile } from "react-bootstrap-icons";

const About = () => {
  return (
    <div>
      <Navigation />
      <div className="text-center text-light">
        <br />
        <h1>
          Our Teachers <EmojiHeartEyes /> <EmojiSmile />
        </h1>
        <br />
      </div>
      <Teachers />
      <div className="my-5">
        <div className="text-center text-light">
          <h1>
            Enjoy This Vedio <EmojiSmile />
          </h1>
        </div>
        <br />
        <iframe
          width="1000"
          height="600"
          src="https://www.youtube.com/embed/DotppT_JH3E?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          // controls
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default About;
