// import DensitySmallOutlinedIcon from "@mui/icons-material/DensitySmallOutlined";

import { Link } from "react-router-dom";
7;
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const styleImageLogo = {
    width: "200px",
    height: "80px",
  };
  return (
    <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar ">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src="/src/assets/images/logo.png"
            style={styleImageLogo}
            alt=""
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <HashLink
                className="nav-link"
                to="/page#services"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smmoth", block: "end" })
                }
              >
                Services
              </HashLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/marketplace">
                Marketplace
              </Link>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/page#product" smooth>
                Product
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                className="nav-link"
                to="/page#pricing"
                
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "end" })
                }
              >
                Pricing
              </HashLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="btn btn-common ms-3">
                login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
