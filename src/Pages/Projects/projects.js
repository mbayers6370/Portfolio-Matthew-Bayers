import React, { Component } from "react";
import "./style.css";
import Coalesce from "../Video/Coalesce.png";
import Panoptic from "../Video/panoptic.png";
import Bit from "../Video/Bit-Academy.png";
import Bamazon from "../Video/bamazon.png";

class Project extends Component {
  render() {
    return (
      <>
        <div className="projectsWrapper" id="projects">
          <div className="projects-header">Projects</div>
          <section>
            <a
              className="float-left"
              href="https://arcane-woodland-29279.herokuapp.com/"
            >
              <div className="Tile">
                <img
                  alt="Coalesce Project"
                  className="project-image"
                  src={Coalesce}
                ></img>
                <div className="overlay">
                  <div className="text">
                    Coalesce is designed to connect people through food. You can
                    match with friends to make going out for food an easier
                    task. <br></br>
                    <br></br>* Powered by Yelp API
                  </div>
                </div>
              </div>
            </a>

            <a
              className="float-left"
              href="https://mbayers6370.github.io/Panoptic/"
            >
              <div className="Tile">
                <img
                  alt="Panoptic Project"
                  className="project-image"
                  src={Panoptic}
                ></img>
                <div className="overlay">
                  <div className="text">
                    Panoptic pulls from multiple API's to give you as much
                    information possible about any given musical artist.
                    <br></br>
                    <br></br>
                    **Youtube API, Musixmatch, Mourts Lyrics, Bands In Town,
                    Wikimedia API
                  </div>
                </div>
              </div>
            </a>

            <a
              className="float-left"
              href="https://arcane-snowlands.herokuapp.com/"
            >
              <div className="Tile">
                <img
                  alt="Bit Academy Project"
                  className="project-image"
                  src={Bit}
                ></img>
                <div className="overlay">
                  <div className="text">
                    Bit Academy is a one stop shop for students in a digital
                    age. Video calls, messaging, assignments - it's all here in
                    one app!
                    <br></br>
                    <br></br>
                    ** WebRTC for webcams, Heroku to host, MongoDB, & Firebase
                    for chatlog
                  </div>
                </div>
              </div>
            </a>

            <a
              className="float-left"
              href="https://github.com/mbayers6370/bamazon"
            >
              <div className="Tile">
                <img
                  alt="Bamazon Project"
                  className="project-image"
                  src={Bamazon}
                ></img>
                <div className="overlay">
                  <div className="text">
                    Bamazon is a Node.js application that accesses a MongoDB
                    database store. Once a user purchases a product the database
                    inventory is updated as well as their account/wallet.
                  </div>
                </div>
              </div>
            </a>
          </section>
        </div>
      </>
    );
  }
}

export default Project;
