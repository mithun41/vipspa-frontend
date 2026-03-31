import Link from "next/link";
const Instagram1 = () => {
  return (
    <>
      <section className="instagram-section">
        <div className="icon-instagram1-6 bounce-x"></div>
        <div className="icon-instagram1-7 bounce-y"></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <h4 className="words-slide-up text-split">Follow On Instagram</h4>
          </div>
          <div className="row">
            <div className="instagram-block col-lg-2 col-md-3 col-sm-6">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link
                      className="lightbox-image"
                      href="images/resource/instagram1.png"
                    >
                      <img src="images/resource/instagram1.png" alt="Image" />
                    </Link>
                  </figure>
                  <i className="icon fab fa-instagram"></i>
                </div>
              </div>
            </div>

            <div className="instagram-block col-lg-2 col-md-3 col-sm-6">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link
                      className="lightbox-image"
                      href="images/resource/instagram2.png"
                    >
                      <img src="images/resource/instagram2.png" alt="Image" />
                    </Link>
                  </figure>
                  <i className="icon fab fa-instagram"></i>
                </div>
              </div>
            </div>

            <div className="instagram-block col-lg-2 col-md-3 col-sm-6">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link
                      className="lightbox-image"
                      href="images/resource/instagram3.png"
                    >
                      <img src="images/resource/instagram3.png" alt="Image" />
                    </Link>
                  </figure>
                  <i className="icon fab fa-instagram"></i>
                </div>
              </div>
            </div>

            <div className="instagram-block col-lg-2 col-md-3 col-sm-6">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link
                      className="lightbox-image"
                      href="images/resource/instagram4.png"
                    >
                      <img src="images/resource/instagram4.png" alt="Image" />
                    </Link>
                  </figure>
                  <i className="icon fab fa-instagram"></i>
                </div>
              </div>
            </div>

            <div className="instagram-block col-lg-2 col-md-3 col-sm-6">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link
                      className="lightbox-image"
                      href="images/resource/instagram5.png"
                    >
                      <img src="images/resource/instagram5.png" alt="Image" />
                    </Link>
                  </figure>
                  <i className="icon fab fa-instagram"></i>
                </div>
              </div>
            </div>

            <div className="instagram-block col-lg-2 col-md-3 col-sm-6">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link
                      className="lightbox-image"
                      href="images/resource/instagram6.png"
                    >
                      <img src="images/resource/instagram6.png" alt="Image" />
                    </Link>
                  </figure>
                  <i className="icon fab fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Instagram1;
