import React, { Component } from "react";
import "./style.css";
import Rose from "../Video/Art/image2.png";
import Footer from "../../Components/Footer/footer";

class About extends Component {
  render() {
    return (
      <>
        <section id="about">
          <div className="about-header">About</div>
          <div className="about-me">
            <img className="about-image" alt="rose-painting" src={Rose}></img>
            <br></br>
            <br></br>
            <i className="quote">
              "In the midst of winter, I found there was, within me, an
              invincible summer." -Albert Camus
            </i>
            <br></br>
            <br></br>
            Art has always been a constant in my life.
            <br></br>
            <br></br>
            Through adversity I have found what I enjoy to do. I am hardworking,
            loyal, constantly learning, and dedicated to bringing art to the
            masses through design.
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default About;
