import { CardService } from "../components/CardService";
import { AboutSection } from "../Layouts/AboutSection";
import { Features } from "../Layouts/Features";
import { Header } from "../Layouts/Header";
import { faDownload, faNetworkWired, faScaleUnbalancedFlip } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  const tabService = [
    {
      icon:faNetworkWired,
      title: "Solar System Design and Planning",
      description:
        "Solari provides tools to design custom solar energy systems tailored to the user's specific energy needs, location, and budget.",
    },
    {
      icon:faDownload,
      title: "Installation Coordination",
      description:
        "Solari connects users with a network of certified solar installers, ensuring that the installation process is seamless and professional. ",
    },
    {
      icon: faScaleUnbalancedFlip,
      title: "Energy Monitoring and Optimization",
      description:
        "Once the solar system is installed, Solari offers real-time monitoring tools that allow users to track their energy production and consumption.",
    },
  ];
  return (
    <>
      <Header />
      <section id="services" className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
              Our Services
            </h2>
            <div className="shape wow fadeInDown" data-wow-delay="0.3s"></div>
          </div>
          <div className="row">
            {tabService.map((item,index)=>(
              <>
              
              <CardService  iconName={item.icon} title={item.title} description={item.description} key={index}/>
              </>
            ))}
          </div>
        </div>
      </section>
      <AboutSection />
      <Features />
      <section id="pricing" className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
              Choose your right plan!
            </h2>
            <div className="shape wow fadeInDown" data-wow-delay="0.3s"></div>
            <p>Select from best plans, ensuring a perfect match</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="table wow fadeInLeft" data-wow-delay="1.2s">
                <div className="icon-box">
                  <i className="lni-package"></i>
                </div>
                <div className="pricing-header">
                  <p className="price-value">
                    $10<span> /mo</span>
                  </p>
                </div>
                <div className="title">
                  <h3>Pro</h3>
                </div>
                <ul className="description">
                  <li>1 user</li>
                  <li>10 GB storage</li>
                  <li>Email support</li>
                  <li>Lifetime updates</li>
                </ul>
                <button className="btn btn-common">Purchase Now</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12 active">
              <div
                className="table wow fadeInUp"
                id="active-tb"
                data-wow-delay="1.2s"
              >
                <div className="icon-box">
                  <i className="lni-drop"></i>
                </div>
                <div className="pricing-header">
                  <p className="price-value">
                    $35<span> /mo</span>
                  </p>
                </div>
                <div className="title">
                  <h3>Plus</h3>
                </div>
                <ul className="description">
                  <li>10 user</li>
                  <li>30 GB storage</li>
                  <li>Priority email support</li>
                  <li>Lifetime updates</li>
                </ul>
                <button className="btn btn-common">Purchase Now</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="table wow fadeInRight" data-wow-delay="1.2s">
                <div className="icon-box">
                  <i className="lni-star"></i>
                </div>
                <div className="pricing-header">
                  <p className="price-value">
                    $150<span> /mo</span>
                  </p>
                </div>
                <div className="title">
                  <h3>Premium</h3>
                </div>
                <ul className="description">
                  <li>Unlimited users</li>
                  <li>Unlimited storage</li>
                  <li>24/7 support</li>
                  <li>Lifetime updates</li>
                </ul>
                <button className="btn btn-common">Purchase Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
