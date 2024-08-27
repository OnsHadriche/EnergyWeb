import { Link } from "react-router-dom";
import CardProduct from "../components/CardProduct";

const ProductSection = () => {
  const items = [
    { title: "Item 1", price: 19.99 },
    { title: "Item 2", price: 29.99 },
    { title: "Item 3", price: 9.99 },
    { title: "Item 4", price: 49.99 },
    { title: "Item 5", price: 99.99 },
    { title: "Item 5", price: 99.99 },
    { title: "Item 5", price: 99.99 },
  ];

  return (
    <div className="section-header text-center">
      <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
        Our Product
      </h2>
      <div
        className="about-area section-padding wow  fadeInDown"
        data-wow-delay="0.3s"
      >
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
            {items.map((el, index) => (
              <div className="col" key={index}>
                <CardProduct item={el} />
              </div>
            ))}
          </div>
        </div>
      <Link to="/allproducts">View all</Link>
      </div>
    </div>
  );
};

export default ProductSection;
