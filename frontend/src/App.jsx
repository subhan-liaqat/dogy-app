import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <main className="font-quicksand font-normal">
        <Outlet />
        <ToastContainer />
      </main>
    </>
  );
}

export default App;
