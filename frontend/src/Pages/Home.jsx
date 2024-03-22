export default function Home() {
  return (
    <section className=" min-h-screen grid md:grid-cols-2 gap-8 py-10 px-5 md:px-16">
      <div className="rounded-lg h-full p-1 bg-bg_Color border-2 border-border_Color">
        Left
      </div>
      <div className="h-full bg-red-500 rounded-lg">Right Map</div>
    </section>
  );
}
