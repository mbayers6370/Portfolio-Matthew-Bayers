import React, { Component } from "react";
import "./style.css";
import Card from "../../Components/Card/card";
import projects from "../../projects.json";

class Projects extends Component {
  state = {
    projects,
  };
  render() {
    return (
      <>
        <div className="projects">
          {this.state.projects.map((data) => (
            <Card
              removeFriend={this.removeFriend}
              id={data.id}
              key={data.id}
              name={data.name}
              image={data.image}
              application={data.application}
              content={data.content}
              link={data.link}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Projects;
