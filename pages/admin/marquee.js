import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import withAuth from "../../components/withAuth";

const ManageMarquee = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialFormState = { id: null, text: "", order: 0 };
  const [formData, setFormData] = useState(initialFormState);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchMarqueeData();
  }, []);

  // 1. Fetch Marquee Items
  const fetchMarqueeData = async () => {
    try {
      const res = await fetch(
        "https://vipspa.pythonanywhere.com//api/vipspa/homepage/",
      );
      const data = await res.json();
      if (data.marquee && data.marquee.items) {
        setItems(data.marquee.items);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // 2. Add or Update Item
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");

    const url = isEditing
      ? `https://vipspa.pythonanywhere.com//api/vipspa/marquee-items/${formData.id}/`
      : `https://vipspa.pythonanywhere.com//api/vipspa/marquee-items/`;

    try {
      const res = await fetch(url, {
        method: isEditing ? "PUT" : "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: formData.text,
          order: formData.order,
        }),
      });

      if (res.ok) {
        alert(isEditing ? "Updated Successfully!" : "Added Successfully!");
        resetForm();
        fetchMarqueeData();
      } else {
        alert("Failed to save data!");
      }
    } catch (err) {
      alert("Network Error!");
    }
  };

  // 3. Delete Item
  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(
        `https://vipspa.pythonanywhere.com//api/vipspa/marquee-items/${id}/`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (res.ok) {
        alert("Deleted!");
        fetchMarqueeData();
      }
    } catch (err) {
      alert("Delete failed!");
    }
  };

  const handleEditClick = (item) => {
    setIsEditing(true);
    setFormData({ id: item.id, text: item.text, order: item.order });
    window.scrollTo(0, 0);
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setIsEditing(false);
  };

  return (
    <AdminLayout>
      <div className="container-fluid py-4">
        <div className="row">
          {/* Form Side */}
          <div className="col-md-4">
            <div
              className="card shadow-sm border-0 p-4 sticky-top"
              style={{ top: "20px" }}
            >
              <h5 className="fw-bold mb-3">
                {isEditing ? "📝 Edit Marquee Text" : "➕ Add Marquee Text"}
              </h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="small fw-bold text-uppercase text-muted">
                    Scrolling Text
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Relaxation"
                    value={formData.text}
                    onChange={(e) =>
                      setFormData({ ...formData, text: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="small fw-bold text-uppercase text-muted">
                    Order
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={formData.order}
                    onChange={(e) =>
                      setFormData({ ...formData, order: e.target.value })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className={`btn w-100 fw-bold ${isEditing ? "btn-primary" : "btn-success"}`}
                >
                  {isEditing ? "Update Item" : "Save Item"}
                </button>
                {isEditing && (
                  <button
                    type="button"
                    className="btn btn-link w-100 text-danger mt-1 text-decoration-none"
                    onClick={resetForm}
                  >
                    Cancel
                  </button>
                )}
              </form>
            </div>
          </div>

          {/* Table Side */}
          <div className="col-md-8">
            <div className="card shadow-sm border-0 overflow-hidden">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-dark">
                  <tr>
                    <th className="py-3 px-4">Text Content</th>
                    <th className="py-3">Order</th>
                    <th className="py-3 text-end px-4">Actions</th>
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
                          <span className="fw-bold text-primary">
                            {item.text}
                          </span>
                        </td>
                        <td>{item.order}</td>
                        <td className="text-end px-4">
                          <button
                            onClick={() => handleEditClick(item)}
                            className="btn btn-sm btn-outline-primary me-2"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="btn btn-sm btn-outline-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center py-5 text-muted">
                        No marquee items found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="mt-3 small text-muted">
              * These texts will scroll continuously on your website homepage.
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default withAuth(ManageMarquee);
