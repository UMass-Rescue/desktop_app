import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { View } from 'react-native';
import { useWindowDimensions } from 'react-native';


const mapStyles = {
  width: 1500,
  height: 1500,
};

export class MapContainer extends Component {
  render() {
    return (

      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
      
    );
  }
}

export default GoogleApiWrapper({
    apiKey: 'APIKEYGOESHERE'
  })(MapContainer);