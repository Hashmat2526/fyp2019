import React, { Component } from 'react';
import { nav, form } from 'reactstrap'
import styled from "styled-components";
import searchIcon from '../../searchIcon.svg';

const SearchWrapper = styled.div`
  .main {
    display: flex,
    flex-direction: row;
    justify-content: space-around
  }
  .btn {
    display: inline;
  }
  .brand_logo span{
    text-shadow:0px 2px 2px rgba(94,60,89,0.9);
    font-weight:normal;color:#992391;
    letter-spacing:1pt;word-spacing:6pt;
    font-size:45px;text-align:center;
    font-family:arial, helvetica, sans-serif;
    line-height:2;
    cursor: pointer;
    vertical-align: middle;
    horizontal-align: center;
}
.cart {
  
  margin: auto;
  margin-top: 22px;
  line-height: 0px;
  vertical-align: middle;
  
}
.searchBox {
  background-color: green;
}

/* search button 1 */

.searchbox_1{
    
    padding:13px;
    width:335px;
    margin: 0 auto;
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    box-sizing:border-box;
    border-radius:6px;
    -webkit-box-shadow:
        0 2px 4px 0 rgba(72, 72, 72, 0.83),
        0 10px 15px 0 rgba(126, 126, 126, 0.12),
        0 -2px 6px 1px rgba(199, 199, 199, 0.55) inset, 
        0 2px 4px 2px rgba(255, 255, 255, 0.83) inset;
    -moz-box-shadow: 
        0 2px 4px 0 rgba(72, 72, 72, 0.83),
        0 10px 15px 0 rgba(126, 126, 126, 0.12),
        0 -2px 6px 1px rgba(199, 199, 199, 0.55) inset, 
        0 2px 4px 2px rgba(255, 255, 255, 0.83) inset;
    box-shadow: 
        0 2px 4px 0 rgba(72, 72, 72, 0.83),
        0 10px 15px 0 rgba(126, 126, 126, 0.12),
        0 -2px 6px 1px rgba(199, 199, 199, 0.55) inset, 
        0 2px 4px 2px rgba(255, 255, 255, 0.83) inset;
        vertical-align: center;
        horizontal-align: center;
        margin: 17px
       
        background-color: #E2EFE7;
}
.search_1{
    width:250px;
    height:30px;
    padding-left:15px;
    border:none;
    color:#0F0D0D;;
    font-weight:500;
    background-color:#E2EFF7;
    -webkit-box-shadow:
        0 -2px 2px 0 rgba(199, 199, 199, 0.55),
        0 1px 1px 0 #fff,
        0 2px 2px 1px #fafafa,
        0 2px 4px 0 #b2b2b2 inset,
        0 -1px 1px 0 #f2f2f2 inset,
        0 15px 15px 0 rgba(41, 41, 41, 0.09) inset;
    -moz-box-shadow: 
        0 -2px 2px 0 rgba(199, 199, 199, 0.55),
        0 1px 1px 0 #fff,
        0 2px 2px 1px #fafafa,
        0 2px 4px 0 #b2b2b2 inset,
        0 -1px 1px 0 #f2f2f2 inset,
        0 15px 15px 0 rgba(41, 41, 41, 0.09) inset;
    box-shadow:
        0 -2px 2px 0 rgba(199, 199, 199, 0.55),
        0 1px 1px 0 #fff,
        0 2px 2px 1px #fafafa,
        0 2px 4px 0 #b2b2b2 inset,
        0 -1px 1px 0 #f2f2f2 inset,
        0 15px 15px 0 rgba(41, 41, 41, 0.09) inset;
        
        
        
}
.submit_1{
    width:35px;
    height:30px;
    background-repeat: no-repeat;
    background-position: 17px 2px;
    background-color:transparent;
    -webkit-background-size:20px 20px;
    background-size:20px 20px;
    border:none;
    cursor:pointer;
    margin-left:0px;
}
.search_1:focus{
    outline:0;
}
.searchIcon {
  width: inherit;
  height: 30px;
  maring-bottom: 17px;
  // border: 1px solid black
  
  background-color: #E2EFF7;
  box-shadow:
  0 -2px 2px 0 rgba(199, 199, 199, 0.55),
  0 1px 1px 0 #fff,
  0 2px 2px 1px #fafafa,
  0 2px 4px 0 #b2b2b2 inset,
  0 -1px 1px 0 #f2f2f2 inset,
  0 15px 15px 0 rgba(41, 41, 41, 0.09) inset;
}


`


