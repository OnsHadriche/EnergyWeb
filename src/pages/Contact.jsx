export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray " style={{marginTop:"8rem"}}>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
            Contact Us
          </h2>
          <div className="shape wow fadeInDown" data-wow-delay="0.3s"></div>
        </div>
        <div
          className="row contact-form-area wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="col card border-light shadow p-3 mb-5  rounded">
            <section id="cta" className="section-padding">
              <div className="container">
                <div className="row">
                  <div className="col wow fadeInLeft" data-wow-delay="0.3s">
                    <form className="row g-3">
                      <div className="col-6 ">
                        <label htmlFor="inputEmail4" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail4"
                        />
                      </div>
                      <div className="col-6 ">
                        <label htmlFor="inputName" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputName"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="inputSubject" className="form-label">
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputSubject"
                        />
                      </div>
                      <div className="col-12">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>

                      <div className="col-12">
                        <button type="submit" className=" btn btn-common mt-3">
                          Send message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};
