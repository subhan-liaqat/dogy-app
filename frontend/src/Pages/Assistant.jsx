import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import StaticMap from "../Components/map/Map";

export default function Assistant() {
  return (
    <section className=" min-h-screen grid md:grid-cols-2 gap-8 py-10 px-5 md:px-16">
      <div className="rounded-lg h-full py-3 bg-bg_Color border-2 border-border_Color flex flex-col px-2 md:px-5">
        <Link to={"/"} className="flex items-center gap-2">
          <ArrowLeft className=" bg-border_Color rounded-full p-2" size={35} />
          Back to settings
        </Link>
      </div>
      <div className="h-full overflow-hidden rounded-lg">
        <StaticMap />
      </div>
    </section>
  );
}
