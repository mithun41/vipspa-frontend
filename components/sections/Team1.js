import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 6,
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
                slidesPerView: 3,
                // spaceBetween: 30,
            },
            1350: {
                slidesPerView: 3,
                // spaceBetween: 30,
            },
        }

        
    };
const Team1 = () => {
    return (
        <>
        <section className="team-section">
          <div className="auto-container">
            <div className="sec-title text-center">
              <figure className="image"><img src="images/icons/icon1.png" alt="Image"/></figure>
              <span className="sub-title">Our team</span>
              <h2 className="words-slide-up text-split">Meet Certified Therapist</h2>
            </div>
            <div className="carousel-outer">
              <Swiper {...swiperOptions} className="testimonial-carousel owl-carousel owl-theme default-dots">
                  {/* Clients Block */}
                  <SwiperSlide>
                <div className="team-block">
                  <div className="inner-box text-center">
                    <div className="image-box">                            
                      <figure className="image mb-0">
                        <Link href="page-team-details">
                          <img src="images/resource/team1-1.png" alt="Image"/>
                        </Link>
                      </figure>
                      <div className="bg bg-image"></div>
                    </div>
                    <div className="content-box">
                      <h4 className="name"><Link href="page-team-details">Jenny Wilson</Link></h4>
                      <span className="designation">Trainer</span>
                    </div>
                  </div>
                </div>
                  </SwiperSlide>
                  <SwiperSlide>
                <div className="team-block">
                  <div className="inner-box text-center">
                    <div className="image-box">                            
                      <figure className="image mb-0">
                        <Link href="page-team-details">
                          <img src="images/resource/team1-2.png" alt="Image"/>
                        </Link>
                      </figure>
                      <div className="bg bg-image"></div>
                    </div>
                    <div className="content-box">
                      <h4 className="name"><Link href="page-team-details">Jenny Wilson</Link></h4>
                      <span className="designation">Trainer</span>
                    </div>
                  </div>
                </div>
                  </SwiperSlide>
                  <SwiperSlide>
                <div className="team-block">
                  <div className="inner-box text-center">
                    <div className="image-box">                            
                      <figure className="image mb-0">
                        <Link href="page-team-details">
                          <img src="images/resource/team1-1.png" alt="Image"/>
                        </Link>
                      </figure>
                      <div className="bg bg-image"></div>
                    </div>
                    <div className="content-box">
                      <h4 className="name"><Link href="page-team-details">Jenny Wilson</Link></h4>
                      <span className="designation">Trainer</span>
                    </div>
                  </div>
                </div>
                  </SwiperSlide>
                  <SwiperSlide>
                <div className="team-block">
                  <div className="inner-box text-center">
                    <div className="image-box">                            
                      <figure className="image mb-0">
                        <Link href="page-team-details">
                          <img src="images/resource/team1-2.png" alt="Image"/>
                        </Link>
                      </figure>
                      <div className="bg bg-image"></div>
                    </div>
                    <div className="content-box">
                      <h4 className="name"><Link href="page-team-details">Jenny Wilson</Link></h4>
                      <span className="designation">Trainer</span>
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
export default Team1
