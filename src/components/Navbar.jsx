// import DensitySmallOutlinedIcon from "@mui/icons-material/DensitySmallOutlined";

const Navbar = () => {
  const styleImageLogo = {
    width: "200px",
    height: "80px",
  };
  return (
    <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
      <div className="container">
        <a href="#" className="navbar-brand">
          <img
            src="/src/assets/images/logo.png"
            style={styleImageLogo}
            alt=""
          />
        </a>
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
              <a className="nav-link" href="#hero-area">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonial">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-common ms-3">
                login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
