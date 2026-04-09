import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import withAuth from "../../components/withAuth";

const ManageBlogs = () => {
  const [posts, setPosts] = useState([]);
  const [sectionInfo, setSectionInfo] = useState({ title: "", subtitle: "" });
  const [loading, setLoading] = useState(true);

  const initialFormState = {
    id: null,
    title: "",
    category: "Trending",
    image: null,
    order: 0,
    details_link: "news-details",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isEditing, setIsEditing] = useState(false);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    fetchBlogData();
  }, []);

  const fetchBlogData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000//api/vipspa/homepage/");
      const data = await res.json();
      if (data.blog) {
        setPosts(data.blog.posts || []);
        setSectionInfo(data.blog.section_info || { title: "", subtitle: "" });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // ১. ব্লগের সেকশন টাইটেল আপডেট করার ফাংশন
  const handleSectionUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(
        "http://127.0.0.1:8000//api/vipspa/blog-sections/1/",
        {
          // ধরে নিচ্ছি ID ১
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sectionInfo),
        },
      );
      if (res.ok) alert("Section Header Updated!");
    } catch (err) {
      alert("Failed to update section info");
    }
  };

  // ২. ব্লগ পোস্ট অ্যাড বা এডিট করার ফাংশন
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");
    const data = new FormData();

    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("order", parseInt(formData.order));
    data.append("details_link", formData.details_link);
    data.append("is_active", "true");

    if (formData.image instanceof File) {
      data.append("image", formData.image);
    }

    const baseUrl = "http://127.0.0.1:8000//api/vipspa/blog-posts/";
    const url = isEditing ? `${baseUrl}${formData.id}/` : baseUrl;
    const method = isEditing ? "PATCH" : "POST";

    try {
      const res = await fetch(url, {
        method: method,
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      });

      if (res.ok) {
        alert(isEditing ? "Blog Updated!" : "Blog Added!");
        resetForm();
        fetchBlogData();
      }
    } catch (err) {
      alert("Post action failed!");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this post?")) return;
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(
        `http://127.0.0.1:8000//api/vipspa/blog-posts/${id}/`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (res.ok) fetchBlogData();
    } catch (err) {
      alert("Delete failed!");
    }
  };

  const handleEditClick = (post) => {
    setIsEditing(true);
    setFormData({
      id: post.id,
      title: post.title,
      category: post.category,
      order: post.order || 0,
      details_link: post.details_link || "news-details",
      image: null,
    });
    setPreview(post.image);
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
        {/* Section Header Editor */}
        <div className="card shadow-sm border-0 p-4 mb-4">
          <h6 className="fw-bold text-muted text-uppercase mb-3">
            Blog Section Header
          </h6>
          <form onSubmit={handleSectionUpdate} className="row align-items-end">
            <div className="col-md-5">
              <label className="small fw-bold">Subtitle</label>
              <input
                type="text"
                className="form-control"
                value={sectionInfo.subtitle}
                onChange={(e) =>
                  setSectionInfo({ ...sectionInfo, subtitle: e.target.value })
                }
              />
            </div>
            <div className="col-md-5">
              <label className="small fw-bold">Title</label>
              <input
                type="text"
                className="form-control"
                value={sectionInfo.title}
                onChange={(e) =>
                  setSectionInfo({ ...sectionInfo, title: e.target.value })
                }
              />
            </div>
            <div className="col-md-2">
              <button className="btn btn-dark w-100 mt-2">Update Header</button>
            </div>
          </form>
        </div>

        <div className="row">
          {/* Post Form */}
          <div className="col-md-4">
            <div
              className="card shadow-sm border-0 p-4 sticky-top"
              style={{ top: "20px" }}
            >
              <h5 className="fw-bold mb-4 text-primary">
                {isEditing ? "Edit Blog Post" : "Add New Post"}
              </h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="small fw-bold">Post Title</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-6 mb-3">
                    <label className="small fw-bold">Category</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-6 mb-3">
                    <label className="small fw-bold">Order</label>
                    <input
                      type="number"
                      className="form-control"
                      value={formData.order}
                      onChange={(e) =>
                        setFormData({ ...formData, order: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="small fw-bold">Cover Image</label>
                  <input
                    type="file"
                    className="form-control mb-2"
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
                      className="w-100 rounded border"
                      style={{ height: "120px", objectFit: "cover" }}
                      alt="preview"
                    />
                  )}
                </div>
                <button
                  type="submit"
                  className={`btn w-100 fw-bold ${isEditing ? "btn-primary" : "btn-success"}`}
                >
                  {isEditing ? "UPDATE POST" : "PUBLISH POST"}
                </button>
              </form>
            </div>
          </div>

          {/* Posts List */}
          <div className="col-md-8">
            <div className="card shadow-sm border-0 overflow-hidden">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-light">
                  <tr>
                    <th className="px-4">Blog Info</th>
                    <th>Category</th>
                    <th className="text-end px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {!loading &&
                    posts.map((post) => (
                      <tr key={post.id}>
                        <td className="px-4">
                          <div className="d-flex align-items-center gap-3">
                            <img
                              src={post.image}
                              className="rounded"
                              style={{
                                width: "60px",
                                height: "40px",
                                objectFit: "cover",
                              }}
                              alt=""
                            />
                            <div
                              className="fw-bold text-truncate"
                              style={{ maxWidth: "250px" }}
                            >
                              {post.title}
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-info-subtle text-info border border-info-subtle">
                            {post.category}
                          </span>
                        </td>
                        <td className="text-end px-4">
                          <div className="btn-group">
                            <button
                              onClick={() => handleEditClick(post)}
                              className="btn btn-sm btn-outline-primary"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(post.id)}
                              className="btn btn-sm btn-outline-danger"
                            >
                              Delete
                            </button>
                          </div>
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

export default withAuth(ManageBlogs);
