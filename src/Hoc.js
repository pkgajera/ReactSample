import React, { Component } from 'react';
const PrintHello = ComposedComponent => class extends Component {
 onClick() {
 console.log('hello');
 }

 /* The higher order component takes another component as a parameter
 and then renders it with additional props */
 render() {
 return <ComposedComponent {...this.props } onClick={this.onClick} />
 }
}

const FirstComponent = props => (
 <div onClick={ props.onClick }>
 Hello, {props.name}! I am a FirstComponent.
 </div>
);

export const ExtendedComponent = PrintHello(FirstComponent);
