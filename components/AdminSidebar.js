"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const getDefaultMenu = () => {
    if (
      [
        "/admin/hero",
        "/admin/marquee",
        "/admin/video",
        "/admin/testimonials",
        "/admin/team",
        "/admin/services",
        "/admin/pricing",
        "/admin/manageGallery", // এখানে অ্যাড করা হয়েছে
      ].includes(pathname)
    ) {
      return "home";
    }

    if (
      [
        "/admin/blogpage/blogpage",
        "/admin/blogpage/categories",
        "/admin/blogpage/comments",
      ].includes(pathname)
    ) {
      return "blog";
    }

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
    if (confirm("Want to logout?")) {
      localStorage.removeItem("adminToken");
      router.push("/admin/login");
    }
  };

  const isActive = (href) => pathname === href;

  const navLinkStyle = (active = false) => ({
    display: "flex",
    alignItems: "center",
    padding: "12px 20px",
    color: active ? "#ffc107" : "#adb5bd",
    textDecoration: "none",
    transition: "all 0.3s ease",
    fontSize: "15px",
    borderLeft: active ? "3px solid #ffc107" : "3px solid transparent",
    background: active ? "#0f3460" : "transparent",
    cursor: "pointer",
  });

  const subLinkStyle = (active = false) => ({
    ...navLinkStyle(active),
    paddingLeft: "45px",
    fontSize: "14px",
    background: active ? "#0f3460" : "#16213e",
    color: active ? "#ffc107" : "#adb5bd",
    borderBottom: "1px solid #1a1a2e",
  });

  const renderDropdown = (key, icon, title, items) => {
    const isOpen = openMenu === key;
    const hasActiveChild = items.some((item) => pathname === item.href);

    return (
      <li className="nav-item">
        <div
          style={navLinkStyle(isOpen || hasActiveChild)}
          onClick={() => toggleMenu(key)}
        >
          <span className="me-2">{icon}</span> {title}
          <span className="ms-auto" style={{ fontSize: "10px" }}>
            {isOpen ? "▼" : "▶"}
          </span>
        </div>

        {isOpen && (
          <div>
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                style={subLinkStyle(isActive(item.href))}
                className="sub-hover"
              >
                {item.icon} {item.label}
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
          <h4>VIP SPA ADMIN</h4>
          <div className="sub-title">MANAGEMENT PANEL</div>
        </div>

        <ul className="nav flex-column">
          {/* Dashboard */}
          <li className="nav-item">
            <Link
              href="/admin"
              style={navLinkStyle(isActive("/admin"))}
              className="hover-link"
            >
              <span className="me-2">🏠</span> Dashboard
            </Link>
          </li>

          {/* Homepage */}
          {renderDropdown("home", "🌐", "Homepage", [
            { href: "/admin/hero", icon: "🖼️", label: "Hero Slides" },
            { href: "/admin/marquee", icon: "⚡", label: "Marquee Text" },
            { href: "/admin/video", icon: "🎥", label: "Video Section" },
            { href: "/admin/testimonials", icon: "💬", label: "Testimonials" },
            { href: "/admin/team", icon: "👥", label: "Team Members" },
            { href: "/admin/services", icon: "🛠️", label: "Services" },
            { href: "/admin/pricing", icon: "💰", label: "Pricing Plans" },
            {
              href: "/admin/manageGallery",
              icon: "📸",
              label: "Manage Gallery",
            }, // এখানে অ্যাড করা হয়েছে
          ])}

          {/* Blog */}
          {renderDropdown("blog", "✍️", "Blog Page", [
            {
              href: "/admin/blogpage/blogpage",
              icon: "📰",
              label: "All Blog Posts",
            },
            {
              href: "/admin/blogpage/categories",
              icon: "📂",
              label: "Categories",
            },
            {
              href: "/admin/blogpage/comments",
              icon: "💬",
              label: "Comments",
            },
          ])}

          {/* About */}
          {renderDropdown("about", "📖", "About Page", [
            { href: "/admin/about", icon: "📝", label: "About Content" },
          ])}

          {/* Service */}
          {renderDropdown("service", "🛁", "Service Page", [
            {
              href: "/admin/services/servicepage",
              icon: "🛠️",
              label: "Service Management",
            },
          ])}

          {/* Settings */}
          <li className="nav-item mt-3">
            <Link
              href="/admin/settings"
              style={navLinkStyle(isActive("/admin/settings"))}
            >
              <span className="me-2">⚙️</span> Site Settings
            </Link>
          </li>
        </ul>
      </div>

      <div className="logout-wrap">
        <button onClick={handleLogout} className="logout-btn">
          🚪 Logout
        </button>
      </div>

      <style jsx>{`
        .admin-sidebar {
          width: 260px;
          background: #1a1a2e;
          color: white;
          min-height: 100vh;
          padding: 20px 0;
          display: flex;
          flex-direction: column;
        }

        .sidebar-header {
          padding: 0 20px 20px;
          text-align: center;
        }

        .sidebar-header h4 {
          color: #ffc107;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 4px;
        }

        .sub-title {
          font-size: 10px;
          color: #6c757d;
        }

        .logout-wrap {
          padding: 16px;
          border-top: 1px solid #2b2b45;
        }

        .logout-btn {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #dc3545;
          background: transparent;
          color: white;
          font-weight: 700;
          cursor: pointer;
        }

        .logout-btn:hover {
          background: #dc3545;
        }
      `}</style>
    </aside>
  );
}
