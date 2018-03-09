import React, { Component } from 'react';
import Flat from './components/flat';

class App extends Component {
  render() {
    const flat = {
      "name": "Test Name 2",
      "imageURL": "https://raw.githubusercontent.com/suhv/devday-react-demo/master/resources/flat1.png",
      "price": 10,
      "lat": 48.884211,
      "lng": 2.345890
    }
    return (
      <div>
        <Flat flat={flat} />
      </div>
    );
  }
}

export default App;
