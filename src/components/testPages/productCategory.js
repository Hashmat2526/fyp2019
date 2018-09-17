import React, { Component } from 'react';
import styled from 'styled-components';


const HelpStyle = styled.div`
  
`

class ProductCategory extends Component {
  render() {
    return (
      <div class="location py-5">
        <div class="container">
          <div class="row pb-4 text-center">
            <div class="col-md-12">
              <h2>Popular Product Category </h2>
              <p> Following are the equipment categories.</p>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-2  py-4">
              <button type="button" class="btn btn-light"> AutoClaves</button>
            </div>
            <div class="col-md-2  py-4">
              <button type="button" class="btn btn-light"> Balances</button>
            </div>
            <div class="col-md-2  py-4">
              <button type="button" class="btn btn-light"> Centrifuge</button>
            </div>
            <div class="col-md-2  py-4">
              <button type="button" class="btn btn-light"> Chromatography</button>
            </div>
            <div class="col-md-2  py-4">
              <button type="button" class="btn btn-light"> Freezers</button>
            </div>
            <div class="col-md-2  py-4">
              <button type="button" class="btn btn-light"> Fridges</button>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-2 py-4">
              <button type="button" class="btn btn-light"> Mass <br /> Spectrometers</button>
            </div>
            <div class="col-md-2  py-4">
              <button type="button" class="btn btn-light"> Microscope</button>
            </div>
            <div class="col-md-2  py-4">
              <button type="button" class="btn btn-light"> Sterilizers </button>
            </div>
            <div class="col-md-2  py-4">
              <button type="button" class="btn btn-light"> DNA sequencer</button>
            </div>
            <div class="col-md-2  py-4">
              <button type="button" class="btn btn-light"> MRI</button>
            </div>
            <div class="col-md-2  py-4">
              <button type="button" class="btn btn-light"> PCR Machine</button>
            </div>
          </div>
          <div class="row text-center pt-4">
            <div class="col-md-12">
              <button type="button" class="btn btn-danger">View All Products</button>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default ProductCategory;