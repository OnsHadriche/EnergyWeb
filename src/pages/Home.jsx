import AccordionPricing from "../components/AccordionPricing";
import { CardService } from "../components/CardService";
import { AboutSection } from "../Layouts/AboutSection";
import { Features } from "../Layouts/Features";
import { Header } from "../Layouts/Header";
import {
  faDownload,
  faNetworkWired,
  faScaleUnbalancedFlip,
} from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  const tabService = [
    {
      icon: faNetworkWired,
      title: "Solar System Design and Planning",
      description:
        "Solari provides tools to design custom solar energy systems tailored to the user's specific energy needs, location, and budget.",
    },
    {
      icon: faDownload,
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
          <div className="row" id="services">
            {tabService.map((item, index) => (
              <>
                <CardService
                  iconName={item.icon}
                  title={item.title}
                  description={item.description}
                  key={index}
                />
              </>
            ))}
          </div>
        </div>
      </section>
      <AboutSection />
      <Features />

      <AccordionPricing />
    </>
  );
};

export default Home;
