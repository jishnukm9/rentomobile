import React from 'react';
import 'leaflet/dist/leaflet.css';
import { Marker, Popup, TileLayer, MapContainer,Tooltip } from 'react-leaflet';

export default function LocationMap({ pickUpLat, dropOffLat=null, pickUpLng, dropOffLng=null,pickUpLoc,dropOffLoc=null }) {
    let locations;
    {dropOffLat ? locations = [
        {position:[pickUpLat, pickUpLng],
     name:pickUpLoc} ,
     {position:[dropOffLat, dropOffLng],
         name:dropOffLoc} ,
         
       ] : locations = null
     }
 
  console.log(locations);

  return (
    <MapContainer center={[pickUpLat, pickUpLng]} zoom={13} scrollWheelZoom={true} className="h-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      { locations ?  locations.map((item, index) => (
        <Marker position={item.position} key={index}>
            <Tooltip> {item.name}</Tooltip>
          <Popup>
            {item.name}
          </Popup>
        </Marker>
      ))  : <Marker position={[pickUpLat, pickUpLng]} >
      <Tooltip> {pickUpLoc}</Tooltip>
    <Popup>
      {pickUpLoc}
    </Popup>
  </Marker> }
    </MapContainer>
  );
}
