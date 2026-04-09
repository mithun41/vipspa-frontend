"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../../components/AdminLayout";
import withAuth from "../../components/withAuth";

const ManageHomeSection = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState({ type: "", msg: "" }); // এরর হ্যান্ডলিং স্টেট

  const initialFormState = {
    id: null,
    title: "",
    subtitle: "",
    description: "",
    button_text: "Know More",
    button_url: "",
    extra_field: "",
    image: null,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isEditing, setIsEditing] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const API_URL = "https://vipspa.pythonanywhere.com/api/vipspa/home-sections/";

  // মেসেজ অটোমেটিক মুছে ফেলার ফাংশন
  const showAlert = (type, msg) => {
    setStatus({ type, msg });
    setTimeout(() => setStatus({ type: "", msg: "" }), 5000); // ৫ সেকেন্ড পর মুছে যাবে
  };

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      const res = await axios.get(API_URL);
      setSections(res.data);
    } catch (err) {
      showAlert("danger", "Failed to load sections. Is the server running?");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
      setImagePreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");

    if (!token) {
      showAlert("danger", "Session expired. Please login again.");
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "image" && formData[key] === null) return;
      if (formData[key] !== null && key !== "id") {
        data.append(key, formData[key]);
      }
    });

    const url = isEditing ? `${API_URL}${formData.id}/` : API_URL;
    const method = isEditing ? "PATCH" : "POST";

    try {
      const res = await axios({
        method: method,
        url: url,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200 || res.status === 201) {
        showAlert(
          "success",
          isEditing
            ? "Section updated successfully!"
            : "New section added successfully!",
        );
        resetForm();
        fetchSections();
      }
    } catch (err) {
      const errorMsg =
        err.response?.data?.message ||
        "Something went wrong! Please check your inputs.";
      showAlert("danger", errorMsg);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this section?")) return;
    const token = localStorage.getItem("adminToken");
    try {
      await axios.delete(`${API_URL}${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      showAlert("success", "Section deleted successfully!");
      fetchSections();
    } catch (err) {
      showAlert("danger", "Delete failed! You might not have permission.");
    }
  };

  const handleEditClick = (s) => {
    setIsEditing(true);
    setFormData({
      id: s.id,
      title: s.title || "",
      subtitle: s.subtitle || "",
      description: s.description || "",
      button_text: s.button_text || "",
      button_url: s.button_url || "",
      extra_field: s.extra_field || "",
      image: null,
    });
    setImagePreview(s.image);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setImagePreview(null);
    setIsEditing(false);
  };

  return (
    <AdminLayout>
      <div
        className="container-fluid py-4"
        style={{ background: "#f8f9fa", minHeight: "100vh" }}
      >
        {/* Floating Alert Messages */}
        {status.msg && (
          <div
            className={`alert alert-${status.type} alert-dismissible fade show shadow`}
            role="alert"
            style={{
              position: "fixed",
              top: "20px",
              right: "20px",
              zIndex: 9999,
              minWidth: "300px",
            }}
          >
            <strong>
              {status.type === "success" ? "✅ Success" : "❌ Error"}:
            </strong>{" "}
            {status.msg}
            <button
              type="button"
              className="btn-close"
              onClick={() => setStatus({ type: "", msg: "" })}
            ></button>
          </div>
        )}

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 style={{ fontWeight: "700", color: "#1a202c" }}>
            Manage Home Sections
          </h2>
        </div>

        {/* Form Card */}
        <div
          className="card border-0 shadow-sm mb-5 p-4"
          style={{ borderRadius: "15px" }}
        >
          <h5 className="mb-4" style={{ color: "#4f46e5", fontWeight: "600" }}>
            {isEditing ? "📝 Edit Home Section" : "➕ Add New Section"}
          </h5>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label fw-bold">Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Subtitle</label>
                <input
                  type="text"
                  name="subtitle"
                  className="form-control"
                  value={formData.subtitle}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label className="form-label fw-bold">Description</label>
                <textarea
                  name="description"
                  className="form-control"
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="col-md-4">
                <label className="form-label fw-bold">Button Text</label>
                <input
                  type="text"
                  name="button_text"
                  className="form-control"
                  value={formData.button_text}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label fw-bold">Button URL</label>
                <input
                  type="text"
                  name="button_url"
                  className="form-control"
                  value={formData.button_url}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label fw-bold">Extra Field</label>
                <input
                  type="text"
                  name="extra_field"
                  className="form-control"
                  value={formData.extra_field}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Section Image</label>
                <input
                  type="file"
                  name="image"
                  className="form-control"
                  onChange={handleChange}
                />
                {imagePreview && (
                  <div className="mt-2">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      style={{
                        width: "120px",
                        height: "70px",
                        borderRadius: "8px",
                        objectFit: "cover",
                        border: "1px solid #ddd",
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="col-12 mt-4 text-end">
                {isEditing && (
                  <button
                    type="button"
                    className="btn btn-light me-2 px-4"
                    onClick={resetForm}
                  >
                    Cancel
                  </button>
                )}
                <button
                  type="submit"
                  className={`btn ${isEditing ? "btn-success" : "btn-primary"} px-5 fw-bold`}
                >
                  {isEditing ? "Update Changes" : "Save Section"}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Table Card */}
        <div
          className="card border-0 shadow-sm p-4"
          style={{ borderRadius: "15px" }}
        >
          <h5 className="mb-4 fw-bold">Active Content</h5>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead className="table-light">
                <tr>
                  <th>Image</th>
                  <th>Content Info</th>
                  <th>Description</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="4" className="text-center py-5">
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      ></div>
                    </td>
                  </tr>
                ) : sections.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center py-4">
                      No data found.
                    </td>
                  </tr>
                ) : (
                  sections.map((s) => (
                    <tr key={s.id}>
                      <td>
                        <img
                          src={s.image}
                          alt="section"
                          style={{
                            width: "70px",
                            height: "45px",
                            objectFit: "cover",
                            borderRadius: "6px",
                          }}
                        />
                      </td>
                      <td>
                        <div className="fw-bold" style={{ fontSize: "14px" }}>
                          {s.title}
                        </div>
                        <small className="text-muted">{s.subtitle}</small>
                      </td>
                      <td>
                        <div style={{ fontSize: "12px", maxWidth: "250px" }}>
                          {s.description?.substring(0, 70)}...
                        </div>
                      </td>
                      <td className="text-end">
                        <button
                          className="btn btn-sm btn-outline-primary me-2"
                          onClick={() => handleEditClick(s)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(s.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style jsx>{`
        .alert {
          animation: slideIn 0.5s ease-out;
        }
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </AdminLayout>
  );
};

export default withAuth(ManageHomeSection);
