"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const NewsGrid = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // আপনার জ্যাঙ্গো এপিআই ইউআরএল
        const response = await axios.get(
          "http://127.0.0.1:8000//api/vipspa/blog-pages/",
        );
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);
  console.log(blogs);
  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="blog-section-two">
        <div className="auto-container">
          <div className="row">
            {blogs.map((blog) => (
              <div className="blog-block col-lg-4 col-md-6" key={blog.id}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />

                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      {/* জ্যাঙ্গো স্লাগ ব্যবহার করে ডাইনামিক লিঙ্ক */}
                      <Link href={`/news-details/${blog.slug}`}>
                        <img
                          src={blog.image}
                          alt={blog.title}
                          style={{
                            width: "100%",
                            height: "250px",
                            objectFit: "cover",
                          }}
                        />
                      </Link>
                    </figure>
                  </div>
                  <div className="content-box">
                    <ul className="post-meta">
                      <li className="categories">
                        <Link href={`/news-details/${blog.slug}`}>
                          {blog.category_name || "Spa"}
                        </Link>
                      </li>
                      <li className="date">
                        {new Date(blog.created_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href={`/news-details/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h4>
                    <Link
                      className="read-more"
                      href={`/news-details/${blog.slug}`}
                    >
                      Read More{" "}
                      <i className="icon fa-regular fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* যদি কোনো ব্লগ না থাকে */}
            {blogs.length === 0 && (
              <div className="col-12 text-center py-5">
                <h3>No blog posts found!</h3>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsGrid;
