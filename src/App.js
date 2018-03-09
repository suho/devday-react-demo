import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css'
import Flat from './components/flat';
import Marker from './components/marker'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      selectedFlat: null,
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
    let center = { lat: 16.047079, lng: 108.206230 };
    if (this.state.selectedFlat) {
      const selectedFlat = this.state
      center = { lat: selectedFlat.lat, lng: selectedFlat.lng }
    }
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
        <div className='map'>
          <GoogleMapReact
            center={center}
            zoom={13}>
            {this.state.flats.map(flat => {
              return <Marker
                lat={flat.lat}
                lng={flat.lng}
                title={flat.price} />
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
