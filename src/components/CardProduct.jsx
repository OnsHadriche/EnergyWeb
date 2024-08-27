import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const CardProduct = ({ item }) => {
  return (
    <div className="card">
      <div className="text-center">
        <img src="/src/assets/images/produit.jpg" className="card-img-top  " />
      </div>
      <div className="card-body">
        <div  className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title">{item.title}</h5>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <p className="card-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aut
          exercitationem vitae iste non, reprehenderit deleniti ratione.
        </p>
        <h5>{item.price}$</h5>
        <button className="btn btn-primary mt-2">Buy now</button>
      </div>
     
    </div>
  );
};
CardProduct.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CardProduct;