class SearchBar extends Component {
  state = {
    query: '',
  }
  render() {
    return (
      <SearchWrapper>
        <div className="main">
          <div className="row">
            <div className="col-md-2 col-sm-12 offset-md-1">
              <div className="brand_logo">
                <a className=" visible-md visible-lg">
                  <span>BioLab</span>
                </a>
              </div>
            </div>  {/* end column brand */}
            <div className="col-md-4 col-sm-12 searchbox">
              <form class="searchbox_1" action="">
                <input type="search" class="search_1" placeholder="Search" />
                <button type="submit" class="submit_1" ><img className="searchIcon" src={searchIcon} /></button>
              </form>
            </div>
            <div className="col-md-4 col-sm-12 offset-md-2 cart">
              <a href="#" class="btn btn-info btn-sm">
                <span class="glyphicon glyphicon-shopping-cart"></span> Shopping Cart
              </a>
              <p><span>$0 cart</span></p>

            </div>

          </div>    {/*  end row */}

          <div class="row justify-content-end"><div class="col-xs-6"><nav class="navbar navbar-expand float-sm-left"> <ul class="navbar-nav w-100 text-center d-flex justify-content-center"> <!--li.nav-item.active--><li class="nav-item"><a class="nav-link" href="http://service.labx.com/">LabX Service</a></li><li class="nav-item"> <a class="nav-link" href="http://www.labwrench.com/?__hstc=6989869.4fe48b06e73658391a926a208b897ac1.1536592064838.1536724343332.1536746203872.6&amp;__hssc=6989869.1.1536746203872&amp;__hsfp=1707504307">LabWrench</a></li><!--li.nav-itema.nav-link(href="http://www.labmanager.com/") LabManager--><!--li.nav-item a.nav-link(href="http://www.the-scientist.com/") The Scientist--></ul></nav></div><div class="col-xs-6"><nav class="navbar navbar-expand float-sm-right"> <ul class="navbar-nav w-100 text-center d-flex justify-content-center"><li class="nav-item"> <svg class="svg-inline--fa fa-usd-circle fa-w-16" aria-hidden="true" data-prefix="far" data-icon="usd-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M291 244l-72-21.9c-9-2.8-15.2-12.1-15.2-22.7 0-12.9 9.2-23.4 20.5-23.4h45c7 0 13.8 1.9 19.9 5.4 6.4 3.7 14.3 3.4 19.7-1.6l12-11.3c7.6-7.2 6.3-19.4-2.3-25.2-13.8-9.3-29.9-14.5-46.4-15.1V112c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v16c-37.6.1-68.2 32.1-68.2 71.4 0 31.5 20.2 59.7 49.2 68.6l72 21.9c9 2.8 15.2 12.1 15.2 22.7 0 12.9-9.2 23.4-20.5 23.4h-45c-7 0-13.8-1.9-19.9-5.4-6.4-3.7-14.3-3.4-19.7 1.6l-12 11.3c-7.6 7.2-6.3 19.4 2.3 25.2 13.8 9.3 29.9 14.5 46.4 15.1V400c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16c37.6-.1 68.2-32.1 68.2-71.4 0-31.5-20.2-59.7-49.2-68.6zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200z"></path></svg><!-- <i class="far fa-usd-circle"></i> --><a class="nav-link" href="/cms/selling-on-labx/">Sell</a></li><li class="nav-item"> <svg class="svg-inline--fa fa-lock fa-w-14" aria-hidden="true" data-prefix="far" data-icon="lock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 192h-32v-46.6C368 65.8 304 .2 224.4 0 144.8-.2 80 64.5 80 144v48H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48zm-272-48c0-52.9 43.1-96 96-96s96 43.1 96 96v48H128v-48zm272 320H48V240h352v224z"></path></svg><!-- <i class="far fa-lock"></i> --><a class="nav-link" href="/customer/account/login">Account</a></li></ul><!--li.nav-item i.fa.fa-lock-alt
a.nav-link(href="/customer/account/logout") Sign Out--></nav></div></div>

        </div>
      </SearchWrapper >
    )
  }
}

export default SearchBar;

