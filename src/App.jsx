import Navbar from "./components/Navbar";
import Footer from "./Layouts/Footer";

// import { NavBarTest } from "./components/NavBarTest";
// import { Header } from "./Layouts/Header";
import Home from "./pages/Home";
// import Spinner from "./components/Spinner";

function App() {
  return (
    <>
      {/* <Spinner /> */}
      <Navbar />
      {/* <NavBarTest/> */}
      <Home/>
      <Footer />
    </>
  );
}

export default App;
