import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const About6 = ({ about }) => {
  const [isOpen, setOpen] = useState(false);

  const getYoutubeVideoId = (url) => {
    if (!url) return "";
    const regExp =
      /(?:youtube\.com\/watch\?v=|youtube\.com\/watch\?.*&v=|youtu\.be\/)([^&\n?#]+)/;
    const match = url.match(regExp);
    return match ? match[1] : "";
  };

  const videoId = getYoutubeVideoId(about?.video_url);

  return (
    <>
      <section className="about-section-four">
        <div className="about6-shape1 bounce-y"></div>

        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              {/* LEFT IMAGE */}
              <div className="image-column col-lg-6 order-2 order-lg-0">
                <div className="inner-column">
                  <div className="image-box">
                    <div className="play-box">
                      <a onClick={() => setOpen(true)} className="play-btn-two">
                        <i className="icon fa-solid fa-play"></i>
                      </a>
                    </div>

                    <figure className="image-one mb-0">
                      <Link href={about?.button_link || "page-about.html"}>
                        <img src={about?.main_image} alt="Image" />
                      </Link>
                    </figure>

                    {about?.side_image && (
                      <figure className="image-two bounce-y">
                        <img src={about?.side_image} alt="Image" />
                      </figure>
                    )}
                  </div>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="content-column col-lg-6">
                <div className="inner-column">
                  <div className="sec-title mb-0">
                    <span className="sub-title">{about?.subtitle}</span>

                    <h2 className="words-slide-up">{about?.title}</h2>

                    {/* 🔥 MAIN FIX HERE */}
                    <div
                      className="text"
                      style={{
                        lineHeight: "1.7",
                        textAlign: "justify",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: about?.description || "",
                      }}
                    />
                  </div>

                  {/* FEATURES */}
                  <div className="row">
                    {[1, 2, 3].map((num) => (
                      <div key={num} className="list-box col-4">
                        <div className="inner">
                          <figure className="thumb">
                            <img
                              src={about?.[`feature_${num}_icon`]}
                              alt={about?.[`feature_${num}`] || "Image"}
                            />
                          </figure>
                          <h4 className="title">{about?.[`feature_${num}`]}</h4>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* BUTTON + CONTACT */}
                  <div className="author-box">
                    <div className="inner">
                      <Link
                        href={about?.button_link || "/page-about"}
                        className="theme-btn btn-style-two btn pricing-btn"
                      >
                        <span className="btn-title">{about?.button_text}</span>
                      </Link>

                      <div className="contact-info">
                        <div className="icon-box">
                          <img src="images/icons/comment1.png" alt="Image" />
                        </div>

                        <div className="sign">
                          <div className="text">{about?.contact_label}</div>

                          <Link
                            href={
                              about?.contact_value
                                ? `https://wa.me/${about.contact_value.replace(
                                    /[^0-9]/g,
                                    "",
                                  )}`
                                : "#"
                            }
                          >
                            {about?.contact_value}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default About6;
