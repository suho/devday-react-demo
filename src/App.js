import React, { Component } from 'react';
import './App.css'
import Flat from './components/flat';

class App extends Component {
  render() {
    const flat = {
      "name": "Trường Bách Khoa Đà Nẵng",
      "imageURL": "https://raw.githubusercontent.com/suhv/devday-react-demo/master/resources/flat1.png",
      "price": 0,
      "lat": 48.884211,
      "lng": 2.345890
    }
    return (
      <div className='app'>
        <div className='main'>
          <div className='search'></div>
          <div className='flats'>
            <Flat flat={flat} />
            <Flat flat={flat} />
            <Flat flat={flat} />
            <Flat flat={flat} />
          </div>
        </div>
        <div className='map'></div>
      </div>
    );
  }
}

export default App;
