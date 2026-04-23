import React, { useEffect, useState } from "react";

const FloatingActionButton = () => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch("https://vipspa.pythonanywhere.com/api/vipspa/site-config/")
      .then((res) => res.json())
      .then((data) => {
        if (data?.length) setConfig(data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!config) return null;

  const phone = config.phone_number?.replace("+", "");

  const buttons = [
    {
      id: 1,
      icon: "fab fa-whatsapp",
      url: `https://wa.me/${phone}`,
      color: "#25D366",
    },
    {
      id: 2,
      icon: "fab fa-telegram-plane",
      url: `https://t.me/${phone}`,
      color: "#229ED9",
    },
  ];

  return (
    <>
      <div style={styles.wrapper}>
        {buttons.map((btn) => (
          <a
            key={btn.id}
            href={btn.url}
            target="_blank"
            rel="noreferrer"
            style={{ ...styles.btn, backgroundColor: btn.color }}
          >
            <i
              className={btn.icon}
              style={{ color: "#fff", fontSize: "22px" }}
            />
          </a>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div {
            right: 15px !important;
          }
        }
      `}</style>
    </>
  );
};

const styles = {
  wrapper: {
    position: "fixed",
    right: "30px",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    zIndex: 9999,
  },

  btn: {
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
    transition: "0.2s ease",
  },
};

export default FloatingActionButton;
