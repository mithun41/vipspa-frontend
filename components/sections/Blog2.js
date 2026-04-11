import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const Blog2 = ({ addClass }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ব্লগ ডাটা ফেচ করার ফাংশন
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // আপনার দেওয়া ব্লগ এপিআই লিঙ্ক
        const res = await axios.get(
          "https://vipspa.pythonanywhere.com/api/vipspa/blog-pages/",
        );

        // ডাটা রিভার্স করে প্রথম ৩টি (Latest 3) নেওয়া হলো
        const latestPosts = res.data.reverse().slice(0, 3);
        setPosts(latestPosts);
      } catch (err) {
        console.error("Blog fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // লোডিং অবস্থায় কিছু দেখাবে না অথবা একটা সিম্পল মেসেজ
  if (loading) return null;

  // যদি ডাটা না থাকে সেকশন দেখাবে না
  if (posts.length === 0) return null;

  return (
    <>
      <section className={`${addClass}`}>
        <div className="auto-container">
          {/* Section Header */}
          <div className="sec-title text-center">
            <figure className="image">
              <img src="/images/icons/icon1.png" alt="Icon" />
            </figure>
            <span className="sub-title">News & Blogs</span>
            <h2 className="words-slide-up text-split">
              Latest News & Articles
            </h2>
          </div>

          <div className="row">
            {posts.map((post) => (
              <div className="blog-block col-lg-4 col-md-6" key={post.id}>
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      {/* জ্যাঙ্গো মডেলে যদি slug থাকে তবে slug ব্যবহার করা ভালো, নাহলে id */}
                      <Link href={`/news-details/${post.slug}`}>
                        <img src={post.image} alt={post.title} />
                        <img src={post.image} alt={post.title} />
                      </Link>
                    </figure>
                  </div>
                  <div className="content-box">
                    <ul className="post-meta">
                      <li className="categories">
                        <Link href={`/news-details/${post.slug}`}>
                          {post.category || "Spa"}
                        </Link>
                      </li>
                      <li className="date">
                        {/* তারিখ ফরম্যাট করার জন্য locale string ব্যবহার করা যেতে পারে */}
                        {new Date(post.created_at).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href={`/news-details/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h4>
                    <Link
                      className="read-more"
                      href={`/news-details/${post.slug}`}
                    >
                      Read More{" "}
                      <i className="icon fa-regular fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog2;
