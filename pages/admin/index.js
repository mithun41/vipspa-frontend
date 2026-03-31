import withAuth from '../../components/withAuth';
import AdminLayout from '../../components/AdminLayout';

const DashboardHome = () => {
    return (
        <AdminLayout>
            <div className="container-fluid">
                <h1 className="h3 mb-4 text-gray-800">Admin Dashboard Overview</h1>
                <div className="row">
                    {/* Welcome Card */}
                    <div className="col-xl-12 col-md-12 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Welcome Back, Admin!</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    এখান থেকে আপনি সাইটের স্লাইডার, প্রাইসিং এবং ব্লগ কন্ট্রোল করতে পারবেন।
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

// এই লাইনটিই ম্যাজিক করবে, লগইন ছাড়া ঢুকতে দিবে না
export default withAuth(DashboardHome);