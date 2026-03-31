import Link from "next/link";

const Blog2 = ({ blogData, addClass }) => {
  const sectionInfo = blogData?.section_info;
  const posts = blogData?.posts || [];

  // Jodi kono post na thake, section-ta render hobe na
  if (posts.length === 0) return null;

  return (
    <>
      <section className={`${addClass}`}>
        <div className="auto-container">
          
          {/* Section Header Dynamic */}
          <div className="sec-title text-center">
            <figure className="image">
              <img src="/images/icons/icon1.png" alt="Icon" />
            </figure>
            <span className="sub-title">{sectionInfo?.subtitle || "Blogs"}</span>
            <h2 className="words-slide-up text-split">{sectionInfo?.title || "News & Articles"}</h2>
          </div>

          <div className="row">
            {posts.map((post) => (
              <div className="blog-block col-lg-4 col-md-6" key={post.id}>
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href={`/${post.details_link}`}>
                        {/* Hover effect er jonno double image tag static design e chilo */}
                        <img src={post.image} alt={post.title} />
                        <img src={post.image} alt={post.title} />
                      </Link>
                    </figure>
                  </div>
                  <div className="content-box">
                    <ul className="post-meta">
                      <li className="categories">
                        <Link href={`/${post.details_link}`}>
                          {post.category}
                        </Link>
                      </li>
                      <li className="date">{post.date}</li>
                    </ul>
                    <h4 className="title">
                      <Link href={`/${post.details_link}/${post.id}`}>
                        {post.title}
                      </Link>
                    </h4>
                    <Link className="read-more" href={`/${post.details_link}/${post.id}`}>
                      Read More <i className="icon fa-regular fa-angle-right"></i>
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