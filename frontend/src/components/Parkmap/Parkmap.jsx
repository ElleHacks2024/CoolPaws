import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Parkcard from '../Parkcard/Parkcard'

const dogParks = [
  { id: 1, name: 'Paws Park', position: [51.505, -0.09], details: 'Has shaded areas',
  rating: "5",
  openTime: "8:00 PM",
  image: "https://plus.unsplash.com/premium_photo-1680283988075-bb0ff2955b71?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  { id: 2, name: 'Barkland', position: [51.51, -0.1], details: 'Near a pond, no shade' ,
  rating: "5",
  openTime: "8:00 PM",
  image: "https://plus.unsplash.com/premium_photo-1680283988075-bb0ff2955b71?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  // Add more dummy dog park data here
];

const Parkmap = () => {
  return (
    <MapContainer className='park-map'center={[51.505, -0.09]} zoom={12} style={{ height: '400px', width: '65%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      {dogParks.map(park => (
        <Marker key={park.id} position={park.position}>
          <Popup className="custom-popup">
           <Parkcard 
              id={park.id}
              name={park.name}
              rating={park.rating}
              openTime={park.openTime}
              image={park.image}/>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Parkmap;
