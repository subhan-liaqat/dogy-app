<<<<<<< HEAD
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
=======
import { Map } from "@vis.gl/react-google-maps";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

export default function StaticMap() {
  const [coordinates, setCoordinates] = useState({
    longitude: "",
    latitude: "",
  });
  console.log(coordinates);

  const [status, setStatus] = useState("pending");
  useEffect(() => {
    const success = (position) => {
      setCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      setStatus("success");
    };

    const error = () => {
      setStatus("error");
    };

    if (!navigator.geolocation) {
      setStatus("error");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, []);

  if (status === "pending") {
    return (
      <div className="flex gap-2 justify-center items-center capitalize h-full">
        loading map <Loader className="animate-spin" />
      </div>
    );
  }

  if (status === "error") {
    return (
      <p className="h-full flex items-center justify-center">
        unable to get location. please refresh to try again
      </p>
    );
  }

  return (
    <Map
      className={"w-full h-[100vh] md:h-full"}
      defaultCenter={{ lat: coordinates.latitude, lng: coordinates.longitude }}
      defaultZoom={3}
      gestureHandling={"greedy"}
      disableDefaultUI={true}
      zoom={15}
    />
>>>>>>> d7422b4 (add dog age field)
  );
}
