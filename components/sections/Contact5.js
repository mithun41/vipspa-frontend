const Contact5 = () => {
    return (
        <>
        <section className="contact-section pt-70 m-0 pb-0">
          <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/bg-contact1-1.jpg)' }}></div>
          <div className="auto-container">
            <div className="outer-box">
              <div className="row">
                <div className="form-column offset-xl-7 col-xl-5 offset-lg-6 col-lg-6 offset-md-4 col-md-8 p-sm--0">
                  <div className="inner-column">
                    <div className="contact-form">
                      <div className="sec-title">
                        <figure className="image"><img src="images/icons/icon1.png" alt="Image"/></figure>
                        <span className="sub-title">Appointment</span>
                        <h3 className="words-slide-up text-split">Book Now</h3>
                        <div className="text">Proin efficitur, mauris vel condimentum pulvinar, velit <br/> orci consectetur ligula.</div>
                      </div>
                      <form id="contact_form" name="contact_form" action="#" method="post">
                        <div className="row">
                          <div className="form-group col-lg-6 col-md-6">
                            <input type="text" name="form_name" placeholder="Name *" required/>
                          </div>
                          <div className="form-group col-lg-6 col-md-6">
                            <input type="email" name="form_email" placeholder="Email Address *" required/>
                          </div>
                          <div className="form-group col-lg-6 col-md-6">
                            <input type="select" name="form_subject" placeholder="Select Service *" required/>
                          </div>
                          <div className="form-group col-lg-6 col-md-6">
                            <input type="date" name="date" placeholder="Select Date *" required/>
                          </div>
                          <div className="form-group col-lg-12">
                            <textarea name="form_textarea" placeholder="Write a Message" rows="2"></textarea>
                          </div>
                          <div className="form-group col-lg-12">
                            <input name="form_botcheck" className="form-control" type="hidden" value="" />
                            <button type="submit" className="theme-btn btn-style-one mb-3 mb-sm-0" data-loading-text="Please wait..."><span className="btn-title">Book Now</span></button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Contact5