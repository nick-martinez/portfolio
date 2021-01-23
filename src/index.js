import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./index.css";

// Components
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer"
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";
import Input from "./Components/ToDoList/components/Input/Input";
import Welcome from "./Components/FoodWheel/Welcome/Welcome";

var destination = document.getElementById("container");

ReactDOM.render(
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/todoList" component={Input}/>
        <Route path="/foodWheel" component={Welcome} />;
      </Switch>
      <Footer/>
    </Router>
  </>,
  destination
);