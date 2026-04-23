"use client";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";

const NewsDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [blog, setBlog] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [commentData, setCommentData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        const blogRes = await axios.get(
          `https://vipspa.pythonanywhere.com/api/vipspa/blog-pages/${slug}/`,
        );
        setBlog(blogRes.data);

        const allRes = await axios.get(
          "https://vipspa.pythonanywhere.com/api/vipspa/blog-pages/",
        );
        setAllBlogs(allRes.data);

        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await axios.post(
        `https://vipspa.pythonanywhere.com/api/vipspa/comments/`,
        {
          blog: blog.id,
          name: commentData.name,
          email: commentData.email,
          message: commentData.comment,
        },
      );

      alert("Comment submitted!");

      setCommentData({
        name: "",
        email: "",
        comment: "",
      });

      const updated = await axios.get(
        `https://vipspa.pythonanywhere.com/api/vipspa/blog-pages/${slug}/`,
      );
      setBlog(updated.data);
    } catch (error) {
      alert("Failed to post comment.");
    }

    setSubmitting(false);
  };

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (!blog) return <div className="text-center py-5">Blog not found!</div>;

  return (
    <Layout headerStyle={2} footerStyle={2}>
      <PageTitle pageName={blog.title} />

      <section className="blog-details py-5">
        <div className="container">
          <div className="row">
            {/* LEFT */}
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details__left">
                {/* IMAGE */}
                <div
                  className="blog-details__img mb-4"
                  style={{
                    height: "450px",
                    overflow: "hidden",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  <div className="blog-details__date">
                    <span className="day">{blog.day}</span>
                    <span className="month">{blog.month}</span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="blog-details__content">
                  <ul className="list-unstyled blog-details__meta d-flex mb-3">
                    <li className="me-3">
                      <Link href="#">
                        <i className="fas fa-user-circle me-1"></i>
                        {blog.author || "Admin"}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fas fa-comments me-1"></i>
                        {blog.comments?.length || 0} Comments
                      </Link>
                    </li>
                  </ul>

                  <h3 className="blog-details__title fw-bold mb-3">
                    {blog.title}
                  </h3>

                  {/* 🔥 MAIN FIX HERE */}
                  <div
                    className="blog-details__text-2 text-muted"
                    style={{
                      textAlign: "justify",
                      lineHeight: "1.7",
                    }}
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                </div>

                {/* TAGS */}
                <div className="blog-details__bottom border-top border-bottom py-3 my-4">
                  <p className="mb-0">
                    <span className="fw-bold me-2">Tags:</span>
                    {blog.tags?.split(",").map((tag, i) => (
                      <Link key={i} href="#" className="me-2 text-primary">
                        #{tag.trim()}
                      </Link>
                    ))}
                  </p>
                </div>

                {/* COMMENTS */}
                <div className="comment-one mt-5">
                  <h3 className="mb-4">
                    {blog.comments?.length || 0} Comments
                  </h3>

                  {blog.comments?.map((comment) => (
                    <div
                      key={comment.id}
                      className="d-flex mb-4 p-3 border rounded"
                    >
                      <div className="w-100 py-2">
                        <h6 className="fw-bold mb-1">{comment.name}</h6>

                        <p className="mb-0 text-secondary">{comment.message}</p>
                      </div>
                    </div>
                  ))}

                  {/* FORM */}
                  <div className="mt-5">
                    <h3 className="mb-4">Leave a Comment</h3>

                    <form onSubmit={handleCommentSubmit} className="row g-3">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          value={commentData.name}
                          onChange={(e) =>
                            setCommentData((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          value={commentData.email}
                          onChange={(e) =>
                            setCommentData((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>

                      <div className="col-12">
                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Message"
                          value={commentData.comment}
                          onChange={(e) =>
                            setCommentData((prev) => ({
                              ...prev,
                              comment: e.target.value,
                            }))
                          }
                          required
                        ></textarea>
                      </div>

                      <div className="col-12">
                        <button
                          type="submit"
                          className="theme-btn btn-style-one w-100"
                          disabled={submitting}
                        >
                          {submitting ? "Submitting..." : "Submit Comment"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-xl-4 col-lg-5">
              <div className="ps-lg-4">
                <div className="mb-4 p-4 border rounded shadow-sm">
                  <h5 className="fw-bold mb-3">Category</h5>
                  <span>{blog.category_name || "Uncategorized"}</span>
                </div>

                <div className="mb-4 p-4 border rounded shadow-sm">
                  <h5 className="fw-bold mb-3">Latest Posts</h5>

                  {allBlogs.slice(0, 3).map((item) => (
                    <div key={item.id} className="d-flex mb-3">
                      <img
                        src={item.image}
                        style={{
                          width: "70px",
                          height: "70px",
                          objectFit: "cover",
                          borderRadius: "5px",
                          marginRight: "10px",
                        }}
                      />

                      <div>
                        <Link href={`/news-details/${item.slug}`}>
                          {item.title}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsDetails;
