import { Map } from "@vis.gl/react-google-maps";

export default function StaticMap() {
  return (
    <Map
      className={"w-full h-full"}
      defaultCenter={{ lat: 22.54992, lng: 0 }}
      defaultZoom={3}
      gestureHandling={"greedy"}
      disableDefaultUI={true}
    />
  );
}
