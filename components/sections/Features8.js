import Link from "next/link"
const Features8 = () => {
    return (
        <>
        <section className="features-section-two">
          <div className="container">
            <div className="outer-box">
              <div className="sec-title">
                <div className="row">
                  <div className="col-xl-6">
                    <figure className="image"><img src="images/icons/icon1.png" alt="Image"/></figure>
                    <span className="sub-title">Result Driven Products</span>
                    <h2 className="words-slide-up text-split">Our Features</h2>
                  </div>
                  <div className="col-xl-5 offset-xl-1">
                    <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit phasellus  porttitor elementum conubia ligula et arcu enim accumsan Ligula curabitur sollicitudin feugiat parturient urna odio hendrerit mollis.</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="feature-block-two col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <figure className="icon mb-0"><img src="images/icons/icon-feature1.png" alt="Image"/></figure>
                    <h4 className="title"><Link href="page-service-details">Relax & Enjoy</Link></h4>
                    <div className="text">There are many variations of passages of Lorem Ipsum available the majority have suffered alteration simply free text in some</div>
                  </div>
                </div>
                <div className="feature-block-two col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <figure className="icon mb-0"><img src="images/icons/icon-feature2.png" alt="Image"/></figure>
                    <h4 className="title"><Link href="page-service-details">Oil Treatments</Link></h4>
                    <div className="text">There are many variations of passages of Lorem Ipsum available the majority have suffered alteration simply free text in some</div>
                  </div>
                </div>
                <div className="feature-block-two col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <figure className="icon mb-0"><img src="images/icons/icon-feature3.png" alt="Image"/></figure>
                    <h4 className="title"><Link href="page-service-details">Body Treatments</Link></h4>
                    <div className="text">There are many variations of passages of Lorem Ipsum available the majority have suffered alteration simply free text in some</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Features8