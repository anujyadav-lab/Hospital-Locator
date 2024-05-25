// src/api/fetchHospitals.js
import axios from 'axios';

const fetchHospitals = async (location) => {
  const { lat, lng } = location;
  const response = await axios.get(
    `https://nominatim.openstreetmap.org/search?format=json&q=hospital&limit=10&bounded=1&viewbox=${lng-0.05},${lat-0.05},${lng+0.05},${lat+0.05}`
  );

  return response.data;
};

export default fetchHospitals;
