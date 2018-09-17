import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './header';
import Banner from './banner';
import FeaturedProducts from './featuredProducts';
import Manufacturer from './topManufacturer';
import ProductCategory from './productCategory';
import HelpPage from "./help";
import SellingAd from './sellingAd';
import Footer from './footer'

const homeStyle = styled.div`

`

class Home extends Component {
  state = {}
  render() {
    return (
      <homeStyle>
        <Banner />
        <FeaturedProducts />
        <Manufacturer />
        <ProductCategory />
        <HelpPage />
        <SellingAd />
      </homeStyle>
    );
  }
}

export default Home;