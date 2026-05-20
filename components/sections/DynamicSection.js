import React from "react";

const DynamicSection = ({ section }) => {
  if (!section) return null;

  return (
    <section style={styles.sectionContainer}>
      <div style={styles.container}>
        <div
          style={{
            ...styles.flexWrapper,
            flexDirection: section.id % 2 === 0 ? "row-reverse" : "row",
          }}
        >
          {/* Content */}
          <div style={styles.textContent}>
            {section.subtitle && (
              <span style={styles.subtitle}>{section.subtitle}</span>
            )}

            <h2 style={styles.title}>{section.title}</h2>

            <div style={styles.divider}></div>

            {/* Custom Class for Rich Text */}
            <div
              className="custom-rich-text"
              dangerouslySetInnerHTML={{
                __html: section.description || "",
              }}
            />

            {section.button_text && (
              <a href={section.button_url || "#"} style={styles.button}>
                {section.button_text}
              </a>
            )}
          </div>

          {/* Image */}
          {section.image && (
            <div style={styles.imageWrapper}>
              <img
                src={section.image}
                alt={section.title}
                style={styles.image}
              />
              <div style={styles.imageShape}></div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        /* ব্যাকগ্রাউন্ডের সব লিস্ট স্টাইল মুছে নতুন করে তৈরি করা */
        .custom-rich-text :global(ul) {
          list-style: none !important;
          padding: 0 !important;
          margin: 5px 0 !important;
        }

        .custom-rich-text :global(li) {
          position: relative !important;
          padding-left: 25px !important; /* ডটের জন্য জায়গা */
          margin-bottom: 2px !important;
          color: #666;
          line-height: 1.6;
          display: block !important;
        }

        /* কাস্টম ডট তৈরি (এটি অবশ্যই কাজ করবে) */
        .custom-rich-text :global(li::before) {
          content: "" !important;
          position: absolute !important;
          left: 0 !important;
          top: 10px !important; /* টেক্সটের সাথে অ্যালাইনমেন্ট */
          width: 8px !important;
          height: 8px !important;
          background-color: #b39359 !important; /* আপনার ব্র্যান্ড গোল্ড কালার */
          border-radius: 50% !important;
          display: inline-block !important;
        }

        .custom-rich-text :global(p) {
          margin-bottom: 15px;
          line-height: 1.8;
          color: #666;
        }

        .custom-rich-text :global(strong) {
          color: #333;
        }
      `}</style>
    </section>
  );
};

const styles = {
  sectionContainer: {
    padding: "20px 0",
    backgroundColor: "#fffaf5",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  flexWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "50px",
    flexWrap: "wrap",
  },
  textContent: {
    flex: "1",
    minWidth: "300px",
  },
  subtitle: {
    color: "#b39359",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    marginBottom: "10px",
  },
  title: {
    fontSize: "clamp(28px, 5vw, 42px)",
    color: "#222",
    marginBottom: "20px",
    lineHeight: "1.2",
    fontFamily: "'Playfair Display', serif",
  },
  divider: {
    width: "60px",
    height: "3px",
    backgroundColor: "#b39359",
    marginBottom: "25px",
  },
  button: {
    display: "inline-block",
    padding: "15px 35px",
    backgroundColor: "#b39359",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "50px",
    fontWeight: "600",
    marginTop: "20px",
    transition: "0.3s",
    boxShadow: "0 10px 20px rgba(179,147,89,0.2)",
  },
  imageWrapper: {
    flex: "1",
    position: "relative",
    minWidth: "300px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    maxWidth: "500px",
    borderRadius: "20px",
    position: "relative",
    zIndex: "2",
  },
  imageShape: {
    position: "absolute",
    top: "10%",
    right: "-5%",
    width: "80%",
    height: "90%",
    backgroundColor: "#f3e8d9",
    borderRadius: "20px",
    zIndex: "1",
  },
};

export default DynamicSection;