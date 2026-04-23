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

            {/* HTML Description Render */}
            <div
              className="description-html"
              style={styles.description}
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
        .description-html :global(p) {
          margin-bottom: 18px;
        }

        .description-html :global(a) {
          color: #b39359 !important; /* link color */
          font-weight: 700;
          text-decoration: underline;
        }

        .description-html :global(a:hover) {
          color: #c1121f !important;
        }
      `}</style>
    </section>
  );
};

const styles = {
  sectionContainer: {
    padding: "80px 0",
    backgroundColor: "#fffaf5",
    overflow: "hidden",
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
    fontSize: "42px",
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

  description: {
    fontSize: "16px",
    color: "#666",
    lineHeight: "1.8",
    marginBottom: "30px",
  },

  button: {
    display: "inline-block",
    padding: "15px 35px",
    backgroundColor: "#b39359",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "50px",
    fontWeight: "600",
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
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
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
