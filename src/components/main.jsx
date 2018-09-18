import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./testPages/home";
import Contact from "./testPages/contact";
import About from "../pages/about";
import Chemicals from "../pages/chemicals";
import Equipment from "../pages/equipment";
import Products from "../pages/products";
import Checkout from "./testPages/checkout";
import ProductDetails from "./testPages/productDetails";
import ProductsPage from "./testPages/productsPage"
import AddProduct from "./testPages/addProduct";
import Login from "./testPages/loginForm";
import Index from "./adminComponents/index";
import ViewProducts from "./adminComponents/viewProducts";

import SignUp from './testPages/signUp';

const Main = () => (
  <Switch>

    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/chemicals" component={Chemicals} />
    <Route exact path="/equipment" component={Equipment} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/checkout" component={Checkout} />
    <Route exact path="/productDetails/:id" component={ProductDetails} />
    <Route exact path="/productsPage" component={ProductsPage} />
    <Route exact path="/addproduct" component={AddProduct} />
    <Route exact path="/signUp" component={SignUp} />
    <Route exact path="/login" component={Login} />
    <Route path="/admin" component={Index} />
    <Route exact path="/viewProducts" component={ViewProducts} />
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Main;
