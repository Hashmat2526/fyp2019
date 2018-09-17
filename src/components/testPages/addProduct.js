import React, { Component } from 'react';
import axios from 'axios'

class AddProduct extends Component {

  // constructor
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeSubCategory = this.onChangeSubCategory.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeManufacturer = this.onChangeManufacturer.bind(this);
    this.onChangeCondition = this.onChangeCondition.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeShipping = this.onChangeShipping.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);


    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      name: "",
      model: "",
      category: "",
      sub_category: "",
      quantity: "",
      weight: "",
      description: "",
      manufacturer: "",
      condition: "",
      price: "",
      shippping: "",
    }

  };
  onChangeName(a) {
    this.setState({ name: a.target.value });
  }
  onChangeDescription(a) {
    this.setState({ description: a.target.value });
  }
  onChangeModel(a) {
    this.setState({ model: a.target.value });
  }
  onChangeCategory(a) {
    this.setState({ category: a.target.value });
  }
  onChangeSubCategory(a) {
    this.setState({ sub_category: a.target.value });
  }
  onChangeWeight(a) {
    this.setState({ weight: a.target.value });
  }
  onChangeQuantity(a) {
    this.setState({ quantity: a.target.value });
  }
  onChangePrice(a) {
    this.setState({ price: a.target.value });
  }
  onChangeShipping(a) {
    this.setState({ shippping: a.target.value });
  }
  onChangeCondition(a) {
    this.setState({ condition: a.target.value });
  }
  onChangeManufacturer(a) {
    this.setState({ manufacturer: a.target.value });
  }


  onSubmit() {
    axios.post('http://localhost:2627/products/addProducts', {
      name: this.state.name,

    })
      .then((response) => {
        alert("nono");
      })
      .catch((e) => {
        console.log("error:");
        console.log(e);
      });
  }

  render() {
    return (
      <div>
        <form class="form-horizontal" onSubmit={this.onSubmit}>
          <fieldset>

            {/* <!-- Form Name --> */}
            <legend>ADD A PRODUCT</legend>

            {/* <!-- Text input--> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="product_name">PRODUCT NAME</label>
              <div class="col-md-4">
                <input id="product_name" name="product_name" onChange={this.onChangeName} placeholder="Name" ref={e1 => this.name = e1} placeholder="PRODUCT NAME" class="form-control input-md" required="" type="text" />

              </div>
            </div>

            {/* <!-- Text input--> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="product_model">PRODUCT MODEL</label>
              <div class="col-md-4">
                <input id="product_name_fr" name="product_model" onChange={this.onChangeModel} placeholder="product model" ref={e1 => this.model = e1} class="form-control input-md" required="" type="text" />
              </div>
            </div>

            {/* <!-- Select Basic --> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="product_categorie">PRODUCT CATEGORY</label>
              <div class="col-md-4">
                <select id="product_categorie" name="product_categorie" onChange={this.onChangeCategory} class="form-control">
                </select>
              </div>
            </div>

            {/* <!-- Text input--> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="available_quantity">AVAILABLE QUANTITY</label>
              <div class="col-md-4">
                <input id="available_quantity" name="available_quantity" ref={e1 => this.quantity = e1} onChange={this.onChangeQuantity} placeholder="AVAILABLE QUANTITY" class="form-control input-md" required="" type="text" />

              </div>
            </div>

            {/* <!-- Text input--> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="product_weight">PRODUCT WEIGHT</label>
              <div class="col-md-4">
                <input id="product_weight" name="product_weight" placeholder="PRODUCT WEIGHT" onChange={this.onChangeWeight} ref={e1 => this.weight = e1} class="form-control input-md" required="" type="text" />

              </div>
            </div>

            {/* <!-- Textarea --> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="product_description">PRODUCT DESCRIPTION</label>
              <div class="col-md-4">
                <textarea class="form-control" ref={e1 => this.description = e1} id="product_description" onChange={this.onChangeDescription} name="product_description"></textarea>
              </div>
            </div>

            {/* <!-- Textarea --> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="product_name_fr">MANUFACTURER</label>
              <div class="col-md-4">
                <textarea class="form-control" id="product_manufacturer" ref={e1 => this.manufacturer = e1} onChange={this.onChangeManufacturer} name="product_manufacturer"></textarea>
              </div>
            </div>

            {/* <!-- Text input--> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="percentage_discount">CONDITION</label>
              <div class="col-md-4">
                <input id="percentage_discount" name="condition" placeholder="CONDITION" onChange={this.onChangeCondition} ref={e1 => this.condition = e1} class="form-control input-md" required="" type="text" />

              </div>
            </div>

            {/* <!-- Text input--> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="stock_alert">SUB CATEGORY</label>
              <div class="col-md-4">
                <input id="stock_alert" name="sub_category" placeholder="SUB CATEGORY" ref={e1 => this.sub_category = e1} onChange={this.onChangeSubCategory} class="form-control input-md" required="" type="text" />

              </div>
            </div>

            {/* <!-- Search input--> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="stock_critical">PRICE</label>
              <div class="col-md-4">
                <input id="stock_critical" name="price" placeholder="PRICE" ref={e1 => this.price = e1} onChange={this.onChangePrice} class="form-control input-md" required="" type="search" />

              </div>
            </div>

            {/* <!-- Search input--> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="tutorial">SHIPPING MODE</label>
              <div class="col-md-4">
                <input id="shipping" name="shipping" placeholder="shipping" ref={e1 => this.shippping = e1} onChange={this.onChangeShipping} class="form-control input-md" required="" type="search" />

              </div>
            </div>



            {/* <!-- File Button --> */}
            {/* <div class="form-group">
              <label class="col-md-4 control-label" for="filebutton">main_image</label>
              <div class="col-md-4">
                <input id="filebutton" name="filebutton" ref={e1 => this.name = e1}class="input-file" type="file" />
              </div>
            </div> */}
            {/* <!-- File Button --> */}
            {/* <div class="form-group">
              <label class="col-md-4 control-label" for="filebutton">auxiliary_images</label>
              <div class="col-md-4">
                <input id="filebutton" name="filebutton" class="input-file" type="file" />
              </div>
            </div> */}

            {/* <!-- Button --> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="singlebutton">DONE?</label>
              <div class="col-md-4">
                <button id="singlebutton" name="singlebutton" class="btn btn-primary">SUBMIT</button>
              </div>
            </div>

          </fieldset>
        </form>
      </div>
    );
  }
}

export default AddProduct;