import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const Services7 = () => {
  const [services, setPages] = useState([]);
  const [loading, setLoading] = useState(true);

  // API থেকে ডাটা ফেচ করা
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(
          "https://vipspa.pythonanywhere.com/api/vipspa/services/",
        );

        // ১. ডাটা রিভার্স করা (যাতে নতুনগুলো আগে আসে)
        // ২. slice(0, 4) দিয়ে প্রথম ৪টা নেওয়া
        const latestFour = res.data.reverse().slice(0, 4);

        setPages(latestFour);
      } catch (err) {
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  // যদি ডাটা লোড হতে থাকে
  if (loading)
    return <div className="text-center py-5">Loading Services...</div>;

  // যদি ডাটা না থাকে তাহলে সেকশনটি দেখাবে না
  if (!services || services.length === 0) return null;

  return (
    <>
      <section className="service-section-home7">
        <div className="service-pattrn bounce-x"></div>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row mt-100">
                <div className="col-lg-12">
                  <div className="sec-title">
                    <figure className="image">
                      <img src="images/icons/icon2.png" alt="Image" />
                    </figure>
                    <span className="sub-title">Services list</span>
                    <h2 className="words-slide-up text-split">
                      Indulge in Our Premium Spa Services
                    </h2>
                  </div>
                </div>

                {/* ম্যাপ ফাংশন শুরু */}
                {services.map((item, index) => (
                  <div key={item.id || index} className="col-sm-6">
                    <div className="service-block">
                      <div className="inner-box">
                        <div className="image-box">
                          <div
                            className="bg-image"
                            style={{
                              backgroundImage:
                                "url(/images/resource/serviceitembg.png)",
                            }}
                          ></div>
                          <div
                            className="bg-image-two"
                            style={{
                              // ব্যাকএন্ডের main_image ব্যবহার করা হয়েছে
                              backgroundImage: `url(${item.main_image || "/images/resource/service1-2.png"})`,
                            }}
                          ></div>
                        </div>
                        <div className="content-box">
                          <figure className="icon mb-0">
                            {/* ডাইনামিক আইকন: যদি ব্যাকএন্ডে icon_image না থাকে তবে ডিফল্ট সিরিয়াল আইকন */}
                            <img
                              src={
                                item.icon ||
                                `images/icons/theme-icon${(index % 3) + 5}.png`
                              }
                              alt={item.title}
                              style={{
                                width: "50px",
                                height: "50px",
                                objectFit: "contain",
                              }}
                            />
                          </figure>
                          <h4 className="title">
                            {/* ডাইনামিক আইডি বা স্লাগ দিয়ে লিংক */}
                            <Link href={`/page-service-details`}>
                              {item.title}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* ম্যাপ ফাংশন শেষ */}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-style-home7">
                <div className="thumb">
                  <img src="images/resource/about7.png" alt="About" />
                </div>
                <div className="about-content">
                  <h4 className="title">Schedule Now</h4>
                  <p className="text">
                    Secure your spot today and enjoy the ultimate relaxation
                    experience tailored just for you.
                  </p>
                  <Link
                    href="tel:+8801891450300"
                    className="theme-btn btn-style-one mt-10"
                  >
                    APPPOINMENT NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services7;
