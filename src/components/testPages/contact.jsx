import React, { Component } from "react";
import styled from 'styled-components';

const ContactStyle = styled.div`
.address-icon i{
	font-size: 36px;
	line-height: 32px;
}
.icons i{
	color: #fff;
	padding: 8px 0px;
	text-align: center;
	height: 30px;
	width: 30px;
	margin-right: 5px;
}
.fa-facebook{
	background-color: #3A5A99; 
}
.fa-twitter{
	background-color: #39CBFA;
}
.fa-linkedin{
	background-color: #3D99C0;
}
.fa-github{
	background-color: #000;
}
`

class Contact extends Component {
  render() {
    return (
      <ContactStyle>
        <br /><br />
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 col-12">
              <div class="row">
                <div class="col-lg-12 col-12 p-0 contact-us">
                  <h4 class="">CONTACT US</h4><hr />
                </div>
              </div>
              <div class="row bg-light pt-3 pb-3 mb-4">
                <div class="col-lg-12">
                  <h6>ADDRESS :</h6>
                </div>
                <div class="col-lg-4 col-4">
                  Lawrence state, Lawrence Research University, America.
                  </div>
                <div class="col-lg-4 col-4">
                  <p class="m-0 text-danger"><i class="fa fa-phone-square" aria-hidden="true"></i>
                    +92 3158080505
                  </p>
                  <p class="m-0 text-info"><i class="fa fa-envelope" aria-hidden="true"></i>
                    example@gmail.com
                  </p>
                </div>
                <div class="col-lg-4 col-4 address-icon text-center text-danger">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </div>
              </div>
              <div class="row bg-light pt-3 pb-3 mb-4">
                <div class="col-lg-6 col-12">
                  <form>
                    <div class="form-row mb-3">
                      <div class="col">
                        <input type="text" class="form-control" placeholder="Name :" />
                      </div>
                      <div class="col">
                        <input type="text" class="form-control" placeholder="Company :" />
                      </div>
                    </div>
                    <div class="form-row mb-3">
                      <div class="col">
                        <input type="text" class="form-control" placeholder="Email :" />
                      </div>
                      <div class="col">
                        <input type="text" class="form-control" placeholder="Mobile :" />
                      </div>
                    </div>
                    <div class="form-group">
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message :"></textarea>
                    </div>
                    <button type="submit" class="btn btn-danger mb-4">Send</button>
                  </form>
                </div>
                <div class="col-lg-6 col-12">
                  <div style={{ width: "100%" }}><iframe width="100%" height="300px" src="https://www.mapsdirections.info/en/custom-google-maps/map.php?width=100%&height=600&hl=ru&q=Malet%20St%2C%20London%20WC1E%207HU%2C%20United%20Kingdom+(Your%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=A&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.mapsdirections.info/en/custom-google-maps/">Create Google Map</a> by <a href="https://www.mapsdirections.info/en/">Measure area on map</a></iframe></div>
                  <div class="icons">
                    <a href=""><i class="fa fa-facebook"></i></a>
                    <a href=""><i class="fa fa-twitter"></i></a>
                    <a href=""><i class="fa fa-linkedin"></i></a>
                    <a href=""><i class="fa fa-github"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContactStyle>
    );
  }
}

export default Contact;
