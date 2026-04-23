"use client";

import React, { useEffect, useState } from "react";

export default function AboutSection() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetch("https://vipspa.pythonanywhere.com/api/vipspa/about-sections/")
      .then((res) => res.json())
      .then((data) => {
        if (data?.length) {
          setAbout(data[0]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (!about) {
    return (
      <section className="about-section text-center py-5">
        <h4>Loading...</h4>
      </section>
    );
  }

  return (
    <>
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <div className="about-image-wrap">
                <div className="main-image-box">
                  <img
                    src={about.main_image}
                    alt={about.title}
                    className="img-fluid"
                  />
                </div>

                <div className="side-image-box">
                  <img
                    src={about.side_image}
                    alt="about"
                    className="img-fluid"
                  />
                </div>

                <a
                  href={about.video_url}
                  target="_blank"
                  rel="noreferrer"
                  className="video-btn"
                >
                  ▶
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span className="about-subtitle">{about.subtitle}</span>

                <h2 className="about-title">{about.title}</h2>

                <div
                  className="about-desc"
                  dangerouslySetInnerHTML={{
                    __html: about.description,
                  }}
                />

                <div className="row g-4 mt-4">
                  <div className="col-md-4">
                    <div className="feature-box">
                      <img src={about.feature_1_icon} alt="" />
                      <h5>{about.feature_1}</h5>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="feature-box">
                      <img src={about.feature_2_icon} alt="" />
                      <h5>{about.feature_2}</h5>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="feature-box">
                      <img src={about.feature_3_icon} alt="" />
                      <h5>{about.feature_3}</h5>
                    </div>
                  </div>
                </div>

                <div className="about-actions mt-5 d-flex flex-wrap align-items-center gap-4">
                  <a href={about.button_link} className="about-btn">
                    {about.button_text}
                  </a>

                  <a href={`tel:${about.contact_value}`} className="call-box">
                    <div className="call-icon">☎</div>

                    <div>
                      <small>{about.contact_label}</small>
                      <h6>{about.contact_value}</h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-section {
          background: #fff;
          overflow: hidden;
        }

        .about-image-wrap {
          position: relative;
          padding-right: 70px;
        }

        .main-image-box img {
          width: 100%;
          height: 600px;
          object-fit: cover;
          border-radius: 30px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }

        .side-image-box {
          position: absolute;
          right: 0;
          bottom: -50px;
          width: 260px;
          border-radius: 30px;
          overflow: hidden;
          border: 8px solid #fff;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);
        }

        .side-image-box img {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }

        .video-btn {
          position: absolute;
          left: 50px;
          bottom: 40px;
          width: 80px;
          height: 80px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          text-decoration: none;
          color: #111;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
        }

        .about-subtitle {
          display: inline-block;
          background: #f4f4f4;
          padding: 10px 20px;
          border-radius: 40px;
          font-weight: 600;
          margin-bottom: 25px;
        }

        .about-title {
          font-size: 54px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 25px;
        }

        .about-desc {
          font-size: 18px;
          line-height: 1.8;
          color: #666;
        }

        .about-desc a {
          color: #c89b3c;
          text-decoration: none;
        }

        .feature-box {
          text-align: center;
          padding: 30px 20px;
          background: #fafafa;
          border-radius: 25px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.04);
        }

        .feature-box img {
          height: 55px;
          margin-bottom: 15px;
        }

        .feature-box h5 {
          margin: 0;
          font-weight: 600;
        }

        .about-btn {
          display: inline-block;
          background: #111;
          color: #fff;
          padding: 15px 38px;
          border-radius: 16px;
          text-decoration: none;
          font-weight: 600;
        }

        .call-box {
          display: flex;
          align-items: center;
          gap: 15px;
          text-decoration: none;
          color: #111;
        }

        .call-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #f3f3f3;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .call-box h6 {
          margin: 4px 0 0;
          font-weight: 700;
        }

        @media (max-width: 991px) {
          .about-title {
            font-size: 38px;
          }

          .about-image-wrap {
            padding-right: 0;
          }

          .side-image-box {
            position: relative;
            right: auto;
            bottom: auto;
            margin-top: 30px;
            width: 220px;
          }

          .main-image-box img {
            height: 450px;
          }
        }
      `}</style>
    </>
  );
}
