import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import withAuth from "../../components/withAuth";

const ManagePricing = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form State
  const initialFormState = {
    id: null,
    title: "",
    price: "",
    session_1: "",
    session_2: "",
    session_3: "",
    order: 0,
    is_active: true,
  };
  const [formData, setFormData] = useState(initialFormState);
  const [isEditing, setIsEditing] = useState(false);

  // ১. ডাটা ফেচ করা (সবগুলো প্ল্যান দেখানোর জন্য)
  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const res = await fetch(
        "http://127.0.0.1:8000//api/vipspa/pricing-plans/",
      );
      const data = await res.json();
      setPlans(data);
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // ২. সেভ অথবা আপডেট করা (Submit Handler)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");

    // যদি এডিট হয় তবে PUT, নতুন হলে POST
    const method = isEditing ? "PUT" : "POST";
    const url = isEditing
      ? `http://127.0.0.1:8000//api/vipspa/pricing-plans/${formData.id}/`
      : `http://127.0.0.1:8000//api/vipspa/pricing-plans/`;

    try {
      const res = await fetch(url, {
        method: method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert(isEditing ? "আপডেট হয়েছে মামা!" : "নতুন প্ল্যান সেভ হয়েছে!");
        setFormData(initialFormState);
        setIsEditing(false);
        fetchPlans(); // টেবিল রিফ্রেশ
      } else {
        alert("কিছু একটা ঝামেলা হয়েছে! সার্ভার রেসপন্স চেক করুন।");
      }
    } catch (err) {
      alert("সার্ভারের সাথে কানেক্ট করা যাচ্ছে না!");
    }
  };

  // ৩. ডিলিট করা
  const handleDelete = async (id) => {
    if (!confirm("মামা, ডিলিট করে দিব?")) return;
    const token = localStorage.getItem("adminToken");

    const res = await fetch(
      `http://127.0.0.1:8000//api/vipspa/pricing-plans/${id}/`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    if (res.ok) {
      fetchPlans();
      alert("সফলভাবে ডিলিট হয়েছে!");
    }
  };

  // ৪. এডিট মোড ওপেন করা
  const handleEdit = (plan) => {
    setFormData(plan);
    setIsEditing(true);
    window.scrollTo(0, 0); // ফর্ম দেখার জন্য উপরে নিয়ে যাবে
  };

  return (
    <AdminLayout>
      <div className="container-fluid">
        <h3 className="mb-4">💰 Manage Pricing Plans</h3>

        <div className="row">
          {/* বাম পাশে ইনপুট ফর্ম */}
          <div className="col-md-4">
            <div
              className="card shadow-sm border-0 p-4 sticky-top"
              style={{ top: "20px" }}
            >
              <h5 className={isEditing ? "text-primary" : "text-success"}>
                {isEditing ? "📝 Edit Pricing Plan" : "➕ Add New Plan"}
              </h5>
              <hr />
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label className="small fw-bold">Plan Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Basic / Premium"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="small fw-bold">Price (TK)</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="5000"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="small fw-bold">Session 1 Detail</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.session_1}
                    onChange={(e) =>
                      setFormData({ ...formData, session_1: e.target.value })
                    }
                    placeholder="60 Min - Full Body"
                  />
                </div>
                <div className="mb-2">
                  <label className="small fw-bold">Session 2 Detail</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.session_2}
                    onChange={(e) =>
                      setFormData({ ...formData, session_2: e.target.value })
                    }
                    placeholder="90 Min - Special"
                  />
                </div>
                <div className="mb-2">
                  <label className="small fw-bold">Session 3 Detail</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.session_3}
                    onChange={(e) =>
                      setFormData({ ...formData, session_3: e.target.value })
                    }
                    placeholder="90 Min - Special"
                  />
                </div>

                <button
                  type="submit"
                  className={`btn w-100 ${isEditing ? "btn-primary" : "btn-success"}`}
                >
                  {isEditing ? "Update Plan" : "Save Plan"}
                </button>

                {isEditing && (
                  <button
                    type="button"
                    className="btn btn-link w-100 mt-2 text-danger"
                    onClick={() => {
                      setIsEditing(false);
                      setFormData(initialFormState);
                    }}
                  >
                    Cancel Edit
                  </button>
                )}
              </form>
            </div>
          </div>

          {/* ডান পাশে লিস্ট টেবিল */}
          <div className="col-md-8">
            <div className="card shadow-sm border-0 p-3">
              <table className="table table-hover align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>Order</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Sessions</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="text-center">
                        Loading...
                      </td>
                    </tr>
                  ) : (
                    plans.map((plan) => (
                      <tr key={plan.id}>
                        <td>{plan.order}</td>
                        <td>
                          <strong>{plan.title}</strong>
                        </td>
                        <td>{plan.price} TK</td>
                        <td>
                          <small>
                            {plan.session_1}
                            <br />
                            {plan.session_2}
                          </small>
                        </td>
                        <td className="text-end">
                          <button
                            onClick={() => handleEdit(plan)}
                            className="btn btn-sm btn-outline-primary me-2"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(plan.id)}
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
        </div>
      </div>
    </AdminLayout>
  );
};

export default withAuth(ManagePricing);
