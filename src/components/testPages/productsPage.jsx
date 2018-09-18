import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ProductsStyle = styled.div`
/*panel*/
.panel {
    border: none;
    box-shadow: none;
}

.panel-heading {
    border-color:#eff2f7 ;
    font-size: 16px;
    font-weight: 300;
}

.panel-title {
    color: #2A3542;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 0;
    margin-top: 0;
    font-family: 'Open Sans', sans-serif;
}


/*product list*/

.prod-cat li a{
    border-bottom: 1px dashed #d9d9d9;
}

.prod-cat li a {
    color: #3b3b3b;
}

.prod-cat li ul {
    margin-left: 30px;
}

.prod-cat li ul li a{
    border-bottom:none;
}
.prod-cat li ul li a:hover,.prod-cat li ul li a:focus, .prod-cat li ul li.active a , .prod-cat li a:hover,.prod-cat li a:focus, .prod-cat li a.active{
    background: none;
    color: #ff7261;
}

.pro-lab{
    margin-right: 20px;
    font-weight: normal;
}

.pro-sort {
    padding-right: 20px;
    float: left;
}

.pro-page-list {
    margin: 5px 0 0 0;
}

.product-list img{
    width: 100%;
    border-radius: 4px 4px 0 0;
    -webkit-border-radius: 4px 4px 0 0;
}

.product-list .pro-img-box {
    position: relative;
}
.adtocart {
    background: #fc5959;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    color: #fff;
    display: inline-block;
    text-align: center;
    border: 3px solid #fff;
    left: 45%;
    bottom: -25px;
    position: absolute;
}

.adtocart i{
    color: #fff;
    font-size: 25px;
    line-height: 42px;
}

.pro-title {
    color: #5A5A5A;
    display: inline-block;
    margin-top: 20px;
    font-size: 16px;
}

.product-list .price {
    color:#fc5959 ;
    font-size: 15px;
}

.pro-img-details {
    margin-left: -15px;
}

.pro-img-details img {
    width: 100%;
}

.pro-d-title {
    font-size: 16px;
    margin-top: 0;
}

.product_meta {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    margin: 15px 0;
}

.product_meta span {
    display: block;
    margin-bottom: 10px;
}
.product_meta a, .pro-price{
    color:#fc5959 ;
}

.pro-price, .amount-old {
    font-size: 18px;
    padding: 0 10px;
}

.amount-old {
    text-decoration: line-through;
}

.quantity {
    width: 120px;
}

.pro-img-list {
    margin: 10px 0 0 -15px;
    width: 100%;
    display: inline-block;
}

.pro-img-list a {
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
}

`

class ProductsPage extends Component {
  constructor(props) {
    super(props);


    this.state = {
      response1: []


    }
  };
  componentDidMount() {
    axios.get('http://localhost:2627/feedback')
      .then((response) => {
        console.log("All Orders Fetched");
        console.log(response);
        this.setState({ response1: response.data });
      }).catch((e) => {
        console.log("error:");
        console.log(e);
      });
  }

