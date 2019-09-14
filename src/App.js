import React from 'react';
import './App.css';

class App extends React.Component{
  // constructer use karavno compustory jyare aapne state use karvu hoy component ma
  constructor(props){
  // super use
  // parent component na badha state and porps ne current component na this ma bind karse

 super(props);

 let firstName = this.props.name.split(" ")[0];

 this.state = {
 name: firstName
 }
 }
  render(){
    return(
      <h1>Hello, {this.props.name}!</h1>
    );
  }
}

export default App;
