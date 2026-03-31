import Link from "next/link"
const About5T2 = () => {
    return (
        <>
        <section className="about-section2-home5 pt-0">
          <div className="container-fluid p-0">
            <div className="outer-box">
              <div className="row align-items-center">
                <div className="about-block2-home5 col-lg-6 col-xxl-4 offset-xxl-2 ps-4 ps-xxl-0 mb-5 mb-lg-0">
                  <div className="inner-box">
                    <div className="sec-title mb-20">
                      <figure className="image"><img src="images/icons/icon1.png" alt="Image"/></figure>
                      <span className="sub-title">Wellness Spa Retreats</span>
                      <h2 className="words-slide-up text-split">The Ultimate Spa & Oil Message</h2>
                    </div>
                    <div className="about-content">
                      <p className="text mb-30">Proin efficitur mauris vel condimentum pulvinar velit orci consectetur ligula eget egestas magna mi ut arcu  Phasellus nec.</p>
                      <div className="list-style1-home4 d-flex align-items-center">
                        <ul className="list-style1-home4">
                          <li className="mb-25"><img className="me-2" src="images/icons/list-style-icon1.svg" alt=""/> Body Scrubs</li>
                          <li><img className="me-2" src="images/icons/list-style-icon1.svg" alt=""/> Cellulite Treatments</li>
                        </ul>
                        <ul className="list-style1-home4 ml-40">
                          <li className="mb-25"><img className="me-2" src="images/icons/list-style-icon1.svg" alt=""/> Back Treatments</li>
                          <li><img className="me-2" src="images/icons/list-style-icon1.svg" alt=""/> Body Polish</li>
                        </ul>
                      </div>
                      <Link href="page-contact" className="theme-btn btn-style-one mt-40">APPOINTMENT NOW</Link>
                    </div>
                  </div>
                </div>
                <div className="about-block2-home5 col-lg-6 text-end">
                  <div className="thumb-box">
                    <img src="images/resource/about-img2-home5.jpg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default About5T2