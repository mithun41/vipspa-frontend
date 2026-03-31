import Link from 'next/link';
const Package8 = () => {
    return (
        <>
        <section className="packages-section-two">
          <div className="shape-2 "></div>
          <div className="auto-container">
            <div className="outer-box">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="info-box">
                    <span className="text">2024</span>
                    <h4 className="title">New Services. <br/>Your Beauty and Spa For Uniqueness</h4>
                    <Link href="page-pricing" className="theme-btn btn-style-two"><span className="btn-title">Book Now</span></Link>
                  </div>
                </div>
      
                <div className="package-block-two col-lg-3 col-md-6 col-sm-6">
                  <div className="inner-box text-center">
                    <div className="image-box">
                      <figure className="image mb-0">
                        <Link href="page-pricing">
                          <img src="images/resource/package2-1.jpg" alt="Image"/>
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <h4 className="name"><Link href="page-pricing">Weeding Makeup</Link></h4>
                      <span className="price">20$</span>
                    </div>
                  </div>
                </div>
      
                <div className="package-block-two col-lg-3 col-md-6 col-sm-6">
                  <div className="inner-box text-center">
                    <div className="image-box">
                      <figure className="image mb-0">
                        <Link href="page-pricing">
                          <img src="images/resource/package2-2.jpg" alt="Image"/>
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <h4 className="name"><Link href="page-pricing">Oil & Spa Messages</Link></h4>
                      <span className="price">30$</span>
                    </div>
                  </div>
                </div>
      
                <div className="package-block-two col-lg-3 col-md-6 col-sm-6">
                  <div className="inner-box text-center">
                    <div className="image-box">
                      <figure className="image mb-0">
                        <Link href="page-pricing">
                          <img src="images/resource/package2-3.jpg" alt="Image"/>
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <h4 className="name"><Link href="page-pricing">Foot Spa & Clean</Link></h4>
                      <span className="price">50$</span>
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
export default Package8