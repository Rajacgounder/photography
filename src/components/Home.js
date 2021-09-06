import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Back from "../image/insta.jpg";
import "./home.css";
//import Nav from "./Nav";
//import Typical from "react-typical";

function Home() {
  return (
    <div>
      <Header />
      {/* <Nav /> */}
      <div className="background">
        <img
          className="photo"
          src={Back}
          alt="background"
          style={{ width: "500%" }}
        />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
