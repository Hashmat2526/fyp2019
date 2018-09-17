import React, { Component } from 'react';
import styled from 'styled-components';
import $ from 'jquery'

const FProductsStyle = styled.div`
  .pt-5 , .py-5 {
    padding: 1px !important;
  }
 
.title {
    text-transform: uppercase;
    color: #444;
    padding: 1em 0 .5rem 0;
    position: relative;
    text-align: left;
    margin-bottom: .5rem;
    font-weight: 600;
    font-size: 1.20em;
    font-family: Arial, Helvetica, sans-serif;
        margin-top: 0px;
    display: block;
    padding-top: 0px;
    cursor: pointer;
}
// products cards style
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
@import url(https://fonts.googleapis.com/css?family=Oswald:300,400);
.snip1423 {
  font-family: 'Oswald', Arial, sans-serif;
  position: relative;
  float: left;
  margin: 20px 1%;
  min-width: 230px;
  max-width: 315px;
  width: 100%;
  background: #ffffff;
  text-align: center;
  color: #000000;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  padding: 15px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
.snip1423 * {
  -webkit-box-sizing: padding-box;
  box-sizing: padding-box;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
.snip1423 img {
  max-width: 100%;
  vertical-align: top;
  position: relative;
}
.snip1423 figcaption {
  padding: 20px 15px;
}
.snip1423 h3,
.snip1423 p {
  margin: 0;
}
.snip1423 h3 {
  font-size: 1.3em;
  font-weight: 400;
  margin-bottom: 5px;
  text-transform: uppercase;
}
.snip1423 p {
  font-size: 0.9em;
  letter-spacing: 1px;
  font-weight: 300;
}
.snip1423 .price {
  font-weight: 500;
  font-size: 1.4em;
  line-height: 48px;
  letter-spacing: 1px;
}
.snip1423 .price s {
  margin-right: 5px;
  opacity: 0.5;
  font-size: 0.9em;
}
.snip1423 i {
  position: absolute;
  bottom: 0;
  left: 50%;
  -webkit-transform: translate(-50%, 50%);
  transform: translate(-50%, 50%);
  width: 56px;
  line-height: 56px;
  text-align: center;
  border-radius: 50%;
  background-color: #666666;
  color: #ffffff;
  font-size: 1.6em;
  border: 4px solid #ffffff;
}
.snip1423 a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.snip1423:hover,
.snip1423.hover {
  -webkit-transform: translateY(-5px);
  transform: translateY(-5px);
}
.snip1423:hover i,
.snip1423.hover i {
  background-color: #2980b9;
}
// products slides

.slider-item{
  border: 1px solid #E1E1E1;
  border-radius: 5px;
  background: #FFF;
}
.slider-item .slider-image img{
  margin: 0 auto;
  width: 100%;
}
.slider-item .slider-main-detail{
  padding: 10px;
  border-radius: 0 0 5px 5px;
}
.slider-item:hover .slider-main-detail{
  background-color: #dbeeee !important;
}
.slider-item .price{
  float: left;
  margin-top: 5px;
}
.slider-item .price h5{
  line-height: 20px;
  margin: 0;
}
.detail-price{
  color: #219FD1;
}
.slider-item .slider-main-detail .rating{
  color: #777;
}
.slider-item .rating{
  float: left;
  font-size: 17px;
  text-align: right;
  line-height: 52px;
  margin-bottom: 10px;
  height: 52px;
}
.slider-item .btn-add{
  width: 50%;
  float: left;
  border-right: 1px solid #E1E1E1;
}
.slider-item .btn-details{
  width: 50%;
  float: left;
}
.controls{
  margin-top: 20px;
}
.btn-info,.btn-info:visited,.btn-info:hover{
background-color: #21BBD8;
border-color: #21BBD8;
}
.btn-info{
margin-left:5px;
}
.slider-main-detail:hover{
background-color: #dbeeee !important;
}
.AddCart{
margin: 0px;
padding:5px;
border-radius:2px;
margin-right:10px;
}
.review {
margin-bottom: 5px;
padding-top:5px;
}
`

