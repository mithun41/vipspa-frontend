import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import withAuth from "../../components/withAuth";

const ManageTestimonials = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialFormState = {
    id: null,
    name: "",
    designation: "Client",
    comment: "",
    photo: null,
    rating: 5,
    order: 0,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isEditing, setIsEditing] = useState(false);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // ১. ফেচ করার সময় সঠিক এপিআই ইউআরএল ব্যবহার
  const fetchTestimonials = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/vipspa/homepage/");
      const data = await res.json();
      // আপনার রাউটার অনুযায়ী ডাটা কি testimonials এ আসছে নাকি অন্য কিছুতে সেটা চেক করুন
      if (data.testimonials && data.testimonials.items) {
        setItems(data.testimonials.items);
      } else if (Array.isArray(data)) {
        setItems(data);
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

    // ডাটা টাইপ কনভার্ট করে অ্যাপেন্ড করা
    data.append("name", formData.name);
    data.append("designation", formData.designation || "Client"); // ডিফল্ট ভ্যালু
    data.append("comment", formData.comment);
    data.append("rating", parseInt(formData.rating)); // Integer নিশ্চিত করা
    data.append("is_active", "true"); // Integer নিশ্চিত করা

    // ফটো চেক
    if (formData.photo instanceof File) {
      data.append("photo", formData.photo);
    } else if (!isEditing) {
      alert("Please select a photo first!"); // নতুন অ্যাড করার সময় ফটো বাধ্যতামূলক হলে
      return;
    }

    const baseUrl = "http://127.0.0.1:8000/api/vipspa/testimonials/";
    const url = isEditing ? `${baseUrl}${formData.id}/` : baseUrl;
    const method = isEditing ? "PATCH" : "POST";

    try {
      const res = await fetch(url, {
        method: method,
        headers: {
          Authorization: `Bearer ${token}`,
          // Content-Type এখানে ভুল করেও দেবেন না
        },
        body: data,
      });

      const responseData = await res.json();

      if (res.ok) {
        alert(isEditing ? "Updated Successfully!" : "Added Successfully!");
        resetForm();
        fetchTestimonials(); // লিস্ট রিফ্রেশ করা
      } else {
        console.error("Django Error Detail:", responseData);
        // এখানে জ্যাঙ্গো আপনাকে বলবে ঠিক কোন ফিল্ডে সমস্যা (যেমন: 'photo': 'required')
        alert(`Backend Error: ${JSON.stringify(responseData)}`);
      }
    } catch (err) {
      console.error("Network/JS Error:", err);
      alert("Connection failed! Check console.");
    }
  };

  // ২. ডিলিট ইউআরএল ঠিক করা হয়েছে
  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;
    const token = localStorage.getItem("adminToken");
    const url = `http://127.0.0.1:8000/api/vipspa/testimonials/${id}/`;

    try {
      const res = await fetch(url, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        alert("Deleted Successfully!");
        fetchTestimonials();
      } else {
        alert("Delete failed from server.");
      }
    } catch (err) {
      alert("Delete failed error!");
    }
  };

  const handleEditClick = (item) => {
    setIsEditing(true);
    setFormData({
      id: item.id,
      name: item.name || "",
      designation: item.designation || "Client",
      comment: item.comment || "",
      rating: item.rating || 5,
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
          <div className="col-md-4">
            <div
              className="card shadow-sm border-0 p-4 sticky-top"
              style={{ top: "20px" }}
            >
              <h5 className="fw-bold mb-4 text-primary border-bottom pb-2">
                {isEditing ? "Update Feedback" : "New Testimonial"}
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
                  <label className="small fw-bold">Comment</label>
                  <textarea
                    rows="4"
                    className="form-control"
                    value={formData.comment}
                    onChange={(e) =>
                      setFormData({ ...formData, comment: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <label className="small fw-bold">Rating</label>
                    <select
                      className="form-select"
                      value={formData.rating}
                      onChange={(e) =>
                        setFormData({ ...formData, rating: e.target.value })
                      }
                    >
                      {[5, 4, 3, 2, 1].map((n) => (
                        <option key={n} value={n}>
                          {n} Stars
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-6">
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
                  {isEditing ? "SAVE CHANGES" : "ADD NOW"}
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card shadow-sm border-0">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-dark text-white">
                  <tr>
                    <th className="px-4 py-3">Client</th>
                    <th>Rating</th>
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
                              className="rounded-circle"
                              style={{
                                width: "40px",
                                height: "40px",
                                objectFit: "cover",
                              }}
                              alt=""
                            />
                            <div className="fw-bold">{item.name}</div>
                          </div>
                        </td>
                        <td>
                          <div className="text-warning">
                            {"★".repeat(item.rating)}
                          </div>
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
                      <td colSpan="3" className="text-center py-5">
                        No items found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default withAuth(ManageTestimonials);
