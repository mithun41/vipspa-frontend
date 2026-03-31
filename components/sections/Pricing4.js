import Link from "next/link";

const Pricing4 = ({ pricingData }) => {
  const sectionInfo = pricingData?.section_info;
  const plans = pricingData?.plans || [];

  // Plans guloke duiti column e bhag korar logic
  const half = Math.ceil(plans.length / 2);
  const leftColumnPlans = plans.slice(0, half);
  const rightColumnPlans = plans.slice(half);

  return (
    <>
      <section className="pricing-section-two">
        <div className="container pb-0 pt-0">
          
          {/* Section Header */}
          <div className="sec-title text-center">
            <figure className="image">
              <img src="/images/icons/icon1.png" alt="Icon" />
            </figure>
            <span className="sub-title">{sectionInfo?.subtitle || "Price"}</span>
            <h2 className="words-slide-up text-split">
              {sectionInfo?.title || "Choose The Best Package For You"}
            </h2>
          </div>

          <div className="row align-items-center">
            
            {/* Left Column */}
            <div className="content-column col-lg-6">
              {leftColumnPlans.map((plan) => (
                <div className="pricing-block-two" key={plan.id}>
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="inner">
                        <h4 className="title">
                          <Link href="/page-pricing">{plan.title}</Link>
                        </h4>
                        {plan.session_1 && <div className="text">{plan.session_1}</div>}
                        {plan.session_2 && <div className="text">{plan.session_2}</div>}
                        {plan.session_3 && <div className="text">{plan.session_3}</div>}
                      </div>
                      <span className="price">{plan.price} TK</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="content-column col-lg-6">
              {rightColumnPlans.map((plan) => (
                <div className="pricing-block-two" key={plan.id}>
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="inner">
                        <h4 className="title">
                          <Link href="/page-pricing">{plan.title}</Link>
                        </h4>
                        {plan.session_1 && <div className="text">{plan.session_1}</div>}
                        {plan.session_2 && <div className="text">{plan.session_2}</div>}
                        {plan.session_3 && <div className="text">{plan.session_3}</div>}
                      </div>
                      <span className="price">{plan.price} TK</span>
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

export default Pricing4;