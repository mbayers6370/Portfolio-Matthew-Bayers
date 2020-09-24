import React from "react";
import "./style.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="contact-me">
          <ul>
            <a href="mailto: matthew.bayers@gmail.com">
              <li className="footer-link">
                <i class="fa fa-envelope-square"></i>
              </li>
            </a>
            <a href="tel:209-840-8509">
              <li className="footer-link">
                <i class="fa fa-phone-square"></i>
              </li>
            </a>
            <a href="https://www.linkedin.com/in/matthew-bayers/">
              <li className="footer-link">
                <i class="fa fa-linkedin"></i>
              </li>
            </a>
            <a href="https://github.com/mbayers6370">
              <li className="footer-link">
                <i class="fa fa-github"></i>
              </li>
            </a>
          </ul>
        </div>
        <div className="copyright-bottom">© Copyright 2020</div>
      </div>
    </>
  );
}

export default Footer;
