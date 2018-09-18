import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import $ from 'jquery';



const HeaderStyle = styled.div`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800');
@import url('https://fonts.googleapis.com/css?family=Lobster');

a {
  text-decoration: none;
}
.button {
  display: inline-block;
  margin-top: 20px;
  padding: 8px 25px;
  border-radius: 4px;
}
.button-primary {
  position: relative;
  background-color: #c0ca33;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  transition: color 0.3s ease-in;
  z-index: 1;
}
.button-primary:hover {
  color: #c0ca33;
  text-decoration: none;
}
.button-primary::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: #fff;
  border-radius: 4px;
  opacity: 0;
  -webkit-transform: scaleX(0.8);
  -ms-transform: scaleX(0.8);
  transform: scaleX(0.8);
  transition: all 0.3s ease-in;
  z-index: -1;
}
.button-primary:hover::after {
  opacity: 1;
  -webkit-transform: scaleX(1);
  -ms-transform: scaleX(1);
  transform: scaleX(1);
}
.overlay::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, .3);
}
.header-area {
  position: relative;
  height: 11vh;
  background: #5bc0de;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repear;
  background-size: cover;
}
.navbar {
  position: absolute;
  left: 0;
  top: 0;
  padding: 0;
  width: 100%;
  transition: background 0.6s ease-in;
  z-index: 99999;
}
.navbar .navbar-brand {
  font-family: 'Lobster', cursive;
  font-size: 2.5rem;
}
.navbar .navbar-toggler {
  position: relative;
  height: 50px;
  width: 50px;
  border: none;
  cursor: pointer;
  outline: none;
}
.navbar .navbar-toggler .menu-icon-bar {
  position: absolute;
  left: 15px;
  right: 15px;
  height: 2px;
  background-color: #fff;
  opacity: 0;
  -webkit-transform: translateY(-1px);
  -ms-transform: translateY(-1px);
  transform: translateY(-1px);
  transition: all 0.3s ease-in;
}
.navbar .navbar-toggler .menu-icon-bar:first-child {
  opacity: 1;
  -webkit-transform: translateY(-1px) rotate(45deg);
  -ms-sform: translateY(-1px) rotate(45deg);
  transform: translateY(-1px) rotate(45deg);
}
.navbar .navbar-toggler .menu-icon-bar:last-child {
  opacity: 1;
  -webkit-transform: translateY(-1px) rotate(135deg);
  -ms-sform: translateY(-1px) rotate(135deg);
  transform: translateY(-1px) rotate(135deg);
}
.navbar .navbar-toggler.collapsed .menu-icon-bar {
  opacity: 1;
}
.navbar .navbar-toggler.collapsed .menu-icon-bar:first-child {
  -webkit-transform: translateY(-7px) rotate(0);
  -ms-sform: translateY(-7px) rotate(0);
  transform: translateY(-7px) rotate(0);
}
.navbar .navbar-toggler.collapsed .menu-icon-bar:last-child {
  -webkit-transform: translateY(5px) rotate(0);
  -ms-sform: translateY(5px) rotate(0);
  transform: translateY(5px) rotate(0);
}
.navbar-dark .navbar-nav .nav-link {
  position: relative;
  color: #fff;
  font-size: 1.6rem;
}
.navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {
  color: #fff;
}
.navbar .dropdown-menu {
  padding: 0;
  background-color: rgba(0, 0, 0, .9);
}
.navbar .dropdown-menu .dropdown-item {
  position: relative;
  padding: 10px 20px;
  color: #fff;
  font-size: 1.4rem;
  border-bottom: 1px solid rgba(255, 255, 255, .1);
  transition: color 0.2s ease-in;
}
.navbar .dropdown-menu .dropdown-item:last-child {
  border-bottom: none;
}
.navbar .dropdown-menu .dropdown-item:hover {
  background: transparent;
  color: #c0ca33;
}
.navbar .dropdown-menu .dropdown-item::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  width: 5px;
  background-color: #c0ca33;
  opacity: 0;
  transition: opacity 0.2s ease-in;
}
.navbar .dropdown-menu .dropdown-item:hover::before {
  opacity: 1;
}
.navbar.fixed-top {
  position: fixed;
  -webkit-animation: navbar-animation 0.6s;
  animation: navbar-animation 0.6s;
  background-color: rgba(0, 0, 0, .9);
}
.navbar.fixed-top.navbar-dark .navbar-nav .nav-link.active {
  color: #c0ca33;
}
.navbar.fixed-top.navbar-dark .navbar-nav .nav-link::after {
  background-color: #c0ca33;
}
.content {
  padding: 120px 0;
}
@media screen and (max-width: 768px) {
  .navbar-brand {
    margin-left: 20px;
  }
  .navbar-nav {
    padding: 0 20px;
    background-color: rgba(0, 0, 0, .9);
  }
  .navbar.fixed-top .navbar-nav {
    background: transparent;
  }
}
@media screen and (min-width: 767px) {
  .navbar-dark .navbar-nav .nav-link {
    padding: 23px 15px;
  }
  .navbar-dark .navbar-nav .nav-link::after {
    content: '';
    position: absolute;
    bottom: 15px;
    left: 30%;
    right: 30%;
    height: 1px;
    background-color: #fff;
    -webkit-transform: scaleX(0);
    -ms-transform: scaleX(0);
    transform: scaleX(0);
    transition: transform 0.1s ease-in;
  }
  .navbar-dark .navbar-nav .nav-link:hover::after {
    -webkit-transform: scaleX(1);
    -ms-transform: scaleX(1);
    transform: scaleX(1);
  }
  
}
@-webkit-keyframes navbar-animation {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes navbar-animation {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}
@-webkit-keyframes dropdown-animation {
  0% {
    -webkit-transform: scaleY(0);
    -ms-transform: scaleY(0);
    transform: scaleY(0);
  }
  75% {
    -webkit-transform: scaleY(1.1);
    -ms-transform: scaleY(1.1);
    transform: scaleY(1.1);
  }
  100% {
    -webkit-transform: scaleY(1);
    -ms-transform: scaleY(1);
    transform: scaleY(1);
  }
}
@keyframes dropdown-animation {
  0% {
    -webkit-transform: scaleY(0);
    -ms-transform: scaleY(0);
    transform: scaleY(0);
  }
  75% {
    -webkit-transform: scaleY(1.1);
    -ms-transform: scaleY(1.1);
    transform: scaleY(1.1);
  }
  100% {
    -webkit-transform: scaleY(1);
    -ms-transform: scaleY(1);
    transform: scaleY(1);
  }
}

  
`


