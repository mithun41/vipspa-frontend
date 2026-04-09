"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  // মেনু ওপেন রাখার লজিক
  const getDefaultMenu = () => {
    const homeRoutes = [
      "/admin/hero",
      "/admin/marquee",
      "/admin/video",
      "/admin/testimonials",
      "/admin/team",
      "/admin/services",
      "/admin/pricing",
      "/admin/manageGallery",
      "/admin/new-section", // নতুন রুট
    ];
    const blogRoutes = [
      "/admin/blogpage/blogpage",
      "/admin/blogpage/categories",
      "/admin/blogpage/comments",
    ];

    if (homeRoutes.includes(pathname)) return "home";
    if (blogRoutes.includes(pathname)) return "blog";
    if (pathname === "/admin/about") return "about";
    if (pathname === "/admin/services/servicepage") return "service";

    return "";
  };

  const [openMenu, setOpenMenu] = useState("");

  useEffect(() => {
    setOpenMenu(getDefaultMenu());
  }, [pathname]);

  const toggleMenu = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? "" : menuName));
  };

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("adminToken");
      router.push("/admin/login");
    }
  };

  const isActive = (href) => pathname === href;

  // স্টাইল ফাংশনগুলোকে আরও ক্লিন করা হয়েছে
  const navLinkStyle = (active = false) => ({
    display: "flex",
    alignItems: "center",
    padding: "12px 18px",
    color: active ? "#fff" : "#94a3b8",
    textDecoration: "none",
    transition: "all 0.2s ease-in-out",
    fontSize: "14px",
    fontWeight: active ? "600" : "500",
    borderRadius: "8px",
    margin: "4px 12px",
    background: active
      ? "linear-gradient(90deg, #4f46e5 0%, #3730a3 100%)"
      : "transparent",
    cursor: "pointer",
    boxShadow: active ? "0 4px 12px rgba(79, 70, 229, 0.3)" : "none",
  });

  const subLinkStyle = (active = false) => ({
    display: "flex",
    alignItems: "center",
    padding: "10px 18px 10px 45px",
    fontSize: "13px",
    color: active ? "#ffc107" : "#cbd5e1",
    textDecoration: "none",
    transition: "0.2s",
    background: active ? "rgba(255, 193, 7, 0.1)" : "transparent",
    borderLeft: active ? "2px solid #ffc107" : "2px solid transparent",
  });

  const renderDropdown = (key, icon, title, items) => {
    const isOpen = openMenu === key;
    const hasActiveChild = items.some((item) => pathname === item.href);

    return (
      <li style={{ listStyle: "none" }}>
        <div
          style={navLinkStyle(isOpen || hasActiveChild)}
          onClick={() => toggleMenu(key)}
        >
          <span style={{ marginRight: "12px", fontSize: "18px" }}>{icon}</span>
          <span style={{ flex: 1 }}>{title}</span>
          <span style={{ fontSize: "10px", opacity: 0.7 }}>
            {isOpen ? "▼" : "▶"}
          </span>
        </div>

        {isOpen && (
          <div
            style={{
              background: "rgba(0,0,0,0.2)",
              margin: "0 12px",
              borderRadius: "0 0 8px 8px",
            }}
          >
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                style={subLinkStyle(isActive(item.href))}
              >
                <span style={{ marginRight: "10px" }}>{item.icon}</span>{" "}
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </li>
    );
  };

  return (
    <aside className="admin-sidebar">
      <div style={{ flex: 1 }}>
        <div className="sidebar-header">
          <div className="logo-icon">V</div>
          <div>
            <h4>VIP SPA</h4>
            <div className="sub-title">Admin Panel v2.0</div>
          </div>
        </div>

        <ul style={{ padding: 0 }}>
          {/* Dashboard */}
          <li style={{ listStyle: "none" }}>
            <Link href="/admin" style={navLinkStyle(isActive("/admin"))}>
              <span style={{ marginRight: "12px", fontSize: "18px" }}>📊</span>{" "}
              Dashboard
            </Link>
          </li>

          <div className="menu-divider">MAIN CONTENT</div>

          {/* Homepage - Added Home Sections here */}
          {renderDropdown("home", "🏠", "Homepage", [
            {
              href: "/admin/new-section",
              icon: "🍱",
              label: "Home Sections",
            }, // এটি আপনার নতুন রুট
            { href: "/admin/hero", icon: "🖼️", label: "Hero Slides" },
            { href: "/admin/marquee", icon: "⚡", label: "Marquee Text" },
            { href: "/admin/video", icon: "🎥", label: "Video Section" },
            { href: "/admin/testimonials", icon: "💬", label: "Testimonials" },
            { href: "/admin/team", icon: "👥", label: "Team Members" },
            { href: "/admin/services", icon: "🛠️", label: "Services List" },
            { href: "/admin/pricing", icon: "💰", label: "Pricing Plans" },
            {
              href: "/admin/manageGallery",
              icon: "📸",
              label: "Manage Gallery",
            },
          ])}

          {/* Blog */}
          {renderDropdown("blog", "📝", "Blog Management", [
            {
              href: "/admin/blogpage/blogpage",
              icon: "📰",
              label: "All Posts",
            },
            {
              href: "/admin/blogpage/categories",
              icon: "📂",
              label: "Categories",
            },
            { href: "/admin/blogpage/comments", icon: "💬", label: "Comments" },
          ])}

          <div className="menu-divider">PAGES & SETTINGS</div>

          {/* About & Service */}
          {renderDropdown("about", "📖", "About Us", [
            { href: "/admin/about", icon: "📝", label: "Edit Content" },
          ])}

          {renderDropdown("service", "🛀", "Service Page", [
            {
              href: "/admin/services/servicepage",
              icon: "⚙️",
              label: "Page Settings",
            },
          ])}

          <li style={{ listStyle: "none" }}>
            <Link
              href="/admin/settings"
              style={navLinkStyle(isActive("/admin/settings"))}
            >
              <span style={{ marginRight: "12px", fontSize: "18px" }}>⚙️</span>{" "}
              Site Settings
            </Link>
          </li>
        </ul>
      </div>

      <div className="logout-wrap">
        <button onClick={handleLogout} className="logout-btn">
          <span>🚪</span> Sign Out
        </button>
      </div>

      <style jsx>{`
        .admin-sidebar {
          width: 280px;
          background: #0f172a; /* মডার্ন ডার্ক ব্লু কালার */
          color: white;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          border-right: 1px solid #1e293b;
          position: sticky;
          top: 0;
        }

        .sidebar-header {
          padding: 30px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-icon {
          background: #4f46e5;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 20px;
          box-shadow: 0 4px 10px rgba(79, 70, 229, 0.4);
        }

        .sidebar-header h4 {
          margin: 0;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: #f8fafc;
        }

        .sub-title {
          font-size: 11px;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .menu-divider {
          font-size: 11px;
          font-weight: 700;
          color: #475569;
          padding: 20px 25px 10px;
          letter-spacing: 1.5px;
        }

        .logout-wrap {
          padding: 20px;
          background: #0b1120;
        }

        .logout-btn {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #ef4444;
          background: transparent;
          color: #ef4444;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: 0.3s;
        }

        .logout-btn:hover {
          background: #ef4444;
          color: white;
        }

        /* Scrollbar styling */
        .admin-sidebar::-webkit-scrollbar {
          width: 5px;
        }
        .admin-sidebar::-webkit-scrollbar-thumb {
          background: #1e293b;
        }
      `}</style>
    </aside>
  );
}
