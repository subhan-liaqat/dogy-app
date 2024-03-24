import DogDetails from "../Components/DogDetails";
import StaticMap from "../Components/map/Map";

export default function Home() {
  return (
    <section className=" min-h-screen grid md:grid-cols-2 gap-8 py-10 px-5 md:px-16">
      <div className="rounded-lg h-full py-3 bg-bg_Color border-2 border-border_Color flex flex-col px-2 md:px-5">
        <DogDetails />
      </div>
      <div className="h-full rounded-lg overflow-hidden border-2">
        <StaticMap />
      </div>
    </section>
  );
}
