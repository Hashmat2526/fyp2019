import React, { Component } from 'react';
import styled from 'styled-components';
import biotech from "../../images/biotechNew.jpg";
import drug from "../../images/drugDiscovery.jpg";
import immun from "../../images/immunologyNew.jpg";
import molecularBio from "../../images/molecularbiologyNew.jpg";
import tissue from "../../images/tissueCultureNew.jpg";
import newImage from "../../images/new.jpg";

const ManufacturerStyle = styled.div`
  // banner slider carousal
 .box {
    
 }
`

class TopManufacturer extends Component {
  render() {
    return (
      <ManufacturerStyle>
        <div class="popular py-5">
          <div class="container">
            <div class="row pb-4 text-center">
              <div class="col-md-12">
                <h2>Chemicals</h2>
                <p> Below is the list of chemicals</p>
              </div>
            </div>
            <div class="row text-center main">
              <div class="col-md-3  py-4">
                <div class="box-carimage">
                  <img className="img" src={newImage} alt="" />
                </div>
                <div class="box-cartitle">
                  <h4> SPECIAL CHEMICALS</h4>
                </div>
                <div class="box-carprice">
                  <h6><i class="fa fa-pkr"></i>14.0 Lac*</h6>
                </div>
                <div class="box-date pb-3">
                  <small>Launch Date: 15 Apr 2018 </small>
                </div>
                <button type="button" class="btn btn-outline-danger">Check Price</button>
              </div>
              <div class="col-md-3  py-4">
                <div class="box-carimage">
                  <img className="img" src={newImage} alt="" />
                </div>
                <div class="box-cartitle">
                  <h4> SPECIAL CHEMICALS</h4>
                </div>
                <div class="box-carprice">
                  <h6><i class="fa fa-pkr"></i>14.0 Lac*</h6>
                </div>
                <div class="box-date pb-3">
                  <small>Launch Date: 15 Apr 2018 </small>
                </div>
                <button type="button" class="btn btn-outline-danger">Check Price</button>
              </div>
              <div class="col-md-3  py-4">
                <div class="box-carimage">
                  <img className="img" src={newImage} alt="" />
                </div>
                <div class="box-cartitle">
                  <h4> SPECIAL CHEMICALS</h4>
                </div>
                <div class="box-carprice">
                  <h6><i class="fa fa-pkr"></i>14.0 Lac*</h6>
                </div>
                <div class="box-date pb-3">
                  <small>Launch Date: 15 Apr 2018 </small>
                </div>
                <button type="button" class="btn btn-outline-danger">Check Price</button>
              </div>
              <div class="col-md-3  py-4">
                <div class="box-carimage">
                  <img className="img" src={newImage} alt="" />
                </div>
                <div class="box-cartitle">
                  <h4> SPECIAL CHEMICALS</h4>
                </div>
                <div class="box-carprice">
                  <h6><i class="fa fa-pkr"></i>14.0 Lac*</h6>
                </div>
                <div class="box-date pb-3">
                  <small>Launch Date: 15 Apr 2018 </small>
                </div>
                <button type="button" class="btn btn-outline-danger">Check Price</button>
              </div>
            </div>
            <div class="row text-center pt-4">
              <div class="col-md-12">
                <button type="button" class="btn btn-danger">View All Chemicals</button>
              </div>
            </div>
          </div>
        </div>
      </ManufacturerStyle>
    );
  }
}

export default TopManufacturer;