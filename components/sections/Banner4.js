import Link from "next/link"
const Banner4 = () => {
    return (
        <>
        <section className="banner-style1-home4 home4-style">
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="content-column">
                  <div className="inner-content">
                    <h2 className="title">Nourishing Your <br className="d-none d-lg-block" /> Mind, <Link href="page-services"></Link> Body And Good Soul.</h2>
                    <p className="text">For those seeking a holistic approach to wellness, we offer a variety of wellness services such as yoga classes, meditation sessions, and nutritional counselling our expert instructors and coaches are here to guide you same</p>
                    <Link href="page-contact" className="theme-btn btn-style-one mt-25">APPOINTMENT NOW</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-none d-lg-block">
                <div className="image-content">
                  <img className="img bounce-y" src="images/banner/home4-banner.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="banner-style2-home4">
          <div className="bg bg-img" style={{ backgroundImage: 'url(/images/background/parallax-bg.jpg)' }}></div>
        </section>
        </>
    );
};
export default Banner4