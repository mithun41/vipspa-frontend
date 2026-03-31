import Link from "next/link"
const Product2 = () => {
    return (
        <>
        <section className="product-section">
          <div className="testimonial-pattrn1-1 bounce-x"></div>
          <div className="auto-container">
            <div className="sec-title">
              <figure className="image"><img src="images/icons/icon1.png" alt="Image"/></figure>
              <span className="sub-title">Result Driven Products</span>
              <h2 className="words-slide-up text-split">Chemical Free Collections</h2>
              <div className="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget <br/> egestas magna mi ut arcu. Phasellus nec.</div>
            </div>
            <div className="row">
              <div className="product-block home-style col-lg-3 col-md-6 col-sm-6">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="inner">
                      <figure className="image mb-0"><Link href="shop-product-details"><img src="images/resource/product1-1.jpg" alt="Image"/></Link></figure>
                      <div className="icon-box">
                        <Link href="shop-cart" className="icon ui-btn add-to-cart">
                          <i className="fa-sharp fa-light fa-cart-shopping"></i>
                        </Link>
                        <Link href="shop-product-details" className="icon ui-btn like-btn">
                          <i className="fa-light fa-heart"></i>
                        </Link>
                        <Link href="shop-cart" className="icon ui-btn add-to-cart">
                          <i className="fa-light fa-arrows-rotate"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content-box">
                    <div className="inner">
                      <span className="price">70$.00 - 90$.00</span>
                      <h4 className="title"><Link href="shop-product-details">Glow Facial Cream</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-block home-style col-lg-3 col-md-6 col-sm-6">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="inner">
                      <figure className="image mb-0"><Link href="shop-product-details"><img src="images/resource/product1-2.jpg" alt="Image"/></Link></figure>
                      <div className="icon-box">
                        <Link href="shop-cart" className="icon ui-btn add-to-cart">
                          <i className="fa-sharp fa-light fa-cart-shopping"></i>
                        </Link>
                        <Link href="shop-product-details" className="icon ui-btn like-btn">
                          <i className="fa-light fa-heart"></i>
                        </Link>
                        <Link href="shop-cart" className="icon ui-btn add-to-cart">
                          <i className="fa-light fa-arrows-rotate"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content-box">
                    <div className="inner">
                      <span className="price"> <span className="price-style"> 90$.00</span> - 70$.00</span>
                      <h4 className="title"><Link href="shop-product-details">Hair Treatment</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-block home-style col-lg-3 col-md-6 col-sm-6">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="inner">
                      <figure className="image mb-0"><Link href="shop-product-details"><img src="images/resource/product1-3.jpg" alt="Image"/></Link></figure>
                      <div className="icon-box">
                        <Link href="shop-cart" className="icon ui-btn add-to-cart">
                          <i className="fa-sharp fa-regular fa-cart-shopping"></i>
                        </Link>
                        <Link href="shop-product-details" className="icon ui-btn like-btn">
                          <i className="fa-light fa-heart"></i>
                        </Link>
                        <Link href="shop-cart" className="icon ui-btn add-to-cart">
                          <i className="fa-light fa-arrows-rotate"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content-box">
                    <div className="inner">
                      <span className="price">70$.00</span>
                      <h4 className="title"><Link href="shop-product-details">Massage Cream</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-block home-style col-lg-3 col-md-6 col-sm-6">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="inner">
                      <figure className="image mb-0"><Link href="shop-product-details"><img src="images/resource/product1-4.jpg" alt="Image"/></Link></figure>
                      <div className="icon-box">
                        <Link href="shop-cart" className="icon ui-btn add-to-cart">
                          <i className="fa-sharp fa-regular fa-cart-shopping"></i>
                        </Link>
                        <Link href="shop-product-details" className="icon ui-btn like-btn">
                          <i className="fa-light fa-heart"></i>
                        </Link>
                        <Link href="shop-cart" className="icon ui-btn add-to-cart">
                          <i className="fa-light fa-arrows-rotate"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content-box">
                    <div className="inner">
                      <span className="price">50$.00</span>
                      <h4 className="title"><Link href="shop-product-details">Body Message Oil</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Product2