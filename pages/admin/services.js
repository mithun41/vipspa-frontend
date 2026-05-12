"use client";
import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import withAuth from "../../components/withAuth";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialFormState = {
    id: null,
    title: "",
    meta_title: "", // নতুন যুক্ত করা হয়েছে
    meta_description: "", // নতুন যুক্ত করা হয়েছে
    short_description: "",
    long_description: "",
    service_overview: "",
    faq_data: [{ q: "", a: "" }],
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

  const handleFaqChange = (index, field, value) => {
    const updated = [...formData.faq_data];
    updated[index][field] = value;
    setFormData({ ...formData, faq_data: updated });
  };

  const addFaqField = () => {
    setFormData({
      ...formData,
      faq_data: [...formData.faq_data, { q: "", a: "" }],
    });
  };

  const removeFaqField = (index) => {
    const updated = formData.faq_data.filter((_, i) => i !== index);
    setFormData({ ...formData, faq_data: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");

    const data = new FormData();
    data.append("title", formData.title);
    data.append("meta_title", formData.meta_title || ""); // FormData-তে যুক্ত করা হয়েছে
    data.append("meta_description", formData.meta_description || ""); // FormData-তে যুক্ত করা হয়েছে
    data.append("short_description", formData.short_description || "");
    data.append("long_description", formData.long_description || "");
    data.append("service_overview", formData.service_overview || "");
    data.append("order", formData.order);
    data.append("is_active", formData.is_active);
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
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });

      if (res.ok) {
        alert("Success!");
        resetForm();
        fetchServices();
      } else {
        const err = await res.json();
        console.log(err);
        alert("Error!");
      }
    } catch (err) {
      alert("Network Error!");
    }
  };

  const handleEditClick = (s) => {
    setIsEditing(true);
    let faqParsed = [{ q: "", a: "" }];

    try {
      if (Array.isArray(s.faq_data)) {
        faqParsed = s.faq_data;
      } else if (typeof s.faq_data === "string") {
        faqParsed = JSON.parse(s.faq_data);
      }
    } catch (err) {
      faqParsed = [{ q: "", a: "" }];
    }

    setFormData({
      id: s.id || null,
      title: s.title || "",
      meta_title: s.meta_title || "", // Edit-এ ডাটা লোড হবে
      meta_description: s.meta_description || "", // Edit-এ ডাটা লোড হবে
      short_description: s.short_description || "",
      long_description: s.long_description || "",
      service_overview: s.service_overview || "",
      faq_data: faqParsed,
      order: s.order ?? 0,
      is_active: s.is_active ?? true,
      icon: null,
      background_image: null,
    });

    setIconPreview(s.icon || null);
    setBgPreview(s.background_image || null);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    await fetch(
      `https://vipspa.pythonanywhere.com/api/vipspa/services/${id}/`, // URL ফিক্স করা হয়েছে (elitespa -> vipspa)
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    fetchServices();
  };

  return (
    <AdminLayout>
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-md-5">
            <div className="card shadow-sm border-0 p-4">
              <h5 className="fw-bold mb-4">
                {isEditing ? "Edit Service" : "Add Service"}
              </h5>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="small fw-bold">Service Title</label>
                  <input
                    className="form-control"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                </div>

                {/* SEO Meta Title */}
                <div className="mb-3">
                  <label className="small fw-bold text-primary">Meta Title (SEO)</label>
                  <input
                    className="form-control"
                    placeholder="Enter meta title for SEO"
                    value={formData.meta_title}
                    onChange={(e) =>
                      setFormData({ ...formData, meta_title: e.target.value })
                    }
                  />
                </div>

                {/* SEO Meta Description */}
                <div className="mb-3">
                  <label className="small fw-bold text-primary">Meta Description (SEO)</label>
                  <textarea
                    className="form-control"
                    rows="2"
                    placeholder="Enter meta description for SEO"
                    value={formData.meta_description}
                    onChange={(e) =>
                      setFormData({ ...formData, meta_description: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="small fw-bold">Short Description (List View)</label>
                  <textarea
                    className="form-control"
                    rows="2"
                    value={formData.short_description}
                    onChange={(e) =>
                      setFormData({ ...formData, short_description: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="small fw-bold">Long Description (Intro)</label>
                  <ReactQuill
                    key={formData.id || "new"}
                    theme="snow"
                    value={formData.long_description}
                    onChange={(value) =>
                      setFormData({ ...formData, long_description: value })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="small fw-bold">Service Overview (Detailed Content)</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    value={formData.service_overview}
                    onChange={(e) =>
                      setFormData({ ...formData, service_overview: e.target.value })
                    }
                  />
                </div>

                {/* FAQ Section */}
                <div className="mb-4 p-3 bg-light rounded">
                  <label className="fw-bold small mb-2 d-block">FAQs</label>
                  {formData.faq_data.map((faq, i) => (
                    <div key={i} className="mb-2">
                      <input
                        placeholder="Question"
                        className="form-control form-control-sm mb-1"
                        value={faq.q}
                        onChange={(e) => handleFaqChange(i, "q", e.target.value)}
                      />
                      <div className="d-flex gap-2">
                        <input
                          placeholder="Answer"
                          className="form-control form-control-sm"
                          value={faq.a}
                          onChange={(e) => handleFaqChange(i, "a", e.target.value)}
                        />
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => removeFaqField(i)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                  <button type="button" className="btn btn-link p-0" onClick={addFaqField}>
                    + Add FAQ
                  </button>
                </div>

                {/* Images */}
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
                      setFormData({ ...formData, background_image: e.target.files[0] })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className={`btn w-100 fw-bold ${
                    isEditing ? "btn-warning text-white" : "btn-success"
                  }`}
                >
                  {isEditing ? "Update Service" : "Save Service"}
                </button>
              </form>
            </div>
          </div>

          {/* LIST SIDE */}
          <div className="col-md-7">
            <div className="card shadow-sm border-0 table-responsive">
              <table className="table table-hover">
                <thead>
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
                      <td>{s.title}</td>
                      <td>{s.order}</td>
                      <td>{s.is_active ? "Active" : "Inactive"}</td>
                      <td className="text-end">
                        <button
                          className="btn btn-sm btn-primary me-2"
                          onClick={() => handleEditClick(s)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(s.id)}
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