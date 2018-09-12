import React, { Component } from "react";
import tablets from '../images/tablets.jpg';
import cat from '../images/cat.jpg';
import lap from '../images/lap.jpg';
import './home.css';
import { Link } from 'react-router-dom';
import biotech from "../images/biotechNew.jpg";
import drug from "../images/drugDiscovery.jpg";
import immun from "../images/immunologyNew.jpg";
import molecularBio from "../images/molecularbiologyNew.jpg";
import tissue from "../images/tissueCultureNew.jpg";
import mb from "../images/mb.jpg";

import $ from 'jquery';

class Home extends Component {
  componentDidMount() {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 100) {
        $(".top-nav").addClass("light-header");
      } else {
        $(".top-nav").removeClass("light-header");
      }
    });

    // Year for copy content
    $(function () {
      var theYear = new Date().getFullYear();
      $('#year').html(theYear);
    });
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md fixed-top top-nav">
          <div class="container">
            <a class="navbar-brand" href="#"><strong>BioAnalysis</strong></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"><i class="fa fa-bars" aria-hidden="true"></i></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <Link class="nav-item active" to="/">
                  <a class="nav-link" >Home <span class="sr-only">(current)</span></a>
                </Link>
                <Link class="nav-item" to="/products">
                  <a class="nav-link">Products</a>
                </Link>
                <Link class="nav-item" to="/services">
                  <a class="nav-link" >Services</a>
                </Link>
                <Link class="nav-item" to="/about">
                  <a class="nav-link" >About</a>
                </Link>
                <Link class="nav-item" to="/contact">
                  <a class="nav-link" >Contact</a>
                </Link>
                <Link class="nav-item" to="/faq">
                  <a class="nav-link" >FAQ's</a>
                </Link>
                <Link class="nav-item" to="/checkout">
                  <a class="nav-link" >Checkout</a>
                </Link>
              </ul>
            </div>
          </div>
        </nav>

        <section class="intro carousel slide " id="carouselExampleCaptions">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1" class=""></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <img class="d-none d-sm-block img-fluid" alt="First slide" src="" />
              <div class="carousel-caption ">
                <h2 class="display-4 text-white mb-2 mt-4">Special offer from Bioscience – low-temperature freezers and scales.</h2>
                <p class="text-white mb-3 px-5 lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do enim ad minim veniam, </p>
                <a href="#" class="btn btn-primary btn-capsul px-4 py-2">Explore More</a>
              </div>
            </div>
            <div class="carousel-item ">
              <img class=" img-fluid d-none d-sm-block" alt="First slide" src="" />
              <div class="carousel-caption ">
                <h2 class="display-4 text-white mb-2 mt-4">Accept the challenges so that you can feel the exhilaration of victory.</h2>
                <p class="text-white mb-3 px-5 lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do enim ad minim veniam, </p>
                <a href="#" class="btn btn-primary btn-capsul px-4 py-2">Explore More</a>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleCaptions"
            role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </section>


        <section class="info-section">
          <div class="container">
            <div class="head-box text-center mb-5">
              <h2>Products Categories</h2>
              <h6 class="text-underline-primary">This is information panel</h6>
            </div>
            <div class="three-panel-block mt-5">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <figure class="snip1563">
                    <img src={mb} alt="sample110" />
                    <figcaption>
                      <h3>Micro Biology</h3>
                      <p>The only skills I have the patience to learn are those that have no real application in life.</p>
                    </figcaption>
                    <a href="#"></a>
                  </figure>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <figure class="snip1563">
                    <img src={molecularBio} alt="sample110" />
                    <figcaption>
                      <h3>Molecular Biology</h3>
                      <p>The only skills I have the patience to learn are those that have no real application in life.</p>
                    </figcaption>
                    <a href="#"></a>
                  </figure>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <figure class="snip1563">
                    <img src={tissue} alt="sample110" />
                    <figcaption>
                      <h3>Tissue Culturing</h3>
                      <p>The only skills I have the patience to learn are those that have no real application in life.</p>
                    </figcaption>
                    <a href="#"></a>
                  </figure>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <figure class="snip1563">
                    <img src={drug} alt="sample110" />
                    <figcaption>
                      <h3>Drug Discovery</h3>
                      <p>The only skills I have the patience to learn are those that have no real application in life.</p>
                    </figcaption>
                    <a href="#"></a>
                  </figure>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <figure class="snip1563">
                    <img src={biotech} alt="sample110" />
                    <figcaption>
                      <h3>Bio Technology</h3>
                      <p>The only skills I have the patience to learn are those that have no real application in life.</p>
                    </figcaption>
                    <a href="#"></a>
                  </figure>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <figure class="snip1563">
                    <img src={immun} alt="sample110" />
                    <figcaption>
                      <h3>Immunology</h3>
                      <p>The only skills I have the patience to learn are those that have no real application in life.</p>
                    </figcaption>
                    <a href="#"></a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="info-section bg-primary py-0">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 col-lg-6 content-half mt-md-0 pl-5 pt-4">
                <div class="head-box mb-5 pl-5 mt-2">
                  <h2 class="text-white">What We Sell</h2>
                  <h6 class="text-white text-underline-rb-white">Biotechnology, informatics and genetics related drugs , chemicals and equipment</h6>
                </div>
                <ul class="pl-5">
                  <li>
                    <i class="fa fa-laptop box-round-outline" aria-hidden="true"></i>
                    <span class="list-content">
                      <strong>Chemicals</strong>
                      <br />Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                  </li>
                  <li>
                    <i class="fa fa-cloud-upload box-round-outline" aria-hidden="true"></i>
                    <span class="list-content">
                      <strong>Reagents</strong>
                      <br />Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    	</span>
                  </li>
                  <li>
                    <i class="fa fa-diamond box-round-outline" aria-hidden="true"></i>
                    <span class="list-content">
                      <strong>Equipment</strong>
                      <br />Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    	</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 p-0 m-0">
                <img src="https://grafreez.com/wp-content/temp_demos/suffi/img/intro-bg.jpg" class="img-fluid" />
              </div>
            </div></div>
        </section>

        <section class="team-section py-5">
          <div class="container">
            <div class="row mb-5">
              <div class="head-box text-center mb-5 col-md-12">
                <h2>Meet Our Team</h2>
                <h6 class="text-underline-primary mb-5">Below are the contributors of the Projects</h6>
              </div>
              <div class="col-md-4 mb-md-0 mb-sm-4">
                <div class="member-box anim-lf t-bottom">
                  <img class="img-fluid" src={tablets} alt="" />
                  <div class="overlay-content">
                    <h3 class="text-white ml-3 my-0">Hashmat Ali</h3>
                    <p class="text-white ml-3 mb-3">Web Developer</p>
                    <span class="socail-l ml-3 mb-3">
                      <a href="#" class="mr-2"><i class="fa fa-facebook box-circle-solid"></i></a>
                      <a href="#" class="mr-2"><i class="fa fa-twitter box-circle-solid"></i></a>
                      <a href="#"><i class="fa fa-dribbble box-circle-solid"></i></a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-md-0 mb-sm-4">
                <div class="member-box anim-lf t-bottom">
                  <img class="img-fluid" src={lap} alt="" />
                  <div class="overlay-content">
                    <h3 class="text-white ml-3 my-0">Mr.Rizwan Rashid</h3>
                    <p class="text-white ml-3 mb-3">Supervisor</p>
                    <span class="socail-l ml-3 mb-3">
                      <a href="#" class="mr-2"><i class="fa fa-facebook box-circle-solid"></i></a>
                      <a href="#" class="mr-2"><i class="fa fa-twitter box-circle-solid"></i></a>
                      <a href="#"><i class="fa fa-dribbble box-circle-solid"></i></a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-md-0 mb-sm-4">
                <div class="member-box anim-lf t-bottom">
                  <img class="img-fluid" src={cat} alt="" />
                  <div class="overlay-content">
                    <h3 class="text-white ml-3 my-0">Adnan Yousaf</h3>
                    <p class="text-white ml-3 mb-3">Client</p>
                    <span class="socail-l ml-3 mb-3">
                      <a href="#" class="mr-2"><i class="fa fa-facebook box-circle-solid"></i></a>
                      <a href="#" class="mr-2"><i class="fa fa-twitter box-circle-solid"></i></a>
                      <a href="#"><i class="fa fa-dribbble box-circle-solid"></i></a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="action-sec">
          <div class="container">
            <div class="action-box text-center"><h2>Have a query? Ask us </h2><a class="btn btn-theme" href="/" target="_blank" title="Submit a request form"> Submit a request form</a></div>
          </div>
          <br />
          <br />
        </section>
      </div>
    );
  }

}

export default Home;
