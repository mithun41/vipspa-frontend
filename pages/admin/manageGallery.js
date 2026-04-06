import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout"; // আপনার লেআউট অনুযায়ী পাথ ঠিক করে নিন
import withAuth from "../../components/withAuth";

const ManageGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  // ১. ডাটা ফেচ করা (Read)
  const fetchPhotos = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/vipspa/gallery/");
      const data = await res.json();
      setPhotos(data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  // ২. ফটো আপলোড করা (Create)
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", file.name);

    // লোকাল স্টোরেজ থেকে আপনার টোকেনটা নিন (আপনার প্রোজেক্টে টোকেনের কি নাম সেটা চেক করে নিয়েন)
    const token = localStorage.getItem("adminToken");

    setUploading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/api/vipspa/gallery/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (res.ok) {
        alert("Photo uploaded!");
        fetchPhotos();
      } else {
        const errorData = await res.json();
        console.log(errorData);
        alert("Upload failed! Check console for details.");
      }
    } catch (err) {
      alert("Server error!");
    } finally {
      setUploading(false);
    }
  };

  // ৩. ফটো ডিলিট করা (Delete)
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this photo?")) return;

    // আপনার লোকাল স্টোরেজে টোকেনটা যে নামে আছে সেটা নিশ্চিত করুন
    const token = localStorage.getItem("adminToken");

    if (!token) {
      alert("You are not authorized! Please login again.");
      return;
    }

    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/vipspa/gallery/${id}/`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`, // এই লাইনটি যোগ করা হয়েছে
            "Content-Type": "application/json",
          },
        },
      );

      if (res.ok) {
        // সাকসেস হলে স্টেট থেকে সরিয়ে ফেলুন
        setPhotos(photos.filter((p) => p.id !== id));
        alert("Photo deleted successfully!");
      } else if (res.status === 401) {
        alert("Session expired or Unauthorized! Please login again.");
      } else {
        alert("Delete failed!");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Server error during delete!");
    }
  };
  return (
    <AdminLayout>
      <div className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-4 bg-white p-3 rounded shadow-sm">
          <h2 className="h4 mb-0">Manage Photo Gallery</h2>
          <label
            className={`btn ${uploading ? "btn-secondary" : "btn-success"} cursor-pointer`}
          >
            {uploading ? "Uploading..." : "Upload New Photo"}
            <input
              type="file"
              hidden
              onChange={handleUpload}
              disabled={uploading}
              accept="image/*"
            />
          </label>
        </div>

        {loading ? (
          <p>Loading gallery...</p>
        ) : (
          <div className="row g-3">
            {photos.map((photo) => (
              <div key={photo.id} className="col-md-3 col-sm-6">
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={photo.image}
                    className="card-img-top object-fit-cover"
                    style={{ height: "180px" }}
                    alt="Gallery"
                  />
                  <div className="card-body p-2 d-flex justify-content-between align-items-center">
                    <small
                      className="text-muted text-truncate"
                      style={{ maxWidth: "100px" }}
                    >
                      ID: {photo.id}
                    </small>
                    <button
                      onClick={() => handleDelete(photo.id)}
                      className="btn btn-sm btn-outline-danger border-0"
                    >
                      <i className="fa-light fa-trash"></i> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && photos.length === 0 && (
          <div className="text-center py-5 bg-white rounded">
            <p className="text-muted">No photos found. Please upload some!</p>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default withAuth(ManageGallery);
