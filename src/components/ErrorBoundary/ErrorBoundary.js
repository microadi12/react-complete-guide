
import React, { Component } from 'react'

class ErrorBoundary extends Component {

 state = {
      hasError : false,
      errorMessage : ''
 }

componetDidCatch = (error , info) => {
 this.setState({hasError: true, errorMessage: error}) 

}

render() {
    // let rnd = Math.random()*10;
  if(this.state.hasError) {
   return <h1>{this.state.errorMessage}</h1>
  } else {
   return this.props.children;
  }
}

}


export default ErrorBoundary;

// Error boundary concept its not covered event handlers, server handling 
// use error boundary where you don't know the code fail or not.