import React from "react";
import "./style.css";

function Card(props) {
  return (
    <a className="card-link" href={props.link}>
      <div className="card-container">
        <div className="card">
          <div className="img-container">
            <img alt={props.name} src={props.image} />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong /> {props.application}
              </li>
            </ul>
            <p className="content-about">{props.content}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Card;
