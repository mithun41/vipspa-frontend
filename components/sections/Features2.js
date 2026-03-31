import Link from "next/link"
const Features2 = () => {
    return (
        <>
        <section className="features-section">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-xl-5 offset-xl-7 col-lg-6 offset-lg-6">
                <div className="inner-column">
                  <div className="sec-title mb-0">
                    <figure className="image"><img src="images/icons/icon1.png" alt="Image"/></figure>
                    <span className="sub-title">Wellness Spa Retreats</span>
                    <h2 className="words-slide-up text-split">The Ultimate Relaxation</h2>
                    <div className="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec.</div>
                  </div>
                  <div className="bg-image" style={{ backgroundImage: 'url(/images/resource/feature1-1.jpg)' }}></div>
                  <div className="list-style-two">                            
                    <div className="row">
                      <div className="col-sm-5">
                        <div className="feature-block">
                          <div className="inner-box">
                            <figure className="icon"><img src="images/icons/vector.png" alt="Image"/></figure>
                            <h3 className="title">Body Scrubs</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-7">
                        <div className="feature-block">
                          <div className="inner-box">
                            <figure className="icon"><img src="images/icons/vector.png" alt="Image"/></figure>
                            <h3 className="title">Cellulite Treatments</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div className="feature-block">
                          <div className="inner-box">
                            <figure className="icon"><img src="images/icons/vector.png" alt="Image"/></figure>
                            <h3 className="title">Back Treatments</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-7">
                        <div className="feature-block">
                          <div className="inner-box">
                            <figure className="icon"><img src="images/icons/vector.png" alt="Image"/></figure>
                            <h3 className="title">Body Polish</h3>
                          </div>
                        </div>
                      </div>
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
export default Features2