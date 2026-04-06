import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import withAuth from "../../components/withAuth";

const ManageHero = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialFormState = {
    id: null,
    stroke_text: "",
    title: "",
    description: "",
    button_text: "Call Now",
    button_link: "",
    order: 0,
    background_image: null,
    main_image: null,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isEditing, setIsEditing] = useState(false);
  const [bgPreview, setBgPreview] = useState(null);
  const [mainPreview, setMainPreview] = useState(null);

  useEffect(() => {
    fetchHeroData();
  }, []);

  // 1. Fetch Hero Slides
  const fetchHeroData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/vipspa/homepage/");
      const data = await res.json();
      if (data.hero && data.hero.slides) {
        setSlides(data.hero.slides);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // 2. Add or Update Slide
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");
    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && key !== "id") {
        data.append(key, formData[key]);
      }
    });

    const url = isEditing
      ? `http://127.0.0.1:8000/api/vipspa/hero-slides/${formData.id}/`
      : `http://127.0.0.1:8000/api/vipspa/hero-slides/`;

    try {
      const res = await fetch(url, {
        method: isEditing ? "PUT" : "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      });

      if (res.ok) {
        alert(isEditing ? "Slide Updated!" : "New Slide Added!");
        resetForm();
        fetchHeroData();
      } else {
        alert("Action failed. Please check inputs.");
      }
    } catch (err) {
      alert("Server Error!");
    }
  };

  // 3. Delete Slide
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this slide?")) return;
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/vipspa/hero-slides/${id}/`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (res.ok) {
        alert("Deleted Successfully!");
        fetchHeroData();
      }
    } catch (err) {
      alert("Delete failed!");
    }
  };

  const handleEditClick = (s) => {
    setIsEditing(true);
    setFormData({
      id: s.id,
      stroke_text: s.stroke_text || "",
      title: s.title || "",
      description: s.description || "",
      button_text: s.button_text || "",
      button_link: s.button_link || "",
      order: s.order || 0,
      background_image: null,
      main_image: null,
    });
    setBgPreview(s.background_image);
    setMainPreview(s.main_image);
    window.scrollTo(0, 0);
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setBgPreview(null);
    setMainPreview(null);
    setIsEditing(false);
  };

  return (
    <AdminLayout>
      <div className="container-fluid py-4">
        <div className="row">
          {/* Form Side */}
          <div className="col-md-4">
            <div
              className="card shadow-sm border-0 p-4 sticky-top"
              style={{ top: "20px" }}
            >
              <h5 className="fw-bold mb-3">
                {isEditing ? "📝 Edit Slide" : "➕ Add New Slide"}
              </h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label className="small fw-bold">Stroke Text</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={formData.stroke_text}
                    onChange={(e) =>
                      setFormData({ ...formData, stroke_text: e.target.value })
                    }
                  />
                </div>
                <div className="mb-2">
                  <label className="small fw-bold">Main Title</label>
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
                  <label className="small fw-bold">Description</label>
                  <textarea
                    rows="2"
                    className="form-control form-control-sm"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </div>
                <div className="row">
                  <div className="col-6 mb-2">
                    <label className="small fw-bold">Button Text</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      value={formData.button_text}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          button_text: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-6 mb-2">
                    <label className="small fw-bold">Order</label>
                    <input
                      type="number"
                      className="form-control form-control-sm"
                      value={formData.order}
                      onChange={(e) =>
                        setFormData({ ...formData, order: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label className="small fw-bold">Background (Full)</label>
                  <input
                    type="file"
                    className="form-control form-control-sm"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setFormData({ ...formData, background_image: file });
                        setBgPreview(URL.createObjectURL(file));
                      }
                    }}
                  />
                  {bgPreview && (
                    <img
                      src={bgPreview}
                      className="mt-1 rounded border"
                      style={{
                        height: "40px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>

                <div className="mb-3">
                  <label className="small fw-bold">Main Image (Floating)</label>
                  <input
                    type="file"
                    className="form-control form-control-sm"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setFormData({ ...formData, main_image: file });
                        setMainPreview(URL.createObjectURL(file));
                      }
                    }}
                  />
                  {mainPreview && (
                    <img
                      src={mainPreview}
                      className="mt-1 rounded border"
                      style={{ height: "40px", objectFit: "contain" }}
                    />
                  )}
                </div>

                <button
                  type="submit"
                  className={`btn w-100 fw-bold ${isEditing ? "btn-primary" : "btn-success"}`}
                >
                  {isEditing ? "Update Slide" : "Save Slide"}
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

          {/* Table Side */}
          <div className="col-md-8">
            <div className="card shadow-sm border-0 p-3 bg-white">
              <h5 className="fw-bold mb-3">Hero Slider List</h5>
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>Images</th>
                      <th>Content</th>
                      <th>Order</th>
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
                      slides.map((s) => (
                        <tr key={s.id}>
                          <td>
                            <div className="d-flex gap-1">
                              <img
                                src={s.background_image}
                                title="Background"
                                style={{
                                  width: "50px",
                                  height: "30px",
                                  objectFit: "cover",
                                  borderRadius: "4px",
                                }}
                              />
                              <img
                                src={s.main_image}
                                title="Main Image"
                                style={{
                                  width: "30px",
                                  height: "30px",
                                  objectFit: "contain",
                                  background: "#eee",
                                  borderRadius: "4px",
                                }}
                              />
                            </div>
                          </td>
                          <td>
                            <div className="small fw-bold">{s.title}</div>
                            <div
                              className="text-muted"
                              style={{ fontSize: "11px" }}
                            >
                              {s.stroke_text}
                            </div>
                          </td>
                          <td>{s.order}</td>
                          <td className="text-end">
                            <button
                              onClick={() => handleEditClick(s)}
                              className="btn btn-sm btn-outline-primary me-2"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(s.id)}
                              className="btn btn-sm btn-outline-danger"
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
        </div>
      </div>
    </AdminLayout>
  );
};

export default withAuth(ManageHero);
