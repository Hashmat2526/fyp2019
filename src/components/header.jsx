import React, { Component } from "react";
import { Link } from "react-router-dom";


class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-light bg-light ">
        <a class="navbar-brand " to="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav offset-3 mr-auto">
            <Link class="nav-item active" to="/">
              <a class="nav-link" >Home <span class="sr-only">(current)</span></a>
            </Link>
            <Link class="nav-item" to="/products">
              <a class="nav-link" >Products</a>
            </Link>
            <Link class="nav-item" to="/about">
              <a class="nav-link" >About</a>
            </Link>
            <Link class="nav-item" to="/contact">
              <a class="nav-link" >Contact</a>
            </Link>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }
}

export default Header;
