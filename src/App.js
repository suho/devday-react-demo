import React, { Component } from 'react';
import './App.css'
import Flat from './components/flat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/suhv/devday-react-demo/master/resources/flats.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          flats: data
        })
      })
  }

  render() {
    return (
      <div className='app'>
        <div className='main'>
          <div className='search'></div>
          <div className='flats'>
            {this.state.flats.map(flat => {
              return <Flat flat={flat} />
            })}
          </div>
        </div>
        <div className='map'></div>
      </div>
    );
  }
}

export default App;
