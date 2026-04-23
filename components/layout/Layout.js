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
    const onScroll = () => {
      setScroll(window.scrollY > 100);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <PageHead headTitle={headTitle} />
      <div className="page-wrapper" id="top">
        <Header2
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isSearch={isSearch}
          handleSearch={handleSearch}
        />

        <main className="main">
          {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
          {children}
        </main>
        <FloatingActionButton />
        <Footer1 />
      </div>
      <BackToTop />
    </>
  );
}
