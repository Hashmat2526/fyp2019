import React, { Component } from 'react';
import styled from 'styled-components';

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
                    <a href="#" class="active"><i class=" fa fa-angle-right"></i> Dress</a>
                    <ul class="nav">
                      <li class="active"><a href="#">- Shirt</a></li>
                      <li><a href="#">- Pant</a></li>
                      <li><a href="#">- Shoes</a></li>
                    </ul>
                  </li>
                  <li><a href="#"><i class=" fa fa-angle-right"></i> Bags &amp; Purses</a></li>
                  <li><a href="#"><i class=" fa fa-angle-right"></i> Beauty</a></li>
                  <li><a href="#"><i class=" fa fa-angle-right"></i> Coat &amp; Jacket</a></li>
                  <li><a href="#"><i class=" fa fa-angle-right"></i> Jeans</a></li>
                  <li><a href="#"><i class=" fa fa-angle-right"></i> Jewellery</a></li>
                  <li><a href="#"><i class=" fa fa-angle-right"></i> Electronics</a></li>
                  <li><a href="#"><i class=" fa fa-angle-right"></i> Sports</a></li>
                  <li><a href="#"><i class=" fa fa-angle-right"></i> Technology</a></li>
                  <li><a href="#"><i class=" fa fa-angle-right"></i> Watches</a></li>
                  <li><a href="#"><i class=" fa fa-angle-right"></i> Accessories</a></li>
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
                      <option>Wallmart</option>
                      <option>Catseye</option>
                      <option>Moonsoon</option>
                      <option>Textmart</option>
                    </select><span class="customSelect form-control" style={{ display: "inline-block" }}> <span class="customSelectInner" style={{ width: "209px", display: "inline-block" }}>Wallmart</span></span>
                  </div>
                  <div class="form-group">
                    <label>Color</label>
                    <select class="form-control hasCustomSelect" style={{ webkitAppearance: "menulist-button", width: "231px", position: "absolute", opacity: "0", height: "34px", fontSize: "12px" }}>
                      <option>White</option>
                      <option>Black</option>
                      <option>Red</option>
                      <option>Green</option>
                    </select><span class="customSelect form-control" style={{ display: "inline-block" }}><span class="customSelectInner" style={{ width: "209px", display: "inline-block" }}>White</span></span>
                  </div>
                  <div class="form-group">
                    <label>Type</label>
                    <select class="form-control hasCustomSelect" style={{ webkitAppearance: "menulist-button", width: "231px", position: "absolute", opacity: "0", height: "34px", fontSize: "12px" }}>
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                      <option>Extra Large</option>
                    </select><span class="customSelect form-control" style={{ display: "inline-block" }}><span class="customSelectInner" style={{ width: "209px", display: "inline-block" }}>Small</span></span>
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
                      <img src="http://thevectorlab.net/flatlab/img/product1.jpg" />
                    </a>
                    <div class="media-body">
                      <a href="#" class=" p-head">Item One Tittle</a>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </article>
                  <article class="media">
                    <a class="pull-left thumb p-thumb">
                      <img src="http://thevectorlab.net/flatlab/img/product2.png" />
                    </a>
                    <div class="media-body">
                      <a href="#" class=" p-head">Item Two Tittle</a>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </article>
                  <article class="media">
                    <a class="pull-left thumb p-thumb">
                      <img src="http://thevectorlab.net/flatlab/img/product3.png" />
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
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="http://thevectorlab.net/flatlab/img/product-list/pro-1.jpg" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Leopard Shirt Dress
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="http://thevectorlab.net/flatlab/img/product-list/pro1.jpg" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Leopard Shirt Dress
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="http://thevectorlab.net/flatlab/img/product-list/pro2.jpg" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Leopard Shirt Dress
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="http://thevectorlab.net/flatlab/img/product-list/pro3.jpg" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Leopard Shirt Dress
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="http://thevectorlab.net/flatlab/img/product-list/pro-1.jpg" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Leopard Shirt Dress
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="http://thevectorlab.net/flatlab/img/product-list/pro2.jpg" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Leopard Shirt Dress
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="http://thevectorlab.net/flatlab/img/product-list/pro1.jpg" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Leopard Shirt Dress
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="http://thevectorlab.net/flatlab/img/product-list/pro3.jpg" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Leopard Shirt Dress
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="http://thevectorlab.net/flatlab/img/product-list/pro-1.jpg" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Leopard Shirt Dress
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="http://thevectorlab.net/flatlab/img/product-list/pro1.jpg" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Leopard Shirt Dress
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="http://thevectorlab.net/flatlab/img/product-list/pro3.jpg" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Leopard Shirt Dress
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="http://thevectorlab.net/flatlab/img/product-list/pro-1.jpg" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Leopard Shirt Dress
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="http://thevectorlab.net/flatlab/img/product-list/pro3.jpg" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Leopard Shirt Dress
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="http://thevectorlab.net/flatlab/img/product-list/pro-1.jpg" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Leopard Shirt Dress
                          </a>
                    </h4>
                    <p class="price">$300.00</p>
                  </div>
                </section>
              </div>
              <div class="col-md-4">
                <section class="panel">
                  <div class="pro-img-box">
                    <img src="http://thevectorlab.net/flatlab/img/product-list/pro2.jpg" alt="" />
                    <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>

                  <div class="panel-body text-center">
                    <h4>
                      <a href="#" class="pro-title">
                        Leopard Shirt Dress
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