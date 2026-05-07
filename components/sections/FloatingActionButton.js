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

  const phone = config.whatsapp_number?.replace("+", "");

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
      url: `https://t.me/elitespagulshan`,
      color: "#229ED9",
    },
    {
      id: 3,
      icon: "fas fa-phone-alt", // কল আইকন
      url: `tel:${phone}`, // সরাসরি কল করার জন্য tel: প্রোটোকল
      color: "#3b82f6", // নীল রঙ (কলের জন্য মানানসই)
    },
  ];

  return (
    <>
      <div style={styles.wrapper}>
        {buttons.map((btn) => (
          <a
            key={btn.id}
            href={btn.url}
            target={btn.id === 3 ? "_self" : "_blank"} // কলের জন্য একই ট্যাবে থাকা ভালো
            rel="noreferrer"
            className="fab-button"
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
        .fab-button:hover {
          transform: scale(1.1);
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
