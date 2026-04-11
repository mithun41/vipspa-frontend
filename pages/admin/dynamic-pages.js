import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import withAuth from "../../components/withAuth";
import axios from "axios";

const ManagePages = () => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialFormState = {
    id: null,
    title: "",
    subtitle: "",
    slug: "",
    content: "",
    bottom_content: "",
    meta_title: "",
    meta_description: "",
    is_active: true,
    banner_image: null,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isEditing, setIsEditing] = useState(false);
  const [preview, setPreview] = useState(null);

  const API_URL = "https://vipspa.pythonanywhere.com/api/vipspa/pages/";

  useEffect(() => {
    fetchPages();
  }, []);

  // 1. Fetch All Pages
  const fetchPages = async () => {
    try {
      const res = await axios.get(API_URL);
      setPages(res.data);
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // 2. Add or Update Page
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken"); // নিশ্চিত হোন এই কী-তে টোকেন আছে কি না

    // টোকেন না থাকলে প্রথমেই আটকে দিন
    if (!token) {
      alert("মামা, আপনি তো লগইন করা নাই! আগে লগইন করেন।");
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && key !== "id") {
        data.append(key, formData[key]);
      }
    });

    // Axios এর কনফিগারেশন (Header সহ)
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      if (isEditing) {
        await axios.put(`${API_URL}${formData.slug}/`, data, config);
        alert("Page Updated!");
      } else {
        await axios.post(API_URL, data, config);
        alert("New Page Created!");
      }
      resetForm();
      fetchPages();
    } catch (err) {
      console.error(err.response?.data); // ব্রাউজার কনসোলে আসল ভুলটা দেখতে পাবেন
      if (err.response?.status === 401) {
        alert("সেশন শেষ হয়ে গেছে, আবার লগইন করুন মামা!");
      } else {
        alert("Action failed! স্লাগ (Slug) কি আগে ব্যবহার করা হয়েছে?");
      }
    }
  };
  // 3. Delete Page
  const handleDelete = async (slug) => {
    if (!confirm("Are you sure you want to delete this page?")) return;
    const token = localStorage.getItem("adminToken");
    try {
      await axios.delete(`${API_URL}${slug}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Deleted Successfully!");
      fetchPages();
    } catch (err) {
      alert("Delete failed!");
    }
  };

  const handleEditClick = (p) => {
    setIsEditing(true);
    setFormData({
      ...p,
      banner_image: null, // ইমেজ নতুন করে আপলোড না করলে নাল থাকবে
    });
    setPreview(p.banner_image);
    window.scrollTo(0, 0);
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setPreview(null);
    setIsEditing(false);
  };

  return (
    <AdminLayout>
      <div className="container-fluid py-4">
        <div className="row">
          {/* Form Side - Left */}
          <div className="col-md-5">
            <div
              className="card shadow-sm border-0 p-4 sticky-top"
              style={{ top: "20px" }}
            >
              <h5 className="fw-bold mb-3">
                {isEditing ? "📝 Edit Page" : "➕ Create New Page"}
              </h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label className="small fw-bold">Page Title</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-2">
                  <label className="small fw-bold">Subtitle</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={formData.subtitle || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, subtitle: e.target.value })
                    }
                  />
                </div>

                {!isEditing && (
                  <div className="mb-2">
                    <label className="small fw-bold">Slug (URL Name)</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="e.g. privacy-policy"
                      value={formData.slug}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          slug: e.target.value.toLowerCase().replace(/ /g, "-"),
                        })
                      }
                      required
                    />
                  </div>
                )}

                <div className="mb-2">
                  <label className="small fw-bold">Main Content</label>
                  <textarea
                    rows="4"
                    className="form-control form-control-sm"
                    value={formData.content}
                    onChange={(e) =>
                      setFormData({ ...formData, content: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-2">
                  <label className="small fw-bold">
                    Bottom Content (After Image)
                  </label>
                  <textarea
                    rows="2"
                    className="form-control form-control-sm"
                    value={formData.bottom_content || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        bottom_content: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="mb-2">
                  <label className="small fw-bold">Page Image</label>
                  <input
                    type="file"
                    className="form-control form-control-sm"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setFormData({ ...formData, banner_image: file });
                        setPreview(URL.createObjectURL(file));
                      }
                    }}
                  />
                  {preview && (
                    <img
                      src={preview}
                      className="mt-2 rounded border"
                      style={{
                        height: "60px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>

                <div className="row bg-light p-2 rounded mb-3">
                  <p className="small fw-bold mb-1">SEO Tags</p>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Meta Title"
                      value={formData.meta_title || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, meta_title: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-6">
                    <textarea
                      className="form-control form-control-sm"
                      placeholder="Meta Description"
                      rows="1"
                      value={formData.meta_description || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          meta_description: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={formData.is_active}
                    onChange={(e) =>
                      setFormData({ ...formData, is_active: e.target.checked })
                    }
                    id="isActive"
                  />
                  <label className="form-check-label small" htmlFor="isActive">
                    Published
                  </label>
                </div>

                <button
                  type="submit"
                  className={`btn w-100 fw-bold ${isEditing ? "btn-primary" : "btn-success"}`}
                >
                  {isEditing ? "Update Page" : "Save Page"}
                </button>
                {isEditing && (
                  <button
                    type="button"
                    className="btn btn-link w-100 text-danger mt-1 text-decoration-none"
                    onClick={resetForm}
                  >
                    Cancel
                  </button>
                )}
              </form>
            </div>
          </div>

          {/* Table Side - Right */}
          <div className="col-md-7">
            <div className="card shadow-sm border-0 p-3 bg-white">
              <h5 className="fw-bold mb-3">Existing Dynamic Pages</h5>
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>Title</th>
                      <th>Slug</th>
                      <th>Status</th>
                      <th className="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan="4" className="text-center">
                          Loading...
                        </td>
                      </tr>
                    ) : (
                      pages.map((p) => (
                        <tr key={p.id}>
                          <td>
                            <div className="fw-bold small">{p.title}</div>
                            <div
                              className="text-muted"
                              style={{ fontSize: "10px" }}
                            >
                              {p.subtitle?.substring(0, 30)}...
                            </div>
                          </td>
                          <td>
                            <code style={{ fontSize: "11px" }}>/{p.slug}</code>
                          </td>
                          <td>
                            {p.is_active ? (
                              <span
                                className="badge bg-success"
                                style={{ fontSize: "10px" }}
                              >
                                Active
                              </span>
                            ) : (
                              <span
                                className="badge bg-secondary"
                                style={{ fontSize: "10px" }}
                              >
                                Draft
                              </span>
                            )}
                          </td>
                          <td className="text-end">
                            <button
                              onClick={() => handleEditClick(p)}
                              className="btn btn-sm btn-outline-primary me-1"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(p.slug)}
                              className="btn btn-sm btn-outline-danger"
                            >
                              Del
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
        </div>
      </div>
    </AdminLayout>
  );
};

export default withAuth(ManagePages);
