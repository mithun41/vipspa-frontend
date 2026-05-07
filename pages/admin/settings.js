"use client";
import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import withAuth from "../../components/withAuth";

const AdminSettings = () => {
  const [loading, setLoading] = useState(true);
  const [logoPreview, setLogoPreview] = useState(null);
  const [ogPreview, setOgPreview] = useState(null);

  // আপনার দেওয়া ডাটা অনুযায়ী সব ফিল্ড এখানে আছে
  const initialFormState = {
    id: null,
    site_name: "",
    footer_description: "",
    phone_number: "",
    call_number: "", // Missing field 1
    email: "",
    address: "",
    mon_fri_time: "",
    sat_time: "",
    sun_time: "",
    whatsapp_number: "", // Missing field 2
    telegram_link: "", // Missing field 3
    site_url: "",
    meta_title: "",
    meta_description: "",
    og_title: "",
    footer_logo: null,
    og_image: null,
  };

  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch(
        "https://vipspa.pythonanywhere.com/api/vipspa/site-config/"
      );
      const data = await res.json();
      if (data && data.length > 0) {
        const currentData = data[0];
        setFormData({
          ...currentData,
          footer_logo: null,
          og_image: null,
        });
        setLogoPreview(currentData.footer_logo);
        setOgPreview(currentData.og_image);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "footer_logo" || key === "og_image") {
        if (formData[key] instanceof File) {
          data.append(key, formData[key]);
        }
      } else {
        data.append(key, formData[key] || "");
      }
    });

    const baseUrl = "https://vipspa.pythonanywhere.com/api/vipspa/site-config/";
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
      } else {
        alert("Failed to update settings.");
      }
    } catch (err) {
      alert("Network Error!");
    }
  };

  return (
    <AdminLayout>
      <div className="container-fluid py-4">
        <form onSubmit={handleSubmit}>
          <div className="row">
            {/* Form Section */}
            <div className="col-md-8">
              <div className="card shadow-sm border-0 p-4 mb-4">
                <h5 className="fw-bold mb-4 text-primary border-bottom pb-2">
                  <i className="bi bi-gear-fill me-2"></i> Basic & Contact Info
                </h5>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="small fw-bold">Site Name</label>
                    <input type="text" name="site_name" className="form-control" value={formData.site_name} onChange={handleChange} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="small fw-bold">Site URL</label>
                    <input type="text" name="site_url" className="form-control" value={formData.site_url} onChange={handleChange} />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label className="small fw-bold">Phone Number</label>
                    <input type="text" name="phone_number" className="form-control" value={formData.phone_number} onChange={handleChange} />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="small fw-bold">Call Number</label>
                    <input type="text" name="call_number" className="form-control" value={formData.call_number} onChange={handleChange} />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="small fw-bold">WhatsApp Number</label>
                    <input type="text" name="whatsapp_number" className="form-control" value={formData.whatsapp_number} onChange={handleChange} />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="small fw-bold">Email Address</label>
                    <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="small fw-bold">Telegram Link</label>
                    <input type="text" name="telegram_link" className="form-control" value={formData.telegram_link} onChange={handleChange} />
                  </div>

                  <div className="col-md-12 mb-3">
                    <label className="small fw-bold">Full Address</label>
                    <textarea name="address" className="form-control" rows="2" value={formData.address} onChange={handleChange}></textarea>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="card shadow-sm border-0 p-4 mb-4">
                <h5 className="fw-bold mb-4 text-warning border-bottom pb-2">
                  <i className="bi bi-clock-fill me-2"></i> Working Hours
                </h5>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="small fw-bold">Mon-Fri Time</label>
                    <input type="text" name="mon_fri_time" className="form-control" value={formData.mon_fri_time} onChange={handleChange} />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="small fw-bold">Saturday Time</label>
                    <input type="text" name="sat_time" className="form-control" value={formData.sat_time} onChange={handleChange} />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="small fw-bold">Sunday Time</label>
                    <input type="text" name="sun_time" className="form-control" value={formData.sun_time} onChange={handleChange} />
                  </div>
                </div>
              </div>

              {/* SEO & Social Media Section */}
              <div className="card shadow-sm border-0 p-4">
                <h5 className="fw-bold mb-4 text-success border-bottom pb-2">
                  <i className="bi bi-search me-2"></i> SEO & Open Graph (OG)
                </h5>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="small fw-bold">Meta Title</label>
                    <input type="text" name="meta_title" className="form-control" value={formData.meta_title} onChange={handleChange} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="small fw-bold">OG Title</label>
                    <input type="text" name="og_title" className="form-control" value={formData.og_title} onChange={handleChange} />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label className="small fw-bold">Meta Description</label>
                    <textarea name="meta_description" className="form-control" rows="2" value={formData.meta_description} onChange={handleChange}></textarea>
                  </div>
                  <div className="col-md-12 mb-3">
                    <label className="small fw-bold">Footer Description</label>
                    <textarea name="footer_description" className="form-control" rows="3" value={formData.footer_description} onChange={handleChange}></textarea>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="small fw-bold">Footer Logo</label>
                    <input type="file" className="form-control" onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setFormData({ ...formData, footer_logo: file });
                        setLogoPreview(URL.createObjectURL(file));
                      }
                    }} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="small fw-bold">OG Image (Social Share)</label>
                    <input type="file" className="form-control" onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setFormData({ ...formData, og_image: file });
                        setOgPreview(URL.createObjectURL(file));
                      }
                    }} />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100 fw-bold mt-4 py-3 shadow">
                  SAVE ALL CONFIGURATION
                </button>
              </div>
            </div>

            {/* Sidebar Previews */}
            <div className="col-md-4">
              <div className="card shadow-sm border-0 mb-4 sticky-top" style={{ top: "20px" }}>
                <div className="card-header bg-dark text-white fw-bold">Live Previews</div>
                <div className="card-body bg-light">
                  {/* Logo Preview */}
                  <div className="text-center border-bottom pb-3 mb-3">
                    <p className="small fw-bold text-muted mb-2">LOGO PREVIEW</p>
                    {logoPreview ? (
                      <img src={logoPreview} alt="Logo" className="img-fluid" style={{ maxHeight: "60px" }} />
                    ) : <div className="p-3 bg-white border small text-muted">No Logo</div>}
                  </div>

                  {/* Contact Info Preview */}
                  <div className="small mb-3">
                    <p className="mb-1"><strong>Call:</strong> {formData.call_number || "N/A"}</p>
                    <p className="mb-1"><strong>WhatsApp:</strong> {formData.whatsapp_number || "N/A"}</p>
                    <p className="mb-1"><strong>Telegram:</strong> {formData.telegram_link ? "Link Set" : "N/A"}</p>
                  </div>

                  {/* OG Card Preview */}
                  <p className="small fw-bold text-muted mb-2">SOCIAL SHARE PREVIEW</p>
                  <div className="border bg-white rounded overflow-hidden">
                    {ogPreview ? (
                      <img src={ogPreview} alt="OG" className="img-fluid w-100" style={{ height: "150px", objectFit: "cover" }} />
                    ) : <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{ height: "150px" }}>No OG Image</div>}
                    <div className="p-2">
                      <div className="fw-bold small text-truncate">{formData.og_title || formData.meta_title || "Site Title"}</div>
                      <div className="text-muted" style={{ fontSize: "10px" }}>{formData.site_url || "example.com"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default withAuth(AdminSettings);