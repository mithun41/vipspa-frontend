import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const Video1 = ({ videoData }) => {
  const [isOpen, setOpen] = useState(false);

  // Function to extract YouTube Video ID from URL
  const getYoutubeID = (url) => {
    if (!url) return "w4x2twyuhDs"; // Default ID if no URL provided
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : "w4x2twyuhDs";
  };

  return (
    <>
      <section className="video-section">
        <div
          className="bg bg-image"
          style={{ 
            backgroundImage: `url(${videoData?.background_image || "/images/background/bg-video1.jpg"})` 
          }}
        ></div>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="sec-title mb-0">
                <h2 className="words-slide-up text-split">
                  {videoData?.title || "Book & feel our Incredible Spa Experience"}
                </h2>
                <Link
                  href={videoData?.button_link || "tel:+8801891450300"}
                  className="theme-btn btn-style-two btn pricing-btn"
                >
                  <span className="btn-title">{videoData?.button_text || "Make Appointment"}</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="outer-box">
                <h4>Watch Now</h4>
                <button 
                  onClick={() => setOpen(true)} 
                  className="play-now"
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <i className="icon fas fa-play p-0" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Modal Video */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={getYoutubeID(videoData?.video_url)}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default Video1;