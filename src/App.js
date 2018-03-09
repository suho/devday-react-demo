import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='main'>
          <div className='search'></div>
          <div className='flats'></div>
        </div>
        <div className='map'></div>
      </div>
    );
  }
}

export default App;
