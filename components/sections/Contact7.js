import Link from 'next/link';
const Contact7 = () => {
    return (
        <>
        <section className="contact-section-two home7-style">
          <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/home7-contact-bg.jpg)' }}></div>
          <div className="shape-1 bounce-x"></div>
          <div className="auto-container">
            <div className="outer-box">
              <div className="row">
      
                <div className="content-column col-lg-5 pr-md-10 pl-md--0 pe-0">
                  <div className="inner-column wow fadeInRight">
                    <div className="inner-content">
                      <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/home7-contact-content-bg.png)' }}></div>
                      <h2 className="title">Come and immerse yourself in genuine delight.</h2>
                      <Link href="page-contact" className="theme-btn btn-style-one">Book Now</Link>                
                    </div>
                  </div>
                </div>
      
                <div className="form-column col-lg-7 ps-0">
                  <div className="inner-column">
                    <div className="contact-form-two wow fadeInLeft">
                      <h3 className="title text-start mb-10">Make Appointment</h3>
                      <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br className="d-none d-xl-block" /> do eiusmod tempor incididunt</p>
      
                      <form method="post" action="get" id="contact-form">
                        <div className="row gx-3">
                          <div className="form-group col-md-6">
                            <input type="text" name="first_name" placeholder="First Name" required/>
                          </div>
                          <div className="form-group col-md-6">
                            <input type="text" name="email" placeholder="Email" required/>
                          </div>
                          <div className="form-group col-md-6">
                            <input type="text" name="phone" placeholder="Phone Number" required/>
                          </div>
                          <div className="form-group col-md-6">
                            <input type="text" name="company" placeholder="Select Subject" required/>
                          </div>
                          <div className="form-group col-lg-12">
                            <input type="date" name="address" placeholder="Select Date & Time" required/>
                          </div>
                          <div className="form-group col-lg-12">
                            <textarea name="form_message" className="form-control required" rows="4" placeholder="Message"></textarea>
                          </div>
                          <div className="form-group col-lg-6">
                            <button type="submit" className="theme-btn btn-style-one w-auto" name="submit-form"><span className="btn-title">SUBMIT REQUEST</span></button>
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
export default Contact7