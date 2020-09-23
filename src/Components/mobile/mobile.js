import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "./style.css";
import logo from "../../Pages/Video/logo.gif";

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
        <i className="fa fa-bars fa-2x hamburger"></i>
      </button>
      <img alt="logo" className="logoMobile" src={logo} />
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
            <a className="mobile-ul" href="#home">
              Home
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose} className="menu-item-mobile">
            <a className="mobile-ul" href="#projects">
              Projects
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose} className="menu-item-mobile">
            <a className="mobile-ul" href="#about">
              About
            </a>
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
