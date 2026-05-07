"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer1() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch("https://vipspa.pythonanywhere.com//api/vipspa/site-config/")
      .then((res) => res.json())
      .then((data) => {
        // ModelViewSet অ্যারে রিটার্ন করে, তাই প্রথমটা নিচ্ছি
        if (data && data.length > 0) setConfig(data[0]);
      })
      .catch((err) => console.error("Footer Error:", err));
  }, []);

  if (!config) return null; // ডাটা না আসা পর্যন্ত হাইড থাকবে

  return (
    <footer className="main-footer">
      <div className="widgets-section">
        <div className="footer1-1 bounce-x"></div>
        <div className="auto-container">
          <div className="row">
            {/* ১. ওপেনিং আওয়ার্স */}
            <div className="footer-column col-lg-4 col-md-6 order-1">
              <div className="footer-widget timetable-widget">
                <h3 className="widget-title">Open Hours</h3>
                <ul className="timetable">
                  <li>
                    Monday to Friday : <span>{config.mon_fri_time}</span>
                  </li>
                  <li>
                    Saturday: <span>{config.sat_time}</span>
                  </li>
                  <li>
                    Sunday: <span>{config.sun_time}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ২. লোগো ও সোশ্যাল */}
            <div className="footer-column col-lg-4 col-md-6 order-0 order-lg-1">
              <div className="footer-widget about-widget text-center">
                <div className="logo">
                  <Link href="/">
                    <img
                      src={config.footer_logo || "images/logo-2.png"}
                      alt="Logo"
                    />
                  </Link>
                </div>
                <div className="text">{config.footer_description}</div>
                {/* <ul className="social-icon">
                  <li>
                    <a
                      href={`https://wa.me/${config.phone_number?.replace("+", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icon fab fa-whatsapp"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href={`https://t.me/${config.phone_number?.replace("+", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icon fab fa-telegram-plane"></i>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>

            {/* ৩. কন্টাক্ট ইনফো */}
            <div className="footer-column col-lg-4 col-md-6 order-2">
              <div className="footer-widget contacts-widget">
                <h3 className="widget-title">Contact</h3>
                <div
                  className="text"
                  dangerouslySetInnerHTML={{ __html: config.address }}
                ></div>
                <ul className="contact-info">
                  <li>
                    <Link href={`tel:${config.phone_number}`}>
                      {config.phone_number}
                    </Link>
                  </li>
                  <li>
                    <Link href={`mailto:${config.email}`}>{config.email}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ফুল উইথ গুগল ম্যাপ উইথ ইনফো কার্ড (Gulshan Vip Spa) */}
      {/* <div className="footer-map-full-width w-100 mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.793657837136!2d90.40886294827261!3d23.790361065124834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7fc55958d21%3A0xac9176ef52c3b20f!2sGulshan%20Vip%20Spa!5e0!3m2!1sen!2sbd!4v1777462357610!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-container">
            <figure className="image"></figure>
            <div className="copyright-text">
              &copy; {new Date().getFullYear()} {config.site_name}, Developed By{" "}
              <span>
                <a
                  href="https://www.softzenit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Softzen IT
                </a>
              </span>
            </div>
            <Link className="link" href="/"></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
