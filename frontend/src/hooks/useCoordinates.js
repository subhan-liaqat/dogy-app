import { useEffect, useState } from "react";

export default function useCoordinates() {
  const [coordinates, setCoordinates] = useState({
    longitude: "",
    latitude: "",
  });

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

  return { coordinates, status };
}
