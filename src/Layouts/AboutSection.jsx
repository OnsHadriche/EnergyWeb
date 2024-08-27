import CardStatics from "../components/CardStatics";
import "./../assets/css/main.css";

export const AboutSection = () => {
  return (
    <div className="about-area section-padding ">
      <div className="container ">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-xs-12 info">
            <div className="about-wrapper wow fadeInLeft" data-wow-delay="0.3s">
              <div>
                <div className="site-heading">
                  <span className="badge rounded-pill text-bg-badge mb-3">
                    Benefit you will get
                  </span>
                  <h2 className="section-title">
                    Having everything you need in one
                  </h2>
                </div>
                <div className="content">
                  <p>
                    Praesent imperdiet, tellus et euismod euismod, risus lorem
                    euismod erat, at finibus neque odio quis metus. Donec
                    vulputate arcu quam. Morbi quis tincidunt ligula. Sed rutrum
                    tincidunt pretium. Mauris auctor, purus a pulvinar
                    fermentum, odio dui vehicula lorem, nec pharetra justo risus
                    quis mi. Ut ac ex sagittis, viverra nisl vel, rhoncus odio.
                  </p>
                  <a href="#" className="btn btn-common mt-3">
                    Read More
                  </a>
                </div>
                <div className="d-flex">
                  <CardStatics />
                  <CardStatics />
                  <CardStatics />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-7 col-md-12 col-xs-12 wow fadeInRight  "
            data-wow-delay="0.3s"
          >
            <img
              className="img-fluid"
              src="/src/assets/images/platform.jpg"
              alt="Description of the image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
