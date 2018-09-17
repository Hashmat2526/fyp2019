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
      </SearchWrapper >
    )
  }
}

export default SearchBar;

