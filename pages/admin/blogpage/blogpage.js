"use client";
import { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import withAuth from "@/components/withAuth";

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [preview, setPreview] = useState(null);

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

  useEffect(() => {
    fetchBlogs();
    fetchCategories();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/vipspa/blog-pages/");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/vipspa/categories/");
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");
    const data = new FormData();

    data.append("title", formData.title);
    data.append("content", formData.content);
    data.append("category", formData.category);
    data.append("author", formData.author);
    data.append("tags", formData.tags || "");

    if (formData.image instanceof File) {
      data.append("image", formData.image);
    }

    const baseUrl = "http://127.0.0.1:8000/api/vipspa/blog-pages/";
    const url = isEditing ? `${baseUrl}${formData.slug}/` : baseUrl;
    const method = isEditing ? "PATCH" : "POST";

    try {
      const res = await fetch(url, {
        method: method,
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      });

      if (res.ok) {
        alert(isEditing ? "Updated Successfully!" : "Published Successfully!");
        resetForm();
        fetchBlogs();
      }
    } catch (err) {
      alert("Error updating blog");
    }
  };

  const handleDeleteBlog = async (slug) => {
    if (!confirm("Delete All Blog?")) return;
    const token = localStorage.getItem("adminToken");
    await fetch(`http://127.0.0.1:8000/api/vipspa/blog-pages/${slug}/`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchBlogs();
  };

  const handleDeleteComment = async (commentId) => {
    if (!confirm("Delete Comment?")) return;
    const token = localStorage.getItem("adminToken");
    const res = await fetch(
      `http://127.0.0.1:8000/api/vipspa/comments/${commentId}/`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    if (res.ok) {
      alert("Comment Deleted!");
      fetchBlogs(); // কমেন্ট লিস্ট রিফ্রেশ করার জন্য
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
      <div className="container-fluid py-4">
        <h3 className="fw-bold mb-4 text-white">
          ✍️ Blog & Comment Management
        </h3>

        <div className="row">
          {/* ব্লগ ফর্ম */}
          <div className="col-lg-5">
            <div
              className="card shadow border-0 bg-dark text-white p-4 sticky-top"
              style={{ top: "20px" }}
            >
              <h5 className="text-warning mb-4">
                {isEditing ? "🛠️ Edit Post" : "🆕 New Post"}
              </h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="small">Post Title</label>
                  <input
                    type="text"
                    className="form-control bg-secondary text-white border-0"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="small">Category</label>
                  <select
                    className="form-select bg-secondary text-white border-0"
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
                  <label className="small">Content</label>
                  <textarea
                    className="form-control bg-secondary text-white border-0"
                    rows="5"
                    value={formData.content}
                    onChange={(e) =>
                      setFormData({ ...formData, content: e.target.value })
                    }
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="small">Featured Image</label>
                  <input
                    type="file"
                    className="form-control bg-secondary text-white border-0"
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
                      className="mt-2 rounded w-100"
                      style={{ maxHeight: "150px", objectFit: "cover" }}
                      alt="preview"
                    />
                  )}
                </div>

                <button
                  type="submit"
                  className={`btn w-100 fw-bold ${isEditing ? "btn-warning" : "btn-success"}`}
                >
                  {isEditing ? "UPDATE POST" : "PUBLISH POST"}
                </button>
                {isEditing && (
                  <button
                    type="button"
                    className="btn btn-link text-white w-100 mt-2"
                    onClick={resetForm}
                  >
                    Cancel
                  </button>
                )}
              </form>
            </div>
          </div>

          {/* ব্লগ এবং কমেন্ট লিস্ট */}
          <div className="col-lg-7">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="card bg-dark text-white shadow-sm border-secondary mb-4 overflow-hidden"
              >
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src={blog.image}
                      className="img-fluid h-100 w-100"
                      style={{ objectFit: "cover" }}
                      alt=""
                    />
                  </div>
                  <div className="col-md-9 p-3">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <span className="badge bg-warning text-dark mb-1">
                          {blog.category_name}
                        </span>
                        <h5 className="mb-0">{blog.title}</h5>
                        <small className="text-muted">
                          {new Date(blog.created_at).toLocaleDateString()}
                        </small>
                      </div>
                      <div className="btn-group">
                        <button
                          className="btn btn-sm btn-outline-info"
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

                    {/* এই ব্লগের কমেন্টগুলো এখানে দেখাবে */}
                    <div
                      className="mt-3 p-2 bg-secondary rounded"
                      style={{ fontSize: "13px" }}
                    >
                      <h6 className="small fw-bold border-bottom border-dark pb-1">
                        Comments ({blog.comments?.length || 0})
                      </h6>
                      {blog.comments && blog.comments.length > 0 ? (
                        blog.comments.map((comment) => (
                          <div
                            key={comment.id}
                            className="d-flex justify-content-between align-items-center mt-2 border-bottom border-dark pb-1"
                          >
                            <div>
                              <strong>{comment.name}: </strong>{" "}
                              {comment.message}
                            </div>
                            <button
                              className="btn btn-sm text-danger p-0"
                              onClick={() => handleDeleteComment(comment.id)}
                            >
                              ✖
                            </button>
                          </div>
                        ))
                      ) : (
                        <div className="text-muted italic small">
                          No comments yet.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default withAuth(BlogManagement);
