import Link from "next/link";

const Gallery1 = ({ galleryData }) => {
  const items = galleryData?.items || [];

  // Jodi data na thake tahole empty return korbe
  if (items.length === 0) return null;

  return (
    <>
      <section className="gallery-section">
        <div className="outer-box">
          <div className="row">
            {/* Left Column (Contains 3 items if available) */}
            <div className="col-xl-6">
              <div className="row">
                
                {/* 1st Item (Large on left side of left col) */}
                {items[0] && (
                  <div className="gallery-block col-sm-6">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <Link className="lightbox-image" href={items[0].image}>
                            <img src={items[0].image} alt="Gallery" />
                          </Link>
                        </figure>
                        <Link className="icon" href="/page-gallery">
                          <i className="fa-sharp fa-light fa-eye"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2nd & 3rd Item (Stacked on right side of left col) */}
                <div className="gallery-block col-sm-6">
                  <div className="inner-box">
                    {items[1] && (
                      <div className="image-box">
                        <figure className="image">
                          <Link className="lightbox-image" href={items[1].image}>
                            <img src={items[1].image} alt="Gallery" />
                          </Link>
                        </figure>
                        <Link className="icon" href="/page-gallery">
                          <i className="fa-sharp fa-light fa-eye"></i>
                        </Link>
                      </div>
                    )}
                    
                    {items[2] && (
                      <div className="image-box">
                        <figure className="image">
                          <Link className="lightbox-image" href={items[2].image}>
                            <img src={items[2].image} alt="Gallery" />
                          </Link>
                        </figure>
                        <Link className="icon" href="/page-gallery">
                          <i className="fa-sharp fa-light fa-eye"></i>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column (Contains 4th item - Big Image) */}
            <div className="gallery-block col-xl-6">
              {items[3] && (
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link className="lightbox-image" href={items[3].image}>
                        <img src={items[3].image} alt="Gallery" />
                      </Link>
                    </figure>
                    <Link className="icon" href="/page-gallery">
                      <i className="fa-sharp fa-light fa-eye"></i>
                    </Link>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery1;