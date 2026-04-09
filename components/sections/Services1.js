import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation, Scrollbar],
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: { delay: 2500, disableOnInteraction: false },
  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  },
};

const Services1 = ({ servicesData }) => {
  // Data extraction from your JSON structure
  const sectionInfo = servicesData?.section_info;
  const serviceItems = servicesData?.items || [];

  return (
    <section className="services-section pt-0">
      <div className="service1-pattrn1 bounce-y"></div>

      <div className="auto-container">
        <div className="outer-box">
          {/* Section Header */}
          <div className="sec-title">
            <div className="row">
              <div className="col-xl-6">
                <figure className="image">
                  <img
                    src={sectionInfo?.icon_image || "/images/icons/icon1.png"}
                    alt="Icon"
                  />
                </figure>
                <span className="sub-title">
                  {sectionInfo?.subtitle || "Services list"}
                </span>
                <h2 className="words-slide-up text-split">
                  {sectionInfo?.title || "Our Services Will Make You Glow"}
                </h2>
              </div>
              <div className="col-xl-5 offset-xl-1">
                <div className="text">
                  {sectionInfo?.description ||
                    "Indulge in our rejuvenating treatments..."}
                </div>
              </div>
            </div>
          </div>

          {/* Service Cards Slider */}
          <Swiper {...swiperOptions} className="service-carousel">
            {serviceItems.length > 0 ? (
              serviceItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="service-block">
                    <div className="inner-box">
                      <div className="image-box">
                        <div
                          className="bg-image"
                          style={{
                            backgroundImage: `url(${item.background_image || "/images/resource/servicebg.png"})`,
                          }}
                        ></div>
                      </div>
                      <div className="content-box">
                        <figure className="icon mb-0">
                          <img
                            src={item.icon || "/images/icons/theme-icon1.png"}
                            alt={item.title}
                          />
                        </figure>
                        <h4 className="title">
                          <Link
                            href={item.details_link || "/page-service-details"}
                          >
                            {item.title}
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <p className="text-center">
                No services available. Please add from admin.
              </p>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services1;