import React, { Component } from 'react';
import styled from 'styled-components';

const CartStyle = styled.div`
.img-cart {
  display: block;
  max-width: 50px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}
.table .tr .td{
  border:1px solid #FFFFFF;    
}

.table .tr .th {
  background:#eee;    
  display: none
}


.panel-shadow {
  box-shadow: rgba(0, 0, 0, 0.3) 7px 7px 7px;
}
`

class Checkout extends Component {
  render() {
    return (
      <CartStyle>
        <div class="container bootstrap snippet">
          <div class="col-md-9 col-sm-8 content">
            <div class="row">
              <div class="col-md-12">
                <ol class="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li class="active">Cart</li>
                </ol>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="panel panel-info panel-shadow">
                  <div class="panel-body">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr class="tr">
                            <th class="th" >Product</th>
                            <th class="th">Description</th>
                            <th class="th">Qty</th>
                            <th class="th">Price</th>
                            <th class="th">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="tr">
                            <td class="td" ><img src="https://lorempixel.com/400/200/fashion/2/" class="img-cart" /></td>
                            <td class="td"><strong>Product 1</strong><p>Size : 26</p></td>
                            <td class="td">
                              <form class="form-inline">
                                <input class="form-control" type="text" value="1" />
                                <button rel="tooltip" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                <a href="#" class="btn btn-primary"><i class="fa fa-trash-o"></i></a>
                              </form>
                            </td>
                            <td class="td">$54.00</td>
                            <td class="td">$54.00</td>
                          </tr>
                          <tr class="tr">
                            <td ><img src="https://lorempixel.com/400/200/fashion/1/" class="img-cart td" /></td>                                <td class="td"><strong>Product 2</strong><p>Size : M</p></td>
                            <td class="td">
                              <form class="form-inline">
                                <input class="form-control" type="text" value="2" />
                                <button class="btn btn-default" ><i class="fa fa-pencil"></i></button>
                                <a href="#" class="btn btn-primary" rel="tooltip" ><i class="fa fa-trash-o"></i></a>
                              </form>
                            </td>
                            <td class="td">$16.00</td>
                            <td class="td">$32.00</td>
                          </tr>
                          <tr class="tr">
                            <td class="td" colspan="6">&nbsp;</td>
                          </tr>
                          <tr class="tr">
                            <td class="td" colspan="4" class="text-right">Total Product</td>
                            <td class="td">$86.00</td>
                          </tr>
                          <tr class="tr">
                            <td colspan="4" class="text-right">Total Shipping</td>
                            <td>$2.00</td>
                          </tr>
                          <tr class="tr">
                            <td colspan="4" class="text-right"><strong>Total</strong></td>
                            <td>$88.00</td>
                          </tr>
                        </tbody>
                      </table></div>
                  </div>
                </div>
              </div>
              <a href="#" class="btn btn-success"><span class="glyphicon glyphicon-arrow-left"></span>&nbsp;Continue Shopping</a>
              <a href="#" class="btn btn-primary pull-right">Next<span class="glyphicon glyphicon-chevron-right"></span></a>
            </div>
          </div>
        </div>
      </CartStyle>
    );
  }
}

export default Checkout;