import Link from "next/link";
import React, { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ModalVideo from "react-modal-video";
const Video3 = () => {
  const percentage = 90;
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="about-section-three">
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              <div className="image-column col-lg-6 order-2 order-lg-0">
                <div className="inner-column">
                  <div className="image-box">
                    <div className="text-rotate">
                      <div className="icon-text-2"></div>
                      <a onClick={() => setOpen(true)} className="play-btn-two">
                        <i
                          className="icon fa-solid fa-play"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <figure className="image-one overlay-anim">
                      <img src="images/resource/about3-main.png" alt="Image" />
                    </figure>
                    <figure className="image-two bounce-y">
                      <img src="images/resource/about3-2.png" alt="Image" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="content-column col-lg-5">
                <div className="inner-column">
                  <div className="sec-title mb-0">
                    <div className="title-stroke-text">About US</div>
                    <span className="sub-title">Get to know us</span>
                    <h2 className="words-slide-up">
                      Experience Top-Quality Care from Our Experts
                    </h2>
                    <div className="text">
                      Our highly skilled experts are dedicated to providing
                      top-quality care, ensuring every treatment meets your
                      needs and exceeds your expectations.
                    </div>
                  </div>
                  <div className="info-box">
                    <div className="inner">
                      <div className="fact-info">
                        <div className="graph-box">
                          <div className="pie-graph">
                            <div
                              className="graph-outer"
                              style={{ width: 90, height: 90 }}
                            >
                              <div className="inner-text count-box">
                                <CircularProgressbar
                                  value={90}
                                  text={`${percentage}%`}
                                  strokeWidth={4}
                                  styles={buildStyles({
                                    textColor: "#011425",
                                    trailColor: "#f9f6f1",
                                    pathColor: "#C2A74E",
                                  })}
                                />
                              </div>
                            </div>
                            <h4 className="title">
                              Clients <br />
                              satisficed
                            </h4>
                          </div>
                        </div>
                        <Link
                          href="page-about"
                          className="theme-btn btn-style-two"
                        >
                          <span className="btn-title">Book Now</span>
                        </Link>
                      </div>
                      <div className="image-box">
                        <figure className="image-one overlay-anim">
                          <img
                            src="images/resource/about3right.png"
                            alt="Image"
                          />
                        </figure>
                        <figure className="image-two">
                          <img src="images/resource/about3-4.png" alt="Image" />
                        </figure>
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
        videoId="Z1X-G-Y2zh8"
        onClose={() => setOpen(false)}
      />
    </>
  );
};
export default Video3;
