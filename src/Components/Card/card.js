import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <a className="card-link" href={props.link}>
              <li>
                <strong /> {props.application}
              </li>
            </a>
          </ul>
          <p className="content-about">{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
