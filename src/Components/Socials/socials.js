import React from "react";
import "./style.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FolderSharedIcon from "@material-ui/icons/FolderShared";
import Resume from "../../Pages/Video/Resume.pdf";

function Socials() {
  return (
    <>
      <div className="social-container">
        <a href="https://github.com/mbayers6370">
          <GitHubIcon className="social-icon" />
        </a>{" "}
        <br />
        <a href="https://www.linkedin.com/in/matthew-bayers/">
          <LinkedInIcon className="social-icon" />
        </a>
        <br />
        <a href={Resume}>
          <FolderSharedIcon className="icon" />
        </a>
      </div>
    </>
  );
}

export default Socials;
