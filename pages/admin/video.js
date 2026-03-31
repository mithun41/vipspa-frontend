import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import withAuth from "../../components/withAuth";

const ManageVideoSection = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    id: 1,
    title: "",
    button_text: "",
    button_link: "",
    video_url: "",
    background_image: null,
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => { fetchVideoData(); }, []);

  // 1. Fetch Data
  const fetchVideoData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/vipspa/homepage/");
      const data = await res.json();
      
      if (data.video) {
        const v = data.video;
        setFormData({
          ...formData,
          id: v.id || 1,
          title: v.title || "",
          button_text: v.button_text || "",
          button_link: v.button_link || "",
          video_url: v.video_url || "",
        });
        setPreview(v.background_image);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // 2. Handle Update
  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");
    const data = new FormData();

    data.append("title", formData.title);
    data.append("button_text", formData.button_text);
    data.append("button_link", formData.button_link);
    data.append("video_url", formData.video_url);
    
    if (formData.background_image instanceof File) {
      data.append("background_image", formData.background_image);
    }

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/vipspa/video-sections/${formData.id}/`, {
        method: "PATCH",
        headers: { "Authorization": `Bearer ${token}` },
        body: data,
      });

      if (res.ok) {
        alert("Video Section Updated Successfully!");
        fetchVideoData();
      } else {
        alert("Failed to update section!");
      }
    } catch (err) {
      alert("Network Error!");
    }
  };

  if (loading) return <AdminLayout><div className="p-5 text-center">Loading...</div></AdminLayout>;

  return (
    <AdminLayout>
      <div className="container-fluid py-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm border-0 p-4 bg-white border-top border-danger border-5">
              <h4 className="fw-bold mb-4 text-danger text-uppercase">Video Section Management</h4>
              
              <form onSubmit={handleUpdate}>
                <div className="mb-3">
                  <label className="small fw-bold text-muted text-uppercase">Section Title</label>
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    value={formData.title} 
                    onChange={e => setFormData({...formData, title: e.target.value})} 
                    required 
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="small fw-bold text-muted text-uppercase">Button Text</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={formData.button_text} 
                      onChange={e => setFormData({...formData, button_text: e.target.value})} 
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="small fw-bold text-muted text-uppercase">Button Link (Phone/URL)</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={formData.button_link} 
                      onChange={e => setFormData({...formData, button_link: e.target.value})} 
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="small fw-bold text-muted text-uppercase">YouTube Video URL</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="https://youtu.be/..."
                    value={formData.video_url} 
                    onChange={e => setFormData({...formData, video_url: e.target.value})} 
                  />
                </div>

                <div className="mb-4">
                  <label className="small fw-bold text-muted text-uppercase">Background Image</label>
                  <input 
                    type="file" 
                    className="form-control mb-3" 
                    onChange={e => {
                      const file = e.target.files[0];
                      if(file) {
                        setFormData({...formData, background_image: file});
                        setPreview(URL.createObjectURL(file));
                      }
                    }} 
                    accept="image/*" 
                  />
                  
                  {preview && (
                    <div className="position-relative rounded overflow-hidden shadow-sm" style={{ height: "200px" }}>
                      <img 
                        src={preview} 
                        alt="Background Preview" 
                        className="w-100 h-100" 
                        style={{ objectFit: "cover" }} 
                      />
                      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
                        <i className="bi bi-play-circle-fill text-white fs-1"></i>
                      </div>
                    </div>
                  )}
                </div>

                <button type="submit" className="btn btn-danger btn-lg w-100 fw-bold shadow-sm">
                  UPDATE VIDEO SECTION
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default withAuth(ManageVideoSection);