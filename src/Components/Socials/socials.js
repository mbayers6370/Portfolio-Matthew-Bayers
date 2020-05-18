import React from "react";
import "./style.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Socials() {
  return (
    <>
      <div className="social-container">
        <ul>
          <li>
            <a href="https://github.com/mbayers6370">
              <GitHubIcon className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/matthew-bayers/">
              <LinkedInIcon className="social-icon" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Socials;