class FeaturedProducts extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <FProductsStyle>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12">
              <h3>Product Slider</h3>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6 hidden-xs">
              <div class="controls pull-right">
                <a class="left fa fa-chevron-left btn btn-info " href="#carousel-example" data-slide="prev"></a><a class="right fa fa-chevron-right btn btn-info" href="#carousel-example" data-slide="next"></a>
              </div>
            </div>
          </div>
          <div id="carousel-example" class="carousel slide hidden-xs container" data-ride="carousel" data-type="multi">
            <div class="carousel-inner container">
              <div class="item active">
                <div class="row">
                  <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="slider-item">
                      <div class="slider-image">
                        <img src="https://dummyimage.com/250x200/#cccccc/1f1b1f.png" class="img-responsive" alt="a" />
                      </div>
                      <div class="slider-main-detail">
                        <div class="slider-detail">
                          <div class="product-detail">
                            <h5>Product Name</h5>
                            <h5 class="detail-price">$187.87</h5>
                          </div>
                        </div>
                        <div class="cart-section">
                          <div class="row">
                            <div class="col-md-6 col-sm-12 col-xs-6 review">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star-o" aria-hidden="true"></i>
                              <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-6">
                              <a href="#" class="AddCart btn btn-info"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="slider-item">
                      <div class="slider-image">
                        <img src="https://dummyimage.com/250x200/#cccccc/1f1b1f.png" class="img-responsive" alt="a" />
                      </div>
                      <div class="slider-main-detail">
                        <div class="slider-detail">
                          <div class="product-detail">
                            <h5>Product Name</h5>
                            <h5 class="detail-price">$187.87</h5>
                          </div>
                        </div>
                        <div class="cart-section">
                          <div class="row">
                            <div class="col-md-6 col-sm-12 col-xs-6 review">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star-o" aria-hidden="true"></i>
                              <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-6">
                              <a href="#" class="AddCart btn btn-info"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="slider-item">
                      <div class="slider-image">
                        <img src="https://dummyimage.com/250x200/#cccccc/1f1b1f.png" class="img-responsive" alt="a" />
                      </div>
                      <div class="slider-main-detail">
                        <div class="slider-detail">
                          <div class="product-detail">
                            <h5>Product Name</h5>
                            <h5 class="detail-price">$187.87</h5>
                          </div>
                        </div>
                        <div class="cart-section">
                          <div class="row">
                            <div class="col-md-6 col-sm-12 col-xs-6 review">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star-o" aria-hidden="true"></i>
                              <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-6">
                              <a href="#" class="AddCart btn btn-info"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="slider-item">
                      <div class="slider-image">
                        <img src="https://dummyimage.com/250x200/#cccccc/1f1b1f.png" class="img-responsive" alt="a" />
                      </div>
                      <div class="slider-main-detail">
                        <div class="slider-detail">
                          <div class="product-detail">
                            <h5>Product Name</h5>
                            <h5 class="detail-price">$187.87</h5>
                          </div>
                        </div>
                        <div class="cart-section">
                          <div class="row">
                            <div class="col-md-6 col-sm-12 col-xs-6 review">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star-o" aria-hidden="true"></i>
                              <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-6">
                              <a href="#" class="AddCart btn btn-info"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="slider-item">
                      <div class="slider-image">
                        <img src="https://dummyimage.com/250x200/#cccccc/1f1b1f.png" class="img-responsive" alt="a" />
                      </div>
                      <div class="slider-main-detail">
                        <div class="slider-detail">
                          <div class="product-detail">
                            <h5>Product Name</h5>
                            <h5 class="detail-price">$187.87</h5>
                          </div>
                        </div>
                        <div class="cart-section">
                          <div class="row">
                            <div class="col-md-6 col-sm-12 col-xs-6 review">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star-o" aria-hidden="true"></i>
                              <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-6">
                              <a href="#" class="AddCart btn btn-info"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="slider-item">
                      <div class="slider-image">
                        <img src="https://dummyimage.com/250x200/#cccccc/1f1b1f.png" class="img-responsive" alt="a" />
                      </div>
                      <div class="slider-main-detail">
                        <div class="slider-detail">
                          <div class="product-detail">
                            <h5>Product Name</h5>
                            <h5 class="detail-price">$187.87</h5>
                          </div>
                        </div>
                        <div class="cart-section">
                          <div class="row">
                            <div class="col-md-6 col-sm-12 col-xs-6 review">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star-o" aria-hidden="true"></i>
                              <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-6">
                              <a href="#" class="AddCart btn btn-info"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="slider-item">
                      <div class="slider-image">
                        <img src="https://dummyimage.com/250x200/#cccccc/1f1b1f.png" class="img-responsive" alt="a" />
                      </div>
                      <div class="slider-main-detail">
                        <div class="slider-detail">
                          <div class="product-detail">
                            <h5>Product Name</h5>
                            <h5 class="detail-price">$187.87</h5>
                          </div>
                        </div>
                        <div class="cart-section">
                          <div class="row">
                            <div class="col-md-6 col-sm-12 col-xs-6 review">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star-o" aria-hidden="true"></i>
                              <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-6">
                              <a href="#" class="AddCart btn btn-info"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="slider-item">
                      <div class="slider-image">
                        <img src="https://dummyimage.com/250x200/#cccccc/1f1b1f.png" class="img-responsive" alt="a" />
                      </div>
                      <div class="slider-main-detail">
                        <div class="slider-detail">
                          <div class="product-detail">
                            <h5>Product Name</h5>
                            <h5 class="detail-price">$187.87</h5>
                          </div>
                        </div>
                        <div class="cart-section">
                          <div class="row">
                            <div class="col-md-6 col-sm-12 col-xs-6 review">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star-o" aria-hidden="true"></i>
                              <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-6">
                              <a href="#" class="AddCart btn btn-info"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FProductsStyle>
    );
  }
}

export default FeaturedProducts;