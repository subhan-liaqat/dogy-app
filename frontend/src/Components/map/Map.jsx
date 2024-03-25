import { Map } from "@vis.gl/react-google-maps";
import useCoordinates from "../../hooks/useCoordinates";
import Loader from "../Loader";

export default function StaticMap() {
  const { coordinates, status } = useCoordinates();
  if (status === "pending") {
    return <Loader />;
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
  );
}
