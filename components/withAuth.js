import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();
        const [verified, setVerified] = useState(false);

        useEffect(() => {
            const token = localStorage.getItem('adminToken');
            // যদি টোকেন না থাকে, তবে লগইন পেজে পাঠিয়ে দাও
            if (!token) {
                router.replace('/admin/login');
            } else {
                setVerified(true);
            }
        }, [router]);

        if (verified) {
            return <WrappedComponent {...props} />;
        } else {
            return <div className="text-center mt-5">Checking Permission...</div>; // লোডিং দেখাবে যতক্ষণ চেক হচ্ছে
        }
    };
};

export default withAuth;