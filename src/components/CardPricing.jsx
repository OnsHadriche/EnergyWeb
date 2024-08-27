export const CardPricing = () => {
  return (
    <div className="col-lg-4 col-md-6 col-xs-12">
      <div className="table " data-wow-delay="1.2s">
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
  );
};
