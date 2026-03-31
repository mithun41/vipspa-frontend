import Link from "next/link";
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
        modules: [ Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        autoplay: {
            delay: 550000,
            disableOnInteraction: false,
        },
        loop: true
    };
const Banner8  = () => {
  const [isOpen, setOpen] = useState(false)
    return (
        <>
        <section className="banner-section-three">
            <div className="shape-image-curve"></div>
            <div className="shape-image-leaf bounce-y"></div>
            <div className="shape-image8-1 bounce-y"></div>
            <div className="bg-image" style={{ backgroundImage: 'url(/images/main-slider/bg-slider3-1.png)' }}></div>
            <Swiper {...swiperOptions} className="banner-carousel-one owl-theme">
              <SwiperSlide className="slide-item">
                <div className="auto-container">
                  <div className="float-text animate-5">PURERELAX</div>
                  <div className="shape-image8-2 animate-6"></div>
                  <div className="row">
                    <div className="content-box col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="text animate-3">At PureRelax, your beauty is celebrated with every detail, & we know that our serene environment <br/>will make your stay truly unforgettable.</div>
                    </div>
                    <div className="image-column col-xl-5 col-lg-4 col-md-12 col-sm-12">
                      <div className="image-box">
                        <figure className="image animate-3">
                          <img src="images/main-slider/slide8-1.jpg" alt=""/>
                        </figure>
                        <div className="text-rotate animate-5 bounce-">
                          <div className="icon-text-2"></div>
                            <a onClick={() => setOpen(true)} className="play-btn-two">
                              <i className="icon fa-light fa-arrow-right-long" aria-hidden="true"></i>
                            </a>
                        </div>
                      </div>
                    </div>
                    <div className="content-box col-xl-3 col-lg-4 col-md-12 col-sm-12">
                      <div className="inner-content">
                        <div className="text animate-3">Your beauty is our top priority, & we are confident that you will adore your stay at PureRelax</div>
                        <div className="btn-box animate-4">
                          <Link href="page-contact" className="theme-btn btn-style-transparent"><span className="btn-title">APPOINTMENT Now</span></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
      
              <SwiperSlide className="slide-item">
                <div className="auto-container">
                  <div className="float-text animate-5">PURERELAX</div>
                  <div className="shape-image8-2 animate-6"></div>
                  <div className="row">
                    <div className="content-box col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="text animate-3">At PureRelax, your beauty is celebrated with every detail, & we know that our serene environment <br/>will make your stay truly unforgettable.</div>
                    </div>
                    <div className="image-column col-xl-5 col-lg-4 col-md-12 col-sm-12">
                      <div className="image-box">
                        <figure className="image animate-3">
                          <img src="images/main-slider/slide8-1.jpg" alt=""/>
                        </figure>
                        <div className="text-rotate animate-5 bounce-">
                          <div className="icon-text-2"></div>
                            <a onClick={() => setOpen(true)} className="play-btn-two">
                              <i className="icon fa-light fa-arrow-right-long" aria-hidden="true"></i>
                            </a>
                        </div>
                      </div>
                    </div>
                    <div className="content-box col-xl-3 col-lg-4 col-md-12 col-sm-12">
                      <div className="inner-content">
                        <div className="text animate-3">Your beauty is our top priority, & we are confident that you will adore your stay at PureRelax</div>
                        <div className="btn-box animate-4">
                          <Link href="page-contact" className="theme-btn btn-style-transparent"><span className="btn-title">APPOINTMENT Now</span></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
        </>
    );
};
export default Banner8