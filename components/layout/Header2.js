import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

export default function Header2({
  scroll,
  isSearch,
  handleSearch,
  handleMobileMenu,
  siteConfig  
}) {
  

 

   const config = siteConfig?.[0] || {}; 

  return (
    <>
      <header
        className={`main-header header-style-two ${
          isSearch ? "moblie-search-active" : ""
        }`}
      >
        <div className="header-lower">
          <div className="main-box">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <img
                    src={"/images/logo.png"}
                    alt="Logo"
                  />
                </Link>
              </div>
            </div>

            <div className="nav-outer">
              <nav className="nav main-menu">
                <Menu />
              </nav>
              <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                <span className="icon lnr-icon-bars"></span>
              </div>
            </div>

            <div className="outer-box">
              <button className="ui-btn callbtn d-none-mobile">
                <a
                  href={`tel:${config.phone_number}`}
                  className="ui-btn callbtn"
                >
                  <i className="fa-thin fa-phone"></i>
                  <span className="number">
                    {config.phone_number || "+8801891450300"}
                  </span>
                </a>
              </button>
              <div className="divider"></div>
              <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                <span className="icon fa-thin fa-bars-staggered fa-rotate-180"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Section */}
        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={handleMobileMenu} />
          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <Link href="/">
                  <img
                    src={config.footer_logo || "/images/logo.png"}
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="close-btn" onClick={handleMobileMenu}>
                <i className="icon fa fa-times" />
              </div>
            </div>
            
            {/* এখানে handleMobileMenu পাস করা হয়েছে যাতে লিঙ্কে ক্লিক করলে মেনু ক্লোজ হয় */}
            <MobileMenu handleMobileMenu={handleMobileMenu} />

            <ul className="contact-list-one">
              <li>
                <div className="contact-info-box">
                  <i className="icon lnr-icon-phone-handset" />
                  <span className="title">Call Now</span>
                  <a href={`tel:${config.phone_number}`}>
                    {config.phone_number}
                  </a>
                </div>
              </li>
              <li>
                <div className="contact-info-box">
                  <span className="icon lnr-icon-envelope1" />
                  <span className="title">Send Email</span>
                  <Link href={`mailto:${config.email}`}>{config.email}</Link>
                </div>
              </li>
              <li>
                <div className="contact-info-box">
                  <span className="icon lnr-icon-clock" />
                  <span className="title">Opening Hours</span>
                  Sat - Fri {config.sat_time}
                </div>
              </li>
            </ul>
            {/* <ul className="social-links">
              <li>
                <Link href={config.twitter_url || "#"}>
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href={config.facebook_url || "#"}>
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link href={config.instagram_url || "#"}>
                  <i className="fab fa-instagram" />
                </Link>
              </li>
            </ul> */}
          </nav>
        </div>

        {/* Sticky Header */}
        <div
          className={`sticky-header ${
            scroll ? "fixed-header animated slideInDown" : ""
          }`}
        >
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo">
                <Link href="/">
                  <img
                    src={config.footer_logo || "/images/logo.png"}
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="nav-outer">
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <Menu />
                  </div>
                </nav>
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}