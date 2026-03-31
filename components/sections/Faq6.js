import { useState } from 'react'
const Faq6 = () => {
  const [isActive, setIsActive] = useState({
      status: false,
      key: 1,
  })

  const handleClick = (key) => {
      if (isActive.key === key) {
          setIsActive({
              status: false,
          })
      } else {
          setIsActive({
              status: true,
              key,
          })
      }
  }
    return (
        <>
        <section className="contact-section-two style-two">
          <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/bg-faq1.png)' }}></div>
          <div className="bg bg-image2" style={{ backgroundImage: 'url(/images/background/bg-faq3.jpg)' }}></div>
          <div className="faq1-shape-1 bounce-y"></div>
          <div className="container">
            <div className="outer-box">
              <div className="row">
      
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column wow fadeInRight">
                    <div className="sec-title">
                      <figure className="image"><img src="images/icons/icon1.png" alt="Image"/></figure>
                      <span className="sub-title">Wellness Spa Retreats</span>
                      <h2>Services that help our customers meet</h2>
                      <div className="text">With over four decades of experience providing solutions to largescale enterprises throughout the globe offer</div>
                    </div>
      
                    <ul className="accordion-box style-three">
                      <li className="accordion block">
                        <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>Our mission is to design, innovative <i className="arrow fa fa-arrow-right"></i></div>
                        <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                          <div className="content">
                            <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum cubilia eget, feugiat felis sociis ad augue senectus ligula.</div>
                          </div>
                        </div>
                      </li>
                      <li className="accordion block">
                        <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>Purelax seeks to be a premier <i className="arrow fa fa-arrow-right"></i></div>
                        <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                          <div className="content">
                            <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum cubilia eget, feugiat felis sociis ad augue senectus ligula.</div>
                          </div>
                        </div>
                      </li>
                      <li className="accordion block">
                        <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>We will continue to build and nurture <i className="arrow fa fa-arrow-right"></i></div>
                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                          <div className="content">
                            <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum cubilia eget, feugiat felis sociis ad augue senectus ligula.</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
      
                <div className="form-column col-lg-5 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="contact-form-two wow fadeInLeft">
                      <div className="bg bg-pattern-1"></div>
                      <h3 className="title">Request A Quote</h3>
      
                      <form method="post" action="get" id="contact-form">
                        <div className="row gx-3">
                          <div className="form-group col-lg-6 col-md-6">
                            <input type="text" name="first_name" placeholder="First Name" required/>
                          </div>
                          <div className="form-group col-lg-6 col-md-6">
                            <input type="text" name="last_name" placeholder="Last Name" required/>
                          </div>
                          <div className="form-group col-lg-6 col-md-6">
                            <input type="text" name="email" placeholder="Email" required/>
                          </div>
                          <div className="form-group col-lg-6 col-md-6">
                            <input type="text" name="phone" placeholder="Phone" required/>
                          </div>
                          <div className="form-group col-lg-6 col-md-6">
                            <input type="text" name="company" placeholder="Company" required/>
                          </div>
                          <div className="form-group col-lg-6 col-md-6">
                            <input type="text" name="address" placeholder="Address" required/>
                          </div>
                          <div className="form-group col-lg-12">
                            <label>Budget Range</label>
                            <div className="range-slider-one">
                              <input type="text" className="range-amount" name="field-name" readOnly />
                              <div className="distance-range-slider"></div>
                            </div>
                          </div>
                          <div className="form-group col-lg-12">
                            <textarea name="form_message" className="form-control required" rows="5" placeholder="Message"></textarea>
                          </div>
                          <div className="form-group col-lg-12">
                            <button type="submit" className="theme-btn btn-style-two hover-light" name="submit-form"><span className="btn-title">SUBMIT REQUEST</span></button>
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
export default Faq6
