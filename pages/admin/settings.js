"use client";
import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import withAuth from "../../components/withAuth";

const AdminSettings = () => {
  const [loading, setLoading] = useState(true);
  const [config, setConfig] = useState(null);

  const initialFormState = {
    id: null,
    site_name: "",
    footer_description: "",
    phone_number: "",
    email: "",
    address: "",
    mon_fri_time: "",
    sat_time: "",
    sun_time: "",
    facebook_url: "",
    twitter_url: "",
    instagram_url: "",
    footer_logo: null,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000//api/vipspa/site-config/");
      const data = await res.json();
      if (data && data.length > 0) {
        const currentData = data[0];
        setConfig(currentData);
        // ডাটা সেট করার সময় null চেক করে খালি স্ট্রিং দেওয়া হয়েছে
        setFormData({
          ...currentData,
          footer_logo: null, // ফাইল ইনপুট সব সময় নাল থাকে শুরুতে
        });
        setPreview(currentData.footer_logo);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");

    if (!token) {
      alert("Session expired. Please login again.");
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "footer_logo") {
        if (formData[key] instanceof File) data.append(key, formData[key]);
      } else {
        // null বা undefined থাকলে খালি স্ট্রিং পাঠানো হচ্ছে
        data.append(key, formData[key] || "");
      }
    });

    const baseUrl = "http://127.0.0.1:8000//api/vipspa/site-config/";
    const url = formData.id ? `${baseUrl}${formData.id}/` : baseUrl;
    const method = formData.id ? "PATCH" : "POST";

    try {
      const res = await fetch(url, {
        method: method,
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      });

      if (res.ok) {
        alert("Settings Updated Successfully! 🔥");
        fetchSettings();
      } else if (res.status === 401) {
        alert("Your session has expired. Please log in again.");
      } else {
        const errData = await res.json();
        alert(`Error: ${JSON.stringify(errData)}`);
      }
    } catch (err) {
      alert("Network Error! Please check your connection.");
    }
  };

  return (
    <AdminLayout>
      <div className="container-fluid py-4">
        <div className="row">
          {/* Left Side: Form Section */}
          <div className="col-md-7">
            <div className="card shadow-sm border-0 p-4">
              <h5 className="fw-bold mb-4 text-primary border-bottom pb-2">
                <i className="bi bi-gear-fill me-2"></i> Update Site
                Configuration
              </h5>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="small fw-bold">Site Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.site_name || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, site_name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="small fw-bold">Footer Logo</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          setFormData({ ...formData, footer_logo: file });
                          setPreview(URL.createObjectURL(file));
                        }
                      }}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="small fw-bold">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.phone_number || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone_number: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="small fw-bold">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      value={formData.email || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="col-md-12 mb-3">
                    <label className="small fw-bold">Full Address</label>
                    <textarea
                      className="form-control"
                      rows="2"
                      value={formData.address || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                    ></textarea>
                  </div>

                  <div className="col-md-4 mb-3">
                    <label className="small fw-bold">Mon-Fri Hours</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.mon_fri_time || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mon_fri_time: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="small fw-bold">Saturday Hours</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.sat_time || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, sat_time: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="small fw-bold">Sunday Hours</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.sun_time || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, sun_time: e.target.value })
                      }
                    />
                  </div>

                  <div className="col-md-12 mb-3">
                    <label className="small fw-bold">Footer Description</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={formData.footer_description || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          footer_description: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>

                  <div className="col-md-4 mb-3">
                    <label className="small fw-bold">Facebook URL</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.facebook_url || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          facebook_url: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="small fw-bold">Twitter URL</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.twitter_url || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          twitter_url: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-md-4 mb-4">
                    <label className="small fw-bold">Instagram URL</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.instagram_url || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          instagram_url: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 fw-bold py-2 shadow-sm"
                >
                  <i className="bi bi-save me-2"></i> SAVE ALL CHANGES
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Live Preview Section */}
          <div className="col-md-5">
            <div
              className="card shadow-sm border-0 sticky-top"
              style={{ top: "20px" }}
            >
              <div className="card-header bg-dark text-white fw-bold py-3">
                <i className="bi bi-eye-fill me-2"></i> Live Footer Preview
              </div>
              <div className="card-body bg-light border-top">
                {loading ? (
                  <div className="text-center py-5">
                    <div
                      className="spinner-border text-primary"
                      role="status"
                    ></div>
                    <p className="mt-2 text-muted">Loading settings...</p>
                  </div>
                ) : config ? (
                  <div className="text-center">
                    {preview ? (
                      <img
                        src={preview}
                        alt="Logo"
                        className="img-fluid mb-3 p-2 bg-white rounded border"
                        style={{ maxHeight: "70px", objectFit: "contain" }}
                      />
                    ) : (
                      <div className="mb-3 p-3 bg-secondary text-white rounded">
                        No Logo Selected
                      </div>
                    )}
                    <h6 className="fw-bold text-uppercase">
                      {config.site_name || "N/A"}
                    </h6>
                    <p className="small text-muted px-2">
                      {config.footer_description || "No description provided."}
                    </p>
                    <hr className="my-4" />
                    <div className="text-start small px-3">
                      <p className="mb-2">
                        <strong>
                          <i className="bi bi-telephone-fill me-2 text-primary"></i>{" "}
                          Phone:
                        </strong>{" "}
                        {config.phone_number || "N/A"}
                      </p>
                      <p className="mb-2">
                        <strong>
                          <i className="bi bi-envelope-fill me-2 text-primary"></i>{" "}
                          Email:
                        </strong>{" "}
                        {config.email || "N/A"}
                      </p>
                      <p className="mb-3">
                        <strong>
                          <i className="bi bi-geo-alt-fill me-2 text-primary"></i>{" "}
                          Address:
                        </strong>{" "}
                        {config.address || "N/A"}
                      </p>
                      <div className="bg-white p-3 rounded border">
                        <p className="mb-1 text-primary fw-bold small">
                          OPENING HOURS
                        </p>
                        <p className="mb-1 d-flex justify-content-between">
                          <span>Mon-Fri:</span>{" "}
                          <span className="text-dark">
                            {config.mon_fri_time || "N/A"}
                          </span>
                        </p>
                        <p className="mb-1 d-flex justify-content-between">
                          <span>Saturday:</span>{" "}
                          <span className="text-dark">
                            {config.sat_time || "N/A"}
                          </span>
                        </p>
                        <p className="mb-0 d-flex justify-content-between">
                          <span>Sunday:</span>{" "}
                          <span className="text-dark">
                            {config.sun_time || "N/A"}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-5 text-muted">
                    <i className="bi bi-exclamation-circle display-4 mb-3"></i>
                    <p>No configuration found. Please add your settings.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default withAuth(AdminSettings);
