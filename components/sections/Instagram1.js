import Link from "next/link";
import { useEffect, useState } from "react";

const Instagram1 = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchInstagramPhotos = async () => {
      try {
        const res = await fetch(
          "https://vipspa.pythonanywhere.com//api/vipspa/gallery/",
        );
        const data = await res.json();
        // এপিআই থেকে লেটেস্ট ৬টি ছবি নিচ্ছি
        setPhotos(Array.isArray(data) ? data.slice(0, 6) : []);
      } catch (err) {
        console.error("Instagram fetch error:", err);
      }
    };
    fetchInstagramPhotos();
  }, []);

  // যদি ছবি না থাকে তবে সেকশন দেখানোর দরকার নেই
  if (photos.length === 0) return null;

  return (
    <>
      <section className="instagram-section">
        <div className="icon-instagram1-6 bounce-x"></div>
        <div className="icon-instagram1-7 bounce-y"></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <h4 className="words-slide-up text-split">Follow On Instagram</h4>
          </div>
          <div className="row">
            {photos.map((item, index) => (
              <div
                key={index}
                className="instagram-block col-lg-2 col-md-3 col-sm-6"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link
                        className="lightbox-image"
                        href={item.image}
                        target="_blank"
                      >
                        <img
                          src={item.image}
                          alt={`Instagram ${index + 1}`}
                          style={{
                            height: "200px",
                            objectFit: "cover",
                            width: "100%",
                          }}
                        />
                      </Link>
                    </figure>
                    <i className="icon fab fa-instagram"></i>
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

export default Instagram1;
