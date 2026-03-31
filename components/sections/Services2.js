import Link from "next/link";
const Services2 = () => {
  return (
    <>
      <section className="services-section-two">
        <div
          className="bg bg-image-four"
          style={{ backgroundImage: "url(/images/background/bg-service1.jpg)" }}
        ></div>
        <div className="leaf3-pattrn1 bounce-x"></div>
        <div className="about2-8-pattrn2 bounce-y"></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="sec-title text-center">
              <figure className="image">
                <img src="images/icons/icon1.png" alt="Image" />
              </figure>
              <span className="sub-title">What We Do</span>
              <h2 className="words-slide-up text-split">Our Services</h2>
            </div>
            <div className="row">
              <div className="service-block-two col-lg-4 col-md-6">
                <div className="inner-box">
                  <div
                    className="bg bg-image"
                    style={{
                      backgroundImage: "url(/images/resource/service2-3.png)",
                    }}
                  ></div>
                  <figure className="image-two mb-0">
                    <img src="images/resource/service2-4.jpg" alt="Image" />
                  </figure>
                  <div className="content-box-hover">
                    <div className="content-box">
                      <img
                        className="icon"
                        src="images/icons/theme-icon1.png"
                        alt="icon"
                      />
                      <h3 className="title">
                        <Link href="page-service-details">Stone spa</Link>
                      </h3>
                      <div className="text">
                        Proin efficitur, mauris vel condimentum pulvinar
                      </div>
                      <Link className="read-more" href="page-service-details">
                        <i className="icon-two fa-regular fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="image-box">
                      <figure className="image mb-0">
                        <img src="images/resource/service2-1.jpg" alt="Image" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-block-two col-lg-4 col-md-6">
                <div className="inner-box">
                  <div
                    className="bg bg-image"
                    style={{
                      backgroundImage: "url(/images/resource/service2-3.png)",
                    }}
                  ></div>
                  <figure className="image-two mb-0">
                    <img src="images/resource/service2-5.jpg" alt="Image" />
                  </figure>
                  <div className="content-box-hover">
                    <div className="content-box">
                      <img
                        className="icon"
                        src="images/icons/theme-icon2.png"
                        alt="icon"
                      />
                      <h3 className="title">
                        <Link href="page-service-details">Stone spa</Link>
                      </h3>
                      <div className="text">
                        Proin efficitur, mauris vel condimentum pulvinar
                      </div>
                      <Link className="read-more" href="page-service-details">
                        <i className="icon-two fa-regular fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="image-box">
                      <figure className="image mb-0">
                        <img src="images/resource/service2-2.jpg" alt="Image" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-block-two col-lg-4 col-md-6">
                <div className="inner-box">
                  <div
                    className="bg bg-image"
                    style={{
                      backgroundImage: "url(/images/resource/service2-3.png)",
                    }}
                  ></div>
                  <figure className="image-two mb-0">
                    <img src="images/resource/service2-6.jpg" alt="Image" />
                  </figure>
                  <div className="content-box-hover">
                    <div className="content-box">
                      <img
                        className="icon"
                        src="images/icons/theme-icon3.png"
                        alt="icon"
                      />
                      <h3 className="title">
                        <Link href="page-service-details">Stone spa</Link>
                      </h3>
                      <div className="text">
                        Proin efficitur, mauris vel condimentum pulvinar
                      </div>
                      <Link className="read-more" href="page-service-details">
                        <i className="icon-two fa-regular fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="image-box">
                      <figure className="image mb-0">
                        <img src="images/resource/service2-1.jpg" alt="Image" />
                      </figure>
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
export default Services2;
