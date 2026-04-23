"use client";
import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import withAuth from "../../components/withAuth";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

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

  // 🔥 Quill config
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      ["link"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "link",
    "list",
    "bullet",
  ];

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      const res = await fetch(
        "https://vipspa.pythonanywhere.com/api/vipspa/homepage/",
      );
      const data = await res.json();

      if (data.about) {
        const a = data.about;

        setFormData((prev) => ({
          ...prev,
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
        }));

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

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        [field]: file,
      }));

      setPreviews((prev) => ({
        ...prev,
        [field]: URL.createObjectURL(file),
      }));
    }
  };

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
        `https://vipspa.pythonanywhere.com/api/vipspa/about-sections/${formData.id}/`,
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
          {/* LEFT */}
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
                      setFormData((prev) => ({
                        ...prev,
                        subtitle: e.target.value,
                      }))
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
                      setFormData((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                  />
                </div>

                {/* 🔥 QUILL ADDED HERE */}
                <div className="col-12">
                  <label className="small fw-bold">Description</label>
                  <ReactQuill
                    theme="snow"
                    value={formData.description}
                    onChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        description: value,
                      }))
                    }
                    modules={modules}
                    formats={formats}
                    className="custom-quill"
                  />
                </div>

                <div className="col-md-6">
                  <label className="small fw-bold">Button Text</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.button_text}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        button_text: e.target.value,
                      }))
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
                      setFormData((prev) => ({
                        ...prev,
                        button_link: e.target.value,
                      }))
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
                      setFormData((prev) => ({
                        ...prev,
                        contact_label: e.target.value,
                      }))
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
                      setFormData((prev) => ({
                        ...prev,
                        contact_value: e.target.value,
                      }))
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
                      setFormData((prev) => ({
                        ...prev,
                        video_url: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SAME AS BEFORE */}
          <div className="col-md-5">
            <div
              className="card shadow-sm border-0 p-4 sticky-top"
              style={{ top: "20px" }}
            >
              <h5 className="fw-bold mb-3">📸 About Images</h5>

              <div className="mb-4">
                <label className="small fw-bold">Main Image</label>
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
                  />
                )}
              </div>

              <button className="btn btn-dark w-100">SAVE ALL CHANGES</button>
            </div>
          </div>
        </form>

        <style jsx>{`
          .custom-quill .ql-container {
            min-height: 150px;
          }
        `}</style>
      </div>
    </AdminLayout>
  );
};

export default withAuth(ManageAbout);
