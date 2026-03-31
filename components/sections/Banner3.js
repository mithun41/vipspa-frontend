import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  autoplay: {
    delay: 550000,
    disableOnInteraction: false,
  },
  loop: true,
};

const Banner3 = ({ slides = [] }) => {
  return (
    <>
      <section className="banner-section-one">
        <div className="shape-image-curve"></div>
        <div className="shape-image-leaf"></div>

        <Swiper {...swiperOptions} className="banner-carousel-one owl-theme">
          {slides.map((slide) => (
            <SwiperSlide className="slide-item" key={slide.id}>
              <div
                className="bg-image"
                style={{
                  backgroundImage: `url(${slide.background_image})`,
                }}
              ></div>

              <div className="auto-container">
                <div className="row">
                  <div className="image-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="image-box">
                      <figure className="image">
                        <div className="fadeInUpBig">
                          <div className="round-shape"></div>
                        </div>
                        <img
                          className="animate-3 zindex"
                          src={slide.main_image}
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>

                  <div className="content-box col-xl-5 col-lg-6 col-md-12 col-sm-12">
                    <figure className="image-shape animate-4 animate-x bounce-x">
                      <img src="images/main-slider/slide3-2.png" alt="" />
                    </figure>

                    {/* design element static rakhsi */}
                    <div className="title-stroke-text fadeInUpBig">
                      Purerelax
                    </div>

                    <span className="sub-title animate-2">
                      {slide.stroke_text}
                    </span>

                    <h1 className="title animate-3">{slide.title}</h1>

                    <div
                      className="text animate-4"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {slide.description}
                    </div>

                    <div className="btn-box animate-5">
                      <Link
                        href={slide.button_link}
                        className="theme-btn btn-style-one"
                      >
                        <span className="btn-title">{slide.button_text}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Banner3;
