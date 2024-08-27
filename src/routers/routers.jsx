import { createBrowserRouter } from "react-router-dom";
//Pages
import Home from "../pages/Home";

import Register from "../pages/Register";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import { Layout} from "../App";
import { Contact } from "../pages/Contact";
import AllProducts from "../pages/AllProducts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "allproducts", element: <AllProducts /> },
    ],
  },

  { path: "*", element: <ErrorPage/> }
]);
export default router