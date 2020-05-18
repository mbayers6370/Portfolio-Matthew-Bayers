import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "./style.css";

export default function Mobile() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="mobile-nav">
      <button
        className="menu-button"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <i className="fa fa-bars fa-2x"></i>
      </button>
      <Menu
        className="mobile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div onClick={handleClose} className="mobile-close">
          <HighlightOffIcon style={{ fontSize: "35px" }} />
        </div>
        <div className="mobile-nav-container">
          <MenuItem onClick={handleClose} className="menu-item-mobile">
            <a className="mobile-ul" href="/">
              Home
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose} className="menu-item-mobile">
            <a className="mobile-ul" href="/projects">
              Projects
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose} className="menu-item-mobile">
            <a className="mobile-ul" href="/about">
              About
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose} className="menu-item-mobile">
            <a className="mobile-ul" href="https://github.com/mbayers6370">
              GitHub
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose} className="menu-item-mobile">
            <a
              className="mobile-ul"
              href="https://www.linkedin.com/in/matthew-bayers/"
            >
              LinkedIn
            </a>
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
