import React, { Component } from "react";


class Topbar extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div class="col-md-4 ">
          <ul class="social-network social-circle">
            <li><a href="#" class="icoRss" title="Rss"><i class="fa fa-rss"></i></a></li>
            <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#" class="icoTwitter" title="Twitter"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#" class="icoGoogle" title="Google +"><i class="fa fa-google-plus"></i></a></li>
            <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <span className="top_text">  Help <i class="far fa-question-circle"></i> +0123-456-789</span>
        </div>
        <span className="cart_icon"><i class="fas fa-shopping-cart"></i></span>
      </div>
    );
  }
}

export default Topbar;
