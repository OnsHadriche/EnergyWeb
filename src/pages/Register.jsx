import { faFacebook, faGoogle, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


 const Register = () => {
  const borderStyle = {
  
      borderBottom: "2px solid lightgray",
      width: "100%"
  
  
  };

  const contentStyle = {
    padding: '0 10px',
  };
  return (
    <div className=" container d-flex justify-content-center" style={{marginTop:"7rem"}}>
      <div className="row p-3  shadow box-area rounded border   ">
        <div className="col-lg-6 col-md-5 col-s-3 col-sx-12 mt-5 d-flex justify-content-center align-items-center ">
          <div className="featured-image">
            <img
              src="/src/assets/images/register.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-7 col-s-9 col-sx-12 ">
          <div className="container d-flex align-items-center flex-column">
            <div className="header-text text-center  mb-4">
              <h2 className="mt-5">Sign up</h2>
            </div>
            <div className="row ">
              <div className="col wow fadeInLeft" data-wow-delay="0.3s">
                <form className="row g-3">
                  <div className="col-6 ">
                    <label htmlFor="inputEmail4" className="form-label">
                      First Name
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-6 ">
                    <label htmlFor="inputEmail4" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
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
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                    />
                  </div>
                  <div className="col-12 ">
                    <div className="d-flex flex-row  justify-content-between">
                      <label htmlFor="inputConfirmPassword" className="form-label">
                        Confirm Password
                      </label>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      id="inputConfirmPassword"
                    />
                  </div>

                  <div className="col-12 position-relative mb-5">
                    <button
                      type="submit"
                      className=" btn btn-common mt-3 position-absolute top-50 start-50 translate-middle"
                    >
                      Submit
                    </button>
                  </div>
                  <div className="col-12 text-center  " >
                    <span >or </span>
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
    
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Register