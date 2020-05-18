import React, { Component } from "react";
import Socials from "../../Components/Socials/socials";
import "./style.css";

class About extends Component {
  render() {
    return (
      <>
        <Socials />
        <div className="about">
          <div className="about-content z-depth-5">
            <img
              alt="profile"
              className="about-pic"
              src="./../images/mattProf2.png"
            />
            <p className="about-bio">
              Matt studied at UC Berkeley and is certified in Full Stack Web
              Development. Skilled in React and making beautiful web pages he
              spends his days learning new and faster methods of developing.
              <br />
              <br />
              When he is not on the computer he enjoys painting, sewing,
              interior design, and camping on the beach!
              <br />
              <br />
              He also enjoys helping local businesses by building their websites
              and creating graphics for their companies.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default About;
