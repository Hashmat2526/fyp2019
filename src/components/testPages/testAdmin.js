import React, { Component } from 'react';

class AdminPanel extends Component {

  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 col-sm-12 col-12 header-part">
            <div class="row">
              <div class="text-center logo-part">
                <h1><a href="#">Bio Lab</a></h1>
              </div>
              <div class="header-center-part text-center">
                <span>Admin Panel</span>
              </div>
              <div class="header-right text-right">
                <i class="far fa-envelope"></i>
                <i class="far fa-bell"></i>
                <img src="https://lh3.googleusercontent.com/uFp_tsTJboUY7kue5XAsGA=s46" />
                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                  Admin
						    </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Sign in</a>
                  <a class="dropdown-item" href="#">Log Out</a>
                </div>
              </div>
              <div style="clear:both;"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="sidebar">
            <ul class="main-menu">
              <li class="active"><a href="#"><i class="fas fa-tasks"></i> Dashboard</a></li>
              <li class="main-sub-menu"><a href="#"><i class="fas fa-home"></i> Home <i class="fas fa-angle-right"></i></a>
                <ul class="sub-menu">
                  <li><a href="#p">sub home</a></li>
                  <li><a href="#"> sub home</a></li>
                </ul>
              </li>
              <li class="main-sub-menu"><a href="#"><i class="fas fa-images"></i> Gallery <i class="fas fa-angle-right"></i></a>
                <ul class="sub-menu">
                  <li><a href="#p"> 2017</a></li>
                  <li class="sub-active"><a href="#"> 2018</a></li>
                  <li><a href="#"> 2019</a></li>
                  <li><a href="#"> 2020</a></li>
                </ul>
              </li>
              <li class="main-sub-menu"><a href="#"><i class="fas fa-phone"></i> Contact <i class="fas fa-angle-right"></i></a>
                <ul class="sub-menu">
                  <li><a href="#"> sub Contact</a></li>
                  <li><a href="#"> sub Contact</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="col-lg-9 content-main">
            <div class="content">
              <h1>Content</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPanel;