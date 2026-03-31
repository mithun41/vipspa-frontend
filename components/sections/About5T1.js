import Link from "next/link";
const About5T1 = () => {
  return (
    <>
      <section className="about-section-home5">
        <div className="container-fluid p-0">
          <div className="outer-box">
            <div className="row align-items-center">
              <div className="about-block-home5 mb-5 mb-lg-0 col-lg-6">
                <div className="thumb-box">
                  <img src="images/resource/aboutpage-1section.jpg" alt="" />
                </div>
              </div>

              <div className="about-block-home5 col-lg-6 col-xxl-4">
                <div className="inner-box">
                  <div className="sec-title mb-20">
                    <figure className="image">
                      <img src="images/icons/icon1.png" alt="Image" />
                    </figure>
                    <span className="sub-title">Wellness Spa Retreats</span>
                    <h2 className="words-slide-up text-split">
                      Your Satisfaction, Our Promise
                    </h2>
                  </div>
                  <div className="about-content">
                    <p className="text mb-30">
                      Your comfort and happiness are at the heart of everything
                      we do. We are committed to delivering exceptional service
                      and ensuring every experience leaves you feeling relaxed,
                      rejuvenated, and truly cared for.
                    </p>
                    <div className="list-style1-home4 d-flex align-items-center">
                      <ul className="list-style1-home4">
                        <li className="mb-25">
                          <img
                            className="me-2"
                            src="images/icons/list-style-icon1.svg"
                            alt=""
                          />{" "}
                          Luxury
                        </li>
                        <li>
                          <img
                            className="me-2"
                            src="images/icons/list-style-icon1.svg"
                            alt=""
                          />{" "}
                          Relaxation
                        </li>
                      </ul>
                      <ul className="list-style1-home4 ml-40">
                        <li className="mb-25">
                          <img
                            className="me-2"
                            src="images/icons/list-style-icon1.svg"
                            alt=""
                          />{" "}
                          Top Rated
                        </li>
                        <li>
                          <img
                            className="me-2"
                            src="images/icons/list-style-icon1.svg"
                            alt=""
                          />{" "}
                          100% Happy Client
                        </li>
                      </ul>
                    </div>
                    <Link
                      href="tel:+8801891450300"
                      className="theme-btn btn-style-one mt-40"
                    >
                      APPOINTMENT NOW
                    </Link>
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
export default About5T1;
