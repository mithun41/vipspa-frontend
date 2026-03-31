import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import withAuth from "../../components/withAuth";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [sectionInfo, setSectionInfo] = useState({ id: null, subtitle: "", title: "", description: "" });
  const [loading, setLoading] = useState(true);

  const initialFormState = { 
    id: null, 
    title: "", 
    description: "", 
    icon_image: null, 
    background_image: null, 
    order: 0 
  };
  
  const [formData, setFormData] = useState(initialFormState);
  const [isEditing, setIsEditing] = useState(false);
  const [iconPreview, setIconPreview] = useState(null);
  const [bgPreview, setBgPreview] = useState(null);

  useEffect(() => { fetchServices(); }, []);

  const fetchServices = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/vipspa/homepage/");
      const data = await res.json();
      
      if (data.services) {
        setServices(data.services.items || []);
        if (data.services.section_info) {
          const info = data.services.section_info;
          setSectionInfo({
            id: info.id || 1, 
            subtitle: info.subtitle || "",
            title: info.title || "",
            description: info.description || ""
          });
        }
      }
    } catch (err) { 
      console.error("Fetch Error:", err); 
    } finally { 
      setLoading(false); 
    }
  };

  const handleSectionUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");
    const url = `http://127.0.0.1:8000/api/vipspa/service-sections/${sectionInfo.id}/`;

    try {
      const res = await fetch(url, {
        method: "PATCH",
        headers: { 
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          subtitle: sectionInfo.subtitle,
          title: sectionInfo.title,
          description: sectionInfo.description
        }),
      });

      if (res.ok) {
        alert("Header Updated Successfully!");
        fetchServices();
      } else {
        alert("Header Update Failed!");
      }
    } catch (err) { alert("Network Error!"); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description || "");
    data.append("order", formData.order || 0);
    
    if (formData.icon_image instanceof File) {
      data.append("icon_image", formData.icon_image);
    }
    if (formData.background_image instanceof File) {
      data.append("background_image", formData.background_image);
    }

    const url = isEditing 
      ? `http://127.0.0.1:8000/api/vipspa/services/${formData.id}/` 
      : `http://127.0.0.1:8000/api/vipspa/services/`;

    try {
      const res = await fetch(url, {
          method: isEditing ? "PUT" : "POST",
          headers: { "Authorization": `Bearer ${token}` },
          body: data,
      });

      if (res.ok) {
        alert(isEditing ? "Updated Successfully!" : "Added Successfully!");
        resetForm();
        fetchServices();
      } else {
        alert("Failed to save data!");
      }
    } catch (err) { alert("Server Error!"); }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/vipspa/services/${id}/`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` },
      });
      if (res.ok) {
        alert("Deleted Successfully!");
        fetchServices();
      }
    } catch (err) { alert("Delete failed!"); }
  };

  const handleEditClick = (s) => {
    setIsEditing(true);
    setFormData({
      id: s.id,
      title: s.title,
      description: s.description || "",
      order: s.order || 0,
      icon_image: null,
      background_image: null
    });
    setIconPreview(s.icon_image || s.icon);
    setBgPreview(s.background_image);
    window.scrollTo(0, 0);
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setIconPreview(null);
    setBgPreview(null);
    setIsEditing(false);
  };

  return (
    <AdminLayout>
      <div className="container-fluid py-4">
        {/* Header Config */}
        <div className="card shadow-sm border-0 p-4 mb-4 bg-white border-start border-primary border-5">
          <h5 className="fw-bold mb-3 text-primary text-uppercase small">Section Header Info</h5>
          <form onSubmit={handleSectionUpdate} className="row g-3">
            <div className="col-md-3">
              <label className="small fw-bold text-muted">Subtitle</label>
              <input type="text" className="form-control" value={sectionInfo.subtitle} onChange={e => setSectionInfo({...sectionInfo, subtitle: e.target.value})} />
            </div>
            <div className="col-md-3">
              <label className="small fw-bold text-muted">Title</label>
              <input type="text" className="form-control" value={sectionInfo.title} onChange={e => setSectionInfo({...sectionInfo, title: e.target.value})} />
            </div>
            <div className="col-md-4">
              <label className="small fw-bold text-muted">Description</label>
              <textarea rows="1" className="form-control" value={sectionInfo.description} onChange={e => setSectionInfo({...sectionInfo, description: e.target.value})} />
            </div>
            <div className="col-md-2 d-flex align-items-end">
              <button type="submit" className="btn btn-primary w-100 fw-bold">Update Header</button>
            </div>
          </form>
        </div>

        <div className="row">
          {/* Form Side */}
          <div className="col-md-4">
            <div className="card shadow-sm border-0 p-4 sticky-top" style={{ top: "20px" }}>
              <h5 className="fw-bold mb-4">{isEditing ? "Edit Service" : "Add Service"}</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="small fw-bold">Title</label>
                  <input type="text" className="form-control" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
                </div>
                
                <div className="mb-3">
                  <label className="small fw-bold">Icon Image</label>
                  <input type="file" className="form-control" onChange={e => {
                    const file = e.target.files[0];
                    if(file) {
                      setFormData({...formData, icon_image: file});
                      setIconPreview(URL.createObjectURL(file));
                    }
                  }} accept="image/*" />
                  {iconPreview && <img src={iconPreview} alt="" className="mt-2 rounded border" style={{ width: "50px", height: "50px", objectFit: "cover" }} />}
                </div>

                <div className="mb-3">
                  <label className="small fw-bold">Background Image</label>
                  <input type="file" className="form-control" onChange={e => {
                    const file = e.target.files[0];
                    if(file) {
                      setFormData({...formData, background_image: file});
                      setBgPreview(URL.createObjectURL(file));
                    }
                  }} accept="image/*" />
                  {bgPreview && <img src={bgPreview} alt="" className="mt-2 rounded border w-100" style={{ height: "80px", objectFit: "cover" }} />}
                </div>

                <div className="mb-3">
                  <label className="small fw-bold">Order</label>
                  <input type="number" className="form-control" value={formData.order} onChange={(e) => setFormData({ ...formData, order: e.target.value })} />
                </div>

                <button type="submit" className={`btn w-100 fw-bold ${isEditing ? "btn-warning text-white" : "btn-success"}`}>
                   {isEditing ? "Update Now" : "Save Service"}
                </button>
                {isEditing && <button type="button" className="btn btn-link w-100 text-danger mt-1 text-decoration-none" onClick={resetForm}>Cancel Edit</button>}
              </form>
            </div>
          </div>

          {/* Table Side */}
          <div className="col-md-8">
            <div className="card shadow-sm border-0">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Media</th>
                      <th>Service Name</th>
                      <th>Order</th>
                      <th className="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((s) => (
                      <tr key={s.id}>
                        <td>
                          <div className="d-flex gap-2">
                            <img src={s.icon_image || s.icon} alt="icon" title="Icon" style={{ width: "35px", height: "35px", objectFit: "contain", background: "#f8f9fa", borderRadius: "5px" }} />
                            {s.background_image && <img src={s.background_image} alt="bg" title="Background" style={{ width: "35px", height: "35px", objectFit: "cover", borderRadius: "5px" }} />}
                          </div>
                        </td>
                        <td className="fw-bold">{s.title}</td>
                        <td>{s.order}</td>
                        <td className="text-end">
                          <button onClick={() => handleEditClick(s)} className="btn btn-sm btn-outline-primary me-2">Edit</button>
                          <button onClick={() => handleDelete(s.id)} className="btn btn-sm btn-outline-danger">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default withAuth(ManageServices);