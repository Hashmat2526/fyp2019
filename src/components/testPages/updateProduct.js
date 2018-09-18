import React, { Component } from 'react';
import axios from 'axios'

class UpdateProduct extends Component {

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


    this.onClick = this.onClick.bind(this);


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
      shipping: "",
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
    this.setState({ shipping: a.target.value });
  }
  onChangeCondition(a) {
    this.setState({ condition: a.target.value });
  }
  onChangeManufacturer(a) {
    this.setState({ manufacturer: a.target.value });
  }




  componentDidMount() {
    this.setState({ name: this.props.dbData.name });
    this.setState({ model: this.props.dbData.model });
    this.setState({ quantity: this.props.dbData.quantity });
    this.setState({ price: this.props.dbData.price });
    this.setState({ category: this.props.dbData.category });
    this.setState({ sub_category: this.props.dbData.sub_category });
    this.setState({ manufacturer: this.props.dbData.manufacturer });
    this.setState({ weight: this.props.dbData.weight });
    this.setState({ shipping: this.props.dbData.shipping });
    this.setState({ condition: this.props.dbData.condition });
    this.setState({ description: this.props.dbData.description });

  }

  onClick() {

    axios.post('http://localhost:2627/update', {
      _id: this.props.dbData._id,
      name: this.state.name,
      description: this.state.description,
      model: this.state.model,
      condition: this.state.condition,
      category: this.state.category,
      sub_category: this.state.sub_category,
      manufacturer: this.state.manufacturer,
      weight: this.state.weight,
      quantity: this.state.quantity,
      price: this.state.price,
      shipping: this.state.shipping
    })
      .then((response) => {

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
              <div class="col-md-8">
                <input id="product_name" value={this.state.name} name="product_name" onChange={this.onChangeName} ref={e1 => this.name = e1} placeholder="PRODUCT NAME" class="form-control input-md" required="" type="text" />

              </div>
            </div>

            {/* <!-- Text input--> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="product_model">PRODUCT MODEL</label>
              <div class="col-md-8">
                <input id="product_name_fr" name="product_model" onChange={this.onChangeModel} placeholder="product model" value={this.state.model} ref={e1 => this.model = e1} class="form-control input-md" required="" type="text" />
              </div>
            </div>

            {/* <!-- Select Basic --> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="product_categorie">PRODUCT CATEGORY</label>
              <div class="col-md-8">
                <select id="product_categorie" name="product_categorie" value={this.state.category} onChange={this.onChangeCategory} class="form-control">
                </select>
              </div>
            </div>

            {/* <!-- Text input--> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="available_quantity">AVAILABLE QUANTITY</label>
              <div class="col-md-8">
                <input id="available_quantity" name="available_quantity" ref={e1 => this.quantity = e1} value={this.state.quantity} onChange={this.onChangeQuantity} placeholder="AVAILABLE QUANTITY" class="form-control input-md" required="" type="text" />

              </div>
            </div>

            {/* <!-- Text input--> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="product_weight">PRODUCT WEIGHT</label>
              <div class="col-md-8">
                <input id="product_weight" name="product_weight" placeholder="PRODUCT WEIGHT" value={this.state.weight} onChange={this.onChangeWeight} ref={e1 => this.weight = e1} class="form-control input-md" required="" type="text" />

              </div>
            </div>

            {/* <!-- Textarea --> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="product_description">PRODUCT DESCRIPTION</label>
              <div class="col-md-8">
                <textarea class="form-control" ref={e1 => this.description = e1} id="product_description" value={this.state.description} onChange={this.onChangeDescription} name="product_description"></textarea>
              </div>
            </div>

            {/* <!-- Textarea --> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="product_name_fr">MANUFACTURER</label>
              <div class="col-md-8">
                <textarea class="form-control" id="product_manufacturer" ref={e1 => this.manufacturer = e1} value={this.state.manufacturer} onChange={this.onChangeManufacturer} name="product_manufacturer"></textarea>
              </div>
            </div>

            {/* <!-- Text input--> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="percentage_discount">CONDITION</label>
              <div class="col-md-8">
                <input id="percentage_discount" name="condition" placeholder="CONDITION" value={this.state.condition} onChange={this.onChangeCondition} ref={e1 => this.condition = e1} class="form-control input-md" required="" type="text" />

              </div>
            </div>

            {/* <!-- Text input--> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="stock_alert">SUB CATEGORY</label>
              <div class="col-md-8">
                <input id="stock_alert" name="sub_category" placeholder="SUB CATEGORY" value={this.state.sub_category} ref={e1 => this.sub_category = e1} onChange={this.onChangeSubCategory} class="form-control input-md" required="" type="text" />

              </div>
            </div>

            {/* <!-- Search input--> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="stock_critical">PRICE</label>
              <div class="col-md-8">
                <input id="stock_critical" name="price" placeholder="PRICE" ref={e1 => this.price = e1} value={this.state.price} onChange={this.onChangePrice} class="form-control input-md" required="" type="search" />

              </div>
            </div>

            {/* <!-- Search input--> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="tutorial">SHIPPING MODE</label>
              <div class="col-md-8">
                <input id="shipping" name="shipping" placeholder="shipping" ref={e1 => this.shipping = e1} value={this.state.shipping} onChange={this.onChangeShipping} class="form-control input-md" required="" type="search" />

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
                <button id="singlebutton" name="singlebutton" class="btn btn-primary" onClick={this.onClick} >SUBMIT</button>
              </div>
            </div>

          </fieldset>
        </form>
      </div>
    );
  }
}

export default UpdateProduct;