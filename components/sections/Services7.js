import Link from "next/link";
const Services7 = () => {
  return (
    <>
      <section className="service-section-home7">
        <div className="service-pattrn bounce-x"></div>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row mt-100">
                <div className="col-lg-12">
                  <div className="sec-title">
                    <figure className="image">
                      <img src="images/icons/icon2.png" alt="Image" />
                    </figure>
                    <span className="sub-title">Services list</span>
                    <h2 className="words-slide-up text-split">
                      Indulge in Our Premium Spa Services
                    </h2>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="service-block">
                    <div className="inner-box">
                      <div className="image-box">
                        <div
                          className="bg-image"
                          style={{
                            backgroundImage:
                              "url(/images/resource/serviceitembg.png)",
                          }}
                        ></div>
                        <div
                          className="bg-image-two"
                          style={{
                            backgroundImage:
                              "url(/images/resource/service1-2.png)",
                          }}
                        ></div>
                      </div>
                      <div className="content-box">
                        <figure className="icon mb-0">
                          <img src="images/icons/theme-icon5.png" alt="Image" />
                        </figure>
                        <h4 className="title">
                          <Link href="page-service-details">Dry Massage</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="service-block">
                    <div className="inner-box">
                      <div className="image-box">
                        <div
                          className="bg-image"
                          style={{
                            backgroundImage:
                              "url(/images/resource/serviceitembg.png)",
                          }}
                        ></div>
                        <div
                          className="bg-image-two"
                          style={{
                            backgroundImage:
                              "url(/images/resource/service1-2.png)",
                          }}
                        ></div>
                      </div>
                      <div className="content-box">
                        <figure className="icon mb-0">
                          <img src="images/icons/theme-icon6.png" alt="Image" />
                        </figure>
                        <h4 className="title">
                          <Link href="page-service-details">Thai Massage</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="service-block">
                    <div className="inner-box">
                      <div className="image-box">
                        <div
                          className="bg-image"
                          style={{
                            backgroundImage:
                              "url(/images/resource/serviceitembg.png)",
                          }}
                        ></div>
                        <div
                          className="bg-image-two"
                          style={{
                            backgroundImage:
                              "url(/images/resource/service1-2.png)",
                          }}
                        ></div>
                      </div>
                      <div className="content-box">
                        <figure className="icon mb-0">
                          <img src="images/icons/theme-icon7.png" alt="Image" />
                        </figure>
                        <h4 className="title">
                          <Link href="page-service-details">
                            Aroma Oil Massage
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="service-block">
                    <div className="inner-box">
                      <div className="image-box">
                        <div
                          className="bg-image"
                          style={{
                            backgroundImage:
                              "url(/images/resource/serviceitembg.png)",
                          }}
                        ></div>
                        <div
                          className="bg-image-two"
                          style={{
                            backgroundImage:
                              "url(/images/resource/service1-2.png)",
                          }}
                        ></div>
                      </div>
                      <div className="content-box">
                        <figure className="icon mb-0">
                          <img src="images/icons/theme-icon8.png" alt="Image" />
                        </figure>
                        <h4 className="title">
                          <Link href="page-service-details">Nuru Massage</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-style-home7">
                <div className="thumb">
                  <img src="images/resource/about7.png" alt="" />
                </div>
                <div className="about-content">
                  <h4 className="title">Schedule Now</h4>
                  <p className="text">
                    Secure your spot today and enjoy the ultimate relaxation
                    experience tailored just for you.
                  </p>
                  <Link
                    href="tel:+8801891450300"
                    className="theme-btn btn-style-one mt-10"
                  >
                    APPPOINMENT NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Services7;
