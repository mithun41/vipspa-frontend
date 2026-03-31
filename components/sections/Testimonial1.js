import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  pagination: { clickable: true },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
};

const Testimonial1 = ({ testimonialData, addClass }) => {
  const items = testimonialData?.items || [];

  // Star rating render korar logic
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i key={i} className={`icon fa fa-star ${i < rating ? "" : "text-muted"}`}></i>
      );
    }
    return stars;
  };

  if (items.length === 0) return null;

  return (
    <>
      <section className={`testimonial-section ${addClass}`}>
        <div className="testimonial-pattrn1-1 bounce-y"></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <figure className="image">
              <img src="/images/icons/icon1.png" alt="Icon" />
            </figure>
            <span className="sub-title">Testimonial</span>
            <h2 className="words-slide-up text-split">
              Trusted by Our Clients
            </h2>
          </div>
          
          <div className="carousel-outer col-lg-8 offset-lg-2">
            <Swiper
              {...swiperOptions}
              className="testimonial-carousel-three owl-carousel owl-theme default-dots"
            >
              {items.map((item) => (
                <SwiperSlide key={item.id} className="slide-item">
                  <div className="testimonial-block">
                    <div className="inner-box text-center">
                      <div className="rating">
                        {renderStars(item.rating || 5)}
                      </div>
                      <div className="text">
                        “ {item.comment} ”
                      </div>
                      <div className="info-box">
                        <h4 className="name">{item.name} -</h4>
                        <span className="designation">{item.designation || "Client"}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Floating Client Images (Dynamic from the list) */}
            <div className="image-box">
              {items.slice(0, 5).map((item, index) => (
                <figure key={`float-${item.id}`} className={`image client${index + 1} bounce-${index % 2 === 0 ? 'x' : 'y'} overlay-anim`}>
                  <Link href="#">
                    <img 
                      src={item.image || `/images/resource/client${index + 1}.png`} 
                      alt={item.name} 
                    />
                  </Link>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial1;