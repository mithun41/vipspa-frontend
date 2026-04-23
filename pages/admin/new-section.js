"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

import AdminLayout from "../../components/AdminLayout";
import withAuth from "../../components/withAuth";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const ManageHomeSection = () => {
  const API_URL = "https://vipspa.pythonanywhere.com/api/vipspa/home-sections/";

  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    msg: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

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

  const showAlert = (type, msg) => {
    setStatus({ type, msg });

    setTimeout(() => {
      setStatus({
        type: "",
        msg: "",
      });
    }, 5000);
  };

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      const res = await axios.get(API_URL);
      setSections(res.data);
    } catch (err) {
      showAlert("danger", "Failed to load sections");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      if (!files?.[0]) return;

      setFormData((prev) => ({
        ...prev,
        image: files[0],
      }));

      setImagePreview(URL.createObjectURL(files[0]));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("adminToken");

    if (!token) {
      showAlert("danger", "Login required.");
      return;
    }

    const fd = new FormData();

    Object.keys(formData).forEach((key) => {
      if (key === "image" && formData.image === null) return;

      if (key !== "id" && formData[key] !== null) {
        fd.append(key, formData[key]);
      }
    });

    const url = isEditing ? `${API_URL}${formData.id}/` : API_URL;

    const method = isEditing ? "PATCH" : "POST";

    try {
      const res = await axios({
        method,
        url,
        data: fd,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200 || res.status === 201) {
        showAlert(
          "success",
          isEditing ? "Updated successfully" : "Created successfully",
        );

        resetForm();
        fetchSections();
      }
    } catch (err) {
      showAlert("danger", "Save failed");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this section?")) return;

    const token = localStorage.getItem("adminToken");

    try {
      await axios.delete(`${API_URL}${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      showAlert("success", "Deleted");

      fetchSections();
    } catch {
      showAlert("danger", "Delete failed");
    }
  };

  // FIXED EDIT
  const handleEditClick = (s) => {
    console.log("editing:", s);

    setIsEditing(true);

    setFormData((prev) => ({
      ...prev,
      id: s?.id || null,
      title: String(s?.title || ""),
      subtitle: String(s?.subtitle || ""),
      description: s?.description || "",
      button_text: String(s?.button_text || "Know More"),
      button_url: String(s?.button_url || ""),
      extra_field: String(s?.extra_field || ""),
      image: null,
    }));

    setImagePreview(s?.image || null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const resetForm = () => {
    setFormData(initialFormState);

    setImagePreview(null);
    setIsEditing(false);
  };

  return (
    <AdminLayout>
      <div className="container-fluid py-4">
        {status.msg && (
          <div
            className={`alert alert-${status.type}`}
            style={{
              position: "fixed",
              top: 20,
              right: 20,
              zIndex: 9999,
            }}
          >
            {status.msg}
          </div>
        )}

        <h2 className="fw-bold mb-4">Manage Home Sections</h2>

        <div className="card p-4 shadow-sm border-0 mb-5">
          <h5 className="mb-4">{isEditing ? "Edit Section" : "Add Section"}</h5>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label>Title</label>

                <input
                  type="text"
                  name="title"
                  value={formData.title || ""}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <label>Subtitle</label>

                <input
                  type="text"
                  name="subtitle"
                  value={formData.subtitle || ""}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="col-12">
                <label>Description</label>

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
                />
              </div>

              <div className="col-md-4">
                <label>Button Text</label>

                <input
                  type="text"
                  name="button_text"
                  value={formData.button_text}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="col-md-4">
                <label>Button URL</label>

                <input
                  type="text"
                  name="button_url"
                  value={formData.button_url}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="col-md-4">
                <label>Extra Field</label>

                <input
                  type="text"
                  name="extra_field"
                  value={formData.extra_field}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <label>Image</label>

                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  className="form-control"
                />

                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt=""
                    className="mt-3"
                    style={{
                      width: 120,
                      height: 70,
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>

              <div className="col-12 text-end mt-4">
                {isEditing && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="btn btn-light me-2"
                  >
                    Cancel
                  </button>
                )}

                <button
                  className={`btn ${isEditing ? "btn-success" : "btn-primary"}`}
                >
                  {isEditing ? "Update" : "Save"}
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="card p-4 shadow-sm border-0">
          <h5 className="mb-4">Active Content</h5>

          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4">Loading...</td>
                </tr>
              ) : (
                sections.map((s) => (
                  <tr key={s.id}>
                    <td>
                      <img
                        src={s.image}
                        style={{
                          width: 70,
                          height: 45,
                          objectFit: "cover",
                        }}
                      />
                    </td>

                    <td>
                      <div>{s.title}</div>

                      <small>{s.subtitle}</small>
                    </td>

                    <td>
                      {s.description?.replace(/<[^>]*>/g, "").substring(0, 80)}
                      ...
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
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default withAuth(ManageHomeSection);
