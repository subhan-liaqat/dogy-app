import React, { useEffect, useState } from 'react';
import { Map, Marker, useMarkerRef } from "@vis.gl/react-google-maps";

export default function StaticMap() {
  const [markerRef, marker] = useMarkerRef();
  // const [newMarkerPosition, setNewMarkerPosition] = useState({ lat: 30.3753, lng: 69.3451 });
;

  // useEffect(() => {
  //   if (marker) {
  //     // Log marker's position
  //     console.log('Marker position:', marker.getPosition());

  //     // Update marker position
  //     marker.setPosition(newMarkerPosition);
  //   }
  // }, [marker, newMarkerPosition]);

  return (
    <Map
      className={"w-full h-[100vh] md:h-full"}
      defaultCenter={{ lat: 22.54992, lng: 0 }}
      defaultZoom={3}
      gestureHandling={"greedy"}
      disableDefaultUI={true}>
      {/* Render the Marker component with the markerRef */}
      <Marker ref={markerRef} position={{ lat: 53.54992, lng: 10.00678 }} />
    </Map>
  );
}
