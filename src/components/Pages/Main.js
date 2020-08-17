import React from "react";
import "../../css/Main/MainContent.css";
import Personal from "./Personal/Personal";
import Home from "./Home/Home";
import Blog from "./Blog/Blog";
import Ucima from "./Ucima/Ucima";
import Contact from "./Contact/Contact";
import { Switch, Route} from "react-router-dom";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/personal" component={Personal}></Route>
      <Route exact path="/blog" component={Blog}></Route>
      <Route exact path="/ucima" component={Ucima}></Route>
      <Route exact path="/contact" component={Contact}></Route>
    </Switch>
  );
};

export default Main;
