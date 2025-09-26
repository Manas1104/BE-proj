import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function LocationMarker({ setPosition, setClinics }) {
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;
      const bbox = [lng - 0.05, lat - 0.05, lng + 0.05, lat + 0.05].join(',');

      fetch(`https://nominatim.openstreetmap.org/search.php?q=clinic&format=json&limit=10&viewbox=${bbox}`)
        .then(res => res.json())
        .then(data => setClinics(data.map(c => ({
          ...c,
          lat: parseFloat(c.lat),
          lon: parseFloat(c.lon),
        }))));
    },
    locationerror() {
      alert('Failed to get your location');
    }
  });

  useEffect(() => {
    map.locate({ setView: true, maxZoom: 15 });
  }, [map]);

  return null;
}

export default function MapPage() {
  const [position, setPosition] = useState(null);
  const [clinics, setClinics] = useState([]);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
        
        {position && <Marker position={position}><Popup>You are here</Popup></Marker>}
        {clinics.map(clinic => (
          <Marker key={clinic.place_id} position={[clinic.lat, clinic.lon]}>
            <Popup>{clinic.display_name}</Popup>
          </Marker>
        ))}

        <LocationMarker setPosition={setPosition} setClinics={setClinics} />
      </MapContainer>
    </div>
  );
}
