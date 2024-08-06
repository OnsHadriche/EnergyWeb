export const ActionSection = () => {
  return (
    <section id="cta" className="section-padding">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-md-6 col-xs-12 wow fadeInLeft"
            data-wow-delay="0.3s"
          >
            <div className="cta-text">
              <h4>Get 30 days free trial</h4>
              <p>
                Praesent imperdiet, tellus et euismod euismod, risus lorem
                euismod erat, at finibus neque odio quis metus. Donec vulputate
                arcu quam.{" "}
              </p>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-xs-12 text-right wow fadeInRight"
            data-wow-delay="0.3s"
          >
            <br />
            <a href="#" className="btn btn-common">
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
