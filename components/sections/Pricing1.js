import Link from "next/link";

const Pricing1 = ({ pricingData }) => {
  const sectionInfo = pricingData?.section_info || {
    subtitle: "Price",
    title: "Choose The Best Package For You"
  };
  const plans = pricingData?.plans || [];

  const leftColumnPlans = plans.slice(0, 3);
  const rightColumnPlans = plans.slice(3, 6);

  return (
    <>
      <section className="pricing-section">
        <div className="leaf1 bounce-x"></div>
        <div className="leaf2 bounce-x"></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <figure className="image">
              <img src="/images/icons/icon1.png" alt="Icon" />
            </figure>
            <span className="sub-title">{sectionInfo.subtitle}</span>
            <h2 className="words-slide-up text-split">{sectionInfo.title}</h2>
          </div>

          <div className="row align-items-center">
            {/* Left Column */}
            <div className="content-column col-lg-4 col-md-12">
              {leftColumnPlans.map((plan, index) => (
                <div className="pricing-block" key={plan.id}>
                  <div className="inner-box" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="image-box">
                      <figure className="image overlay-anim mb-0">
                        <Link href="/page-pricing">
                          <img src={`/images/resource/price1-${(index % 3) + 2}.jpg`} alt="" />
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box" style={{ flex: 1, paddingLeft: '15px', position: 'relative' }}>
                      <div className="inner">
                        <h5 className="title" style={{ marginBottom: '5px' }}>
                          <Link href="/page-pricing">{plan.title}</Link>
                        </h5>
                        {/* ফন্ট সাইজ এবং লাইন হাইট কন্ট্রোল */}
                        <div className="text" style={{ fontSize: '13px', lineHeight: '1.4', whiteSpace: 'nowrap' }}>{plan.session_1}</div>
                        <div className="text" style={{ fontSize: '13px', lineHeight: '1.4', whiteSpace: 'nowrap' }}>{plan.session_2}</div>
                        <div className="text" style={{ fontSize: '13px', lineHeight: '1.4', whiteSpace: 'nowrap' }}>{plan.session_3}</div>
                      </div>
                      <span className="price" style={{ position: 'absolute', right: '-10px', top: '50%', transform: 'translateY(-50%)' }}>TK</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="image-column col-lg-4 col-md-12">
              <div className="inner-box text-center">
                <figure className="image overlay-anim mb-0">
                  <img src="/images/resource/pricing1.jpg" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                </figure>
              </div>
            </div>

            {/* Right Column */}
            <div className="content-column col-lg-4 col-md-12">
              {rightColumnPlans.map((plan, index) => (
                <div className="pricing-block" key={plan.id}>
                  <div className="inner-box" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="image-box">
                      <figure className="image overlay-anim mb-0">
                        <Link href="/page-pricing">
                          <img src={`/images/resource/price1-${(index % 3) + 2}.jpg`} alt="" />
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box" style={{ flex: 1, paddingLeft: '15px', position: 'relative' }}>
                      <div className="inner">
                        <h5 className="title" style={{ marginBottom: '5px' }}>
                          <Link href="/page-pricing">{plan.title}</Link>
                        </h5>
                        <div className="text" style={{ fontSize: '13px', lineHeight: '1.4', whiteSpace: 'nowrap' }}>{plan.session_1}</div>
                        <div className="text" style={{ fontSize: '13px', lineHeight: '1.4', whiteSpace: 'nowrap' }}>{plan.session_2}</div>
                        <div className="text" style={{ fontSize: '13px', lineHeight: '1.4', whiteSpace: 'nowrap' }}>{plan.session_3}</div>
                      </div>
                      <span className="price" style={{ position: 'absolute', right: '-10px', top: '50%', transform: 'translateY(-50%)' }}>TK</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing1;