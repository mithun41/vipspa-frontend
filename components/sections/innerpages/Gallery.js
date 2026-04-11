import Link from "next/link";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await fetch(
          "https://vipspa.pythonanywhere.com//api/vipspa/gallery/",
        );
        const data = await res.json();
        setPhotos(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Gallery fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  if (loading)
    return <div className="text-center py-5">Loading Gallery...</div>;

  return (
    <>
      <section className="gallery-section pt-100">
        <div className="outer-box px-3">
          <div className="row g-3">
            {/* আপনার এপিআই থেকে আসা ফটোগুলো এখানে লুপ হবে */}
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="gallery-block col-xl-3 col-lg-4 col-md-6 col-sm-12"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link
                        className="lightbox-image"
                        href={photo.image}
                        target="_blank"
                      >
                        <img
                          src={photo.image}
                          alt={photo.title || "Gallery Image"}
                          style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                          }}
                        />
                      </Link>
                    </figure>
                    <Link className="icon" href={photo.image} target="_blank">
                      <i className="fa-sharp fa-light fa-eye"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {photos.length === 0 && (
            <div className="text-center py-5">No images found in gallery.</div>
          )}
        </div>
      </section>

      {/* Instagram Section (ইন্সটাগ্রাম এপিআই থাকলে এটাকেও ডাইনামিক করা যাবে, আপাতত স্ট্যাটিক রাখছি) */}
      <section className="instagram-section">
        <div className="icon-instagram1-6 bounce-x"></div>
        <div className="icon-instagram1-7 bounce-y"></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <h4 className="words-slide-up text-split">Follow On Instagram</h4>
          </div>
          <div className="row">
            {/* ইন্সটাগ্রামের জন্য প্রথম ৬টি ছবি লুপ করা যেতে পারে */}
            {photos.slice(0, 6).map((photo) => (
              <div
                key={`inst-${photo.id}`}
                className="instagram-block col-lg-2 col-md-3 col-sm-6"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="#">
                        <img
                          src={photo.image}
                          alt="Instagram"
                          style={{
                            width: "100%",
                            height: "150px",
                            objectFit: "cover",
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

export default Gallery;
