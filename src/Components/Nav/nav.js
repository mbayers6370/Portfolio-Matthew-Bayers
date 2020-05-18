import React, { useState } from "react";
import "./style.css";
import Socials from "../Socials/socials";

function Nav() {
  return (
    <>
      <div className="nav">
        <div className="nav-container">
          <ul>
            <a href="/" className="nav-li">
              <li>home</li>
            </a>
            <a href="/about" className="nav-li">
              <li>about</li>
            </a>
            <a href="/projects" className="nav-li">
              <li>projects</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
