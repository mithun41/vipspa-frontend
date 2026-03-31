const Offer2 = () => {
    return (
        <>
        <section className="product-deals-section">
          <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/bg-product-deals1.jpg)' }}></div>
          <div className="bg curved-shape-top" style={{ backgroundImage: 'url(/images/resource/curved-shape-top.png)' }}></div>
          <div className="bg curved-shape-bottom" style={{ backgroundImage: 'url(/images/resource/curved-shape-bottom.png)' }}></div>
          <div className="auto-container">
            <div className="row">
              <div className="col-xl-6 offset-xl-6">
                <div className="outer-box">
                  <div className="sec-title mb-0 text-center">
                    <h1 className="words-slide-up text-split">Offer Of The Day</h1>
                    <span className="text-two">35% off on Selected Products</span>
                    <div className="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu.</div>
                    <span className="text-three">Hurry up! Deals end up :</span>
                  </div>
                  <div className="countdown-block-outer">
                    <div className="countdown-block">
                      <div className="inner-box">                            
                        <div className="content-box">
                          <div className="countdown-time">350</div>
                          <div className="countdown-title">Days</div>
                        </div>
                      </div>
                    </div>
                    <div className="countdown-block">
                      <div className="inner-box">                            
                        <div className="content-box">
                          <div className="countdown-time">30</div>
                          <div className="countdown-title">Hours</div>
                        </div>
                      </div>
                    </div>
                    <div className="countdown-block">
                      <div className="inner-box">                            
                        <div className="content-box">
                          <div className="countdown-time">50</div>
                          <div className="countdown-title">Mints</div>
                        </div>
                      </div>
                    </div>
                    <div className="countdown-block">
                      <div className="inner-box">                            
                        <div className="content-box">
                          <div className="countdown-time">45</div>
                          <div className="countdown-title">Second</div>
                        </div>
                      </div>
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
export default Offer2