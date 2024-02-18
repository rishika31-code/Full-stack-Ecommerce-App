import React, { useCallback, useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import axios from "axios";
import getAdressbyCordinates from "../../functions/getAdressbyCordinates";
import toast from "react-hot-toast";

// default style for map conatiner
const containerStyle = {
  width: "100%",
  height: "100%",
};

// default point if user doesn't allow location
const defaultCenter = {
  lat: -3.745,
  lng: -38.523,
};

const GoogleMapView = ({ setAddress }) => {
  const [map, setMap] = useState(null);
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          try {
            const getAdress = await getAdressbyCordinates(
              userLocation.lat,
              userLocation.lng
            );
            setAddress(getAdress);
            setMapCenter(userLocation);
          } catch (error) {
            toast.error("Error!");
            setAddress("Some Error Try Again !");
          }
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  // if user change the marker to another location
  const onSelectLocation = async (e) => {
    const newPosition = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    // getting the adress by coordinates
    try {
      const getAdress = await getAdressbyCordinates(
        newPosition.lat,
        newPosition.lng
      );
      setAddress(getAdress);
      setMapCenter(newPosition);
    } catch (error) {
      console.log(error);
    }
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={mapCenter}
      zoom={17}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        disableDefaultUI: true,
        scrollwheel: false,
      }}
      onClick={onSelectLocation}
    >
      <Marker position={mapCenter} />
    </GoogleMap>
  ) : (
    <p>Loading...</p>
  );
};

export default React.memo(GoogleMapView);
