import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact3 = () => {
    return (
        <>
        <section className="fun-fact-section-two pull-down pb-0">
          <div className="auto-container">
            <div className="outer-box">
              <div className="row">
      
                <div className="counter-block-two col-lg-3 col-sm-6">
                  <div className="inner">
                    <figure className="icon"><img src="images/icons/icon-fact1.png" alt="Image"/></figure>
                    <div className="inner-content">
                      <div className="count-box"><CounterUp count={26} time={3} />+</div>
                      <h4 className="counter-title">Years of Experience</h4>
                    </div>
                  </div>
                </div>
      
                <div className="counter-block-two col-lg-3 col-sm-6">
                  <div className="inner">
                    <figure className="icon"><img src="images/icons/icon-fact2.png" alt="Image"/></figure>
                    <div className="inner-content">
                      <div className="count-box"><CounterUp count={100} time={3} />%</div>
                      <h4 className="counter-title">Natural Products</h4>
                    </div>
                  </div>
                </div>
      
                <div className="counter-block-two col-lg-3 col-sm-6">
                  <div className="inner ms-lg-3">
                    <figure className="icon"><img src="images/icons/icon-fact3.png" alt="Image"/></figure>
                    <div className="inner-content">
                      <div className="count-box"><CounterUp count={56} time={3} />k+</div>
                      <h4 className="counter-title">Satisfied Clients</h4>
                    </div>
                  </div>
                </div>
      
                <div className="counter-block-two col-lg-3 col-sm-6">
                  <div className="inner ms-lg-4">
                    <figure className="icon"><img src="images/icons/icon-fact4.png" alt="Image"/></figure>
                    <div className="inner-content">
                      <div className="count-box"><CounterUp count={36} time={3} />+</div>
                      <h4 className="counter-title">Specialists Team</h4>
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
export default Funfact3
