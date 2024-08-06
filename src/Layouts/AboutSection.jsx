import "./../assets/css/main.css"
export const AboutSection = () => {
  return (
    <div className="about-area section-padding bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-xs-12 info">
          <div className="about-wrapper wow fadeInLeft" data-wow-delay="0.3s">
            <div>
              <div className="site-heading">
                <p className="mb-3">About </p>
                <h2 className="section-title">Detailed Statistics of your Company</h2>
              </div>
              <div className="content">
                <p>
                  Praesent imperdiet, tellus et euismod euismod, risus lorem euismod erat, at finibus neque odio quis metus. Donec vulputate arcu quam. Morbi quis tincidunt ligula. Sed rutrum tincidunt pretium. Mauris auctor, purus a pulvinar fermentum, odio dui vehicula lorem, nec pharetra justo risus quis mi. Ut ac ex sagittis, viverra nisl vel, rhoncus odio. 
                </p>
                <a href="#" className="btn btn-common mt-3">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-xs-12 wow fadeInRight" data-wow-delay="0.3s">
          <img className="img-fluid" src="/src/assets/images/service.webp" alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}
