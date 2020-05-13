import React from "react";
import "./style.css";

function Nav() {
  return (
    <>
      <div className="nav">
        <div className="nav-container">
          <ul className="nav-ul">
            <a href="/Portfolio-Matthew-Bayers/" className="nav-link">
              <li className="nav-li">home</li>
            </a>
            <a href="/Portfolio-Matthew-Bayers/projects" className="nav-link">
              <li className="nav-li">projects</li>
            </a>
            <a href="/Portfolio-Matthew-Bayers/about" className="nav-link">
              <li className="nav-li">about</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
