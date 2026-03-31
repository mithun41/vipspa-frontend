import Link from 'next/link';

export default function AdminSidebar() {
    return (
        <aside style={{ width: '250px', background: '#2c3e50', color: 'white', minHeight: '100vh', padding: '20px' }}>
            <h4 className="mb-4 text-warning">VIP SPA ADMIN</h4>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link href="/admin" className="nav-link text-white">🏠 Dashboard</Link></li>
                <li className="nav-item mb-2"><Link href="/admin/hero" className="nav-link text-white">🖼️ Hero Slides</Link></li>
                <li className="nav-item mb-2"><Link href="/admin/about" className="nav-link text-white">🖼️ About Section</Link></li>
                <li className="nav-item mb-2"><Link href="/admin/marquee" className="nav-link text-white">🖼️ Marquee</Link></li>
                <li className="nav-item mb-2"><Link href="/admin/services" className="nav-link text-white">🛠️ Services</Link></li>
                <li className="nav-item mb-2"><Link href="/admin/video" className="nav-link text-white">🛠️ Manage Video</Link></li>
                <li className="nav-item mb-2"><Link href="/admin/pricing" className="nav-link text-white">💰 Pricing Plans</Link></li>
                <li className="nav-item mb-2"><Link href="/admin/testimonials" className="nav-link text-white">Testimonials</Link></li>
                <li className="nav-item mb-2"><Link href="/admin/team" className="nav-link text-white">👥 Team Members</Link></li>
                <li className="nav-item mb-2"><Link href="/admin/blogs" className="nav-link text-white">✍️ Blog Posts</Link></li>
                <li className="nav-item mb-2"><Link href="/admin/config" className="nav-link text-white">⚙️ Site Config</Link></li>
            </ul>
        </aside>
    );
}