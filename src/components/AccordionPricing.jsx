import { CardPricing } from "./CardPricing";

const AccordionPricing = () => {
  return (
    <section id="pricing" className="section-padding bg-pricing">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
            Choose your right plan!
          </h2>
          <div className="shape wow fadeInDown" data-wow-delay="0.3s"></div>
          <p className="wow fadeInDown" data-wow-delay="0.3s">
            Select from best plans, ensuring a perfect match
          </p>
        </div>
        <div
          className="accordion accordion-flush wow fadeInDown shadow-sm p-3 mb-5 bg-body-tertiary rounded  "
          data-wow-delay="0.3s"
          id="accordionFlushExample"
        >
          <div className="accordion-item  ">
            <h2 className="accordion-header ">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Company
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="row">
                  <CardPricing />
                  <CardPricing />
                  <CardPricing />
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Provider
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="row">
                  <CardPricing />
                  <CardPricing />
                  <CardPricing />
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Individual
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="row">
                  <CardPricing />
                  <CardPricing />
                  <CardPricing />
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Client
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="row">
                  <CardPricing />
                  <CardPricing />
                  <CardPricing />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionPricing;
