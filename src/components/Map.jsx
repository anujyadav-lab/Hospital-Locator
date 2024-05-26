// src/components/Map.js
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ location, hospitals }) => {
  useEffect(() => {
    const map = L.map('map').setView([location.lat, location.lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    L.marker([location.lat, location.lng]).addTo(map)
      .bindPopup('You are here')
      .openPopup();

    hospitals.forEach((hospital) => {
      const { lat, lon, display_name } = hospital;
      L.marker([lat, lon]).addTo(map).bindPopup(display_name); 
    });

    return () => {
      map.remove();
    };
  }, [location, hospitals]);

  return <div id="map" style={{ height: '100vh', width: '100%' }}></div>;
};

export default Map;
