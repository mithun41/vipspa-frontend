import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AdminSidebar from './AdminSidebar'; // এই যে মামা, ইম্পোর্ট করলাম!

export default function AdminLayout({ children }) {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            router.push('/admin/login');
        }
    }, [router]);

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            {/* সাইডবার কম্পোনেন্ট */}
            <AdminSidebar /> 

            {/* মেইন কন্টেন্ট এলাকা */}
            <main style={{ 
                flex: 1, 
                padding: '30px', 
                background: '#f4f7f6', 
                minHeight: '100vh',
                overflowY: 'auto' 
            }}>
                {children}
            </main>
        </div>
    );
}