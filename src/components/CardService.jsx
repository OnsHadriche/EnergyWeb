import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export const CardService = ({ iconName, title, description }) => {
  return (
    <div className="col-md-6 col-lg-4 col-xs-12">
      <div className="services-item wow fadeInRight" data-wow-delay="0.9s">
        <div className="icon">
          <FontAwesomeIcon icon={iconName} className="fontIcon" />
        </div>
        <div className="services-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

CardService.propTypes = {
  iconName: PropTypes.object,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
