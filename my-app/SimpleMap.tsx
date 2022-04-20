import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';



const SimpleMap = (props: any) => {
  const getMapOptions = (maps: any) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };

    const [center, setCenter] = useState({lat:42.3732, lng:-72.5199 });
    const [zoom, setZoom] = useState(11);
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={getMapOptions}
        >
          <Marker
            lat={42.4732}
            lng={-72.5199}
            name="Agent A"
            color="blue"
          />

        <Marker
            lat={42.3732}
            lng={-72.5199}
            name="Agent B"
            color="blue"
          />

            <Marker
            lat={42.3732}
            lng={-72.4199}
            name="Address"
            color="red"
          />
        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;