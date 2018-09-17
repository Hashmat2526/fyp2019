import React, { Component } from 'react';
import styled from 'styled-components';

const HelpStyle = styled.div`
  
`

class HelpPage extends Component {
  render() {
    return (
      <HelpStyle>
        <div class="help py-5 bg-secondary twhite">
          <div class="container py-5">
            <div class="row text-center">
              <div class="col-md-12">
                <i class="fa fa-headphones fa-3x"></i>
                <h3>How can we help you?</h3>
                <p>Fusce imper diet odio sit amet erat conse quat, eget eleme nmper diet odio sit amet erat atege tpurc surus lorem iandit vehi culas.</p>
                <button type="button" class="btn btn-danger">Ask the Question</button>
              </div>
            </div>
          </div>
        </div>
      </HelpStyle>
    );
  }
}

export default HelpPage;