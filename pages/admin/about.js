import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import withAuth from "../../components/withAuth";

const ManageAbout = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    id: 1,
    subtitle: "",
    title: "",
    description: "",
    button_text: "",
    button_link: "",
    contact_label: "",
    contact_value: "",
    video_url: "",
    feature_1: "",
    feature_2: "",
    feature_3: "",
    main_image: null,
    side_image: null,
    feature_1_icon: null,
    feature_2_icon: null,
    feature_3_icon: null,
  });

  const [previews, setPreviews] = useState({});

  useEffect(() => {
    fetchAboutData();
  }, []);

  // 1. Fetch Data
  const fetchAboutData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000//api/vipspa/homepage/");
      const data = await res.json();

      if (data.about) {
        const a = data.about;
        setFormData({
          ...formData,
          id: a.id || 1,
          subtitle: a.subtitle || "",
          title: a.title || "",
          description: a.description || "",
          button_text: a.button_text || "",
          button_link: a.button_link || "",
          contact_label: a.contact_label || "",
          contact_value: a.contact_value || "",
          video_url: a.video_url || "",
          feature_1: a.feature_1 || "",
          feature_2: a.feature_2 || "",
          feature_3: a.feature_3 || "",
        });
        setPreviews({
          main_image: a.main_image,
          side_image: a.side_image,
          feature_1_icon: a.feature_1_icon,
          feature_2_icon: a.feature_2_icon,
          feature_3_icon: a.feature_3_icon,
        });
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // 2. Handle Image Change
  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, [field]: file });
      setPreviews({ ...previews, [field]: URL.createObjectURL(file) });
    }
  };

  // 3. Update Data
  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");
    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null) {
        data.append(key, formData[key]);
      }
    });

    try {
      const res = await fetch(
        `http://127.0.0.1:8000//api/vipspa/about-sections/${formData.id}/`,
        {
          method: "PATCH",
          headers: { Authorization: `Bearer ${token}` },
          body: data,
        },
      );

      if (res.ok) {
        alert("About Section Updated Successfully!");
        fetchAboutData();
      } else {
        alert("Update Failed!");
      }
    } catch (err) {
      alert("Network Error!");
    }
  };

  if (loading)
    return (
      <AdminLayout>
        <div className="p-5 text-center">Loading...</div>
      </AdminLayout>
    );

  return (
    <AdminLayout>
      <div className="container-fluid py-4">
        <form onSubmit={handleUpdate} className="row">
          {/* Text Content */}
          <div className="col-md-7">
            <div className="card shadow-sm border-0 p-4 mb-4">
              <h5 className="fw-bold mb-4">📝 About Content Settings</h5>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="small fw-bold">Subtitle</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.subtitle}
                    onChange={(e) =>
                      setFormData({ ...formData, subtitle: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="small fw-bold">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                </div>
                <div className="col-12">
                  <label className="small fw-bold">Description</label>
                  <textarea
                    rows="4"
                    className="form-control"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="small fw-bold">Button Text</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.button_text}
                    onChange={(e) =>
                      setFormData({ ...formData, button_text: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="small fw-bold">Button Link</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.button_link}
                    onChange={(e) =>
                      setFormData({ ...formData, button_link: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="small fw-bold">Contact Label</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.contact_label}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contact_label: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="small fw-bold">Contact Value</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.contact_value}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contact_value: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-12">
                  <label className="small fw-bold">YouTube Video URL</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.video_url}
                    onChange={(e) =>
                      setFormData({ ...formData, video_url: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="card shadow-sm border-0 p-4 mb-4 bg-light">
              <h5 className="fw-bold mb-3">✨ Features & Icons</h5>
              <div className="row">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="col-md-4 text-center">
                    <label className="small fw-bold">Feature {num}</label>
                    <input
                      type="text"
                      className="form-control form-control-sm mb-2"
                      value={formData[`feature_${num}`]}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [`feature_${num}`]: e.target.value,
                        })
                      }
                    />
                    <input
                      type="file"
                      className="form-control form-control-sm mb-2"
                      onChange={(e) =>
                        handleFileChange(e, `feature_${num}_icon`)
                      }
                    />
                    {previews[`feature_${num}_icon`] && (
                      <img
                        src={previews[`feature_${num}_icon`]}
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "contain",
                        }}
                        alt=""
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="col-md-5">
            <div
              className="card shadow-sm border-0 p-4 sticky-top"
              style={{ top: "20px" }}
            >
              <h5 className="fw-bold mb-3">📸 About Images</h5>

              <div className="mb-4">
                <label className="small fw-bold">Main Image (Video BG)</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => handleFileChange(e, "main_image")}
                />
                {previews.main_image && (
                  <img
                    src={previews.main_image}
                    className="mt-2 rounded w-100 border"
                    style={{ height: "150px", objectFit: "cover" }}
                    alt=""
                  />
                )}
              </div>

              <div className="mb-4">
                <label className="small fw-bold">Side Image</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => handleFileChange(e, "side_image")}
                />
                {previews.side_image && (
                  <img
                    src={previews.side_image}
                    className="mt-2 rounded w-100 border"
                    style={{ height: "150px", objectFit: "cover" }}
                    alt=""
                  />
                )}
              </div>

              <button
                type="submit"
                className="btn btn-dark btn-lg w-100 fw-bold"
              >
                SAVE ALL CHANGES
              </button>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default withAuth(ManageAbout);
