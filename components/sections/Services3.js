import React from 'react';

const Services3 = ({ addClass, services = [] }) => {
  // যদি ডাটা না থাকে তাহলে লোডিং বা খালি রাখা ভালো
  if (!services || services.length === 0) return null;

  return (
    <>
      <section className={`services-section-six ${addClass}`}>
        <div
          className="bg bg-image-four"
          style={{ backgroundImage: "url(/images/background/bg-service2.jpg)" }}
        ></div>
        <div className="leaf-1 bounce-y">
          <img src="images/resource/service-leaf-1.png" alt="" />
        </div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="sec-title text-center">
              <figure className="image">
                <img src="images/icons/icon1.png" alt="Image" />
              </figure>
              <span className="sub-title">What We Do</span>
              <h2 className="words-slide-up text-split">Top Services</h2>
            </div>
            
            <div className="row justify-content-center">
              {services.map((item, index) => (
                <div key={item.id || index} className="service-block-six col-lg-4 col-md-6">
                  <div className="inner-box">
                    <div className="thumb-icon">
                      <div
                        className="bg bg-image"
                        style={{
                          backgroundImage: "url(/images/resource/service-icon-bg.svg)",
                        }}
                      ></div>
                      {/* ডাইনামিক আইকন ইমেজ (backend url সহ) */}
                      <img src={item.icon_image} alt={item.title} />
                    </div>
                    
                    <div className="shape-btn">
                      <svg width="160" height="160" viewBox="0 0 160 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1574 20.5622C18.5298 6.25806 6.20765 0.894009 0 0H142V97C138.648 83.4111 126.769 80.6098 121.248 80.9078H35.3836C22.3475 80.1926 18.4678 69.8817 18.1574 64.8157C18.0022 56.0246 17.7849 34.8664 18.1574 20.5622Z" fill="black" />
                      </svg>
                    </div>

                    <div className="service-btn">
                      {/* আপনি যদি ডিটেইলস লিংক রাখতে চান */}
                      <a className="btn" href={`/service/${item.id}`}>
                        <i className="fa-sharp far fa-arrow-right"></i>
                      </a>
                    </div>

                    <div className="read-more">
                      <i className="flaticon flaticon-stethoscope-3"></i>
                    </div>

                    <div className="service-content">
                      <h4 className="title">{item.title}</h4>
                      <p className="text">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-bottom">
              <div className="inner-text">
                Book Your Session{" "}
                <a href="tel:+8801891450300">
                  Contact Now <i className="fa-sharp far fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services3;