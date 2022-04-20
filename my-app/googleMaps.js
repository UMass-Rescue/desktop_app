import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker,GoogleMapReact } from 'google-maps-react';
import { View } from 'react-native';
import { useWindowDimensions } from 'react-native';
import CurrentLocation from './map';


const mapStyles = {
  width: 1500,
  height: 1500,
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };
  
  Coordinate_state = {
    markers: [{
      title: 'Agent A',
      coordinates: {
        latitude: 42.9732,
        longitude: -72.4199
      },
    },
    {
      title: 'Agent B',
      coordinates: {
        latitude: 42.2732,
        longitude: -72.9199
      },  
    }]
  }



  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  onMouseoverMarker(props, marker, e) {
    console.log(marker); 

  }

  
  render() {
    return (
   <Map
       google={this.props.google}
        style={mapStyles}
        initialCenter={
              {
          lat: 42.3732,
          lng: -72.5199
        }
    }
      >
      <Marker
          onClick={this.onMarkerClick}
          name={'Current Location'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>

        <Marker
         key={0} 
          onClick={this.onMarkerClick}
          name={'Agent A'}
          position={{lat: 42.9732,
        lng: -72.4199}}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>



        <Marker key={1} position={{
       latitude: 42.2732,
        longitude: -72.9199
      }} onClick={this.onMarkerClick} name={'Agent B'} />
    
       <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>


      </Map>
      
    );
  }
}

export default GoogleApiWrapper({
    apiKey: ''
  })(MapContainer);