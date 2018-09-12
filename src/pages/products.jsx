import React, { Component } from "react";
import './product.css';
import biotech from "../images/biotechNew.jpg";
import drug from "../images/drugDiscovery.jpg";
import immun from "../images/immunologyNew.jpg";
import molecularBio from "../images/molecularbiologyNew.jpg";
import tissue from "../images/tissueCultureNew.jpg";
import mb from "../images/mb.jpg";

import $ from 'jquery';

class Products extends Component {

  componentDidMount() {
    $(document).ready(function () {
      $('#list').click(function (event) { event.preventDefault(); $('#products .item').addClass('list-group-item'); });
      $('#grid').click(function (event) { event.preventDefault(); $('#products .item').removeClass('list-group-item'); $('#products .item').addClass('grid-group-item'); });
    });
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-12 my-3">
            <div class="pull-right">
              <div class="btn-group d-none d-md-block d-lg-block">
                <button class="btn btn-info" id="list">
                  List View
                    </button>
                <button class="btn btn-danger" id="grid">
                  Grid View
                    </button>
              </div>
            </div>
          </div>
        </div>
        <div id="products" class="row view-group">
          <div class="item col-xs-4 col-md-6 col-lg-4">
            <figure class="snip1249">
              <div class="image">
                <img src={biotech} alt="sample71" /><i class="ion-ios-camera-outline"></i>
              </div>
              <figcaption>
                <h3>Bio Technology</h3>
                <p>Weekends don't count unless spent doing something completely pointless.</p>
                <div class="price">
                  <s>$98.00</s>$74.00
                </div>
                <a href="#" class="add-to-cart">Add to Cart</a>
              </figcaption>
            </figure>
          </div>
          <div class="item col-xs-4 col-md-6 col-lg-4">
            <figure class="snip1249">
              <div class="image">
                <img src={drug} alt="sample71" /><i class="ion-ios-camera-outline"></i>
              </div>
              <figcaption>
                <h3>Drug Discovery</h3>
                <p>Weekends don't count unless spent doing something completely pointless.</p>
                <div class="price">
                  <s>$98.00</s>$74.00
                </div>
                <a href="#" class="add-to-cart">Add to Cart</a>
              </figcaption>
            </figure>
          </div>
          <div class="item col-xs-4 col-md-6 col-lg-4">
            <figure class="snip1249">
              <div class="image">
                <img src={mb} alt="sample71" /><i class="ion-ios-camera-outline"></i>
              </div>
              <figcaption>
                <h3>Micro Biology</h3>
                <p>Weekends don't count unless spent doing something completely pointless.</p>
                <div class="price">
                  <s>$98.00</s>$74.00
                </div>
                <a href="#" class="add-to-cart">Add to Cart</a>
              </figcaption>
            </figure>
          </div>
        </div>
        <div id="products" class="row view-group">
          <div class="item col-xs-4 col-md-6 col-lg-4">
            <figure class="snip1249">
              <div class="image">
                <img src={molecularBio} alt="sample71" /><i class="ion-ios-camera-outline"></i>
              </div>
              <figcaption>
                <h3>Molecular Biology</h3>
                <p>Weekends don't count unless spent doing something completely pointless.</p>
                <div class="price">
                  <s>$98.00</s>$74.00
                </div>
                <a href="#" class="add-to-cart">Add to Cart</a>
              </figcaption>
            </figure></div>
          {/* another row */}
          <div class="item col-xs-4 col-md-6 col-lg-4">
            <figure class="snip1249">
              <div class="image">
                <img src={tissue} alt="sample71" /><i class="ion-ios-camera-outline"></i>
              </div>
              <figcaption>
                <h3>Tissue Culturing</h3>
                <p>Weekends don't count unless spent doing something completely pointless.</p>
                <div class="price">
                  <s>$98.00</s>$74.00
              </div>
                <a href="#" class="add-to-cart">Add to Cart</a>
              </figcaption>
            </figure>
          </div>
          <div class="item col-xs-4 col-md-6 col-lg-4">
            <figure class="snip1249">
              <div class="image">
                <img src={immun} alt="sample71" /><i class="ion-ios-camera-outline"></i>
              </div>
              <figcaption>
                <h3>Immunology</h3>
                <p>Weekends don't count unless spent doing something completely pointless.</p>
                <div class="price">
                  <s>$98.00</s>$74.00
              </div>
                <a href="#" class="add-to-cart">Add to Cart</a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
