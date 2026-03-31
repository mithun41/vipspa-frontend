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
              <div className="image-column col-lg-6 order-2 order-lg-0">
                <div className="inner-column">
                  <div className="image-box">
                    <div className="play-box">
                      <a onClick={() => setOpen(true)} className="play-btn-two">
                        <i
                          className="icon fa-solid fa-play"
                          aria-hidden="true"
                        ></i>
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

              <div className="content-column col-lg-6">
                <div className="inner-column">
                  <div className="sec-title mb-0">
                    <span className="sub-title">{about?.subtitle}</span>

                    <h2 className="words-slide-up">{about?.title}</h2>

                    <div className="text" style={{ whiteSpace: "pre-line" }}>
                      {about?.description}
                    </div>
                  </div>

                  <div className="row">
                    <div className="list-box col-4 ">
                      <div className="inner">
                        <figure className="thumb">
                          <img
                            src={about?.feature_1_icon}
                            alt={about?.feature_1 || "Image"}
                          />
                        </figure>
                        <h4 className="title">{about?.feature_1}</h4>
                      </div>
                    </div>

                    <div className="list-box col-4">
                      <div className="inner">
                        <figure className="thumb">
                          <img
                            src={about?.feature_2_icon}
                            alt={about?.feature_2 || "Image"}
                          />
                        </figure>
                        <h4 className="title">{about?.feature_2}</h4>
                      </div>
                    </div>

                    <div className="list-box col-4">
                      <div className="inner">
                        <figure className="thumb">
                          <img
                            src={about?.feature_3_icon}
                            alt={about?.feature_3 || "Image"}
                          />
                        </figure>
                        <h4 className="title">{about?.feature_3}</h4>
                      </div>
                    </div>
                  </div>

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
