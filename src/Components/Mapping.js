import React, { useState, useEffect } from "react";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import pinIcon from '../img/userlocationpin.png';

const Mapping = () => {
  const [mymap, setMap] = useState(null);

  useEffect(() => {
    // Try to get user's location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleLocationSuccess, handleLocationError);
    } else {
      alert("Geolocation is not supported by your browser");
    }

    // Cleanup function to remove the map when the component is unmounted
    return () => {
      if (mymap) {
        mymap.off('click', handleMapClick);
        mymap.remove();
      }
    };
  }, [mymap]); // Dependency array to ensure cleanup only on unmount and avoid unnecessary re-renders

  const handleLocationSuccess = (position) => {
    const { latitude, longitude } = position.coords;

    const customIcon = L.icon({
      iconUrl: pinIcon,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    // Initialize the map only if it hasn't been initialized yet
    if (!mymap) {
      const mapInstance = L.map('map').setView([latitude, longitude], 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(mapInstance);

      L.marker([latitude, longitude], { icon: customIcon }).addTo(mapInstance);

      mapInstance.on('click', handleMapClick);

      setMap(mapInstance);
    }
  };

  const handleLocationError = (error) => {
    alert(`Error getting your location: ${error.message}`);
  };

  const handleMapClick = (e) => {
    var coordinates = e.latlng;
    alert('Latitude: ' + coordinates.lat.toFixed(6) + ', Longitude: ' + coordinates.lng.toFixed(6));
  };

  return (
    <div>
      <h1>Your Map</h1>
      <div id="map" style={{ height: "400px" }}></div>
    </div>
  );
};

export default Mapping;
