import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact2 = () => {
    return (
        <>
        <section className="fun-fact-section">
            <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/bg-funfact1.jpg)' }}></div>
            <div className="bg bg-image-two" style={{ backgroundImage: 'url(images/resource/curved-shape-bottm.png)' }}></div>
            <div className="feature1-2 bounce-y"></div>
            <div className="auto-container">
                <div className="row">
    
                    <div className="counter-block col-lg-3 col-sm-6">
                        <div className="inner">
                            <figure className="icon"><img src="images/icons/funfact1.png" alt="Image"/></figure>
                            <div className="count-box"><CounterUp count={24} time={3} /></div>
                            <h4 className="counter-title">Years of Experience</h4>
                        </div>
                    </div>
    
                    <div className="counter-block col-lg-3 col-sm-6">
                        <div className="inner">
                            <figure className="icon"><img src="images/icons/funfact2.png" alt="Image"/></figure>
                            <div className="count-box"><CounterUp count={129} time={3} /></div>
                            <h4 className="counter-title">Wellness Spa & Beauty</h4>
                        </div>
                    </div>
    
                    <div className="counter-block col-lg-3 col-sm-6">
                        <div className="inner">
                            <figure className="icon"><img src="images/icons/funfact1.png" alt="Image"/></figure>
                            <div className="count-box"><CounterUp count={30} time={3} /></div>
                            <h4 className="counter-title">Skin Treatments</h4>
                        </div>
                    </div>
    
                    <div className="counter-block col-lg-3 col-sm-6">
                        <div className="inner">
                            <figure className="icon"><img src="images/icons/funfact3.png" alt="Image"/></figure>
                            <div className="count-box"><CounterUp count={99} time={3} /></div>
                            <h4 className="counter-title">Our Happy Clients</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Funfact2
