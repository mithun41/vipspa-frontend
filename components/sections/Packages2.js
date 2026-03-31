import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        loop: true,

				breakpoints:{
            320: {
                slidesPerView: 1,
                // spaceBetween: 30,
            },
            575: {
                slidesPerView: 1,
                // spaceBetween: 30,
            },
            767: {
                slidesPerView: 2,
                // spaceBetween: 30,
            },
            991: {
                slidesPerView: 3,
                // spaceBetween: 30,
            },
            1199: {
                slidesPerView: 4,
                // spaceBetween: 30,
            },
            1350: {
                slidesPerView: 4,
                // spaceBetween: 30,
            },
        }

        
    };
const Packages2 = () => {
    return (
        <>
        <section className="packages-section">
          <div className="package-pattrn2 bounce-y"></div>
          <div className="auto-container">
            <div className="sec-title text-center">
              <figure className="image"><img src="images/icons/icon1.png" alt="Image"/></figure>
              <span className="sub-title">Come & Explore</span>
              <h2 className="words-slide-up text-split">Massage & Treatments</h2>
            </div>
            <div className="carousel-outer">
              <Swiper {...swiperOptions} className="packages-carousel owl-carousel owl-theme default-dots">
                  {/* Clients Block */}
                  <SwiperSlide>
                    <div className="package-block">
                      <div className="inner-box text-center">
                        <div className="image-box">
                          <figure className="image mb-0">
                            <Link href="page-pricing">
                              <img src="images/resource/package1-1.jpg" alt="Image"/>
                            </Link>
                          </figure>
                          <div className="bg bg-image" style={{ backgroundImage: 'url(/images/resource/package-pattrn1.png)' }}></div>
                          <div className="bg bg-image-two" style={{ backgroundImage: 'url(/images/resource/package1-5.png)' }}></div>
                        </div>
                        <div className="content-box">
                          <h3 className="name"><Link href="page-pricing">Manicure</Link></h3>
                          <span className="price">70$.00</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="package-block">
                      <div className="inner-box text-center">
                        <div className="image-box">
                          <figure className="image mb-0">
                            <Link href="page-pricing">
                              <img src="images/resource/package1-2.jpg" alt="Image"/>
                            </Link>
                          </figure>
                          <div className="bg bg-image" style={{ backgroundImage: 'url(/images/resource/package-pattrn1.png)' }}></div>
                          <div className="bg bg-image-two" style={{ backgroundImage: 'url(/images/resource/package1-5.png)' }}></div>
                        </div>
                        <div className="content-box">
                          <h3 className="name"><Link href="page-pricing">Cupping Treat</Link></h3>
                          <span className="price">40$.00</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="package-block">
                      <div className="inner-box text-center">
                        <div className="image-box">
                          <figure className="image mb-0">
                            <Link href="page-pricing">
                              <img src="images/resource/package1-3.jpg" alt="Image"/>
                            </Link>
                          </figure>
                          <div className="bg bg-image" style={{ backgroundImage: 'url(/images/resource/package-pattrn1.png)' }}></div>
                          <div className="bg bg-image-two" style={{ backgroundImage: 'url(/images/resource/package1-5.png)' }}></div>
                        </div>
                        <div className="content-box">
                          <h3 className="name"><Link href="page-pricing">Stress Controled</Link></h3>
                          <span className="price">60$.00</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="package-block">
                      <div className="inner-box text-center">
                        <div className="image-box">
                          <figure className="image mb-0">
                            <Link href="page-pricing">
                              <img src="images/resource/package1-4.jpg" alt="Image"/>
                            </Link>
                          </figure>
                          <div className="bg bg-image" style={{ backgroundImage: 'url(/images/resource/package-pattrn1.png)' }}></div>
                          <div className="bg bg-image-two" style={{ backgroundImage: 'url(/images/resource/package1-5.png)' }}></div>
                        </div>
                        <div className="content-box">
                          <h3 className="name"><Link href="page-pricing">Masking</Link></h3>
                          <span className="price">30$.00</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                <div className="package-block">
                  <div className="inner-box text-center">
                    <div className="image-box">
                      <figure className="image mb-0">
                        <Link href="page-pricing">
                          <img src="images/resource/package1-1.jpg" alt="Image"/>
                        </Link>
                      </figure>
                      <div className="bg bg-image" style={{ backgroundImage: 'url(/images/resource/package-pattrn1.png)' }}></div>
                      <div className="bg bg-image-two" style={{ backgroundImage: 'url(/images/resource/package1-5.png)' }}></div>
                    </div>
                    <div className="content-box">
                      <h3 className="name"><Link href="page-pricing">Manicure</Link></h3>
                      <span className="price">70$.00</span>
                    </div>
                  </div>
                </div>
                  </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        </>
    );
};
export default Packages2
