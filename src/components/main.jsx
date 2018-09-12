import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";
import About from "../pages/about";
import Chemicals from "../pages/chemicals";
import Equipment from "../pages/equipment";
import Products from "../pages/products";
import Checkout from "../pages/checkout";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/chemicals" component={Chemicals} />
    <Route path="/equipment" component={Equipment} />
    <Route path="/products" component={Products} />
    <Route path="/checkout" component={Checkout} />
  </Switch>
);

export default Main;
