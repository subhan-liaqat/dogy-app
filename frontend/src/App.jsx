import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <main className="font-quicksand font-normal">
        <Outlet />
      </main>
    </>
  );
}

export default App;
