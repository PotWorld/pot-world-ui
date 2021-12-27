import './App.css';
import LandingPage from './Dashboard/LandingPage'
import Pot from './App/Pot';
import React, { useState } from 'react'


let enabledLogged = function() {
  console.log(useState);
  this.setState({
    isLoggedSuccessfull: true,
  });
};

class App extends React.Component{

  constructor(props) {
    super(props);
    this.enabledLoggedIn = this.enabledLoggedIn.bind(this);
    enabledLogged = enabledLogged.bind(this);
    this.state = {
      isLoggedSuccessfull: false,
    }
  }

  enabledLoggedIn = function() {
    this.setState({
      isLoggedSuccessfull: true,
    });
  };


  render() {
    return (
      <div className='container-fluid'>
        <Pot />
        {/* {this.state.isLoggedSuccessfull ? <Pot /> : <LandingPage enabledLoggedIn={this.enabledLoggedIn} />} */}
      </div>
    )
  }
}

export default App; 
export {
  enabledLogged
}
