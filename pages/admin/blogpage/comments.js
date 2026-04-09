"use client";
import { useState, useEffect } from "react";
import AdminLayout from "@/components/AdminLayout";
import axios from "axios";

export default function CommentPage() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000//api/vipspa/comments/",
      );
      setComments(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching comments", err);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("মামা, এই কমেন্টটা কি আসলেই ডিলিট করবেন?")) {
      await axios.delete(`http://127.0.0.1:8000//api/vipspa/comments/${id}/`);
      fetchComments();
    }
  };

  return (
    <AdminLayout>
      <div className="container-fluid">
        <h2 className="mb-4 fw-bold">💬 User Comments</h2>

        <div className="card shadow-sm border-0">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-dark">
                  <tr>
                    <th>User</th>
                    <th>Blog Post</th>
                    <th>Comment</th>
                    <th>Date</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {comments.length > 0 ? (
                    comments.map((comm) => (
                      <tr key={comm.id}>
                        <td>
                          <div className="fw-bold">{comm.user_name}</div>
                          <small className="text-muted">
                            {comm.user_email}
                          </small>
                        </td>
                        <td>
                          <span className="text-primary">#{comm.blog_id}</span>
                        </td>
                        <td style={{ maxWidth: "300px" }}>
                          <p className="mb-0 small text-truncate-2">
                            {comm.comment_text}
                          </p>
                        </td>
                        <td>
                          {new Date(comm.created_at).toLocaleDateString()}
                        </td>
                        <td className="text-center">
                          <button
                            onClick={() => handleDelete(comm.id)}
                            className="btn btn-danger btn-sm px-3"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center py-4">
                        কোন কমেন্ট পাওয়া যায়নি মামা!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-truncate-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </AdminLayout>
  );
}
