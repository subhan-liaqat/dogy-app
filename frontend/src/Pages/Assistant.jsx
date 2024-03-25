import { Map } from "@vis.gl/react-google-maps";
import { ArrowLeft } from "lucide-react";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { DogyContext } from "../Components/map/DogyContext";
import useCoordinates from "../hooks/useCoordinates";

export default function Assistant() {
  const { data } = useContext(DogyContext);
  const { coordinates } = useCoordinates();

  if (!data) {
    return <Navigate to={"/"} replace />;
  }

  console.log(data.places[0], coordinates);
  return (
    <section className=" min-h-screen grid md:grid-cols-2 gap-8 py-10 px-5 md:px-16">
      <div className="rounded-lg h-full py-3 bg-bg_Color border-2 border-border_Color flex flex-col px-2 md:px-5">
        <Link to={"/"} className="flex items-center gap-2">
          <ArrowLeft className=" bg-border_Color rounded-full p-2" size={35} />
          Back to settings
        </Link>

        <div
          dangerouslySetInnerHTML={{ __html: data.exercises }}
          className="px-8 my-7"
        ></div>
      </div>
      <div className="h-full overflow-hidden rounded-lg">
        <Map
          className={"w-full h-[100vh] md:h-full"}
          defaultCenter={{
            lat: +coordinates.latitude,
            lng: +coordinates.longitude,
          }}
          center={{ lat: +coordinates.latitude, lng: +coordinates.longitude }}
          defaultZoom={3}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          zoom={15}
          mapId={"map"}
        ></Map>
      </div>
    </section>
  );
}
