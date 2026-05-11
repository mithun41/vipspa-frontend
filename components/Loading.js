// components/elements/Loading.js
const Loading = () => {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#fff",
    }}>
      {/* Golden Spinner for Elite Spa */}
      <div className="spinner-border" role="status" style={{
        width: "3rem", 
        height: "3rem",
        color: "#C2A74E" 
      }}>
        <span className="visually-hidden">Loading...</span>
      </div>
      
      <h5 className="mt-3 fw-bold text-uppercase" style={{
        letterSpacing: "2px",
        color: "#333",
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}>
        VIP SPA
      </h5>
      <p className="small text-muted">Please wait a moment...</p>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        div { animation: fadeIn 0.4s ease-in; }
      `}</style>
    </div>
  );
};

export default Loading;