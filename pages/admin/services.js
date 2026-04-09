import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import withAuth from "../../components/withAuth";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialFormState = {
    id: null,
    title: "",
    short_description: "",
    long_description: "",
    service_overview: "",
    faq_data: [{ q: "", a: "" }], // FAQ-er structure
    order: 0,
    is_active: true,
    icon: null,
    background_image: null,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isEditing, setIsEditing] = useState(false);
  const [iconPreview, setIconPreview] = useState(null);
  const [bgPreview, setBgPreview] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await fetch(
        "https://vipspa.pythonanywhere.com/api/vipspa/services/",
      );
      const data = await res.json();
      setServices(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // --- FAQ Handlers ---
  const handleFaqChange = (index, field, value) => {
    const updatedFaqs = [...formData.faq_data];
    updatedFaqs[index][field] = value;
    setFormData({ ...formData, faq_data: updatedFaqs });
  };

  const addFaqField = () => {
    setFormData({
      ...formData,
      faq_data: [...formData.faq_data, { q: "", a: "" }],
    });
  };

  const removeFaqField = (index) => {
    const updatedFaqs = formData.faq_data.filter((_, i) => i !== index);
    setFormData({ ...formData, faq_data: updatedFaqs });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");
    const data = new FormData();

    data.append("title", formData.title);
    data.append("short_description", formData.short_description || "");
    data.append("long_description", formData.long_description || "");
    data.append("service_overview", formData.service_overview || "");
    data.append("order", formData.order);
    data.append("is_active", formData.is_active);

    // JSONField ke stringify kore pathate hobe jate Django JSONField-e receive kore
    data.append("faq_data", JSON.stringify(formData.faq_data));

    if (formData.icon instanceof File) data.append("icon", formData.icon);
    if (formData.background_image instanceof File)
      data.append("background_image", formData.background_image);

    const url = isEditing
      ? `https://vipspa.pythonanywhere.com/api/vipspa/services/${formData.id}/`
      : `https://vipspa.pythonanywhere.com/api/vipspa/services/`;

    try {
      const res = await fetch(url, {
        method: isEditing ? "PATCH" : "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      });

      if (res.ok) {
        alert("Operation Successful!");
        resetForm();
        fetchServices();
      } else {
        const errorMsg = await res.json();
        console.error(errorMsg);
        alert("Fail: Check Console for details.");
      }
    } catch (err) {
      alert("Network Error!");
    }
  };

  const handleEditClick = (s) => {
    setIsEditing(true);
    setFormData({
      id: s.id,
      title: s.title,
      short_description: s.short_description || "",
      long_description: s.long_description || "",
      service_overview: s.service_overview || "",
      faq_data:
        Array.isArray(s.faq_data) && s.faq_data.length > 0
          ? s.faq_data
          : [{ q: "", a: "" }],
      order: s.order || 0,
      is_active: s.is_active,
      icon: null,
      background_image: null,
    });
    setIconPreview(s.icon);
    setBgPreview(s.background_image);
    window.scrollTo(0, 0);
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setIconPreview(null);
    setBgPreview(null);
    setIsEditing(false);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(
        `https://vipspa.pythonanywhere.com/api/vipspa/services/${id}/`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (res.ok) fetchServices();
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <AdminLayout>
      <div className="container-fluid py-4">
        <div className="row">
          {/* Form Side */}
          <div className="col-md-5">
            <div className="card shadow-sm border-0 p-4">
              <h5 className="fw-bold mb-4">
                {isEditing ? "Edit Service" : "Add Service"}
              </h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="small fw-bold">Service Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="small fw-bold">
                    Short Description (List View)
                  </label>
                  <textarea
                    className="form-control"
                    rows="2"
                    value={formData.short_description}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        short_description: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="small fw-bold">
                    Long Description (Intro)
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={formData.long_description}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        long_description: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="small fw-bold">
                    Service Overview (Detailed Content)
                  </label>
                  <textarea
                    className="form-control"
                    rows="4"
                    value={formData.service_overview}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        service_overview: e.target.value,
                      })
                    }
                  />
                </div>

                {/* FAQ Dynamic Section */}
                <div className="mb-4 p-3 bg-light rounded">
                  <label className="fw-bold small mb-2 d-block">
                    FAQs (JSON Data)
                  </label>
                  {formData.faq_data.map((faq, index) => (
                    <div key={index} className="mb-2 pb-2 border-bottom">
                      <input
                        type="text"
                        placeholder="Question"
                        className="form-control form-control-sm mb-1"
                        value={faq.q}
                        onChange={(e) =>
                          handleFaqChange(index, "q", e.target.value)
                        }
                      />
                      <div className="d-flex gap-2">
                        <input
                          type="text"
                          placeholder="Answer"
                          className="form-control form-control-sm"
                          value={faq.a}
                          onChange={(e) =>
                            handleFaqChange(index, "a", e.target.value)
                          }
                        />
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => removeFaqField(index)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="btn btn-sm btn-link text-primary p-0 mt-1"
                    onClick={addFaqField}
                  >
                    + Add More FAQ
                  </button>
                </div>

                <div className="row mb-3">
                  <div className="col-6">
                    <label className="small fw-bold">Display Order</label>
                    <input
                      type="number"
                      className="form-control"
                      value={formData.order}
                      onChange={(e) =>
                        setFormData({ ...formData, order: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-6 d-flex align-items-end">
                    <div className="form-check form-switch mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={formData.is_active}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            is_active: e.target.checked,
                          })
                        }
                      />
                      <label className="small fw-bold ms-1">Active</label>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="small fw-bold">Icon Image</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) =>
                      setFormData({ ...formData, icon: e.target.files[0] })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="small fw-bold">Background Image</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        background_image: e.target.files[0],
                      })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className={`btn w-100 fw-bold ${isEditing ? "btn-warning text-white" : "btn-success"}`}
                >
                  {isEditing ? "Update Service" : "Save Service"}
                </button>
                {isEditing && (
                  <button
                    type="button"
                    className="btn btn-link w-100 text-danger mt-1 text-decoration-none"
                    onClick={resetForm}
                  >
                    Cancel Edit
                  </button>
                )}
              </form>
            </div>
          </div>

          {/* List Side */}
          <div className="col-md-7">
            <div className="card shadow-sm border-0 table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Title</th>
                    <th>Order</th>
                    <th>Status</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((s) => (
                    <tr key={s.id}>
                      <td className="fw-bold">{s.title}</td>
                      <td>{s.order}</td>
                      <td>
                        {s.is_active ? (
                          <span className="badge bg-success">Active</span>
                        ) : (
                          <span className="badge bg-secondary">Inactive</span>
                        )}
                      </td>
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
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default withAuth(ManageServices);
