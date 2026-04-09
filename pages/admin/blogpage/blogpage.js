"use client";
import { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import withAuth from "@/components/withAuth";
import axios from "axios";

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [preview, setPreview] = useState(null);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const initialFormState = {
    id: null,
    title: "",
    content: "",
    category: "",
    author: "Admin",
    tags: "",
    image: null,
    slug: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const showAlert = (type, msg) => {
    setStatus({ type, msg });
    setTimeout(() => setStatus({ type: "", msg: "" }), 4000);
  };

  useEffect(() => {
    fetchBlogs();
    fetchCategories();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(
        "https://vipspa.pythonanywhere.com/api/vipspa/blog-pages/",
      );
      setBlogs(res.data);
    } catch (err) {
      showAlert("danger", "Failed to load blogs.");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        "https://vipspa.pythonanywhere.com/api/vipspa/categories/",
      );
      setCategories(res.data);
    } catch (err) {
      console.error("Category load error", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");
    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      if (key === "image" && !(formData[key] instanceof File)) return;
      if (formData[key] !== null) data.append(key, formData[key]);
    });

    const baseUrl = "https://vipspa.pythonanywhere.com/api/vipspa/blog-pages/";
    const url = isEditing ? `${baseUrl}${formData.slug}/` : baseUrl;
    const method = isEditing ? "PATCH" : "POST";

    try {
      await axios({
        method: method,
        url: url,
        data: data,
        headers: { Authorization: `Bearer ${token}` },
      });
      showAlert("success", isEditing ? "Blog updated!" : "Blog published!");
      resetForm();
      fetchBlogs();
    } catch (err) {
      showAlert("danger", "Something went wrong. Please check inputs.");
    }
  };

  const handleDeleteBlog = async (slug) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    const token = localStorage.getItem("adminToken");
    try {
      await axios.delete(
        `https://vipspa.pythonanywhere.com/api/vipspa/blog-pages/${slug}/`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      showAlert("success", "Blog deleted successfully.");
      fetchBlogs();
    } catch (err) {
      showAlert("danger", "Delete operation failed.");
    }
  };

  const handleDeleteComment = async (commentId) => {
    if (!confirm("Delete this comment?")) return;
    const token = localStorage.getItem("adminToken");
    try {
      await axios.delete(
        `https://vipspa.pythonanywhere.com/api/vipspa/comments/${commentId}/`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      fetchBlogs();
    } catch (err) {
      showAlert("danger", "Failed to delete comment.");
    }
  };

  const handleEditClick = (blog) => {
    setIsEditing(true);
    setFormData({
      ...blog,
      category: blog.category || "",
      image: null,
    });
    setPreview(blog.image);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setPreview(null);
    setIsEditing(false);
  };

  return (
    <AdminLayout>
      <div className="main-wrapper py-4">
        {/* Floating Alert Messages */}
        {status.msg && (
          <div
            className={`alert alert-${status.type} floating-alert shadow-sm border-0`}
          >
            {status.type === "success" ? "✅ " : "❌ "} {status.msg}
          </div>
        )}

        <div className="container-fluid">
          <div className="row mb-4">
            <div className="col">
              <h2 className="fw-bold text-dark">Blog Management</h2>
              <p className="text-muted small">
                Create, edit and manage your blog posts and comments.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {/* ব্লগ ফর্ম সেকশন */}
            <div className="col-lg-4">
              <div
                className="card border-0 shadow-sm sticky-top"
                style={{ top: "20px", borderRadius: "12px" }}
              >
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-4">
                    {isEditing ? "Edit Post" : "Add New Post"}
                  </h5>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label fw-semibold small">
                        TITLE
                      </label>
                      <input
                        type="text"
                        className="form-control custom-input"
                        value={formData.title}
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold small">
                        CATEGORY
                      </label>
                      <select
                        className="form-select custom-input"
                        value={formData.category}
                        onChange={(e) =>
                          setFormData({ ...formData, category: e.target.value })
                        }
                        required
                      >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold small">
                        CONTENT
                      </label>
                      <textarea
                        className="form-control custom-input"
                        rows="6"
                        value={formData.content}
                        onChange={(e) =>
                          setFormData({ ...formData, content: e.target.value })
                        }
                        required
                      ></textarea>
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold small">
                        COVER IMAGE
                      </label>
                      <input
                        type="file"
                        className="form-control custom-input mb-2"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            setFormData({ ...formData, image: file });
                            setPreview(URL.createObjectURL(file));
                          }
                        }}
                      />
                      {preview && (
                        <img
                          src={preview}
                          className="preview-box"
                          alt="preview"
                        />
                      )}
                    </div>

                    <div className="d-grid gap-2">
                      <button
                        type="submit"
                        className={`btn btn-lg fw-bold ${isEditing ? "btn-dark" : "btn-primary"}`}
                        style={{ fontSize: "14px" }}
                      >
                        {isEditing ? "Update Post" : "Publish Post"}
                      </button>
                      {isEditing && (
                        <button
                          type="button"
                          className="btn btn-outline-secondary border-0 btn-sm"
                          onClick={resetForm}
                        >
                          Cancel Edit
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* ব্লগ লিস্ট সেকশন */}
            <div className="col-lg-8">
              {loading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary"></div>
                </div>
              ) : (
                <div className="row g-3">
                  {blogs.map((blog) => (
                    <div key={blog.id} className="col-12">
                      <div className="card border-0 shadow-sm blog-card">
                        <div className="row g-0">
                          <div className="col-md-3">
                            <img src={blog.image} className="blog-img" alt="" />
                          </div>
                          <div className="col-md-9">
                            <div className="card-body p-4">
                              <div className="d-flex justify-content-between align-items-start">
                                <div>
                                  <span className="badge bg-light text-primary border border-primary-subtle mb-2">
                                    {blog.category_name}
                                  </span>
                                  <h5 className="fw-bold text-dark mb-1">
                                    {blog.title}
                                  </h5>
                                  <p className="text-muted small">
                                    {new Date(blog.created_at).toDateString()}
                                  </p>
                                </div>
                                <div className="action-btns">
                                  <button
                                    className="btn btn-sm btn-outline-primary me-2"
                                    onClick={() => handleEditClick(blog)}
                                  >
                                    Edit
                                  </button>
                                  <button
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => handleDeleteBlog(blog.slug)}
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>

                              {/* <p className="text-secondary small mt-2">
                                {blog.content?.substring(0, 150)}...
                              </p> */}

                              {/* Comment List inside Blog Card */}
                              <div className="comment-wrapper mt-3">
                                <h6 className="small fw-bold text-dark border-bottom pb-2">
                                  Comments ({blog.comments?.length || 0})
                                </h6>
                                {blog.comments &&
                                  blog.comments.map((comment) => (
                                    <div
                                      key={comment.id}
                                      className="d-flex justify-content-between align-items-center py-2 border-bottom-dotted"
                                    >
                                      <div className="small">
                                        <span className="fw-bold text-dark">
                                          {comment.name}:{" "}
                                        </span>
                                        <span className="text-muted">
                                          {comment.message}
                                        </span>
                                      </div>
                                      <button
                                        className="btn btn-link text-danger p-0"
                                        onClick={() =>
                                          handleDeleteComment(comment.id)
                                        }
                                      >
                                        ✖
                                      </button>
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* --- হোয়াইট মোড ক্লিন সিএসএস --- */}
        <style jsx>{`
          .main-wrapper {
            background-color: #f3f4f6;
            min-height: 100vh;
            color: #374151;
          }
          .custom-input {
            background-color: #ffffff;
            border: 1px solid #d1d5db;
            padding: 10px;
            font-size: 14px;
            border-radius: 8px;
          }
          .custom-input:focus {
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          }
          .preview-box {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
          }
          .blog-card {
            background-color: #ffffff;
            border-radius: 12px;
            transition: all 0.3s;
          }
          .blog-card:hover {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05) !important;
          }
          .blog-img {
            width: 100%;
            height: 100%;
            min-height: 180px;
            object-fit: cover;
            border-top-left-radius: 12px;
            border-bottom-left-radius: 12px;
          }
          .comment-wrapper {
            background-color: #f9fafb;
            padding: 12px;
            border-radius: 8px;
          }
          .border-bottom-dotted {
            border-bottom: 1px dotted #e5e7eb;
          }
          .floating-alert {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1050;
            background: white;
            border-left: 4px solid #3b82f6;
            min-width: 280px;
            animation: fadeIn 0.4s ease;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .action-btns .btn {
            border-radius: 6px;
            font-size: 12px;
            padding: 4px 12px;
            font-weight: 600;
          }
        `}</style>
      </div>
    </AdminLayout>
  );
};

export default withAuth(BlogManagement);
