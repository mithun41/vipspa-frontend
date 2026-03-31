import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  loop: true,
};
const Banner1 = () => {
  return (
    <>
      <section className="main-slider">
        <Swiper {...swiperOptions}>
          <SwiperSlide className="slide-item">
            <div className="image-curve"></div>
            <div
              className="bg bg-image"
              style={{
                backgroundImage: "url(/images/main-slider/homebanner.jpg)",
              }}
            ></div>
            <div className="auto-container content-box">
              <figure className="image-leap image-style-one bounce-y">
                <img src="/images/main-slider/slide1-3.png" alt="Image" />
              </figure>
              <span className="sub-title">Professional Styling Since 1990</span>
              <h1 className="title">
                The Essence <br /> Of Beauty
              </h1>
              <Link
                href="tel:+8801891450300"
                className="theme-btn btn-style-one"
              >
                <span className="btn-title">Book Now</span>
              </Link>
              <figure className="image">
                <img src="/images/main-slider/slide1-4.png" alt="Image" />
              </figure>
              {/* <figure className="image2">
                <img src="/images/main-slider/slide1-2.png" alt="Image" />
              </figure> */}
              <span className="style-title">Purerelax</span>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide-item">
            <div className="image-curve"></div>
            <div
              className="bg bg-image"
              style={{
                backgroundImage: "url(/images/main-slider/homebanner2.jpg)",
              }}
            ></div>
            <div className="auto-container content-box">
              <figure className="image-leap image-style-one bounce-y">
                <img src="/images/main-slider/slide1-3.png" alt="Image" />
              </figure>
              <span className="sub-title">Professional Styling Since 1990</span>
              <h1 className="title">
                The Essence <br /> Of Beauty
              </h1>
              <Link href="page-contact" className="theme-btn btn-style-one">
                <span className="btn-title">Book Now</span>
              </Link>
              <figure className="image">
                <img src="/images/main-slider/slide1-4.png" alt="Image" />
              </figure>
              {/* <figure className="image2">
                <img src="/images/main-slider/slide1-2.png" alt="Image" />
              </figure> */}
              <span className="style-title">Purerelax</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
export default Banner1;
