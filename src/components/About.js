import React from "react";
//import picture from "../../public/images/wall.jpg";
import "./about.css";
import Footer from "./Footer";
import Header from "./Header";

const About = () => {
  return (
    <div className="">
      <Header />
      <h1 className="page-title">ABOUT</h1>
      <div className="about-area">
        <div className="about-picture">
          {/* <img src={picture} alt="" /> */}
        </div>
        <div className="about-text">
          <center>
            <h1>
              Hello! <br /> My name is BHARATH
            </h1>
            <p>
              I was born and raised in São Paulo-Brazil and now I call Toronto
              home. I'm an urban photographer who loves everything about it,
              exploring the city on a sunny day or challenging unpleasant
              weather conditions.
            </p>
            <p>
              I appreciate the challenges of capturing a good image, finding the
              right angle, the right lighting, experimenting new ideas and
              moving away from the comfort zone.
            </p>
            <p>
              It's really interesting to me that anything can change
              dramatically if you just look at it from another view point, and
              I'm grateful for the new perspectives that photography gives me
              every day.
            </p>
          </center>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