  render() {
    return (
      <ProductsStyle>
        <div class="container">
          <div class="col-md-3">
            <section class="panel">
              <div class="panel-body">
                <input type="text" placeholder="Keyword Search" class="form-control" />
              </div>
            </section>
            <section class="panel">
              <header class="panel-heading">
                Category
              </header>
              <div class="panel-body">
                <ul class="nav prod-cat">
                  <li>
                    <a href="#" class="active"><i class=" fa fa-angle-right"></i> Chemicals</a>
                    <ul class="nav">
                      <li class="active"><a href="#">- chemical 1</a></li>
                      <li><a href="#">- chemical 2</a></li>
                      <li><a href="#">- chemical 3</a></li>
                    </ul>
                  </li>
                  <li><a href="#"><i class=" fa fa-angle-right"></i> Equipment &amp; Equipment</a></li>
                  <li><a href="#"><i class=" fa fa-angle-right"></i> Lab Equipment</a></li>
                  <li><a href="#"><i class=" fa fa-angle-right"></i> Analytical &amp; Clinical</a></li>

                </ul>
              </div>
            </section>
            <section class="panel">
              <header class="panel-heading">
                Price Range
                          </header>
              <div class="panel-body sliders">
                <div id="slider-range" class="slider"></div>
                <div class="slider-info">
                  <span id="slider-range-amount"></span>
                </div>
              </div>
            </section>
            <section class="panel">
              <header class="panel-heading">
                Filter
                          </header>
              <div class="panel-body">
                <form role="form product-form">
                  <div class="form-group">
                    <label>Brand</label>
                    <select class="form-control hasCustomSelect" style={{ width: "231px", position: "absolute", opacity: "0", height: "34px", fontSize: "12px" }}>
                      <option>ThermoFisher</option>
                      <option>Bio Rad</option>
                      <option>Huber</option>
                      <option>Metrohm</option>
                    </select><span class="customSelect form-control" style={{ display: "inline-block" }}> <span class="customSelectInner" style={{ width: "209px", display: "inline-block" }}>Wallmart</span></span>
                  </div>
                  <div class="form-group">
                    <label>Model</label>
                    <select class="form-control hasCustomSelect" style={{ webkitAppearance: "menulist-button", width: "231px", position: "absolute", opacity: "0", height: "34px", fontSize: "12px" }}>
                      <option>Nano</option>
                      <option>Mano</option>
                      <option>Shuno</option>
                      <option>Tono</option>
                    </select><span class="customSelect form-control" style={{ display: "inline-block" }}><span class="customSelectInner" style={{ width: "209px", display: "inline-block" }}>White</span></span>
                  </div>
                  <button class="btn btn-primary" type="submit">Filter</button>
                </form>
              </div>
            </section>
            <section class="panel">
              <header class="panel-heading">
                Best Seller
                          </header>
              <div class="panel-body">
                <div class="best-seller">
                  <article class="media">
                    <a class="pull-left thumb p-thumb">
                      <img src="https://via.placeholder.com/279x222" />
                    </a>
                    <div class="media-body">
                      <a href="#" class=" p-head">Item One Tittle</a>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </article>
                  <article class="media">
                    <a class="pull-left thumb p-thumb">
                      <img src="https://via.placeholder.com/279x222" />
                    </a>
                    <div class="media-body">
                      <a href="#" class=" p-head">Item Two Tittle</a>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </article>
                  <article class="media">
                    <a class="pull-left thumb p-thumb">
                      <img src="https://via.placeholder.com/279x222" />
                    </a>
                    <div class="media-body">
                      <a href="#" class=" p-head">Item Three Tittle</a>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </article>
                </div>
              </div>
            </section>
          </div>
          <div class="col-md-9">
            <section class="panel">
              <div class="panel-body">
                <div class="pull-right">
                  <ul class="pagination pagination-sm pro-page-list">

                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">»</a></li>
                  </ul>
                </div>
              </div>
            </section>

            <div class="row product-list">
              {this.state.response1 != null && this.state.response1.map(function (p, key) {

                return (
                  <div class="col-md-4">
                    <section class="panel">
                      <div class="pro-img-box">
                        <Link to={"/productDetails/" + p._id} >
                          <img src="https://via.placeholder.com/279x222" alt="" /></Link>
                        <a href="#" class="adtocart">
                          <i class="fa fa-shopping-cart"></i>
                        </a>
                      </div>

                      <div class="panel-body text-center">
                        <h4>
                          <a href="#" class="pro-title">
                            {p.name}
                          </a>
                        </h4>
                        <p class="price">{p.price}</p>
                      </div>
                    </section>
                  </div>);
              }, this)}
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="https://via.placeholder.com/279x222" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Prpduct Name
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="https://via.placeholder.com/279x222" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Prpduct Name
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="https://via.placeholder.com/279x222" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Prpduct Name
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="https://via.placeholder.com/279x222" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Prpduct Name
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="https://via.placeholder.com/279x222" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Prpduct Name
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="https://via.placeholder.com/279x222" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Prpduct Name
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="https://via.placeholder.com/279x222" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Prpduct Name
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="https://via.placeholder.com/279x222" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Prpduct Name
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="https://via.placeholder.com/279x222" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Prpduct Name
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="https://via.placeholder.com/279x222" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Prpduct Name
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="https://via.placeholder.com/279x222" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Prpduct Name
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="https://via.placeholder.com/279x222" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Prpduct Name
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>

              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="https://via.placeholder.com/279x222" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Prpduct Name
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </ProductsStyle>
    );
  }
}

export default ProductsPage;