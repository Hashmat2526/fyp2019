import React, { Component } from 'react';
import styled from 'styled-components';

const SellingAdStyle = styled.div`
  .btn {
    margin-top: 19px;
  }
`

class SellingAd extends Component {
  state = {}
  render() {
    return (
      <SellingAdStyle>
        <div class="cta-sektion  border py-3">
          <div class="container">
            <div class="row">
              <div class="col-md-9 col-sm-9 col-xs-12">
                <h3><span class="glyphicon glyphicon-cog "></span> <b>Want to Sell your Product?</b> Explore Products like a pro.</h3>
              </div>
              <div class="col-md-3 col-sm-3 col-xs-12 ">
                <button type="button" class="btn bg-danger twhite">Start Right Now</button>
              </div>
            </div>
          </div>
        </div>
      </SellingAdStyle>);
  }
}

export default SellingAd;