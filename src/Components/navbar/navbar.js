import React from "react";
import "./style.css";
import Logo from "../../Pages/Video/logo.gif";
import Project from "../../Pages/Video/project-icon.png";
import AboutTwo from "../../Pages/Video/about-me-icon-2.png";
import Home from "../../Pages/Video/home-icon.png";

function Navbar() {
  return (
    <>
      <nav className="z-depth-2">
        <img alt="logo-matthew-bayers" className="logoNav" src={Logo}></img>
        <div className="link-wrapper">
          <ul>
            <a href="/">
              <li>
                <img className="icons" alt="projects icon" src={Home}></img>
                <span className="addedLink">Home</span>
              </li>
            </a>
            <a href="#projects">
              <li>
                <img className="icons" alt="projects icon" src={Project}></img>
                <span className="addedLink">Projects</span>
              </li>
            </a>
            <a href="#about">
              <li>
                <img className="icons" alt="projects icon" src={AboutTwo}></img>
                <span className="addedLink">About</span>
              </li>
            </a>
            <a href="https://www.linkedin.com/in/matthew-bayers/">
              <li>
                <i className="fa fa-linkedin"></i>
                <span className="addedLink">LinkedIn</span>
              </li>
            </a>
            <a href="https://github.com/mbayers6370">
              <li>
                <i className="fa fa-github">
                  <span className="addedLink">GitHub</span>
                </i>
              </li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
