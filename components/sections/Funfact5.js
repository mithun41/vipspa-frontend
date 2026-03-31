import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact5 = () => {
    return (
        <>
        <section className="funfact-section-home5">
          <div className="auto-container">
            <div className="fact-counter">
              <div className="row">
                <div className="counter-block-home5-style col-md-3 col-sm-6">
                  <div className="inner-box">
                    <div className="count-box"><CounterUp count={20} time={3} /></div>
                    <div className="counter-text">Years Of <br/> Experience</div>
                  </div>
                </div>
                <div className="counter-block-home5-style col-md-3 col-sm-6">
                  <div className="inner-box">
                    <div className="count-box"><CounterUp count={10} time={3} /></div>
                    <div className="counter-text">Online <br/> Booking</div>
                  </div>
                </div>
                <div className="counter-block-home5-style col-md-3 col-sm-6">
                  <div className="inner-box">
                    <div className="count-box"><CounterUp count={40} time={3} /></div>
                    <div className="counter-text">Experience <br/> Therapist</div>
                  </div>
                </div>
                <div className="counter-block-home5-style col-md-3 col-sm-6">
                  <div className="inner-box">
                    <div className="count-box"><CounterUp count={30} time={3} /></div>
                    <div className="counter-text">Best Spa <br/> Award</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Funfact5
