import React, { Component } from 'react';
import './index.css';
import $ from "jquery";
import { Switch, Route, Link } from 'react-router-dom';
import ViewProducts from "./viewProducts";
import AddProduct from "../testPages/addProduct";
class Index extends Component {
  componentDidMount() {
    //   $(function () {
    //     $('.navbar-toggle-sidebar').click(function () {
    //       $('.navbar-nav').toggleClass('slide-in');
    //       $('.side-body').toggleClass('body-slide-in');
    //       $('#search').removeClass('in').addClass('collapse').slideUp(200);
    //     });

    //     $('#search-trigger').click(function () {
    //       $('.navbar-nav').removeClass('slide-in');
    //       $('.side-body').removeClass('body-slide-in');
    //       $('.search-input').focus();
    //     });
    //   });
  }
  render() {
    return (
      <div className="clearfix">
        <nav class="navbar navbar-default navbar-static-top">
          <div class="container-fluid">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div class="navbar-header">
              <button type="button" class="navbar-toggle navbar-toggle-sidebar collapsed">
                MENU
			</button>
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand">
                Admin Panel
			</a>


            </div>

            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <form class="navbar-form navbar-left" method="GET" role="search">
                <div class="form-group">
                  <input type="text" name="q" class="form-control" placeholder="Search" />
                </div>
                <button type="submit" class="btn btn-default"><i class="glyphicon glyphicon-search"></i></button>
              </form>
              <ul class="nav navbar-nav navbar-right">
                <li><a href="http://www.pingpong-labs.com" target="_blank">BIO LAB</a></li>
                <li class="dropdown ">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                    Account
						<span class="caret"></span></a>
                  <ul class="dropdown-menu" role="menu">
                    <li class="dropdown-header">SETTINGS</li>
                    <li class=""><a href="#">Edit Profile</a></li>
                    <li class=""><a href="#">View Profile</a></li>
                    <li class="divider"></li>
                    <li><a href="#">Logout</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* <!-- /.navbar-collapse --> */}
          </div>
          {/* <!-- /.container-fluid --> */}
        </nav>
        <div class="container-fluid main-container">
          <div class="col-md-2 sidebar">
            <div class="row">
              {/* <!-- uncomment code for absolute positioning tweek see top comment in css --> */}
              <div class="absolute-wrapper"> </div>
              {/* <!-- Menu --> */}
              <div class="side-menu">
                <nav class="navbar navbar-default" role="navigation">
                  {/* <!-- Main Menu --> */}
                  <div class="side-menu-container">
                    <ul class="nav navbar-nav">
                      <li class="active"><a ><span class="glyphicon glyphicon-dashboard">
                      </span> Dashboard</a></li>
                      <li> <Link to={this.props.match.path + "/viewProducts"}>
                        <a ><span class="glyphicon glyphicon-plane">
                        </span> View Products</a></Link></li>
                      <li><Link to={this.props.match.path + "/addProduct"}><a  ><span class="glyphicon glyphicon-cloud">

                      </span> Add Products</a></Link></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>  		</div>
          <div className="col-md-10">
            <Switch>
              <Route path={this.props.match.path + "/viewProducts"} component={ViewProducts} />
              <Route path={this.props.match.path + "/addProduct"} component={AddProduct} />
            </Switch>
          </div>

        </div >
        <footer class="pull-left footer">
          <p class="col-md-12">
            <hr class="divider" />
            Copyright &COPY; 2018 <a href="#">BIO LAB</a>
          </p>
        </footer>
      </div >
    );
  }
}

export default Index;