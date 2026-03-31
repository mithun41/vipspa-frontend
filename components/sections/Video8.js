import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const Video8 = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <section className="video-section-two">
          <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/bg-video2.jpg)' }}></div>
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-12">
                <div className="content mb-0">
                    <a onClick={() => setOpen(true)} className="play-now">
                      <i className="icon fas fa-play p-0" aria-hidden="true"></i>
                      <span className="ripple"></span>
                    </a>
                  <h3 className="words-slide-up text-split">Shop & Get 20% Off <br/>Spa Product By it Brands</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
        </>
    );
};
export default Video8
