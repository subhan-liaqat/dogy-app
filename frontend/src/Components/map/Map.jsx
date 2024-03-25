import React, { useEffect, useState } from 'react';
import { Map, Marker, useMarkerRef } from "@vis.gl/react-google-maps";

export default function StaticMap() {
  const [markerRef, marker] = useMarkerRef();
  const [currentLocation, setCurrentLocation] = useState(null);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <Map
      className={"w-full h-[100vh] md:h-full"}
      defaultCenter={{ lat: 40.54992, lng: 44.54992 }}
      defaultZoom={3}
      gestureHandling={"greedy"}
      disableDefaultUI={true}
    >
      {/* Render the Marker component with the markerRef */}
      {currentLocation && (
        <Marker ref={markerRef} position={currentLocation} />
      )}
    </Map>
  );
}
