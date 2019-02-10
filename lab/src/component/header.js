import React, { Component } from 'react';
import Helper from "../component/helper_of_header"

class Header extends Component {
  render() {
    return (
      <div className="App">
       <h1>thisss  is header</h1>
       <h1>{this.props.username}</h1>
       <h1>{this.props.Lastname}</h1>
       <Helper /> 
      </div>
       
    );
  }
}

export default Header;
