import React, { Component } from "react";
import "./style.css";
import waves from "../Video/waves.gif";
import wavesReg from "../Video/waves.mp4";
import Socials from "../../Components/Socials/socials";

class Home extends Component {
  render() {
    return (
      <>
        <Socials />
        <div className="home-content">
          <img alt="waves" className="myGif" src={waves} />
          <video playsInline autoPlay loop muted className="myVideo">
            <source
              src={wavesReg}
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
