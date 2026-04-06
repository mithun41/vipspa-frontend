import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import withAuth from "../../components/withAuth";

const ManageTeam = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialFormState = {
    id: null,
    name: "",
    designation: "",
    details_link: "",
    photo: null,
    order: 0,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isEditing, setIsEditing] = useState(false);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/vipspa/homepage/");
      const data = await res.json();
      // আপনার JSON স্ট্রাকচার অনুযায়ী ডাটা সেট করা
      if (data.team && data.team.items) {
        setItems(data.team.items);
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
    const data = new FormData();

    data.append("name", formData.name);
    data.append("designation", formData.designation);
    data.append("details_link", formData.details_link || "");
    data.append("order", parseInt(formData.order));
    data.append("is_active", "true"); // সবসময় একটিভ থাকবে

    if (formData.photo instanceof File) {
      data.append("photo", formData.photo);
    }

    const baseUrl = "http://127.0.0.1:8000/api/vipspa/team-members/";
    const url = isEditing ? `${baseUrl}${formData.id}/` : baseUrl;
    const method = isEditing ? "PATCH" : "POST";

    try {
      const res = await fetch(url, {
        method: method,
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      });

      if (res.ok) {
        alert(isEditing ? "Team Member Updated!" : "Team Member Added!");
        resetForm();
        fetchTeam();
      } else {
        const errData = await res.json();
        alert(`Error: ${JSON.stringify(errData)}`);
      }
    } catch (err) {
      alert("Network Error!");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Remove this team member?")) return;
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/vipspa/team-members/${id}/`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (res.ok) {
        fetchTeam();
      }
    } catch (err) {
      alert("Delete failed!");
    }
  };

  const handleEditClick = (item) => {
    setIsEditing(true);
    setFormData({
      id: item.id,
      name: item.name,
      designation: item.designation,
      details_link: item.details_link || "",
      order: item.order || 0,
      photo: null,
    });
    setPreview(item.photo);
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
        <div className="row">
          {/* Form Section */}
          <div className="col-md-4">
            <div
              className="card shadow-sm border-0 p-4 sticky-top"
              style={{ top: "20px" }}
            >
              <h5 className="fw-bold mb-4 text-primary border-bottom pb-2">
                {isEditing ? "Edit Member" : "Add Team Member"}
              </h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="small fw-bold">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="small fw-bold">Designation</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Massage Therapist"
                    value={formData.designation}
                    onChange={(e) =>
                      setFormData({ ...formData, designation: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="small fw-bold">Order (Position)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={formData.order}
                    onChange={(e) =>
                      setFormData({ ...formData, order: e.target.value })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label className="small fw-bold">Photo</label>
                  <input
                    type="file"
                    className="form-control mb-2"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setFormData({ ...formData, photo: file });
                        setPreview(URL.createObjectURL(file));
                      }
                    }}
                  />
                  {preview && (
                    <img
                      src={preview}
                      className="rounded border"
                      style={{
                        height: "80px",
                        width: "80px",
                        objectFit: "cover",
                      }}
                      alt="preview"
                    />
                  )}
                </div>
                <button
                  type="submit"
                  className={`btn w-100 fw-bold ${isEditing ? "btn-primary" : "btn-success"}`}
                >
                  {isEditing ? "UPDATE MEMBER" : "ADD MEMBER"}
                </button>
                {isEditing && (
                  <button
                    type="button"
                    className="btn btn-link w-100 mt-2 text-muted"
                    onClick={resetForm}
                  >
                    Cancel
                  </button>
                )}
              </form>
            </div>
          </div>

          {/* Table Section */}
          <div className="col-md-8">
            <div className="card shadow-sm border-0">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="bg-dark text-white">
                    <tr>
                      <th className="px-4 py-3">Member</th>
                      <th>Designation</th>
                      <th className="text-end px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan="3" className="text-center py-5">
                          Loading...
                        </td>
                      </tr>
                    ) : items.length > 0 ? (
                      items.map((item) => (
                        <tr key={item.id}>
                          <td className="px-4">
                            <div className="d-flex align-items-center gap-3">
                              <img
                                src={item.photo}
                                className="rounded border"
                                style={{
                                  width: "45px",
                                  height: "45px",
                                  objectFit: "cover",
                                }}
                                alt=""
                              />
                              <div className="fw-bold">{item.name}</div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-light text-dark border">
                              {item.designation}
                            </span>
                          </td>
                          <td className="text-end px-4">
                            <div className="btn-group">
                              <button
                                onClick={() => handleEditClick(item)}
                                className="btn btn-sm btn-outline-primary"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(item.id)}
                                className="btn btn-sm btn-outline-danger"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3" className="text-center py-5 text-muted">
                          No team members found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default withAuth(ManageTeam);
