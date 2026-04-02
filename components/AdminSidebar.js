"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; // রাউটার ইম্পোর্ট করলাম

export default function AdminSidebar() {
  const [openMenu, setOpenMenu] = useState("home");
  const router = useRouter(); // রাউটার ইনিশিয়ালাইজ

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? "" : menuName);
  };

  // লগআউট ফাংশন
  const handleLogout = () => {
    if (confirm("মামা, লগআউট করবেন?")) {
      localStorage.removeItem("adminToken"); // টোকেন রিমুভ
      router.push("/login"); // লগইন পেজে রিডাইরেক্ট
    }
  };

  const navLinkStyle = {
    display: "flex",
    alignItems: "center",
    padding: "12px 20px",
    color: "#adb5bd",
    textDecoration: "none",
    transition: "0.3s",
    fontSize: "15px",
    borderLeft: "3px solid transparent",
  };

  const subLinkStyle = {
    ...navLinkStyle,
    paddingLeft: "45px",
    fontSize: "14px",
    background: "#16213e",
    borderBottom: "1px solid #1a1a2e",
  };

  return (
    <aside
      style={{
        width: "260px",
        background: "#1a1a2e",
        color: "white",
        minHeight: "100vh",
        padding: "20px 0",
        display: "flex",
        flexDirection: "column", // কন্টেন্ট সাজানোর জন্য
      }}
    >
      <div style={{ flex: 1 }}> {/* মেনুগুলো উপরে রাখার জন্য */}
        <div className="px-4 mb-4 text-center">
          <h4 className="text-warning fw-bold" style={{ letterSpacing: "1px" }}>
            VIP SPA ADMIN
          </h4>
          <div style={{ fontSize: "10px", color: "#6c757d" }}>
            MANAGEMENT PANEL
          </div>
        </div>

        <ul className="nav flex-column">
          {/* 🏠 DASHBOARD */}
          <li className="nav-item">
            <Link href="/admin" style={navLinkStyle} className="hover-link">
              <span className="me-2">🏠</span> Dashboard
            </Link>
          </li>

          {/* 🌐 HOMEPAGE */}
          <li className="nav-item">
            <div
              style={{
                ...navLinkStyle,
                cursor: "pointer",
                color: openMenu === "home" ? "#ffc107" : "#adb5bd",
              }}
              onClick={() => toggleMenu("home")}
            >
              <span className="me-2">🌐</span> Homepage
              <span className="ms-auto" style={{ fontSize: "10px" }}>
                {openMenu === "home" ? "▼" : "▶"}
              </span>
            </div>

            {openMenu === "home" && (
              <div className="sub-menu-container">
                <Link href="/admin/hero" style={subLinkStyle} className="sub-hover">🖼️ Hero Slides</Link>
                <Link href="/admin/marquee" style={subLinkStyle} className="sub-hover">⚡ Marquee Text</Link>
                <Link href="/admin/video" style={subLinkStyle} className="sub-hover">🎥 Video Section</Link>
                <Link href="/admin/testimonials" style={subLinkStyle} className="sub-hover">💬 Testimonials</Link>
                <Link href="/admin/team" style={subLinkStyle} className="sub-hover">👥 Team Members</Link>
                <Link href="/admin/blogs" style={subLinkStyle} className="sub-hover">✍️ Blog Posts</Link>
                <Link href="/admin/services" style={subLinkStyle} className="sub-hover">🛠️ Services (Section 3/7)</Link>
                <Link href="/admin/pricing" style={subLinkStyle} className="sub-hover">💰 Pricing Plans</Link>
              </div>
            )}
          </li>

          {/* 📄 ABOUT PAGE */}
          <li className="nav-item">
            <div style={{ ...navLinkStyle, cursor: "pointer" }} onClick={() => toggleMenu("about")}>
              <span className="me-2">📖</span> About Page
              <span className="ms-auto" style={{ fontSize: "10px" }}>{openMenu === "about" ? "▼" : "▶"}</span>
            </div>
            {openMenu === "about" && (
              <Link href="/admin/about" style={subLinkStyle} className="sub-hover">📝 About Content</Link>
            )}
          </li>

          {/* 📖 SERVICE PAGE */}
          <li className="nav-item">
            <div style={{ ...navLinkStyle, cursor: "pointer" }} onClick={() => toggleMenu("service")}>
              <span className="me-2">📖</span> Service Page
              <span className="ms-auto" style={{ fontSize: "10px" }}>{openMenu === "service" ? "▼" : "▶"}</span>
            </div>
            {openMenu === "service" && (
              <Link href="/admin/services/servicepage" style={subLinkStyle} className="sub-hover">Service Management</Link>
            )}
          </li>

          {/* ⚙️ SITE CONFIG */}
          <li className="nav-item mt-3">
            <Link href="/admin/settings" style={navLinkStyle} className="hover-link">
              <span className="me-2">⚙️</span> Site Settings
            </Link>
          </li>
        </ul>
      </div>

      {/* 🚪 LOGOUT BUTTON (একেবারে নিচে) */}
      <div className="px-3 mt-auto pt-3 border-top border-secondary">
        <button 
          onClick={handleLogout}
          className="btn btn-outline-danger w-100 fw-bold d-flex align-items-center justify-content-center gap-2"
          style={{ padding: "10px", borderRadius: "8px", transition: "0.3s" }}
        >
          <span>🚪</span> Logout
        </button>
      </div>

      <style jsx>{`
        .hover-link:hover {
          background: #0f3460;
          color: white !important;
          border-left: 3px solid #ffc107;
        }
        .sub-hover:hover {
          background: #1a1a2e !important;
          color: #ffc107 !important;
          padding-left: 50px !important;
        }
        .nav-item {
          transition: all 0.3s;
        }
      `}</style>
    </aside>
  );
}