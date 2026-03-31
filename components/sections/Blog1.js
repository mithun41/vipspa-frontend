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
const Blog1 = () => {
    return (
        <>
        <section className="blog-section">
          <div className="auto-container">
            <div className="sec-title text-center">
              <figure className="image"><img src="images/icons/icon1.png" alt="Image"/></figure>
              <span className="sub-title">Blogs</span>
              <h2 className="words-slide-up text-split">News & Articles</h2>
            </div>
            <div className="carousel-outer">
              <Swiper {...swiperOptions} className="testimonial-carousel owl-carousel owl-theme default-dots">
                  {/* Clients Block */}
                  <SwiperSlide>
                <div className="blog-block mb-0">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="news-details">
                          <img src="images/resource/blog1-1.jpg" alt="Image"/>
                          <img src="images/resource/blog1-1.jpg" alt="Image"/>
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <ul className="post-meta">
                        <li className="categories"><Link href="news-details">Trending</Link></li>
                        <li className="date">Aug 20, 2023</li>
                      </ul>
                      <h4 className="title"><Link href="news-details">Spring is in the Air and So Our These Amazing Spa Offers</Link></h4>
                      <Link className="read-more" href="news-details">Read More <i className="icon fa-regular fa-angle-right"></i></Link>
                    </div>
                  </div>
                </div>
                  </SwiperSlide>
                  <SwiperSlide>
                <div className="blog-block mb-0">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="news-details">
                          <img src="images/resource/blog1-2.jpg" alt="Image"/>
                          <img src="images/resource/blog1-2.jpg" alt="Image"/>
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <ul className="post-meta">
                        <li className="categories"><Link href="news-details">Trending</Link></li>
                        <li className="date">Aug 20, 2023</li>
                      </ul>
                      <h4 className="title"><Link href="news-details">We giving Amazing special spa and message service for vip.</Link></h4>
                      <Link className="read-more" href="news-details">Read More <i className="icon fa-regular fa-angle-right"></i></Link>
                    </div>
                  </div>
                </div>
                  </SwiperSlide>
                  <SwiperSlide>
                <div className="blog-block mb-0">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="news-details">
                          <img src="images/resource/blog1-3.jpg" alt="Image"/>
                          <img src="images/resource/blog1-3.jpg" alt="Image"/>
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <ul className="post-meta">
                        <li className="categories"><Link href="news-details">Trending</Link></li>
                        <li className="date">Aug 20, 2023</li>
                      </ul>
                      <h4 className="title"><Link href="news-details">Looks reasonable. The generate is therefore always.</Link></h4>
                      <Link className="read-more" href="news-details">Read More <i className="icon fa-regular fa-angle-right"></i></Link>
                    </div>
                  </div>
                </div>
                  </SwiperSlide>
                  <SwiperSlide>
                <div className="blog-block mb-0">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="news-details">
                          <img src="images/resource/blog1-1.jpg" alt="Image"/>
                          <img src="images/resource/blog1-1.jpg" alt="Image"/>
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <ul className="post-meta">
                        <li className="categories"><Link href="news-details">Trending</Link></li>
                        <li className="date">Aug 20, 2023</li>
                      </ul>
                      <h4 className="title"><Link href="news-details">Spring is in the Air and So Our These Amazing Spa Offers</Link></h4>
                      <Link className="read-more" href="news-details">Read More <i className="icon fa-regular fa-angle-right"></i></Link>
                    </div>
                  </div>
                </div>
                  </SwiperSlide>
                  <SwiperSlide>
                <div className="blog-block mb-0">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="news-details">
                          <img src="images/resource/blog1-2.jpg" alt="Image"/>
                          <img src="images/resource/blog1-2.jpg" alt="Image"/>
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <ul className="post-meta">
                        <li className="categories"><Link href="news-details">Trending</Link></li>
                        <li className="date">Aug 20, 2023</li>
                      </ul>
                      <h4 className="title"><Link href="news-details">We giving Amazing special spa and message service for vip.</Link></h4>
                      <Link className="read-more" href="news-details">Read More <i className="icon fa-regular fa-angle-right"></i></Link>
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
export default Blog1
