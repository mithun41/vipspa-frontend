"use client";
import { useState, useEffect } from "react";
import AdminLayout from "@/components/AdminLayout";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000//api/vipspa/categories/",
      );
      setCategories(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching categories", err);
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");

    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Unauthorized",
        text: "Please login first to add categories.",
      });
      return;
    }

    try {
      await axios.post(
        "http://127.0.0.1:8000//api/vipspa/categories/",
        { name: newCategory },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      setNewCategory("");
      fetchCategories();

      // Professional Success Notification
      Swal.fire({
        icon: "success",
        title: "Added!",
        text: "Category has been created successfully.",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: err.response?.data?.detail || "Could not add category.",
      });
    }
  };

  const handleDelete = async (id) => {
    // SweetAlert2 Confirmation Dialog
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const token = localStorage.getItem("adminToken");

        try {
          await axios.delete(
            `http://127.0.0.1:8000//api/vipspa/categories/${id}/`,
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          );

          fetchCategories();

          Swal.fire("Deleted!", "The category has been removed.", "success");
        } catch (err) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to delete. It might be in use by blog posts.",
          });
        }
      }
    });
  };

  return (
    <AdminLayout>
      <div className="container-fluid">
        <h2 className="mb-4 fw-bold">📂 Blog Categories</h2>

        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm border-0 p-4">
              <h5 className="fw-bold mb-3">Add New Category</h5>
              <form onSubmit={handleAddCategory}>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Category Name"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  required
                />
                <button className="btn btn-primary w-100 fw-bold">
                  Save Category
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr>
                      <th>ID</th>
                      <th>Category Name</th>
                      <th className="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((cat) => (
                      <tr key={cat.id}>
                        <td>{cat.id}</td>
                        <td>
                          <span className="badge bg-info text-dark">
                            {cat.name}
                          </span>
                        </td>
                        <td className="text-end">
                          <button
                            onClick={() => handleDelete(cat.id)}
                            className="btn btn-sm btn-outline-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
