import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav/nav";
import Mobile from "./Components/mobile/mobile";
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Projects from "./Pages/Projects/projects";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Mobile />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;