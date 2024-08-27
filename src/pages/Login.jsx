import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className=" container d-flex justify-content-center "  style={{marginTop:"8rem"}} >
      <div className="row p-3 bg-white shadow box-area rounded border ">
        <div className="col-lg-6 col-md-5 col-s-3 col-sx-12 mt-5 d-flex justify-content-center align-items-center ">
          <div className="featured-image">
            <img
              src="/src/assets/images/login.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-7 col-s-9 col-sx-12 mt-5 ">
          <div className="container   d-flex align-items-center flex-column">
            <div className="header-text text-center  mb-4">
              <h2>Login</h2>
              <p>Welcome back.</p>
            </div>
            <div className="row ">
              <div className="col wow fadeInLeft" data-wow-delay="0.3s">
                <form className="row g-3">
                  <div className="col-12 ">
                    <label htmlFor="inputEmail4" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-12 ">
                    <div className="d-flex flex-row  justify-content-between">
                      <label htmlFor="inputPassword" className="form-label">
                        Password
                      </label>
                      <a href="#">Forget Password?</a>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                    />
                  </div>

                  <div className="col-12 position-relative mb-5">
                    <button
                      type="submit"
                      className=" btn btn-common mt-3 position-absolute top-50 start-50 translate-middle"
                    >
                      Login
                    </button>
                  </div>
                  <div className="col-12 text-center mt-5">
                    <span>or continue with</span>
                  </div>
                </form>
              </div>
              <div className="col-12 text-center mt-5 mb-4">
                <ul className="d-flex justify-content-evenly">
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faGoogle} style={{color:"red", fontSize:"25px"}} />
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faFacebook} style={{color:"blue",fontSize:"25px"}} />
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faWhatsapp} style={{color:"green",fontSize:"25px"}} />
                  </li>
                </ul>
              </div>
              <div className="col-12 text-center ">
                    <span>Don't have an account yet ? <Link to="/register">Sign up here</Link></span>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
