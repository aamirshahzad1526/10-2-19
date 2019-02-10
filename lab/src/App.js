import React, { Component } from 'react';
import './App.css'; 
import Header from "../src/component/header"

 var name="klkl"
 var lastName="fjf"
class App extends Component {

  constructor(props){
    super(props);
    this.state={}
  }

myHandler = () => {
  this.setState({name:"sadf"})
 this.setState({lastName:"ufgfug"})
  // this.setState({lastName:"sadf"})

 name = this.refs.name.value;
  lastName = this.refs.Lname.value;
console.log(name,lastName)
}

  render() {
    return (

      <div className="App">
      <input type="text" placeholder="Name"  ref="name"/> <br/> <br/>
      <input type="text" placeholder="Last Name"  ref="Lname"/><br/>
      <button onClick={this.myHandler}>Submit</button>
      <Header username={name} Lastname={lastName}/> 
      </div>
    );
  }
}

export default App;
