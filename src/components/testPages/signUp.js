import React, { Component } from 'react';
import styled from 'styled-components';

const SignUpStyle = styled.div`

:root {
  --.input-padding-x: 1.5rem;
  --.input-padding-y: .75rem;
}


.card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-signin .card-body {
  padding: 2rem;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: .1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group .input {
  border-radius: 2rem;
}

.form-label-group > .input,
.form-label-group>label {
  padding: var(--.input-padding-y) var(--.input-padding-x);
}

.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  line-height: 1.5;
  color: #495057;
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group .input::-webkit-.input-placeholder {
  color: transparent;
}

.form-label-group .input:-ms-.input-placeholder {
  color: transparent;
}

.form-label-group .input::-ms-.input-placeholder {
  color: transparent;
}

.form-label-group .input::-moz-placeholder {
  color: transparent;
}

.form-label-group .input::placeholder {
  color: transparent;
}

.form-label-group .input:not(:placeholder-shown) {
  padding-top: calc(var(--.input-padding-y) + var(--.input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--.input-padding-y) / 3);
}

.form-label-group .input:not(:placeholder-shown)~label {
  padding-top: calc(var(--.input-padding-y) / 3);
  padding-bottom: calc(var(--.input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}

.btn-google {
  color: white;
  background-color: #ea4335;
}

.btn-facebook {
  color: white;
  background-color: #3b5998;
}
.container {
  position: relative;
  top: 32px;
}
`
class SignUp extends Component {
  state = {}
  render() {
    return (
      <SignUpStyle>
        <div class="container">
          <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div class="card card-signin my-5">
                <div class="card-body">
                  <h5 class="card-title text-center h5">Sign In</h5>
                  <form class="form-signin form">
                    <div class="form-label-group">
                      <input type="email" id="inputEmail" class="form-control input" placeholder="First Name" required autofocus />
                      <label for="inputEmail" className="label">First Name</label>
                    </div>
                    <div class="form-label-group">
                      <input type="email" id="inputEmail" class="form-control input" placeholder="Last Name" required autofocus />
                      <label for="inputEmail" className="label">Last Name</label>
                    </div>
                    <div class="form-label-group">
                      <input type="email" id="inputEmail" class="form-control input" placeholder="Email address" required autofocus />
                      <label for="inputEmail" className="label">Email address</label>
                    </div>
                    <div class="form-label-group">
                      <input type="password" id="inputPassword" class="form-control input" placeholder="Password" required />
                      <label for="inputPassword" className="label">Password</label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SignUpStyle>);
  }
}

export default SignUp;