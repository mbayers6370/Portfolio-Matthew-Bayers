import React, { Component } from "react";
import "./style.css";
import waves from "../Video/waves.mp4";

class Home extends Component {
  render() {
    return (
      <>
        <div className="content">
          <video autoPlay muted loop className="myVideo">
            <source
              src={waves}
              type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
            />
            />
          </video>
        </div>
      </>
    );
  }
}

export default Home;
