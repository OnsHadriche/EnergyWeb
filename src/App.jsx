import Navbar from "./components/Navbar";
import Footer from "./Layouts/Footer";
import { Contact } from "./pages/Contact";

// import { NavBarTest } from "./components/NavBarTest";
// import { Header } from "./Layouts/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Spinner from "./components/Spinner";

function App() {
  return (
    <>
      {/* <Spinner /> */}
      <Navbar />
      {/* <NavBarTest/> */}
      <Home/>
      <Contact/>
      <Login/>
      <Register/>
      <Footer />
    </>
  );
}

export default App;
