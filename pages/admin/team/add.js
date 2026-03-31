import { useState } from 'react';
import AdminLayout from '../../../components/AdminLayout';
import withAuth from '../../../components/withAuth';
import { useRouter } from 'next/router';

const AddMember = () => {
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [photo, setPhoto] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('adminToken');
        
        const formData = new FormData();
        formData.append('name', name);
        formData.append('designation', designation);
        formData.append('photo', photo); // ফাইল অ্যাড করা

        const res = await fetch('http://127.0.0.1:8000/api/vipspa/team-members/', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` },
            body: formData // Content-Type ব্রাউজার নিজে সেট করবে
        });

        if (res.ok) {
            alert("মেম্বার অ্যাড হয়েছে মামা!");
            router.push('/admin/team');
        }
    };

    return (
        <AdminLayout>
            <div className="card p-4 shadow-sm border-0" style={{ maxWidth: '600px' }}>
                <h3>Add New Team Member</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" onChange={e => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Designation</label>
                        <input type="text" className="form-control" onChange={e => setDesignation(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Photo</label>
                        <input type="file" className="form-control" onChange={e => setPhoto(e.target.files[0])} required />
                    </div>
                    <button type="submit" className="btn btn-success">Save Member</button>
                </form>
            </div>
        </AdminLayout>
    );
};

export default withAuth(AddMember);