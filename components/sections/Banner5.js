import Link from "next/link"
const Banner5 = () => {
    return (
        <>
        <section className="banner-style1-home5">
          <div className="leaf-1 d-none d-xxl-block bounce-y"><img src="images/banner/home5-banner3.png" alt=""/></div>
          <div className="banner-bottom"><img src="images/banner/home5-banner-bottom.png" alt=""/></div>
          <div className="auto-container">
            <div className="row">
              <div className="col-xl-6 d-none d-xl-block">
                <div className="image-content">
                  <div className="bg-circle zoom-one"></div>
                  <img className="img" src="images/banner/home5-banner1.png" alt=""/>
                  <img className="img-2 bounce-x" src="images/banner/home5-banner2.png" alt=""/>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="content-column">
                  <div className="inner-content">
                    <div className="title-bg"><img src="images/icons/icon2.png" alt=""/><span className="bg-text">Purerelax</span></div>
                    <h2 className="title">Essential care <br /> & Wellness</h2>
                    <p className="text">Your beauty is our top priority, and we are confident that you will adore your <br className="d-none d-xxl-block" /> stay at PureRelax, a sanctuary of created just for you.</p>
                    <Link href="page-contact" className="theme-btn btn-style-transparent mt-25">Appointment Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Banner5