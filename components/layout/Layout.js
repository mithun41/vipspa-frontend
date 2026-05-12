"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import Footer1 from "./Footer1";
import PageHead from "./PageHead";
import Header2 from "./Header2";
import FloatingActionButton from "../sections/FloatingActionButton";
import Loading from "@/components/Loading"; // Loading component import korun

const fetchSiteConfig = async () => {
  const response = await fetch("https://vipspa.pythonanywhere.com/api/vipspa/site-config/");
  if (!response.ok) throw new Error("Failed to fetch config");
  return response.json();
};

export default function Layout({ headTitle,metaDescription,canonicalPath, breadcrumbTitle, pageName, children }) {
  const [scroll, setScroll] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const siteUrl = "https://vipspadhaka.com";
  const fullCanonicalUrl = canonicalPath ? `${siteUrl}${canonicalPath}` : siteUrl;
  // TanStack Query logic
  const { data: siteConfig = [], isLoading } = useQuery({
    queryKey: ["siteConfig"],
    queryFn: fetchSiteConfig,
    staleTime: 1000 * 60 * 30,
  });

  // --- Logic for Loading ---
  // site-config load na hoya porjonto loading dekhabe
 

  const config = siteConfig[0] || {};

  // --- Dynamic Metadata Logic ---
  let dynamicTitle = headTitle;
  let dynamicDescription = config.home_meta_description;

  if (!metaDescription) {
    if (pageName === "home") {
      dynamicTitle = config.home_meta_title || headTitle;
      dynamicDescription = config.home_meta_description;
    } else if (pageName === "about") {
      dynamicTitle = config.about_meta_title || headTitle;
      dynamicDescription = config.about_meta_description;
    } else if (pageName === "services") {
      dynamicTitle = config.services_meta_title || headTitle;
      dynamicDescription = config.services_meta_description;
    } else if (pageName === "pricing") {
      dynamicTitle = config.pricing_meta_title || headTitle;
      dynamicDescription = config.pricing_meta_description;
    } else if (pageName === "contact") {
      dynamicTitle = config.contact_meta_title || headTitle;
      dynamicDescription = config.contact_meta_description;
    } else if (pageName === "blog") {
      dynamicTitle = config.blog_meta_title || headTitle;
      dynamicDescription = config.blog_meta_description;
    }
  }

  const handleMobileMenu = () => {
    const nextValue = !isMobileMenu;
    setMobileMenu(nextValue);
    if (nextValue) document.body.classList.add("mobile-menu-visible");
    else document.body.classList.remove("mobile-menu-visible");
  };

  const handleSearch = () => setSearch(!isSearch);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 100);
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <PageHead 
        headTitle={dynamicTitle} 
        metaDescription={dynamicDescription} 
        siteConfig={config} 
        canonicalUrl={fullCanonicalUrl}
      />
      
      <div className="page-wrapper" id="top">
        <Header2
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isSearch={isSearch}
          handleSearch={handleSearch}
          siteConfig={siteConfig} 
        />

        <main className="main">
          {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
          {children}
        </main>

        <FloatingActionButton siteConfig={siteConfig} />
        <Footer1 siteConfig={siteConfig} />
      </div>
      <BackToTop />
    </>
  );
}