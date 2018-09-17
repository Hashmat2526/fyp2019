import React, { Component } from 'react';
import styled from 'styled-components';
import slider from '../../images/bioimg.jpg';

const BannerStyle = styled.div`
  // banner slider carousal
  .banner {
    display: flex;
    // margin: 0px 41px 0px 41px;
  }
  .carousel-inner img {
    width: 100%;
  }
  .carousel-caption {
    color:#000;top:110px; bottom: auto; text-align:left;
  }
  .carousel-caption h1 {
    color:#dd0000; background-color:#;
    }
`

class Banner extends Component {
  render() {
    return (
      <BannerStyle >
        <div id="carouselExampleIndicators" class="carousel slide container" data-ride="carousel" data-interval="2200">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={slider} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={slider} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={slider} alt="Third slide" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </BannerStyle>
    );
  }
}

export default Banner;