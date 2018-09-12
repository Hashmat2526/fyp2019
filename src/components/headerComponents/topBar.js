import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import styled from "styled-components";


const TopBar = styled.div`
  *{
    color: #5a1313; 
    font-size: 0.8rem;
    line-height: 2;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.1rem
  }
  .topBar {
    display: flex;
    flex: 1;
    flex-direction: row-reverse;
    border: 1px solid black
    padding-right: 100px;
  }
  .topBarItems {
    border: 1px solid black;
    margin-left: 5px;
  }
  .topBarItems:hover, .topBarItems:focus {
    background: green;
    color: #5a1313;
    font-style: italic
  }
`

export default class Example extends React.Component {
  render() {
    return (
      <TopBar>
        <Nav className="topBar">
          <NavItem >
            <NavLink className="topBarItems" href="#">Sell</NavLink>
          </NavItem>
          <NavItem >
            <NavLink className="topBarItems" href="#">Account</NavLink>
          </NavItem>
        </Nav>
      </TopBar>
    );
  }
}