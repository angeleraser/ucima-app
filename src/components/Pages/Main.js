import React from "react";
import "../../css/Main/MainContent.css";
import Personal from "./Personal/Personal";
import Home from "./Home/Home";
import Blog from "./Blog/Blog";
import { Switch, Route } from "react-router-dom";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/personal" component={Personal}></Route>
      <Route exact path="/blog" component={Blog}></Route>
    </Switch>
  );
};

export default Main;
