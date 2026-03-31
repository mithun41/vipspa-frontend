import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
        modules: [ Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        navigation:{ clickable: true },
        autoplay: {
            delay: 85000,
            disableOnInteraction: false,
        },
        loop: true
    };
const Banner2 = () => {
    return (
        <>
        <section className="main-slider slider-style-two">
            <Swiper {...swiperOptions}>
              <SwiperSlide className="slide-item">
                <div className="bg bg-image" style={{ backgroundImage: 'url(/images/main-slider/bg-slider2-1.png)' }}></div>
                <div className="auto-container content-box">
                  <span className="sub-title">Professional Styling Since 1990</span>
                  <h1 className="title">The Essence <br/> Of Beauty</h1>
                  <p className="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante.</p>
                  <Link href="page-contact" className="theme-btn btn-style-one"><span className="btn-title">Book Now</span></Link>
                  <figure className="image home2-circle-img bounce-z"><img src="/images/main-slider/slide2-4.png" alt="Image"/></figure>
                  <figure className="image2"><img src="/images/main-slider/slide2-2.png" alt="Image"/></figure>
                </div>
              </SwiperSlide>
      
              <SwiperSlide className="slide-item">
                <div className="bg bg-image" style={{ backgroundImage: 'url(/images/main-slider/bg-slider2-1.png)' }}></div>
                <div className="auto-container content-box">
                  <span className="sub-title">Professional Styling Since 1990</span>
                  <h1 className="title">The Essence <br/> Of Beauty</h1>
                  <p className="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante.</p>
                  <Link href="page-contact" className="theme-btn btn-style-one"><span className="btn-title">Book Now</span></Link>
                  <figure className="image home2-circle-img bounce-z"><img src="/images/main-slider/slide2-4.png" alt="Image"/></figure>
                  <figure className="image2"><img src="/images/main-slider/slide2-2.png" alt="Image"/></figure>
                </div>
              </SwiperSlide>
            </Swiper>
        </section>
        </>
    );
};
export default Banner2