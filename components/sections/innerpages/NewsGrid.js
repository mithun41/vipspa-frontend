import Link from "next/link";

const NewsGrid = () => {
  return (
    <>
      <section className="blog-section-two">
        <div className="auto-container">
          <div className="row">
            <div className="blog-block col-lg-4 col-md-6">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="news-details">
                      <img src="images/resource/blog2-1.jpg" alt="Image" />
                      <img src="images/resource/blog2-1.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <ul className="post-meta">
                    <li className="categories">
                      <Link href="news-details">Trending</Link>
                    </li>
                    <li className="date">Aug 20, 2023</li>
                  </ul>
                  <h4 className="title">
                    <Link href="news-details">
                      Spring is in the Air and So Our These Amazing Spa Offers
                    </Link>
                  </h4>
                  <Link className="read-more" href="news-details">
                    Read More <i className="icon fa-regular fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-block col-lg-4 col-md-6">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="news-details">
                      <img src="images/resource/blog2-2.jpg" alt="Image" />
                      <img src="images/resource/blog2-2.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <ul className="post-meta">
                    <li className="categories">
                      <Link href="news-details">Trending</Link>
                    </li>
                    <li className="date">Aug 20, 2023</li>
                  </ul>
                  <h4 className="title">
                    <Link href="news-details">
                      We giving Amazing special spa and message service for vip.
                    </Link>
                  </h4>
                  <Link className="read-more" href="news-details">
                    Read More <i className="icon fa-regular fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-block col-lg-4 col-md-6">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="news-details">
                      <img src="images/resource/blog2-3.jpg" alt="Image" />
                      <img src="images/resource/blog2-3.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <ul className="post-meta">
                    <li className="categories">
                      <Link href="news-details">Trending</Link>
                    </li>
                    <li className="date">Aug 20, 2023</li>
                  </ul>
                  <h4 className="title">
                    <Link href="news-details">
                      Looks reasonable. The generate is therefore always.
                    </Link>
                  </h4>
                  <Link className="read-more" href="news-details">
                    Read More <i className="icon fa-regular fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-block col-lg-4 col-md-6">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="news-details">
                      <img src="images/resource/blog2-3.jpg" alt="Image" />
                      <img src="images/resource/blog2-3.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <ul className="post-meta">
                    <li className="categories">
                      <Link href="news-details">Trending</Link>
                    </li>
                    <li className="date">Aug 20, 2023</li>
                  </ul>
                  <h4 className="title">
                    <Link href="news-details">
                      Looks reasonable. The generate is therefore always.
                    </Link>
                  </h4>
                  <Link className="read-more" href="news-details">
                    Read More <i className="icon fa-regular fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-block col-lg-4 col-md-6">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="news-details">
                      <img src="images/resource/blog2-1.jpg" alt="Image" />
                      <img src="images/resource/blog2-1.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <ul className="post-meta">
                    <li className="categories">
                      <Link href="news-details">Trending</Link>
                    </li>
                    <li className="date">Aug 20, 2023</li>
                  </ul>
                  <h4 className="title">
                    <Link href="news-details">
                      Spring is in the Air and So Our These Amazing Spa Offers
                    </Link>
                  </h4>
                  <Link className="read-more" href="news-details">
                    Read More <i className="icon fa-regular fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-block col-lg-4 col-md-6">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="news-details">
                      <img src="images/resource/blog2-2.jpg" alt="Image" />
                      <img src="images/resource/blog2-2.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <ul className="post-meta">
                    <li className="categories">
                      <Link href="news-details">Trending</Link>
                    </li>
                    <li className="date">Aug 20, 2023</li>
                  </ul>
                  <h4 className="title">
                    <Link href="news-details">
                      We giving Amazing special spa and message service for vip.
                    </Link>
                  </h4>
                  <Link className="read-more" href="news-details">
                    Read More <i className="icon fa-regular fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
    </>
  );
};
export default NewsGrid;
