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
          `http://127.0.0.1:8000//api/vipspa/blog-pages/${slug}/`,
        );
        setBlog(blogRes.data);
        const allRes = await axios.get(
          "http://127.0.0.1:8000//api/vipspa/blog-pages/",
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
      await axios.post(`http://127.0.0.1:8000//api/vipspa/comments/`, {
        blog: blog.id,
        name: commentData.name,
        email: commentData.email,
        message: commentData.comment,
      });
      alert("Comment submitted!");
      setCommentData({ name: "", email: "", comment: "" });
      const updated = await axios.get(
        `http://127.0.0.1:8000//api/vipspa/blog-pages/${slug}/`,
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
            {/* Left Content */}
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details__left">
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

                <div className="blog-details__content">
                  <ul className="list-unstyled blog-details__meta d-flex mb-3">
                    <li className="me-3">
                      <Link href="#">
                        <i className="fas fa-user-circle me-1"></i>{" "}
                        {blog.author || "Admin"}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fas fa-comments me-1"></i>{" "}
                        {blog.comments?.length || 0} Comments
                      </Link>
                    </li>
                  </ul>
                  <h3 className="blog-details__title fw-bold mb-3">
                    {blog.title}
                  </h3>
                  <div
                    className="blog-details__text-2 text-muted"
                    style={{
                      whiteSpace: "pre-line",
                      textAlign: "justify",
                      lineHeight: "1.7",
                    }}
                  >
                    {blog.content}
                  </div>
                </div>

                {/* Tags in Article Bottom */}
                <div className="blog-details__bottom border-top border-bottom py-3 my-4">
                  <p className="blog-details__tags mb-0">
                    <span className="fw-bold me-2">Tags:</span>
                    {blog.tags?.split(",").map((tag, i) => (
                      <Link key={i} href="#" className="me-2 text-primary">
                        #{tag.trim()}
                      </Link>
                    ))}
                  </p>
                </div>

                {/* Comment Section */}
                <div className="comment-one mt-5">
                  <h3 className="comment-one__title mb-4">
                    {blog.comments?.length || 0} Comments
                  </h3>
                  {blog.comments?.map((comment, index) => (
                    <div
                      className="comment-one__single d-flex mb-4 p-3 border rounded"
                      key={index}
                    >
                      <div
                        className="comment-one__image me-3"
                        style={{
                          width: "60px",
                          height: "60px",
                          overflow: "hidden",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div className="comment-one__content w-100 py-2">
                        {/* Name */}

                        <h6
                          className="fw-bold mb-1 text-dark"
                          style={{ fontSize: "16px" }}
                        >
                          Name : {comment.name}
                        </h6>

                        {/* Message */}
                        <p
                          className="mb-0 text-secondary"
                          style={{
                            lineHeight: "1.5",
                            fontSize: "15px",
                            color: "#555",
                          }}
                        >
                          {comment.message}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="comment-form mt-5">
                    <h3 className="comment-form__title mb-4">
                      Leave a Comment
                    </h3>
                    <form onSubmit={handleCommentSubmit} className="row g-3">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          value={commentData.name}
                          onChange={(e) =>
                            setCommentData({
                              ...commentData,
                              name: e.target.value,
                            })
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
                            setCommentData({
                              ...commentData,
                              email: e.target.value,
                            })
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
                            setCommentData({
                              ...commentData,
                              comment: e.target.value,
                            })
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
                          <span className="btn-title">
                            {submitting ? "Submitting..." : "Submit Comment"}
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar ps-lg-4">
                {/* Search */}
                <div className="sidebar__single sidebar__search mb-4">
                  <form className="sidebar__search-form position-relative">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search here"
                    />
                    <button
                      type="submit"
                      className="position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent pe-3"
                    >
                      <i className="lnr-icon-search"></i>
                    </button>
                  </form>
                </div>

                {/* API Categories */}
                <div className="sidebar__single sidebar__post mb-4 p-4 border rounded shadow-sm">
                  <h3 className="sidebar__title fw-bold mb-3">Category</h3>

                  <span>{blog.category_name || "Uncategorized"}</span>
                </div>

                {/* API Latest Posts */}
                <div className="sidebar__single sidebar__post mb-4 p-4 border rounded shadow-sm">
                  <h3 className="sidebar__title fw-bold mb-3">Latest Posts</h3>
                  <ul className="sidebar__post-list list-unstyled">
                    {allBlogs.slice(0, 3).map((item) => (
                      <li
                        key={item.id}
                        className="d-flex align-items-center mb-3"
                      >
                        <div
                          className="sidebar__post-image me-3"
                          style={{
                            width: "70px",
                            height: "70px",
                            flexShrink: 0,
                          }}
                        >
                          <img
                            src={item.image}
                            alt=""
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "5px",
                            }}
                          />
                        </div>
                        <div className="sidebar__post-content">
                          <h6 className="mb-1" style={{ fontSize: "14px" }}>
                            <Link
                              href={`/news-details/${item.slug}`}
                              className="text-dark fw-bold text-decoration-none"
                            >
                              {item.title}
                            </Link>
                          </h6>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* API Tags */}
                <div className="sidebar__single sidebar__tags p-4 border rounded shadow-sm">
                  <h3 className="sidebar__title fw-bold mb-3">Tags</h3>
                  <div className="sidebar__tags-list d-flex flex-wrap gap-2">
                    {blog.tags?.split(",").map((tag, i) => (
                      <Link
                        key={i}
                        href="#"
                        className="badge bg-light text-dark border px-3 py-2 text-decoration-none"
                      >
                        {tag.trim()}
                      </Link>
                    ))}
                  </div>
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
