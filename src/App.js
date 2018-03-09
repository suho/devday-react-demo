import React, { Component } from 'react';
import Flat from './components/flat';

class App extends Component {
  render() {
    return (
      <div>
        <div className='app'>
          <div className='main'>
            <div className='search'></div>
            <div className='flats'></div>
          </div>
          <div className='map'></div>
        </div>
      </div>
    );
  }
}

export default App;
