import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 6,
        spaceBetween: 30,
        navigation: true,
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
                slidesPerView: 6,
                // spaceBetween: 30,
            },
        }

        
    };
const Clients1 = () => {
    return (
        <>
        <section className="clients-section">
          <div className="auto-container">
              <Swiper {...swiperOptions} className="clients-carousel owl-carousel owl-theme">
                  {/* Clients Block */}
                  <SwiperSlide className="client-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="#"><img src="/images/resource/client1-1.png" alt="Image"/></Link></figure>
                  </div>
                </div>
                  </SwiperSlide>
                  {/* Clients Block */}
                  <SwiperSlide className="client-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="#"><img src="/images/resource/client1-2.png" alt="Image"/></Link></figure>
                  </div>
                </div>
                  </SwiperSlide>
                  {/* Clients Block */}
                  <SwiperSlide className="client-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="#"><img src="/images/resource/client1-3.png" alt="Image"/></Link></figure>
                  </div>
                </div>
                  </SwiperSlide>
                  {/* Clients Block */}
                  <SwiperSlide className="client-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="#"><img src="/images/resource/client1-4.png" alt="Image"/></Link></figure>
                  </div>
                </div>
                  </SwiperSlide>
                  {/* Clients Block */}
                  <SwiperSlide className="client-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="#"><img src="/images/resource/client1-5.png" alt="Image"/></Link></figure>
                  </div>
                </div>
                  </SwiperSlide>
                  {/* Clients Block */}
                  <SwiperSlide className="client-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="#"><img src="/images/resource/client1-1.png" alt="Image"/></Link></figure>
                  </div>
                </div>
                  </SwiperSlide>
                  {/* Clients Block */}
                  <SwiperSlide className="client-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="#"><img src="/images/resource/client1-2.png" alt="Image"/></Link></figure>
                  </div>
                </div>
                  </SwiperSlide>
              </Swiper>
          </div>
        </section>
        </>
    );
};
export default Clients1
