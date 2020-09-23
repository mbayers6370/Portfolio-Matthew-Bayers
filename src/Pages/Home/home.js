import React, { Component } from "react";
import "./style.css";
import ProfilePic from "../Video/matt-bayers.png";
import Projects from "../Projects/projects";
import About from "../About/about";

class Home extends Component {
  render() {
    return (
      <>
        <div className="homeContainer" id="home">
          <div className="content-holder">
            <div className="info-box-left">
              <img
                className="left-profile"
                alt="profile"
                src={ProfilePic}
              ></img>
            </div>
            <div className="info-box-right">
              <h1 className="info-h1">Graphic Designer | Web Developer</h1>
              <h2 className="info-h2">Matthew Bayers</h2>
              <p className="info-inspire">
                Let's get to work on your next venture.
              </p>
              <h2 className="info-grab">Custom content at your fingertips.</h2>
              <a href="tel:209-840-8509">
                <button className="call-button">Contact</button>
              </a>
            </div>
          </div>
        </div>
        <Projects />
        <About />
      </>
    );
  }
}

export default Home;
