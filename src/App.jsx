// src/App.js
import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import useGeolocation from './hooks/useGeolocation';
import fetchHospitals from './api/fetchHospitals';
import Map from './components/Map';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const location = useGeolocation();

  useEffect(() => {
    const getHospitals = async () => {
      if (location.lat && location.lng) {
        const results = await fetchHospitals(location);
        setHospitals(results);
      }
    };
    getHospitals();
  }, [location]);

  return (
    <div className="App">
      {!user ? (
        <Login onLoginSuccess={setUser} />
      ) : (
        <>
          <h2>Welcome, {user.displayName}</h2>
          {location.lat && location.lng ? (
            <Map location={location} hospitals={hospitals} />
          ) : (
            <p>Fetching your location...</p>
          )}
        </>
      )}
    </div>
  );
}

export default App;