class Header extends Component {
  componentDidMount() {
    $(window).on('scroll', function () {
      if ($(this).scrollTop() >= 200) {
        $('.navbar').addClass('fixed-top');
      } else if ($(this).scrollTop() == 0) {
        $('.navbar').removeClass('fixed-top');
      }
    });

    function adjustNav() {
      var winWidth = $(window).width(),
        dropdown = $('.dropdown'),
        dropdownMenu = $('.dropdown-menu');

      if (winWidth >= 768) {
        dropdown.on('mouseenter', function () {
          $(this).addClass('show')
            .children(dropdownMenu).addClass('show');
        });

        dropdown.on('mouseleave', function () {
          $(this).removeClass('show')
            .children(dropdownMenu).removeClass('show');
        });
      } else {
        dropdown.off('mouseenter mouseleave');
      }
    }
  }
  render() {
    return (
      <HeaderStyle>
        <header class="header-area overlay">
          <nav class="navbar navbar-expand-md navbar-dark">
            <div class="container">
              <a href="#" class="navbar-brand">BioLab.com</a>

              <button type="button" class="navbar-toggler collapsed" data-toggle="collapse" data-target="#main-nav">
                <span class="menu-icon-bar"></span>
                <span class="menu-icon-bar"></span>
                <span class="menu-icon-bar"></span>
              </button>

              <div id="main-nav" class="collapse navbar-collapse ">
                <ul class="navbar-nav ml-auto">
                  <Link to="/"><a href="#" class="nav-item nav-link active">Home</a></Link>
                  <Link to="/about"><a href="#" class="nav-item nav-link">About Us</a></Link>
                  <Link to="/productspage"><a href="#" class="nav-item nav-link">All Products</a></Link>
                  <Link to="/chemicals" class="dropdown">
                    <a href="#" class="nav-item nav-link" data-toggle="dropdown">Chemicals</a>
                    <div class="dropdown-menu">
                      <a href="#" class="dropdown-item">Chemical 1 </a>
                      <a href="#" class="dropdown-item">Chemical 2</a>
                      <a href="#" class="dropdown-item">Chemical 3</a>
                    </div>
                  </Link>
                  <Link to="equipment" class="dropdown">
                    <a href="#" class="nav-item nav-link" data-toggle="dropdown">Equipment</a>
                    <div class="dropdown-menu">
                      <a href="#" class="dropdown-item">Equipment 1</a>
                      <a href="#" class="dropdown-item">Equipment 2</a>
                      <a href="#" class="dropdown-item">Equipment 3</a>
                      <a href="#" class="dropdown-item">Equipment 4</a>
                      <a href="#" class="dropdown-item">Equipmen 5</a>
                    </div>
                  </Link>
                  <Link to="/contact"><a href="#" class="nav-item nav-link">Contact</a></Link>
                  <Link to="/checkout"><a href="#" class="nav-item nav-link">Checkout</a></Link>

                  <Link to="/login"><a href="#" style={{ float: "right" }}
                    class="nav-item nav-link">Login</a></Link>
                  <Link to="/signup"><a href="#" style={{ float: "right" }}
                    class="nav-item nav-link">SignUp</a></Link>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </HeaderStyle >
    );
  }
}

export default Header;