"use client";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import Footer1 from "./Footer1";
import PageHead from "./PageHead";
import Header2 from "./Header2";
import FloatingActionButton from "../sections/FloatingActionButton";

export default function Layout({ headTitle, breadcrumbTitle, children }) {
  const [scroll, setScroll] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [isSearch, setSearch] = useState(false);
  
  // এপিআই ডাটা রাখার জন্য স্টেট
  const [siteConfig, setSiteConfig] = useState([]);

  const handleMobileMenu = () => {
    const nextValue = !isMobileMenu;
    setMobileMenu(nextValue);

    if (nextValue) {
      document.body.classList.add("mobile-menu-visible");
    } else {
      document.body.classList.remove("mobile-menu-visible");
    }
  };

  const handleSearch = () => setSearch(!isSearch);

  useEffect(() => {
    // ১. স্ক্রল হ্যান্ডেলার
    const onScroll = () => {
      setScroll(window.scrollY > 100);
    };

    // ২. সাইট কনফিগ এপিআই কল করা (আপনার লোকাল হোস্ট এপিআই)
    const fetchSiteConfig = async () => {
      try {
        const response = await fetch("https://vipspa.pythonanywhere.com/api/vipspa/site-config/");
        const data = await response.json();
        setSiteConfig(data); // ডাটা সেভ করা হচ্ছে (অ্যারে হিসেবে)
      } catch (error) {
        console.error("Site Config fetch error:", error);
      }
    };

    fetchSiteConfig();
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* এপিআই ডাটা PageHead এ পাঠানো হচ্ছে */}
      <PageHead headTitle={headTitle} siteConfig={siteConfig} />
      
      <div className="page-wrapper" id="top">
        <Header2
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isSearch={isSearch}
          handleSearch={handleSearch}
          siteConfig={siteConfig} // যদি হেডারে লোগো বা নাম্বার লাগে
        />

        <main className="main">
          {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
          {children}
        </main>

        <FloatingActionButton siteConfig={siteConfig} /> {/* কল/হোয়াটসঅ্যাপ বাটন ডাইনামিক করতে */}
        
        {/* ফুটারেও ডাটা পাঠিয়ে দিন */}
        <Footer1 siteConfig={siteConfig} />
      </div>
      <BackToTop />
    </>
  );
}