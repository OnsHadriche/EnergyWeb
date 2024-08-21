export const Header = () => {
  return (
    <div>
      <div id="hero-area" className="hero-area-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
              <div className="contents ">
                <h2 className="head-title ms-3">Solari platform</h2>
                <p className="ms-3">
                  is a platform dedicated to advancing clean energy
                  transformation, with a focus on making solar power accessible,
                  efficient, and sustainable for individuals, businesses, and
                  communities. It offers a comprehensive suite of tools and
                  services designed to facilitate the adoption and optimization
                  of solar energy systems.
                </p>
                <div className="header-button ms-3">
                  <a
                    rel="nofollow"
                    href="https://rebrand.ly/fusion-ud"
                    className="btn btn-common"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
              <div className="intro-img">
                <img
                  className="img-fluid"
                  src="/src/assets/images/energie.avif"
                  alt=""
                  style={{height:"400px"}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
