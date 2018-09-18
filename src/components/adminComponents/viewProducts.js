import React, { Component } from 'react';
import './viewProducts.css';
import axios from "axios";
import UpdateProduct from '../testPages/updateProduct';

class ViewProducts extends Component {
  constructor(props) {
    super(props);

    this.updateform = this.updateform.bind(this);

    this.onClick1 = this.onClick1.bind(this);

    this.state = {
      response1: [],
      dbData: [],
      isMouseInside: '0', current: ""


    }
  };
  componentDidMount() {
    axios.get('http://localhost:2627/feedback')
      .then((response) => {
        console.log("All Orders Fetched");
        console.log(response);
        this.setState({ response1: response.data });
      }).catch((e) => {
        console.log("error:");
        console.log(e);
      });
  }
  onClick1(e) {

    axios.get('http://localhost:2627/remove', {
      params: {
        _id: e._id
      }
    })
      .then((response) => {
        console.log("Get View jhuhbjhbC _ Success");
        console.log(response.data);
        this.setState({ response1: response.data });

      })
      .catch((e) => {
        console.log("error:");
        console.log(e);
      });
  }
  updateform(a) {
    this.setState({ dbData: a });
    this.setState({ isMouseInside: '2', current: a._id });

    console.log("state=>" + this.state.dbData);
  }



  render() {

    return (<div>



      <div class="row">
        <div class="col-md-12">


          {this.state.response1.map(function (p, key) {
            return (
              <div key={key} >

                <div class="col-sm-6 col-md-4">
                  <div class="thumbnail" >
                    <h4 class="text-center">{p.name}</h4>
                    <img src="https://via.placeholder.com/640x450" class="img-responsive" />
                    <div class="caption">
                      <div class="row">
                        <div class="col-md-6 col-xs-6">
                          <h3>{p.name}</h3>
                        </div>
                        <div class="col-md-6 col-xs-6 price">
                          <h3>
                            <label>{p.price}</label></h3>
                        </div>
                      </div>
                      <p>{p.description}</p>
                      <div class="row">
                        <div class="col-md-6">
                          <a class="btn btn-primary btn-product" onClick={() => this.updateform(p)}> update</a>
                          <div>

                          </div>
                        </div>
                        <div class="col-md-6">
                          <a href="#" class="btn btn-success btn-product" onClick={() => this.onClick1(p)}> Remove</a></div>
                      </div>
                      <div class="col-md-12">
                        {this.state.current == p._id &&
                          this.state.isMouseInside == '2' &&
                          <UpdateProduct dbData={this.state.dbData} />}</div>
                      <p> </p>
                    </div>
                  </div>
                </div>
              </div>

            );
          }, this)
          }

        </div>


      </div>

    </div>
    );
  }
}

export default ViewProducts;