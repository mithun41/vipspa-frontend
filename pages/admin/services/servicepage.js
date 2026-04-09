"use client";
import { useState, useEffect } from "react";
import AdminLayout from "../../../components/AdminLayout";
import withAuth from "../../../components/withAuth";

const BASE_URL = "https://vipspa.pythonanywhere.com/api/vipspa/service-items/";

function ServiceAdmin() {
  const [services, setServices] = useState({
    general_services: [],
    top_services: [],
  });
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    description: "",
    service_type: "general",
    is_active: true,
    icon_image: null,
    duration: "",
    category: 1,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [preview, setPreview] = useState(null);

  // ১. ডাটা ফেচ করা (ManageBlogs এর স্টাইলে)
  const fetchServices = async () => {
    try {
      const token = localStorage.getItem("adminToken"); // টোকেন নিন

      const res = await fetch(
        "https://vipspa.pythonanywhere.com/api/vipspa/service-items/",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // টোকেন পাঠাতে হবে
            "Content-Type": "application/json",
          },
        },
      );

      if (res.status === 401) {
        alert("login session expired. Please login again.");
        return;
      }

      const data = await res.json();

      // ডাটা ফরম্যাট ঠিক করা (ModelViewSet এখন সরাসরি অ্যারে দেয়)
      if (Array.isArray(data)) {
        const general = data.filter((s) => s.service_type === "general");
        const top = data.filter((s) => s.service_type === "top");
        setServices({ general_services: general, top_services: top });
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // ২. সেভ বা আপডেট (Submit Handler)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken"); // আপনার ব্লগে এই নামেই আছে
    const data = new FormData();

    data.append("title", formData.title);
    data.append("description", formData.description || "");
    data.append("service_type", formData.service_type);
    data.append("is_active", formData.is_active);
    data.append("duration", formData.duration || "");
    data.append("category", formData.category || 1);

    if (formData.icon_image instanceof File) {
      data.append("icon_image", formData.icon_image);
    }

    const url = isEditing ? `${BASE_URL}${formData.id}/` : BASE_URL;
    const method = isEditing ? "PATCH" : "POST"; // ফাইল আপলোডে PATCH বেশি সেফ

    try {
      const res = await fetch(url, {
        method: method,
        headers: {
          Authorization: `Bearer ${token}`,
          // নোট: FormData পাঠালে Content-Type হেডার দিতে হয় না, ব্রাউজার নিজে সেট করে নেয়
        },
        body: data,
      });

      if (res.ok) {
        alert(
          isEditing
            ? "Update successfully!"
            : "New service created successfully!",
        );
        resetForm();
        fetchServices();
      } else {
        const errorData = await res.json();
        console.error("Server Error:", errorData);
        alert("ঝামেলা হয়েছে! কনসোল চেক করেন।");
      }
    } catch (err) {
      alert("সার্ভারের সাথে কানেক্ট করা যাচ্ছে না!");
    }
  };

  // ৩. ডিলিট করা
  const handleDelete = async (id) => {
    if (!confirm("মামা, ডিলিট করে দিব?")) return;
    const token = localStorage.getItem("adminToken");

    try {
      const res = await fetch(`${BASE_URL}${id}/`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        fetchServices();
        alert("সফলভাবে ডিলিট হয়েছে!");
      }
    } catch (err) {
      alert("Delete failed!");
    }
  };

  // ৪. এডিট মোড সেট করা
  const handleEditClick = (service) => {
    setIsEditing(true);
    setFormData({
      ...service,
      icon_image: null,
    });
    setPreview(service.icon_image);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setFormData({
      id: null,
      title: "",
      description: "",
      service_type: "general",
      is_active: true,
      icon_image: null,
      duration: "",
      category: 1,
    });
    setPreview(null);
    setIsEditing(false);
  };

  return (
    <AdminLayout>
      <div className="container-fluid py-4">
        <h3 className="mb-4 fw-bold">
          {isEditing ? "📝 Edit Service" : "✨ Add New Service"}
        </h3>

        <div className="row">
          {/* LEFT SIDE: FORM */}
          <div className="col-md-4">
            <div
              className="card shadow-sm border-0 p-4 sticky-top"
              style={{ top: "20px" }}
            >
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="small fw-bold">Service Title</label>
                  <input
                    className="form-control"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="small fw-bold">Service Type</label>
                  <select
                    className="form-select"
                    value={formData.service_type}
                    onChange={(e) =>
                      setFormData({ ...formData, service_type: e.target.value })
                    }
                  >
                    <option value="general">General (Section 7)</option>
                    <option value="top">Top (Section 3)</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="small fw-bold">Duration</label>
                  <input
                    className="form-control"
                    value={formData.duration}
                    onChange={(e) =>
                      setFormData({ ...formData, duration: e.target.value })
                    }
                    placeholder="e.g. 1 hr"
                  />
                </div>
                <div className="mb-3">
                  <label className="small fw-bold">Description</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="small fw-bold">Icon/Image</label>
                  <input
                    type="file"
                    className="form-control mb-2"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setFormData({ ...formData, icon_image: file });
                        setPreview(URL.createObjectURL(file));
                      }
                    }}
                  />
                  {preview && (
                    <img
                      src={preview}
                      className="rounded border mt-2"
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                      }}
                      alt="preview"
                    />
                  )}
                </div>
                <div className="form-check form-switch mb-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={formData.is_active}
                    onChange={(e) =>
                      setFormData({ ...formData, is_active: e.target.checked })
                    }
                    id="activeCheck"
                  />
                  <label
                    className="form-check-label small fw-bold"
                    htmlFor="activeCheck"
                  >
                    Show on Website
                  </label>
                </div>
                <button
                  type="submit"
                  className={`btn w-100 fw-bold ${isEditing ? "btn-primary" : "btn-warning"}`}
                >
                  {isEditing ? "UPDATE SERVICE" : "PUBLISH SERVICE"}
                </button>
                {isEditing && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="btn btn-link w-100 text-muted mt-2"
                  >
                    Cancel
                  </button>
                )}
              </form>
            </div>
          </div>

          {/* RIGHT SIDE: LISTS */}
          <div className="col-md-8">
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-header bg-white py-3">
                <h6 className="mb-0 fw-bold text-primary">⭐ TOP SERVICES</h6>
              </div>
              <ServiceListTable
                list={services.top_services}
                onEdit={handleEditClick}
                onDelete={handleDelete}
                loading={loading}
              />
            </div>
            <div className="card shadow-sm border-0">
              <div className="card-header bg-white py-3">
                <h6 className="mb-0 fw-bold text-info">📂 GENERAL SERVICES</h6>
              </div>
              <ServiceListTable
                list={services.general_services}
                onEdit={handleEditClick}
                onDelete={handleDelete}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

const ServiceListTable = ({ list, onEdit, onDelete, loading }) => (
  <div className="table-responsive">
    <table className="table table-hover align-middle mb-0">
      <thead className="bg-light">
        <tr className="small text-muted">
          <th className="ps-4">INFO</th>
          <th className="text-end pe-4">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td colSpan="2" className="text-center py-4">
              Loading...
            </td>
          </tr>
        ) : (
          list?.map((s) => (
            <tr key={s.id}>
              <td className="ps-4">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={s.icon_image}
                    className="rounded border bg-light"
                    style={{
                      width: "45px",
                      height: "45px",
                      objectFit: "contain",
                    }}
                    alt=""
                  />
                  <div>
                    <div className="fw-bold">{s.title}</div>
                    <small className="text-muted">{s.duration || "N/A"}</small>
                  </div>
                </div>
              </td>
              <td className="text-end pe-4">
                <div className="btn-group shadow-sm">
                  <button
                    onClick={() => onEdit(s)}
                    className="btn btn-sm btn-outline-primary"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(s.id)}
                    className="btn btn-sm btn-outline-danger"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

export default withAuth(ServiceAdmin);
