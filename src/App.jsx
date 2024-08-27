import Navbar from "./components/Navbar";
import Footer from "./Layouts/Footer";

// react-router
import { Outlet,  RouterProvider } from "react-router-dom";
import router from "./routers/routers";
import Spinner from "./components/Spinner";

function App() {
  return (
    <RouterProvider router={router}
    fallbackElement={<Spinner />}
    />
  );
}

export function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
