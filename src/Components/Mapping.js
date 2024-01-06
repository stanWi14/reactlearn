import React, { Component } from "react";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';

// Import your custom pin image
import pinIcon from '../img/userlocationpin.png';

class Mapping extends Component {
  componentDidMount() {
    // Try to get user's location using Geolocation API
    if (navigator.geolocation) {
navigator.geolocation.watchPosition(this.handleLocationSuccess, this.handleLocationError);
    } else {
      alert("Geolocation is not supported by your browser");
    }
  }

  handleLocationSuccess = (position) => {
    const { latitude, longitude } = position.coords;

    // Create a custom icon for the marker using your pin image
    const customIcon = L.icon({
      iconUrl: pinIcon,
      iconSize: [32, 32], // Set the size of your pin image
      iconAnchor: [16, 32], // Set the anchor point to the middle bottom of the image
      popupAnchor: [0, -32] // Set the popup anchor to the top middle of the image
    });

    // Initialize the map and set the view to the user's location
    this.mymap = L.map('map').setView([latitude, longitude], 25); // Adjust the zoom level as needed

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.mymap);

    // Add a marker at the user's location with the custom icon
    L.marker([latitude, longitude], { icon: customIcon }).addTo(this.mymap);

    // Add a click event listener to the map
    this.mymap.on('click', this.handleMapClick);
  }

  handleLocationError = (error) => {
    alert(`Error getting your location: ${error.message}`);
  }

  handleMapClick = (e) => {
    var coordinates = e.latlng;
    alert('Latitude: ' + coordinates.lat.toFixed(6) + ', Longitude: ' + coordinates.lng.toFixed(6));
    // You can replace the alert with any other action you want to perform with the coordinates
  }

  componentWillUnmount() {
    // Remove the click event listener when the component is unmounted
    if (this.mymap) {
      this.mymap.off('click', this.handleMapClick);
    }
  }

  render() {
    return (
      <div>
        <h1>Your Map</h1>
        <div id="map" style={{ height: "400px" }}></div>
      </div>
    );
  }
}

export default Mapping;
