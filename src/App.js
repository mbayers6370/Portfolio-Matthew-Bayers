import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/navbar/navbar";
import Mobile from "./Components/mobile/mobile";
import Home from "./Pages/Home/home";
import "./App.css";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Mobile />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
