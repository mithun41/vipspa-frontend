"use client";
import Link from "next/link";
import { useState } from "react";

// handleMobileMenu প্রপস হিসেবে রিসিভ করা হচ্ছে
export default function MobileMenu({ handleMobileMenu }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <ul className="navigation clearfix">
        <li className="current dropdown">
          {/* onClick={handleMobileMenu} যুক্ত করা হয়েছে */}
          <Link href="/" onClick={handleMobileMenu}>Home</Link>
        </li>
        <li>
          <Link href="/page-about" onClick={handleMobileMenu}>About</Link>
        </li>

        <li>
          <Link href="/page-services" onClick={handleMobileMenu}>Services</Link>
        </li>
        <li>
          <Link href="/page-pricing" onClick={handleMobileMenu}>Pricing</Link>
        </li>
        <li className="">
          <Link href="/news-grid" onClick={handleMobileMenu}>Blog</Link>
        </li>
        <li>
          <Link href="/page-contact" onClick={handleMobileMenu}>Contact</Link>
        </li>
      </ul>
    </>
  );
}